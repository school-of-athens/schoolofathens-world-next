import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext } from "react";
import { db } from "@/services/firebase";
import { addDoc, arrayUnion, doc, updateDoc, collection, Timestamp, increment } from "firebase/firestore";

function useSubmitOpinion(voteId, option, newOpinion) {
  const toast = useToast();
  const { user, setUserData } = useContext(AuthContext);
  const router = useRouter();

  const submitOpinion = async () => {
    // check if an option to support is selected
    if (option === "default") {
      toast({
        status: "error",
        variant: "left-accent",
        title: `You must select which option you support.`,
        position: "bottom-left",
        isClosable: true,
      });
    }
    // check if the opinion text is not empty
    else if (!newOpinion.text) {
      toast({
        status: "error",
        variant: "left-accent",
        title: `Your opinion is empty.`,
        position: "bottom-left",
        isClosable: true,
      });
    }
    // now send the new opinion to the database
    else {
      try {
        const newOpinionRef = await addDoc(
          collection(db, "votes", voteId, option),
          {
            ...newOpinion,
            publishDate: Timestamp.now(),
            userId: user.uid,
          }
        );

        await updateDoc(doc(db, "votes", voteId), {
          totalOpinions: increment(1),
        });

        // update userDetails to include the new opinion
        await updateDoc(doc(db, "userDetails", user.uid), {
          opinions: arrayUnion({
            voteId: voteId,
            option: option,
            opinionId: newOpinionRef.id,
          }),
        });

        setUserData((prev) => {
          return {
            ...prev,
            opinions: [
              ...prev.opinions,
              { voteId: voteId, option: option, opinionId: newOpinionRef.id },
            ],
          };
        });

        toast({
          status: "success",
          variant: "left-accent",
          title: `Your opinion has been added.`,
          position: "bottom-left",
          isClosable: true,
        });

        router.refresh();
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
  };

  return submitOpinion;
}

export default useSubmitOpinion;
