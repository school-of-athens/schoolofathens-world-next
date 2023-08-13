import { useState } from "react";

const useNewVote = () => {

  const [newVote, setNewVote] = useState({
    type: "Poll",
    title: "",
    // topics: [],
    description: "",
    options: [
      {
        title: "",
        description: "",
        votes: 0,
      },
      {
        title: "",
        description: "",
        votes: 0,
      },
    ],
    // viewRestriction: [],
    // voteRestriction: [],
    // due: null
  });

  return [newVote, setNewVote];
};

export default useNewVote;
