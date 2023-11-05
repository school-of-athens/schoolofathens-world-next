"use client";

import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Image,
  useToast,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";
import ImageCaption from "@/components/ImageCaption";
import { useContext, useState } from "react";
import useSignUpWithEmail from "@/hooks/useSignUpWithEmail";
import useSignInWithGoogle from "@/hooks/useSignInWithGoogle";
import supabase from "@/services/supabase";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function SignUp() {
  // const { email, password, setEmail, setPassword, signUpWithEmail } =
  //   useSignUpWithEmail();
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const signUpWithGoogle = useSignInWithGoogle();
  const router = useRouter();

  const signUpWithEmail = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: "/auth/verified",
        },
      });

      setUser(data.user);

      router.push("/signup/verify");

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

  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          SignUp
        </Text>
        <AuthButtonGroup />
      </HeadBar>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        width="full"
        minH="calc(100vh - 4rem)"
      >
        <Flex
          direction="column"
          height="full"
          bg="blue.200"
          display={{ base: "none", md: "flex" }}
          position="relative"
          borderEnd="2px"
          borderColor="gray.300"
        >
          <Image
            h="full"
            w="full"
            objectFit="cover"
            src="the_entry_of_king_othon_of_greece_in_athens.jpg"
          />
          <ImageCaption />
        </Flex>
        <Center>
          <Stack spacing="6" px={{ base: "4", md: "8" }} width="full" maxW="md">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>Sign Up</Heading>
              <Text color="fg.muted">
                Already have an account? <Link href="#">Sign in</Link>
              </Text>
            </Stack>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                variant="primary"
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel htmlFor="password" mt={4}>
                Password
              </FormLabel>
              <Input
                variant="primary"
                id="password"
                placeholder="********"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Stack spacing="4">
              <Button variant="blueWithShadow" onClick={signUpWithEmail}>
                Sign up
              </Button>
              <Button
                variant="gray"
                leftIcon={<Image src="/google.svg" boxSize="4" />}
                onClick={signUpWithGoogle}
              >
                Sign up with Google
              </Button>
            </Stack>
          </Stack>
        </Center>
      </SimpleGrid>
    </Flex>
  );
}
