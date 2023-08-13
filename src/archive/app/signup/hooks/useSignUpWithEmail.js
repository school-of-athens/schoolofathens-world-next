import { useState } from "react";
import { auth } from "../../../services/firebase";
import { useToast } from "@chakra-ui/react";

import { createUserWithEmailAndPassword } from "firebase/auth";

const useSignUpWithEmail = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpWithEmail = async () => {
    try {
      if (email && password) {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      toast({
        status: "error",
        variant: "left-accent",
        title: `An error has occured: ${error.message}`,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  return [setEmail, setPassword, signUpWithEmail];
};

export default useSignUpWithEmail;
