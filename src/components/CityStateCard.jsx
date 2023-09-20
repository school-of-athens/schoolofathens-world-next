
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaSort, FaUserGroup } from "react-icons/fa6";

export default function CityStateCard({ citystate }) {
  return (
    <Card variant="grayWithShadow" overflow="hidden">
      <Flex flexDirection="column" position="relative">
        <Image
          src={citystate.background_image}
          w="full"
          h="full"
          position="absolute"
          objectFit="cover"
          zIndex={0}
          filter="brightness(0.6) blur(0.5px)"
        />
        <Flex
          w="full"
          py={4}
          px={6}
          //   bg="gray.200"
          alignItems="center"
          justifyContent="space-between"
          minH="12rem"
          zIndex={1}
        >
          <Avatar src={citystate.profile_image} size="xl" />
          <Heading
            size="xs"
            display="flex"
            w="full"
            h="full"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            color="white"
          >
            {citystate.name}
          </Heading>
        </Flex>
      </Flex>

      <CardBody pb={4} pt={4} w="full">
        <Flex justifyContent="start" alignItems="end" mb={2} me={8}>
          <Text fontSize="sm" color="blue.400">
            🏫 SCHOOL
          </Text>
        </Flex>

        <Text>{citystate.description}</Text>
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          pt={3}
          borderTop="2px solid"
          borderColor="gray.300"
          color="gray.600"
        >
          Public
          <Flex alignItems="center">
            <Icon as={FaUserGroup} w={5} h={5} color="blue.400" me={2} />
            123
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}
