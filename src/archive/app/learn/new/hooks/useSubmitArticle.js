import { db, storage } from "@/services/firebase";
import { useToast } from "@chakra-ui/react";
import {
  Timestamp,
  arrayUnion,
  doc,
  updateDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

function useSubmitArticle({ article }) {
  const toast = useToast();
  const router = useRouter();
  const { setUserData } = useContext(AuthContext);

  const submitArticle = async () => {
    if (article.body.length === 0) {
      toast({
        status: "error",
        variant: "left-accent",
        title: "Your article is empty.",
        position: "bottom-left",
        isClosable: true,
      });
    } else {
      try {
        const articleRef = await addDoc(collection(db, "articles"), {
          title: article.title,
          userId: article.userId,
          date: Timestamp.now(),
          upvotes: 0,
        });

        const articleBody = article.body.map(async (item) => {
          if (item.file) {
            const fileSnapshot = await uploadBytes(
              ref(storage, `articleFiles/${articleRef.id}/${item.file.name}`),
              item.file
            );

            const fileURL = await getDownloadURL(fileSnapshot.ref);

            return {
              type: item.type,
              src: fileURL,
            };
          } else {
            return item;
          }
        });

        await updateDoc(doc(db, "articles", articleRef.id), {
          body: await Promise.all(articleBody),
        });

        await updateDoc(doc(db, "userDetails", article.userId), {
          insights: arrayUnion(articleRef.id),
        });

        setUserData((prev) => {
          return {
            ...prev,
            insights: [...prev.insights, articleRef.id],
          };
        });

        toast({
          status: "success",
          variant: "left-accent",
          title: `Your article has been published.`,
          position: "bottom-left",
          isClosable: true,
        });

        router.push("/learn");
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

  return submitArticle;
}

export default useSubmitArticle;
