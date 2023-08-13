import { useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Timestamp } from "firebase/firestore";

function useNewArticle() {
  const { user } = useContext(AuthContext);

  const [article, setArticle] = useState({
    title: "Title",
    userId: user?.uid,
    date: Timestamp.now(),
    body: [],
  });

  useEffect(() => {
    setArticle((prev) => {
      return {
        ...prev,
        userId: user?.uid,
      };
    });
  }, [user]);

  return [article, setArticle];
}

export default useNewArticle;
