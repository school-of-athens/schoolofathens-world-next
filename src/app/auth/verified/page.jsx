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
import { FaCircleCheck, FaEnvelopeOpenText } from "react-icons/fa6";
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
          Email Verified
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
          bg="green.100"
          borderRadius="full"
        >
          <Icon boxSize={12} color="green.400" as={FaCircleCheck} />
        </Flex>
        <Heading size="md" my={8}>
          Your email has been verified.
        </Heading>

        {/* <Button variant="light">Back to Sign In</Button> */}
      </Container>
    </Flex>
  );
}
