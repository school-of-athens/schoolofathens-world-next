"use client";

import {
  Flex,
  Text,
  Button,
  Container,
  ButtonGroup,
  Link,
  Box,
  Heading,
  Icon,
  Avatar,
  Textarea,
  VStack,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import HeadBar from "@/layouts/HeadBar";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { generateHTML } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { exampleArticlePost } from "@/data/examples";
import {
  FaRegComment,
  FaRegEye,
  FaSquareCaretDown,
  FaSquareCaretUp,
} from "react-icons/fa6";
import Comment from "@/components/Comment";
import UserButton from "@/components/UserButton";

export default function Article() {
  return (
    <Flex bg="white" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Article
        </Text>
        <ButtonGroup spacing={4}>
          {/* <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button> */}
          <Link
            as={NextLink}
            href="/forum/guidelines"
            display="flex"
            alignItems="center"
          >
            Guidelines
          </Link>
          <Button variant="blueWithShadow">Post</Button>
        </ButtonGroup>
      </HeadBar>
      <Box bg="blue.200" w="full" h="15rem"></Box>
      <Stack align="center">
        <Flex justifyContent="center">
          <Heading
            textAlign="center"
            size="lg"
            bg="gray.50"
            py={2}
            px={4}
            mt="-1rem"
            borderBottom="2px solid"
            borderColor="gray.300"
          >
            This is the title
          </Heading>
        </Flex>
<UserButton />
      </Stack>
      <Container
        maxW={{ base: "container.md" }}
        // h={{ base: "auto", md: "calc(100vh - 4rem)" }}
        py={4}
      >
        <Prose
          dangerouslySetInnerHTML={{
            __html: generateHTML(exampleArticlePost.body, [StarterKit, Image]),
          }}
        ></Prose>
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems="center"
          mt={3}
          pt={2}
          color="gray.600"
        >
          <Flex alignItems="center">
            <Icon as={FaRegEye} w={5} h={5} color="gray.500" me={2} />
            123
          </Flex>
          <Flex alignItems="center">
            <Icon as={FaRegComment} w={5} h={5} color="gray.500" me={2} />
            123
          </Flex>
          <Flex alignItems="center">
            <Icon
              as={FaSquareCaretUp}
              w={5}
              h={5}
              color="gray.500"
              me={2}
              _hover={{ color: "blue.400" }}
            />
            <Icon
              as={FaSquareCaretDown}
              w={5}
              h={5}
              color="gray.500"
              me={2}
              _hover={{ color: "blue.400" }}
            />
            123
          </Flex>
        </Flex>
      </Container>
      <Box
        w="full"
        borderTop="2px solid"
        borderColor="gray.300"
        pt={4}
        pb={12}
        position="relative"
      >
        <Container maxW={{ base: "container.md", lg: "container.md" }}>
          <Flex flexDir="column">
            <Heading size="sm">Comments</Heading>
            <Flex mt={4}>
              <Textarea
                rows={3}
                me={4}
                variant="primary"
                placeholder="Write a comment..."
              />
              <Button variant="blue">Post</Button>
            </Flex>
          </Flex>
          <VStack mt={8}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </VStack>
        </Container>
      </Box>
    </Flex>
  );
}
