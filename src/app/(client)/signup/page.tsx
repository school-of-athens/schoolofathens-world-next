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
  Link,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";

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
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        width="full"
        minH="calc(100vh - 4rem)"
      >
        <Flex
          direction="column"
          height="full"
          bg="blue.200"
          display={{ base: "none", md: "flex" }}
          position="relative"
          borderEnd="2px"
          borderColor="gray.300"
        >
          <Image h="full" w="full" objectFit="cover" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg" />
          <Box position="absolute" bottom="0" bg="blackAlpha.800" w="full" color="white" px={4} py={2}>
            Image Caption
          </Box>
        </Flex>
        <Center>
          <Stack spacing="6" px={{ base: "4", md: "8" }} width="full" maxW="md">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>Sign Up</Heading>
              <Text color="fg.muted">
                Already have an account? <Link href="#">Log in</Link>
              </Text>
            </Stack>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                variant="primary"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
              <FormLabel htmlFor="password" mt={4}>
                Password
              </FormLabel>
              <Input
                variant="primary"
                id="password"
                placeholder="********"
                type="password"
              />
            </FormControl>
            <HStack justify="center">
              {/* <Checkbox defaultChecked>Remember me</Checkbox> */}
              <Link fontSize="sm" fontWeight="bold">
                Forgot password
              </Link>
            </HStack>
            <Stack spacing="4">
              <Button variant="blueWithShadow">Sign up</Button>
              <Button variant="gray">Sign up with Google</Button>
            </Stack>
          </Stack>
        </Center>
      </SimpleGrid>
    </Flex>
  );
}
