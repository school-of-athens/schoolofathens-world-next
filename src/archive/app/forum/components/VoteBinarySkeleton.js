import {
  Heading,
  Box,
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton,
} from "@chakra-ui/react";

export default function VoteBinarySkeleton() {
  return (
    <Card
      variant="plain"
      _hover={{
        backgroundColor: "gray.50",
      }}
      borderColor="gray.300"
      cursor="pointer"
    >
      <CardHeader color="gray.500" mb="-1rem">
        <Flex justifyContent="start">
          <Skeleton>POLL</Skeleton>
        </Flex>
      </CardHeader>
      <CardBody textAlign="center" mb={1}>
        <Flex justifyContent="center">
          <Skeleton>
            <Heading size={{ base: "sm", lg: "md" }}>
              Title Title Title Title Title
            </Heading>
          </Skeleton>
        </Flex>

        <Box mb={4} mt={0}>
          <Flex justifyContent="center">
            <Skeleton>0 votes | 0 opinions</Skeleton>
          </Flex>
        </Box>
        <>
          <Box display="flex" justifyContent="space-between">
            <Skeleton>
              <Heading size={{ base: "xs", lg: "sm" }}>Option 1</Heading>
            </Skeleton>
            <Skeleton>
              <Heading size={{ base: "xs", lg: "sm" }}>Option 2</Heading>
            </Skeleton>
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
              width="50%"
              height="100%"
              bg="gray.300"
              position="absolute"
              left="0"
              paddingLeft={6}
              justifyContent="start"
              alignItems="center"
            ></Flex>

            <Flex
              width="50%"
              height="100%"
              bg="blue.200"
              position="absolute"
              right="0"
              paddingRight={6}
              justifyContent="end"
              alignItems="center"
            ></Flex>
          </Box>
        </>
      </CardBody>

      <CardFooter>
        <Flex justifyContent="start">
          <Skeleton>
            <Text mb={0} mt={1} fontSize="sm">
              Public | No Due Date
            </Text>
          </Skeleton>
        </Flex>
      </CardFooter>
    </Card>
  );
}
