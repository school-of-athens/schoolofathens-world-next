"use client";

import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  Divider,
  Input,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import Link from "next/link";

export default function Login() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Login
        </Text>
        <ButtonGroup spacing={4}>
          <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button>
        </ButtonGroup>
      </HeadBar>
      <Box
        bgGradient={{ sm: "linear(to-r, blue.600, blue.400)" }}
        py={{ base: "12", md: "24" }}
      >
        <Container
          maxW="md"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "xl" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="8">
            <Stack spacing="6" align="center">
              {/* <Logo /> */}
              <Stack spacing="3" textAlign="center">
                <Heading size="xs">Log in to your account</Heading>
                <Text color="fg.muted">Start making your dreams come true</Text>
              </Stack>
            </Stack>
            <Stack spacing="6">
              <Button variant="secondary">Continue with Google</Button>
              <Divider />
              <Stack spacing="4">
                <Input placeholder="Enter your email" />
                <Button>Continue with email</Button>
              </Stack>
            </Stack>
            <Text textStyle="sm" color="fg.muted" textAlign="center">
              Having trouble logging in? <Link href="#">Contact us</Link>
            </Text>
            <Text textStyle="xs" color="fg.subtle" textAlign="center">
              By continuing, you acknowledge that you have read, understood, and
              agree to our terms and condition
            </Text>
          </Stack>
        </Container>
      </Box>
    </Flex>
  );
}
