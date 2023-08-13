import { useToast } from "@chakra-ui/react";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/services/firebase";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function useSubmit(setActiveStep, newVote) {
  const toast = useToast();
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const submit = async () => {
    // check that all the inputs are filled
    if (newVote.title && newVote.description) {
      let valid = true;

      // loop through the options to see where is empty
      for (let i = 0; i < newVote.options.length; i++) {
        if (!(newVote.options[i].title && newVote.options[i].description)) {
          toast({
            status: "error",
            variant: "left-accent",
            title: `Option ${i + 1} is incomplete.`,
            position: "bottom-left",
            isClosable: true,
          });
          valid = false;
          setActiveStep(2);
        }
      }

      if (valid) {
        try {
          const newVoteOptions = {};
          newVote.options.forEach((option) => {
            newVoteOptions[option.title] = {
              description: option.description,
              votes: 0,
            };
          });

          const newVoteReformat = {
            ...newVote,
            options: newVoteOptions,
            userId: user.uid,
            totalVotes: 0,
            totalOpinions: 0,
          };

          const voteSnapshot = await addDoc(
            collection(db, "votes"),
            newVoteReformat
          );
          await updateDoc(doc(db, "userDetails", user.uid), {
            startedVotes: arrayUnion(voteSnapshot.id),
          });
          toast({
            status: "success",
            variant: "left-accent",
            title: `Your vote has been added.`,
            position: "bottom-left",
            isClosable: true,
          });
          router.push("/forum");
        } catch (error) {
          toast({
            status: "error",
            variant: "left-accent",
            title: `An error has occured: ${error.message}`,
            position: "bottom-left",
            isClosable: true,
          });
        }
      }
    } else {
      toast({
        status: "error",
        variant: "left-accent",
        title: `Basic Info Incomplete`,
        position: "bottom-left",
        isClosable: true,
      });
      setActiveStep(1);
    }
  };

  return submit;
}

export default useSubmit;
