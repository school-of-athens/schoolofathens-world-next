
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
import { FaRegSquareCaretDown, FaRegSquareCaretUp, FaSquareCaretDown, FaSquareCaretUp } from "react-icons/fa6";
import UserButton from "./UserButton";

export default function OpinionCard({ opinion }) {
  return (
    <Card variant="grayWithShadow" overflow="hidden">
      <CardBody px={6} pt={4} pb={3}>
        <Flex justifyContent="space-between" alignItems="center" mb={4} ms="-0.5rem">
          {/* <Text mb={0} fontSize="sm" color="blue.400">
            OPINION
          </Text> */}
          <UserButton />
        </Flex>
        <Text fontSize="lg">{opinion.body}</Text>
        <Flex
          w="full"
          justifyContent="end"
          alignItems="center"
          mt={4}
          pt={3}
          color="gray.600"
          borderTop="2px solid"
        borderColor="gray.300"
        >
          <Flex alignItems="center">
            <Icon as={FaSquareCaretUp} w={5} h={5} color="gray.500" me={2} _hover={{color: "blue.500"}} />
            <Icon as={FaSquareCaretDown} w={5} h={5} color="gray.500" me={2} _hover={{color: "blue.500"}} />
            
            123
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
