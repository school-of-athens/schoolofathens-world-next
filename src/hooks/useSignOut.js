import supabase from "@/services/supabase";
import { useToast } from "@chakra-ui/react";

export default function useSignOut() {
  const toast = useToast();

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      toast({
        title: `Error: ${error.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "left-accent",
        position: "bottom-left",
      });
    }
  };

  return signOut;
}
