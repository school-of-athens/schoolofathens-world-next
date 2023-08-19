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
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import Link from "next/link";

export default function Login() {
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
        <ButtonGroup spacing={4}>
          <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button>
        </ButtonGroup>
      </HeadBar>
      <Flex
        bg="blue.300"
        justify="center"
        align="center"
        minH="calc(100vh - 4rem)"
      >
        <Container
          maxW="md"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="white"
          borderRadius={{ base: "none", sm: "xl" }}
          h={{ base: "full", md: "auto" }}
        >
          <Stack spacing="8">
              <Stack spacing="3" textAlign="center">
                <Heading size="xs">Log in to your account</Heading>
                <Text color="fg.muted">Start making your dreams come true</Text>
              </Stack>
            <Stack spacing="6">
              <Button variant="gray">Continue with Google</Button>
              <Divider />
              <Stack spacing="4">
                <Input variant="primary" placeholder="Enter your email" />
                <Button variant="blueWithShadow">Continue with email</Button>
              </Stack>
            </Stack>
            <Text textStyle="sm" color="fg.muted" textAlign="center">
              Don't have an account yet? <Link href="#">Create an account</Link>
            </Text>
            {/* <Text textStyle="xs" color="fg.subtle" textAlign="center">
              By continuing, you acknowledge that you have read, understood, and
              agree to our terms and condition.
            </Text> */}
          </Stack>
        </Container>
      </Flex>
    </Flex>
  );
}
