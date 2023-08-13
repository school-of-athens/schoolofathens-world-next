import { Heading, Box, Flex } from "@chakra-ui/react";
import { funeralOrnationCropped } from "../../../data/projectFiles";

export default function () {
  return (
    <Flex
      bgImage={funeralOrnationCropped}
      bgSize="cover"
      backdropFilter="brightness(0.75)"
      width="100%"
      alignItems="center"
      borderBottom="3px solid"
      borderBottomColor="gray.300"
    >
      <Box width="100%" backdropFilter="brightness(0.7)" py="6rem">
        <Box className="container" color="white">
          <Heading fontSize="2.5rem">Share Your Insights</Heading>
          <Heading size="md" mt={4} fontWeight="400">
            Take an idea, leave an idea.
          </Heading>
        </Box>
      </Box>
    </Flex>
  );
}
