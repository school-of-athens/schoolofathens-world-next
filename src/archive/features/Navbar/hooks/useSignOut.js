import { auth } from "../../../services/firebase";
import { signOut } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const useSignOut = () => {
  const toast = useToast();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast({
        status: "success",
        variant: "left-accent",
        title: `Successfully logged out.`,
        position: "bottom-left",
        isClosable: true,
      });
      // router.push("/");
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

  return handleSignOut;
};

export default useSignOut;
