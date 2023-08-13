import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Bulletin(props) {
  return (
    <Flex
      h="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Heading size="2xl" position="absolute">
        This page is still under development...
      </Heading>
      <Box h="20vh" w="100vw" bg="blue.200"></Box>
      <Box h="20vh" w="100vw" bg="gray.200"></Box>
      <Box h="20vh" w="100vw" bg="blue.200"></Box>
      <Box h="20vh" w="100vw" bg="gray.200"></Box>
      <Box h="20vh" w="100vw" bg="blue.200"></Box>
    </Flex>
  );
}
