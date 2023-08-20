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
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";
import ImageCaption from "@/components/ImageCaption";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleGoogleSignUp = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      // options: {
      //   queryParams: {
      //     access_type: "offline",
      //     prompt: "consent",
      //   },
      // },
    });

    console.log(data);
  };

  async function signInWithAzure() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "azure",
      options: {
        scopes: "email",
      },
    });
  }

  const getData = async () => {
    let { data, error } = await supabase.from("test").select("id");
    console.log(data);
  }

  useEffect(() => {
    getData();
  });

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
                Already have an account? <Link href="#">Log in</Link>
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
              <Button variant="blueWithShadow" onClick={handleSignUp}>
                Sign up
              </Button>
              <Button
                variant="gray"
                onClick={handleGoogleSignUp}
                leftIcon={<Image src="/google.svg" boxSize="4" />}
              >
                Sign up with Google
              </Button>
              <Button variant="gray" leftIcon={<Image src="/microsoft.svg" boxSize="4" />} onClick={signInWithAzure}>
                Sign up with Microsoft
              </Button>
            </Stack>
          </Stack>
        </Center>
      </SimpleGrid>
    </Flex>
  );
}
