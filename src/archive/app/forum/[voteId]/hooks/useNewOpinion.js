
import { useState } from "react";

const useNewOpinion = () => {
  

  const [newOpinion, setNewOpinion] = useState({
    title: "",
    text: "",
    publishDate: null,
    userId: null,
    upvotes: 0,
  });

  const [option, setOption] = useState("default");

  return [newOpinion, setNewOpinion, option, setOption];
};

export default useNewOpinion;
