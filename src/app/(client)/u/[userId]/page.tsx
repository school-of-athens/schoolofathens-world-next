"use client";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";

export default function Profile() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Profile
        </Text>
        <AuthButtonGroup />
      </HeadBar>
      <Box w="full" borderBottom="2px" borderColor="gray.300" bg="gray.100">
        <Container maxW={{ base: "container.md", lg: "container.lg" }} py={12}>
          <Flex alignItems="center">
            <Avatar size="2xl" me={12} />
            <Heading size="md">User Name</Heading>
          </Flex>
        </Container>
      </Box>
      <Container maxW={{ base: "container.md", lg: "container.lg" }} py={12}>
        <Flex w="full" h="full" justifyContent="center" alignItems="center">
          <Heading size="lg">🚧 Under Development</Heading>
        </Flex>
      </Container>
    </Flex>
  );
}
