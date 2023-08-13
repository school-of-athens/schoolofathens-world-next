import { Heading, Box, Flex, Text } from "@chakra-ui/react";

function VoteMultiple() {

  return (
    <Box
      position="relative"
      borderTop="2px"
      _last={{
        borderBottom: "2px",
        borderColor: "gray.300",
      }}
      _hover={{
        backgroundColor: "gray.50",
      }}
      borderColor="gray.300"
      pt={7}
      pb={4}
      px={5}
      cursor="pointer"
    >
      <Heading
        size={{ base: "sm", lg: "md" }}
        textAlign="center"
        fontWeight="bold"
      >
        <span style={{ color: "var(--chakra-colors-gray-400)" }}>
          Poll |{" "}
        </span>
        Test Vote Multiple
      </Heading>

      <Box
        marginBottom="1rem"
        marginTop="0.75rem"
        width="100%"
        textAlign="center"
      >
        1235 votes | 1451 opinions
      </Box>

        <>
          <Box
            display="flex"
            fontWeight="bold"
            justifyContent="space-between"
            margin-bottom="1rem"
          >
            <Heading size={{ base: "xs", lg: "sm" }}>Option 1</Heading>
            <Heading size={{ base: "xs", lg: "sm" }}>Option 2</Heading>
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
              width="30%"
              height="100%"
              bg="blue.200"
              position="absolute"
              left="0"
              paddingLeft={6}
              justifyContent="start"
              alignItems="center"
            >
              <Text m={0}>
                0
                % (0/
                0)
              </Text>
            </Flex>

            <Flex
              width="70%"
              height="100%"
              bg="blue.200"
              position="absolute"
              right="0"
              paddingRight={6}
              justifyContent="end"
              alignItems="center"
            >
              <Text m={0}>
                0
                % (0/0)
              </Text>
            </Flex>
          </Box>
        </>

      <Text mt={3} mb={0} fontSize="sm">
        {"Public"}{" "}
        {"  "} | {"  "}
        {"No due date"}
      </Text>
    </Box>
  );
}

export default VoteMultiple;
