"use client";

import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
  GridItem,
  IconButton,
  Checkbox,
  Stack,
  VStack,
  Wrap,
  Link,
  Card,
  CheckboxGroup,
  FormLabel,
  Select,
  Divider,
  Icon,
  Box,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import HeadBar from "@/layouts/HeadBar";
import {
  FaDiscord,
  FaGithub,
  FaMagnifyingGlass,
  FaTwitter,
} from "react-icons/fa6";
import ArticleCard from "@/components/ArticleCard";
import OpinionCard from "@/components/OpinionCard";
import DiscussionCard from "@/components/DiscussionCard";
import BallotCard from "@/components/BallotCard";
import {
  exampleArticlePost,
  exampleDiscussionPost,
  exampleOpinionPost,
} from "@/data/examples";
import AuthButtonGroup from "@/components/AuthButtonGroup";

export default function CityStateHome() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          CityState
        </Text>
        <AuthButtonGroup />

      </HeadBar>
      <Box scrollSnapType="y mandatory">
        <Box
          bg="white"
          w="full"
          borderBottom="2px"
          borderColor="gray.300"
          pb={8}
          scrollSnapAlign="start"
        >
          <Box bg="blue.200" w="full" h="15rem"></Box>
          <Container maxW={{ base: "container.md", lg: "container.lg" }}>
            <Avatar size="2xl" mt="-4rem" />
            <Heading size="md" mt={4}>
              CityState Name
            </Heading>
            <Text mt={4}>
              <b>Description: </b> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Text>
            <Flex
              justify="space-between"
              alignItems="center"
              mt={4}
              border="2px"
              borderColor="gray.300"
              px={4}
              py={2}
              borderRadius="xl"
              _hover={{ borderColor: "gray.400", bg: "gray.100" }}
              transition="background 0.2s"
            >
              <Flex alignItems="center">
                <Heading size="xs" me={4}>
                  Members
                </Heading>
                <AvatarGroup size="md" max={5}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
              </Flex>
              <ChevronRightIcon />
            </Flex>
          </Container>
        </Box>
        <Container
          scrollSnapAlign="start"
          maxW={{ base: "container.md", lg: "container.lg" }}
          h={{ base: "auto", md: "calc(100vh - 4rem)" }}
        >
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={8}
            position="relative"
            h="full"
          >
            <GridItem
              colSpan={{ base: 12, md: 7 }}
              pt={{ base: 0, md: 12 }}
              pb={12}
              order={{ base: 1, md: 0 }}
              overflow={{ base: "visible", md: "overlay" }}
              pe={4}
              css={{
                "&::-webkit-scrollbar": {
                  width: "3px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "0px",
                  marginTop: "3rem",
                  marginBottom: "3rem",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "var(--chakra-colors-gray-200)",
                },
              }}
            >
              <VStack spacing={8}>
                <ArticleCard article={exampleArticlePost} />
                <OpinionCard opinion={exampleOpinionPost} />
                <DiscussionCard discussion={exampleDiscussionPost} />
                <BallotCard />
              </VStack>
            </GridItem>
            <GridItem
              colSpan={{ base: 12, md: 5 }}
              py={{ base: 0, md: 12 }}
              order={{ base: 0, md: 1 }}
              overflow={{ base: "visible", md: "overlay" }}
              pe={4}
              css={{
                "&::-webkit-scrollbar": {
                  width: "3px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "0px",
                  marginTop: "3rem",
                  marginBottom: "3rem",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "var(--chakra-colors-gray-200)",
                },
              }}
              top={{ base: "auto", md: "7.5rem" }}
              mt={{ base: 12, md: 0 }}
            >
              <FormControl>
                <InputGroup>
                  <InputRightElement>
                    <Icon
                      as={FaMagnifyingGlass}
                      color="blue.500"
                      fontSize="lg"
                    />
                  </InputRightElement>
                  <Input
                    placeholder="Search"
                    variant="primary"
                    borderRadius="xl"
                    boxShadow="4px 4px 0 0 var(--chakra-colors-gray-300)"
                  />
                </InputGroup>
              </FormControl>
              {/* </Card> */}
              <Card
                variant="grayWithShadowFixed"
                px={6}
                py={4}
                mt={6}
                borderColor="gray.300"
              >
                <Heading size="xs" mb={2}>
                  Rules
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Card>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Flex>
  );
}
