import supabase from "@/services/supabase";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function useSignUpWithEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const signUpWithEmail = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: "https://example.com",
        },
      });

      console.log(data);

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

  return {email, password, setEmail, setPassword, signUpWithEmail};
}
