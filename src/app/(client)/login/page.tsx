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
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import NextLink from "next/link";
import AuthButtonGroup from "@/components/AuthButtonGroup";
import ImageCaption from "@/components/ImageCaption";

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
              <Heading size="xs">Log in to your account</Heading>
              <Text color="fg.muted">Start making your dreams come true</Text>
            </Stack>
            <Stack spacing="6">
              <Button variant="gray">Continue with Google</Button>
              <Divider />
              <Stack spacing="4">
                <Input variant="primary" placeholder="Enter your email" />
                <Button variant="blueWithShadow">Continue with email</Button>
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
