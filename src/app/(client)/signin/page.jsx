"use client";

import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  Input,
  HStack,
  Link,
  Image,
  useToast,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import NextLink from "next/link";
import AuthButtonGroup from "@/components/AuthButtonGroup";
import ImageCaption from "@/components/ImageCaption";
import supabase from "@/services/supabase";
import { useState } from "react";

export default function Login() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(data)

    if (error) {
      toast({
        title: `Error: ${error.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
        variant: 'left-accent',
        position: 'bottom-left',
      })
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
          Login
        </Text>
        <AuthButtonGroup />
      </HeadBar>
      <Flex
        bg="blue.300"
        justify="center"
        align="center"
        h={{ base: "auto", md: "calc(100vh - 4rem)" }}
        position="relative"
      >
        <Image src="bazar_of_athens.jpg" w="full" h="full" objectFit="cover" />
        <ImageCaption />
        <Container
          maxW="md"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="white"
          borderRadius={{ base: "none", sm: "xl" }}
          h={{ base: "full", md: "auto" }}
          position="absolute"
        >
          <Stack spacing="8">
            <Stack spacing="3" textAlign="center">
              <Heading size="xs">Sign in to your account</Heading>
              <Text color="fg.muted">Start making your dreams come true</Text>
            </Stack>
            <Stack spacing="6">
              <Button variant="gray">Continue with Google</Button>
              <Divider />
              <Stack spacing="4">
                <Input
                  variant="primary"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Input
                  variant="primary"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button variant="blueWithShadow" onClick={signInWithEmail}>Continue with email</Button>
                <Link fontSize="sm" fontWeight="bold" textAlign="center">
                  Forgot password
                </Link>
              </Stack>
            </Stack>
            <Text textStyle="sm" color="fg.muted" textAlign="center">
              Don't have an account yet? <Link href="#">Create an account</Link>
            </Text>
          </Stack>
        </Container>
      </Flex>
    </Flex>
  );
}
