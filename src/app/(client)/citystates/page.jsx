"use client";

// import Sidebar from "@/features/Sidebar"
import {
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  Stack,
  Text,
  Button,
  Divider,
  Heading,
  Container,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  VStack,
  Card,
  ButtonGroup,
  CheckboxGroup,
  Wrap,
  InputRightElement,
  Link,
  Image,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { useState } from "react";
import getRandomInt from "@/utils/randInt";
import HeadBar from "@/layouts/HeadBar";
import CityStateCard from "@/components/CityStateCard";
import { exampleCityState } from "@/data/examples";

export default function CityStates() {
  const [width, setWidth] = useState(30);

  const handleClick = () => {
    setWidth(getRandomInt(10, 90));
  };

  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Ballots
        </Text>
        <ButtonGroup spacing={4}>
          {/* <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button> */}
          <Link display="flex" alignItems="center">
            Guidelines
          </Link>
          <Link as={NextLink} href="/citystates/new">
          <Button variant="blueWithShadow">Start a New CityState</Button>
          </Link>
        </ButtonGroup>
      </HeadBar>
      <Flex
        flexDirection="column"
        alignItems="center"
        pb={16}
        position="relative"
      >
        <Text color="blue.100" fontWeight="bold" zIndex={1} mt={12} mb={4}>
          CityStates
        </Text>
        <Container maxW="container.md" zIndex={1}>
          <Heading textAlign="center" size="lg" color="white">
            Find Your Groups <br /> at the School of Athens
          </Heading>
          <Text textAlign="center" color="white" mt={4} mb={6}>
            CityStates are like groups. They are communities of people who share
            a common interest. They can be schools, clubs, companies,
            organizations, or anything else.
          </Text>
          <InputGroup>
            <InputRightElement>
              <Icon as={FaMagnifyingGlass} color="blue.500" fontSize="lg" />
            </InputRightElement>
            <Input
              placeholder="Search"
              variant="primary"
              borderRadius="xl"
              // boxShadow="4px 4px 0 0 var(--chakra-colors-gray-300)"
            />
          </InputGroup>
        </Container>
        <Wrap spacing={2} zIndex={1} mt={6}>
          <Checkbox variant="tag">General</Checkbox>
          <Checkbox variant="tag">School</Checkbox>
          <Checkbox variant="tag">Club</Checkbox>
          <Checkbox variant="tag">Company</Checkbox>
          <Checkbox variant="tag">Organization</Checkbox>
        </Wrap>
        <Image
          src="https://xhcucozjulskkfgxiulx.supabase.co/storage/v1/object/public/test/bg"
          position="absolute"
          w="full"
          h="full"
          objectFit="cover"
          zIndex={0}
          filter="brightness(0.5) blur(1px)"
        />
      </Flex>

      <Container
        maxW={{ base: "container.md", lg: "container.lg" }}
        // h="calc(100vh - 4rem)"
        pt={4}
      >
        {/* Page Header */}
        {/* <Stack
          spacing="4"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          mb={4}
        >
          <Stack spacing="1">
            <Heading size={{ base: "xs", md: "sm" }} fontWeight="medium">
              CityStates
            </Heading>
            <Text color="fg.muted">CityStates are like groups.</Text>
          </Stack>
          <InputGroup maxW={{ sm: "xs" }}>
            <InputRightElement>
              <Icon as={FaMagnifyingGlass} color="blue.500" fontSize="lg" />
            </InputRightElement>
            <Input
              placeholder="Search"
              variant="primary"
              borderRadius="xl"
              boxShadow="4px 4px 0 0 var(--chakra-colors-gray-300)"
            />
          </InputGroup>
        </Stack> */}

        {/* Page Content */}
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={8}
          mt={8}
          mb={12}
        >
          <CityStateCard citystate={exampleCityState} />
          <CityStateCard citystate={exampleCityState} />
          <CityStateCard citystate={exampleCityState} />
          <CityStateCard citystate={exampleCityState} />
          <CityStateCard citystate={exampleCityState} />
          <CityStateCard citystate={exampleCityState} />
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
