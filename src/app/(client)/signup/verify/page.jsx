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
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import supabase from "@/services/supabase";

export default function Verify() {
  const { user } = useContext(AppContext);

  const checkVerification = async () => {
    const { data, error } = await supabase.auth.refreshSession();
    console.log(data);
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
        <Text mt={4} mb={8} textAlign="center">
          Check your inbox! We sent an email verification link to
          {user?.email}
        </Text>

        <Button variant="blueWithShadow" onClick={checkVerification}>
          I verified my email
        </Button>
        <Button
          variant="light"
          mt={3}
          onClick={async () => {
            const { data, error } = await supabase.auth.getSession();
            console.log(data);
          }}
        >
          Resend verification email
        </Button>
      </Container>
    </Flex>
  );
}
