"use client";

import {
  Heading,
  Box,
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@chakra-ui/react";
import getSortedObjectKeys from "@/utils/getSortedObjectKeys";
import NextLink from "next/link";

export default function ({ voteData }) {
  const options = getSortedObjectKeys(voteData.options);

  return (
    <Link as={NextLink} variant="placeholder" href={`/forum/${voteData.id}`}>
      <Card
        variant="plain"
        _hover={{
          backgroundColor: "gray.50",
        }}
        borderColor="gray.300"
        cursor="pointer"
      >
        <CardHeader color="gray.500" mb="-1rem">
          {voteData.type.toUpperCase()}
        </CardHeader>
        <CardBody textAlign="center" mb={1}>
          <Heading size={{ base: "sm", lg: "md" }}>{voteData.title}</Heading>

          <Box mb={4} mt={0}>
            {voteData.totalVotes} votes | {voteData.totalOpinions} opinions
          </Box>
          {options.length && (
            <>
              <Box display="flex" justifyContent="space-between">
                <Heading size={{ base: "xs", lg: "sm" }}>{options[0]}</Heading>
                <Heading size={{ base: "xs", lg: "sm" }}>{options[1]}</Heading>
              </Box>
              <Box
                mt={2}
                height="2rem"
                backgroundColor="transparent"
                width="100%"
                position="relative"
                borderRadius="full"
                overflow="hidden"
              >
                <Flex
                  width={`${
                    voteData.totalVotes > 0
                      ? Math.min(
                          Math.max(
                            (voteData.options[options[0]].votes /
                              voteData.totalVotes) *
                              100,
                            15
                          ),
                          85
                        )
                      : 50
                  }%`}
                  height="100%"
                  bg={
                    voteData.options[options[0]].votes >
                    voteData.options[options[1]].votes
                      ? "blue.200"
                      : "gray.300"
                  }
                  position="absolute"
                  left="0"
                  paddingLeft={6}
                  justifyContent="start"
                  alignItems="center"
                >
                  <Text m={0} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    {voteData.totalVotes
                      ? Math.round(
                          (voteData.options[options[0]].votes /
                            voteData.totalVotes) *
                            100
                        )
                      : 0}
                    %
                  </Text>
                </Flex>

                <Flex
                  width={`${
                    voteData.totalVotes > 0
                      ? Math.min(
                          Math.max(
                            (voteData.options[options[1]].votes /
                              voteData.totalVotes) *
                              100,
                            15
                          ),
                          85
                        )
                      : 50
                  }%`}
                  height="100%"
                  bg={
                    voteData.options[options[1]].votes >=
                    voteData.options[options[0]].votes
                      ? "blue.200"
                      : "gray.300"
                  }
                  position="absolute"
                  right="0"
                  paddingRight={6}
                  justifyContent="end"
                  alignItems="center"
                >
                  <Text m={0} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                    {voteData.totalVotes
                      ? Math.round(
                          (voteData.options[options[1]].votes /
                            voteData.totalVotes) *
                            100
                        )
                      : 0}
                    %
                  </Text>
                </Flex>
              </Box>
            </>
          )}
        </CardBody>

        <CardFooter>
          <Text mb={0} mt={1} fontSize="sm">
            {voteData.viewRestriction || voteData.voteRestriction
              ? "Restricted"
              : "Public"}{" "}
            {"  "} | {"  "}
            {voteData.dueDate ? "Due date: " + voteData.dueDate : "No due date"}
          </Text>
        </CardFooter>
      </Card>
    </Link>
  );
}
