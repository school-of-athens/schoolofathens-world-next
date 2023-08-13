import {
  CardHeader,
  CardBody,
  Box,
  Heading,
  Flex,
  Text,
  CardFooter,
  Card,
  Button,
  Avatar,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaSort } from "react-icons/fa6";

export default function BallotCard() {
  return (
    <Card variant="grayWithShadow">
      <CardBody textAlign="center">
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Text mb={0} fontSize="sm" color="blue.400">
            POLL
          </Text>
          <Text>
            Started by{" "}
            <Button variant="ghostGray">
              <Avatar size="xs" mr={2} />
              Username
            </Button>
          </Text>
        </Flex>
        <Heading size={{ base: "sm", lg: "md" }} mb={4}>
          Vote Title
        </Heading>

        <Box mb={4}>1234 votes | 5432 opinions</Box>
        <Box display="flex" justifyContent="space-between" px={2} mb={4}>
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
            bg="red.200"
            position="absolute"
            left="0"
            paddingLeft={6}
            justifyContent="start"
            alignItems="center"
          >
            <Text m={0} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              30%
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
            <Text m={0} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
              70%
            </Text>
          </Flex>
        </Box>
      </CardBody>

      <CardFooter mt={4} pt={3}>
        <Text mb={0} mt={1} fontSize="sm">
          Public | Due date
        </Text>
      </CardFooter>
    </Card>
  );
}
