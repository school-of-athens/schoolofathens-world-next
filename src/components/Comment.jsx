import {
  Box,
  Flex,
  Button,
  Avatar,
  Text,
  Icon,
  Container,
} from "@chakra-ui/react";
import { FaRegSquareCaretUp, FaRegSquareCaretDown } from "react-icons/fa6";

export default function Comment() {
  return (
    <Box
      borderTop="1px"
      _last={{ borderBottom: "1px", borderColor: "gray.300" }}
      borderColor="gray.300"
      py={2}
    >
      <Container maxW={{ base: "container.lg", lg: "container.xl" }}>
        <Flex pt={2}>
          <Avatar me={4} size="md" />
          <Flex flexDirection="column">
            <Text mb={2}>Username</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Flex>
        </Flex>
        <Flex
          mt={2}
          w="full"
          justifyContent="end"
          alignItems="center"
          color="gray.600"
        >
          <Icon
            as={FaRegSquareCaretUp}
            w={5}
            h={5}
            color="gray.500"
            me={2}
            _hover={{ color: "blue.500" }}
          />
          <Icon
            as={FaRegSquareCaretDown}
            w={5}
            h={5}
            color="gray.500"
            me={2}
            _hover={{ color: "blue.500" }}
          />
          123
        </Flex>
      </Container>
    </Box>
  );
}
