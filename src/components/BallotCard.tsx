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
import Link from "next/link";
import { FaSort } from "react-icons/fa6";

export default function BallotCard() {
  return (
    <Card variant="grayWithShadow">
      <Link href="/ballots/1234">
        <CardBody textAlign="center" px={6} pt={4} pb={3}>
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
          <Heading size="xs" mb={2}>
            Vote Title
          </Heading>

          <Box mb={2}>1234 votes | 5432 opinions</Box>
          <Box display="flex" justifyContent="space-between" px={2} mb={2}>
            <Text>Option 1</Text>
            <Text>Option 2</Text>
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
            <Text mb={0} fontSize="sm">
              Public | Due date
            </Text>
          </Flex>
        </CardBody>
      </Link>
    </Card>
  );
}
