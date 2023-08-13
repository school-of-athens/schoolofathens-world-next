import { db } from "@/services/firebase";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { updateDoc, arrayUnion, increment, doc } from "firebase/firestore";
import { useToast } from "@chakra-ui/react";

function useVote(voteData, setVoteData) {
  const toast = useToast();
  const { user, setUserData } = useContext(AuthContext);

  const vote = async (option) => {
    try {
      const voteRef = doc(db, "votes", voteData.id);
      const userRef = doc(db, "userDetails", user.uid);

      await updateDoc(voteRef, {
        [`options.${option}.votes`]: increment(1),
        totalVotes: increment(1),
      });

      await updateDoc(userRef, {
        votes: arrayUnion({ voteId: voteData.id, option: option }),
      });

      setUserData((prev) => {
        return {
          ...prev,
          votes: [...prev.votes, { voteId: voteData.id, option: option }],
        };
      });

      setVoteData((prev) => {
        return {
          ...prev,
          options: {
            ...prev.options,
            [option]: {
              ...prev.options[option],
              votes: prev.options[option].votes + 1,
            },
          },
          totalVotes: prev.totalVotes + 1,
        };
      });

      toast({
        title: `You have successfully voted for ${option}`,
        variant: "left-accent",
        position: "bottom-left",
        status: "success",
        isClosable: true,
      });
    } catch (error) {
      toast({
        status: "error",
        variant: "left-accent",
        title: `An error occurred while voting: ${error.message}`,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  return vote;
}

export default useVote;
