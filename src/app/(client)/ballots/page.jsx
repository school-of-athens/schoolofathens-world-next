"use client";

// import Sidebar from "@/features/Sidebar"
import {
  Flex,
  Icon,
  Input,
  InputGroup,
  Stack,
  Text,
  Button,
  Heading,
  Container,
  VStack,
  Link,
  ButtonGroup,
  InputRightElement,
  Wrap,
  Checkbox,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import getRandomInt from "@/utils/randInt";
import HeadBar from "@/layouts/HeadBar";
import BallotCard from "@/components/BallotCard";

export default function Ballots() {
  const [width, setWidth] = useState(30);

  const handleClick = () => {
    setWidth(getRandomInt(10, 90));
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
          Ballots
        </Text>
        <ButtonGroup spacing={4}>
          <Link display="flex" alignItems="center">
            Guidelines
          </Link>
          <Link as={NextLink} href="/ballots/new">
            <Button variant="blueWithShadow">Start a New Ballot</Button>
          </Link>
        </ButtonGroup>
      </HeadBar>
      <Container
        maxW={{ base: "container.lg", lg: "container.xl" }}
        // h="calc(100vh - 4rem)"
        pt={8}
      >
        {/* Page Header */}
        <Stack
          spacing="4"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          mb={4}
        >
          <Stack spacing="1">
            <Heading size={{ base: "xs", md: "sm" }} fontWeight="medium">
              Ballots
            </Heading>
            <Text color="fg.muted">This is where you vote.</Text>
          </Stack>
          <InputGroup maxW={{ sm: "xs" }}>
            <InputRightElement>
              <Icon as={FaMagnifyingGlass} color="blue.500" fontSize="lg" />
            </InputRightElement>
            <Input
              placeholder="Search"
              variant="primary"
              borderRadius="xl"
              boxShadow="4px 4px 0 0 var(--chakra-colors-gray-300)"
            />
          </InputGroup>
        </Stack>
        {/* Tabs */}
        {/* <Stack spacing="16" mb={8}>
          <Tabs size="lg" variant="underline">
            <TabList borderBottom="2px solid" borderColor="gray.300">
              <Tab>Home</Tab>
              <Tab>Components</Tab>
              <Tab>Pricing</Tab>
            </TabList>
            <TabIndicator />
          </Tabs>
        </Stack> */}
        <Wrap spacing={2} mb={2}>
          <Checkbox variant="tag" borderColor="blue.400">
            Public
          </Checkbox>
          <Checkbox variant="tag" borderColor="blue.400">
            CityStates
          </Checkbox>
          <Checkbox variant="tag" borderColor="blue.400">
            Permanent
          </Checkbox>
          <Checkbox variant="tag" borderColor="blue.400">
            Active
          </Checkbox>
          <Checkbox variant="tag" borderColor="blue.400">
            Archived
          </Checkbox>
        </Wrap>
        <Wrap spacing={2}>
          <Checkbox variant="tag">General</Checkbox>
          <Checkbox variant="tag">School</Checkbox>
          <Checkbox variant="tag">Entertainment</Checkbox>
          <Checkbox variant="tag">Current Events</Checkbox>
          <Checkbox variant="tag">Politics</Checkbox>
          <Checkbox variant="tag">Society</Checkbox>
          <Checkbox variant="tag">Economics</Checkbox>
          <Checkbox variant="tag">International Relations</Checkbox>
          <Checkbox variant="tag">Ethics and Morality</Checkbox>
          <Checkbox variant="tag">Sciences</Checkbox>
          <Checkbox variant="tag">Humanities</Checkbox>
          <Checkbox variant="tag">Arts</Checkbox>
        </Wrap>
        {/* Page Content */}
        <VStack spacing={8} w="full" pt={8} pb={12}>
          <BallotCard />
          <BallotCard />
          <BallotCard />
          <BallotCard />
          <BallotCard />
        </VStack>
      </Container>
    </Flex>
  );
}
