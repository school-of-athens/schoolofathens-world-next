"use client";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  ButtonGroup,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import Link from "next/link";

export default function SignUp() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          SignUp
        </Text>
        <ButtonGroup spacing={4}>
          <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button>
        </ButtonGroup>
      </HeadBar>
      <Flex
        minH={{ base: "auto", md: "100vh" }}
        bgGradient={{
          md: "linear(to-r, bg.accent.default 50%, bg.surface 50%)",
        }}
      >
        <Flex maxW="8xl" mx="auto" width="full">
          <Box flex="1" display={{ base: "none", md: "block" }}>
            <Flex
              direction="column"
              px={{ base: "4", md: "8" }}
              height="full"
              color="fg.accent.default"
            >
              <Flex align="center" h="24">
                {/* <Logo /> */}
              </Flex>
              <Flex flex="1" align="center">
                <Stack spacing="8">
                  <Stack spacing="6">
                    <Heading size={{ md: "lg", xl: "xl" }}>
                      Start making your dreams come true
                    </Heading>
                    <Text
                      textStyle="lg"
                      maxW="md"
                      fontWeight="medium"
                      color="fg.accent.muted"
                    >
                      Create an account and discover the worlds' best UI
                      component framework.
                    </Text>
                  </Stack>
                  <HStack spacing="4">
                    <AvatarGroup
                      size="md"
                      max={useBreakpointValue({ base: 2, lg: 5 })}
                      borderColor="fg.accent.default"
                    >
                      <Avatar
                        name="Ryan Florence"
                        src="https://bit.ly/ryan-florence"
                      />
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
                      <Avatar
                        name="Prosper Otemuyiwa"
                        src="https://bit.ly/prosper-baba"
                      />
                      <Avatar
                        name="Christian Nwamba"
                        src="https://bit.ly/code-beast"
                      />
                    </AvatarGroup>
                    <Text fontWeight="medium">Join 10.000+ users</Text>
                  </HStack>
                </Stack>
              </Flex>
              <Flex align="center" h="24">
                <Text color="fg.accent.subtle" textStyle="sm">
                  © 2022 Chakra UI. All rights reserved.
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Center flex="1">
            <Stack
              spacing="8"
              px={{ base: "4", md: "8" }}
              py={{ base: "12", md: "48" }}
              width="full"
              maxW="md"
            >
              <Stack spacing="6">
                {/* <LogoIcon display={{ md: "none" }} /> */}
                <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                  <Heading size={{ base: "xs", md: "sm" }}>
                    Log in to your account
                  </Heading>
                  <Text color="fg.muted">
                    Don't have an account? <Link href="#">Sign up</Link>
                  </Text>
                </Stack>
              </Stack>
              <Stack spacing="6">
                <Stack spacing="5">
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input
                      id="password"
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                </Stack>
                <HStack justify="space-between">
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Button variant="text" size="sm">
                    Forgot password
                  </Button>
                </HStack>
                <Stack spacing="4">
                  <Button>Sign in</Button>
                  <Button variant="secondary">Sign in with Google</Button>
                </Stack>
              </Stack>
            </Stack>
          </Center>
        </Flex>
      </Flex>
    </Flex>
  );
}
