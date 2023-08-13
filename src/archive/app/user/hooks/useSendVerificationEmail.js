import { auth } from "../../../services/firebase";
import { sendEmailVerification } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const useSendVerificationEmail = () => {
  const toast = useToast();

  const sendVerificationEmail = async () => {
    try {
      await sendEmailVerification(auth?.currentUser);

      toast({
        status: "success",
        variant: "left-accent",
        title: `Verification email sent to ${auth?.currentUser?.email}`,
        position: "bottom-left",
        isClosable: true,
      });
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

  useEffect(() => {
    sendVerificationEmail();
  }, []);

  return sendVerificationEmail;
};

export default useSendVerificationEmail;
