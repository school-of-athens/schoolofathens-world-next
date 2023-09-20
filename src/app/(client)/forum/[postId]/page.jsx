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
  IconButton,
  HStack,
  Image,
  Circle,
} from "@chakra-ui/react";
import NextLink from "next/link";
import HeadBar from "@/layouts/HeadBar";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegComment,
  FaRegEye,
  FaSquareCaretDown,
  FaSquareCaretUp,
} from "react-icons/fa6";
import Comment from "@/components/Comment";
import UserButton from "@/components/UserButton";
import { useState } from "react";
import { exampleDiscussionPost as discussion } from "@/data/examples";

export default function NewDiscussion() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Flex bg="white" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Discussion
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
      <Container
        maxW={{ base: "container.md" }}
        // h={{ base: "auto", md: "calc(100vh - 4rem)" }}
        py={4}
      >
        <Flex mb={2} ms="-0.5rem">
          <UserButton />
        </Flex>
        <Text fontWeight="900" fontSize="2xl" mb={2}>
          {discussion.title}
        </Text>
        <Text fontSize="lg">{discussion.body}</Text>
        {discussion.images && (
          <Flex w="full" position="relative" mt={4} mb={2}>
            <IconButton
              variant="light"
              display={currentSlide === 0 ? "none" : "inline-flex"}
              icon={<FaChevronLeft />}
              aria-label="previous slide"
              position="absolute"
              borderRadius="full"
              left="3"
              top="45%"
              onClick={() => {
                if (currentSlide > 0) {
                  setCurrentSlide(currentSlide - 1);
                }
              }}
            />
            <IconButton
              variant="light"
              display={
                currentSlide === discussion.images.length - 1
                  ? "none"
                  : "inline-flex"
              }
              icon={<FaChevronRight />}
              aria-label="next slide"
              position="absolute"
              borderRadius="full"
              right="3"
              top="45%"
              onClick={() => {
                if (
                  discussion.images &&
                  currentSlide < discussion.images.length
                ) {
                  setCurrentSlide(currentSlide + 1);
                }
              }}
            />
            <HStack
              position="absolute"
              width="full"
              justify="center"
              bottom="0"
              py="4"
            >
              {discussion.images.map((_, index) => (
                <Circle
                  key={index}
                  size="2"
                  bg={currentSlide === index ? "white" : "whiteAlpha.600"}
                />
              ))}
            </HStack>
            <Image
              borderRadius="lg"
              border="2px solid"
              borderColor="gray.300"
              src={discussion.images[currentSlide]}
              objectFit="cover"
              alt="image"
            />
          </Flex>
        )}

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
