import supabase from "@/services/supabase";
import { useToast } from "@chakra-ui/react";

export default function useSignInWithGoogle() {
  const toast = useToast();

  const signUpWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          scope: ["email", "profile"],
          prompt: "consent",
          redirectTo: `${window.location.protocol}//${window.location.host}/u/setup`,
        },
      });

      alert(data);

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

  return signUpWithGoogle;
}
