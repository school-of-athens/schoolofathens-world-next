"use client";

import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";

export default function Home() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Home
        </Text>
        <AuthButtonGroup />

      </HeadBar>
      <Container
        maxW={{ base: "container.lg", lg: "container.xl" }}
        h="calc(100vh - 4rem)"
        py={12}
      >
        <Flex w="full" h="full" justifyContent="center" alignItems="center">
          <Heading size="lg">🚧 Under Development</Heading>
        </Flex>
      </Container>
    </Flex>
  );
}
