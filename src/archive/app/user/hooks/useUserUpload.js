import { useToast } from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";
import { setDoc, Timestamp, doc } from "firebase/firestore";
import { auth, db } from "../../../services/firebase";
import { useRouter } from "next/navigation";

const useUserUpload = () => {

  const toast = useToast();
  const router = useRouter();

  const userUpload = async (newUser, imageURL) => {
    try {

      if (!newUser.displayName) {
        toast({
          status: "error",
          variant: "left-accent",
          title: `Username cannot be empty.`,
          position: "bottom-left",
          isClosable: true,
        });
      }
      else if (!newUser.firstName) {
        toast({
          status: "error",
          variant: "left-accent",
          title: `First name cannot be empty.`,
          position: "bottom-left",
          isClosable: true,
        });
      }
      else if (!newUser.lastName) {
        toast({
          status: "error",
          variant: "left-accent",
          title: `Last name cannot be empty.`,
          position: "bottom-left",
          isClosable: true,
        });
      }
      else if (!newUser.bio) {
        toast({
          status: "error",
          variant: "left-accent",
          title: `Bio cannot be empty.`,
          position: "bottom-left",
          isClosable: true,
        });
      }
      else {
        await updateProfile(auth.currentUser, {
          displayName: newUser.displayName,
          photoURL: imageURL,
        });
  
        await setDoc(doc(db, "userInfo", auth.currentUser.uid), {
          displayName: newUser.displayName,
          photoURL: imageURL,
        });
  
        await setDoc(doc(db, "userDetails", auth.currentUser.uid), {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          bio: newUser.bio,
          joinDate: Timestamp.now(),
          points: 0,
          insights: [],
          opinions: [],
          votes: [],
          groups: [],
          badges: [],
          followers: [],
          following: [],
          upvotedArticles: [],
          upvotedOpinions: [],
          followedVotes: [],
          startedVotes: [],
        });
        toast({
          status: "success",
          variant: "left-accent",
          title: `User data uploaded successfully!`,
          position: "bottom-left",
          isClosable: true,
        });
        router.push(`/user/${auth.currentUser.uid}`)
      }
      
    } catch (error) {
      toast({
          status: "error",
          variant: "left-accent",
          title: `An error has occured: ${error.message}.`,
          position: "bottom-left",
          isClosable: true,
        });
    }
  };

  return userUpload;
};

export default useUserUpload;
