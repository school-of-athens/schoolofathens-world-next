"use client";

import {
  Flex,
  Text,
  Button,
  Container,
  ButtonGroup,
  Link,
  Box,
  Icon,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import HeadBar from "@/layouts/HeadBar";
import { FaImage } from "react-icons/fa6";

export default function NewDiscussion() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          New Discussion
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
          <Button variant="blueWithShadow">Publish</Button>
        </ButtonGroup>
      </HeadBar>
      {/* <Box
        bg="white"
        borderBottom="2px solid"
        borderBottomColor="gray.300"
        position="sticky"
        top="4rem"
        zIndex={1}
      >
        <Container maxW={{ base: "container.lg", lg: "container.xl" }} py={3}>
          <Button variant="light">
            <Icon boxSize={4} as={FaImage} />
          </Button>
        </Container>
      </Box> */}
      <Container
        maxW={{ base: "container.lg", lg: "container.xl" }}
        h={{ base: "auto", md: "calc(100vh - 4rem)" }}
      >
        <Stack mt={4}>
        <Textarea
          resize="none"
          overflowY="hidden"
          rows={1}
          border="none"
          bg="transparent"
          placeholder="Title (optional)"
          fontWeight="bold"
          fontSize="2xl"
          _focusVisible={{ boxShadow: "none" }}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
        <Textarea
          resize="none"
          overflowY="hidden"
          rows={1}
          border="none"
          bg="transparent"
          placeholder="Enter your discussion here..."
          _focusVisible={{ boxShadow: "none" }}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
        </Stack>
      </Container>
    </Flex>
  );
}
