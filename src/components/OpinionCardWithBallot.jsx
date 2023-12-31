
import {
  Avatar,
  Button,
  Card,
  Heading,
  Text,
  Flex,
  CardBody,
  Icon,
} from "@chakra-ui/react";
import {
  FaComment,
  FaEye,
  FaRegComment,
  FaRegEye,
  FaRegSquareCaretDown,
  FaRegSquareCaretUp,
  FaSquareCaretDown,
  FaSquareCaretUp,
} from "react-icons/fa6";
import UserButton from "./UserButton";

export default function OpinionCardWithBallot({ opinion }) {
  return (
    <Card variant="grayWithShadow" overflow="hidden">
      <CardBody px={6} pt={4} pb={3}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text mb={0} fontSize="sm" color="blue.400">
            OPINION
          </Text>
          <UserButton />
        </Flex>
        <Text fontSize="lg">{opinion.body}</Text>
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          pt={3}
          color="gray.600"
          borderTop="2px solid"
          borderColor="gray.300"
        >
          <Flex alignItems="center">
            <Icon as={FaRegEye} w={5} h={5} color="gray.500" me={2} />
            123
          </Flex>
          <Flex alignItems="center">
            <Icon
              as={FaSquareCaretUp}
              w={5}
              h={5}
              color="gray.500"
              me={2}
              _hover={{ color: "blue.500" }}
            />
            <Icon
              as={FaSquareCaretDown}
              w={5}
              h={5}
              color="gray.500"
              me={2}
              _hover={{ color: "blue.500" }}
            />
            123
          </Flex>
        </Flex>
      </CardBody>

      <Flex flexDirection="column" bg="gray.100" px={6} py={4}>
        <Heading size="2xs" mb={2} ms={2}>
          Vote Title
        </Heading>
        <Flex
          h="1.5rem"
          w="full"
          bg="gray.100"
          justifyContent="space-between"
          borderRadius="full"
          overflow="hidden"
        >
          <Flex h="full" w={`30%`} bg="red.100" ps={4} justifyContent="start">
            Option 1
          </Flex>
          <Flex h="full" w={`70%`} bg="blue.100" pe={4} justifyContent="end">
            Option 2
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
