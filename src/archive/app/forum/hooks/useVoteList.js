import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/services/firebase";
import { useToast } from "@chakra-ui/react";

const useVoteList = () => {

  const toast = useToast();

  const [voteList, setVoteList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getVotes = async () => {
    try {
      const voteListUnfiltered = await getDocs(collection(db, "votes"));
      const voteListFiltered = voteListUnfiltered.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setVoteList(voteListFiltered);
    } catch (error) {
      toast({
        status: "error",
        variant: "left-accent",
        title: `An error has occured: ${error.message}`,
        position: "bottom-left",
        isClosable: true,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getVotes();
  }, []);

  return [voteList, isLoading];
};

export default useVoteList;
