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
import { useEffect, useState } from "react";
import supabase from "@/services/supabase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    console.log(data, error);
  }


  const signUpWithGoogle = async () => {
    alert("You are logged in!");

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    },
    {
      redirectTo: 'http://localhost:3000/',
    })

    alert("You are logged in!");
  
    console.log(data, error);
  }

  

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
              <Button variant="blueWithShadow"
              onClick={signInWithEmail}
              >
                Sign up
              </Button>
              <Button
                variant="gray"
                leftIcon={<Image src="/google.svg" boxSize="4" />}
                onClick={signUpWithGoogle}
              >
                Sign up with Google
              </Button>
              {/* <Button variant="gray" leftIcon={<Image src="/microsoft.svg" boxSize="4" />} onClick={signInWithAzure}>
                Sign up with Microsoft
              </Button> */}
            </Stack>
          </Stack>
        </Center>
      </SimpleGrid>
    </Flex>
  );
}
