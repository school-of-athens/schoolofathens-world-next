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
    <Box _notFirst={{ borderTop: "1px solid",  borderColor: "gray.300" }} py={2}>
      <Container maxW={{ base: "container.md", lg: "container.lg" }}>
        {/* <Flex justifyContent="start" alignItems="center" mb={2}>
              <Button variant="ghostGray">
                <Avatar size="xs" mr={2} />
                Username
              </Button>
            </Flex>
            <Text fontSize="lg" px={2}>Opinion</Text>
            <Flex
              w="full"
              justifyContent="end"
              alignItems="center"
              mt={4}
              pt={3}
              color="gray.600"
            >
              <Flex alignItems="center">
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
            </Flex> */}
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
