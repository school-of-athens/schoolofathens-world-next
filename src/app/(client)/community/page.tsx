"use client";

import { Button, ButtonGroup, Container, Flex, Heading, Text } from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";

export default function Community() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Community
        </Text>
        <ButtonGroup spacing={4}>
          <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button>
        </ButtonGroup>
      </HeadBar>
      <Container
        maxW={{ base: "container.md", lg: "container.lg" }}
        h="calc(100vh - 5rem)"
        py={12}
      >
        <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <Heading size="lg">🚧 Under Development</Heading>

        </Flex>
      </Container>
    </Flex>
  );
}
