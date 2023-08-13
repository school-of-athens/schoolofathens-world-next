"use client";

import {
  Flex,
  Text,
  Button,
  Container,
  ButtonGroup,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import HeadBar from "@/layouts/HeadBar";

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
      <Container
        maxW={{ base: "container.md", lg: "container.lg" }}
        h={{ base: "auto", md: "calc(100vh - 5rem)" }}
      ></Container>
    </Flex>
  );
}
