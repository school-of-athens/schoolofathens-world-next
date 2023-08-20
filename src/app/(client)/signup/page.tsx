"use client";

import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";
import ImageCaption from "@/components/ImageCaption";

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
        <AuthButtonGroup />

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
          <Image h="full" w="full" objectFit="cover" src="the_entry_of_king_othon_of_greece_in_athens.jpg" />
          <ImageCaption />
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
