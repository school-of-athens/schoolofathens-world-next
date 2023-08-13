import { Heading, Box, Flex } from "@chakra-ui/react";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { schoolOfAthensCropped } from "@/data/projectFiles";

export default function () {

  return (
    <Flex
    bgImage={schoolOfAthensCropped}
    bgSize="cover"
    backdropFilter="brightness(0.75)"
    width="100%"
    alignItems="center"
    borderBottom="3px solid"
    borderBottomColor="gray.300"
  >
    <Box width="100%" backdropFilter="brightness(0.7)" py="6rem">
      <Box className="container">
        <Heading color="white" fontSize="2.5rem">
          Find Your Groups
        </Heading>
      </Box>
    </Box>
  </Flex>
  );
}
