"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import AuthButtonGroup from "@/components/AuthButtonGroup";

export default function Verify() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Verify Your Email
        </Text>
        <AuthButtonGroup />

      </HeadBar>
      <Container
        maxW={{ base: "container.lg", lg: "container.xl" }}
        minH="calc(100vh - 4rem)"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display="flex"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          p={6}
          bg="blue.100"
          borderRadius="full"
        >
          <Icon boxSize={12} color="blue.400" as={FaEnvelopeOpenText} />
        </Flex>
        <Heading size="md" mt={8}>
          Please verify your email
        </Heading>
        <Text my={4} textAlign="center">
          Check your inbox! We sent an email verification link to
          name@example.com
        </Text>

        <Button variant="blueWithShadow">I verified my email</Button>
        <Button variant="light" mt={3}>
          Resend verification email
        </Button>
      </Container>
    </Flex>
  );
}
