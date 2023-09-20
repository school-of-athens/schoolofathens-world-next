"use client";

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Container,
  Flex,
  Heading,
  Progress,
  SimpleGrid,
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
        <Container maxW={{ base: "container.lg", lg: "container.xl" }} py={12}>
          <Flex alignItems="center">
            <Avatar size="2xl" me={12} />
            <Heading size="md">User Name</Heading>
          </Flex>
        </Container>
      </Box>
      <Container maxW={{ base: "container.lg", lg: "container.xl" }} py={12}>
        <Card py={4} px={4}>
          <Heading size="sm">Bio</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Card>
        <Card py={4} px={4} mt={8}>
          <Heading size="sm">Statistics</Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Flex align="center">
              <Text me={4}>Points</Text>
              <Progress w="full" value={80} />
            </Flex>

          </SimpleGrid>
        </Card>
      </Container>
    </Flex>
  );
}
