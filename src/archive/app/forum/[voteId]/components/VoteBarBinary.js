import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import useVote from "../hooks/useVote";
import useAuthRequired from "@/hooks/useAuthRequired";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";

function VoteBarBinary({ voteData, options, setVoteData }) {
  const vote = useVote(voteData, setVoteData);
  const authRequired = useAuthRequired();
  const { userData } = useContext(AuthContext);
  const [voted, setVoted] = useState("");

  useEffect(() => {
    if (userData) {
      for (const vote of userData.votes) {
        if (vote.voteId === voteData.id) {
          setVoted(vote.option);
          break;
        }
      }
    }
  }, [userData]);

  return (
    <Box
      height="2rem"
      backgroundColor="transparent"
      width="100%"
      position="relative"
      borderRadius="full"
      overflow="hidden"
    >
      {voted ? (
        <>
          <Tooltip
            label={voted === options[0] ? "You voted" : ""}
            placement="top"
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
              bg={voted === options[0] ? "blue.300" : "gray.200"}
              position="absolute"
              left="0"
              paddingLeft={6}
              justifyContent="start"
              alignItems="center"
            >
              <Text m={0}>
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
          </Tooltip>
          <Tooltip
            label={voted === options[1] ? "You voted" : ""}
            placement="top"
          >
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
              bg={voted === options[1] ? "blue.300" : "gray.200"}
              position="absolute"
              right="0"
              paddingRight={6}
              justifyContent="end"
              alignItems="center"
            >
              <Text m={0}>
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
          </Tooltip>
        </>
      ) : (
        <>
          <Tooltip label={`Click to vote ${options[0]}`} placement="top">
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
              _hover={{
                bg:
                  voteData.options[options[0]].votes >
                  voteData.options[options[1]].votes
                    ? "blue.300"
                    : "gray.400",
              }}
              onClick={() => authRequired(() => vote(options[0]))}
            >
              <Text
                m={0}
                fontSize={{ base: "3xs", sm: "sm", md: "md", lg: "lg" }}
              >
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
          </Tooltip>
          <Tooltip label={`Click to vote ${options[1]}`} placement="top">
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
              _hover={{
                bg:
                  voteData.options[options[1]].votes >=
                  voteData.options[options[0]].votes
                    ? "blue.300"
                    : "gray.200",
              }}
              onClick={() => authRequired(() => vote(options[1]))}
            >
              <Text
                m={0}
                fontSize={{ base: "3xs", sm: "sm", md: "md", lg: "lg" }}
              >
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
          </Tooltip>
        </>
      )}
    </Box>
  );
}

export default VoteBarBinary;
