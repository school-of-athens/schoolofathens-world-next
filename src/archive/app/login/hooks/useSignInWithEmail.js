import { auth } from "@/services/firebase";
import { useToast } from "@chakra-ui/react";
import { signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const useSignInWithEmail = () => {
  const toast = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    try {
      if (email && password) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (userCredential.user.emailVerified) {
          toast({
            status: "success",
            variant: "left-accent",
            title: `You have logged in successfully!`,
            position: "bottom-left",
            isClosable: true,
          });
          router.push(`/user/${auth.currentUser.uid}`);
        }
      }
    } catch (error) {
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          toast({
            status: "error",
            variant: "left-accent",
            title: `User not found. Please sign up.`,
            position: "bottom-left",
            isClosable: true,
          });
          break;
        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
          toast({
            status: "error",
            variant: "left-accent",
            title: `Password should be at least 6 characters.`,
            position: "bottom-left",
            isClosable: true,
          });
          break;
        case "Firebase: Error (auth/wrong-password).":
          toast({
            status: "error",
            variant: "left-accent",
            title: `Wrong password. Please try again.`,
            position: "bottom-left",
            isClosable: true,
          });
          break;
        default:
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

  return [setEmail, setPassword, signInWithEmail];
};

export default useSignInWithEmail;
