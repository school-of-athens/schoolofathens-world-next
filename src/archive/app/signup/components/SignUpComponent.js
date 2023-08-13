import {
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Image,
  Flex,
  Divider,
  GridItem,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { google } from "@/data/projectFiles";
import useSignInWithGoogle from "@/hooks/useSignInWithGoogle";
import useSignUpWithEmail from "../hooks/useSignUpWithEmail";
import ImageCaption from "@/components/ImageCaption";

export default function SignUpComponent({}) {
  const [setEmail, setPassword, signUpWithEmail] = useSignUpWithEmail();
  const signInWithGoogle = useSignInWithGoogle();
  const [showPassword, setShowPassword] = useState(false);

  const display = useBreakpointValue({
    base: "none",
    md: "static",
  });

  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        width="100%"
        height="calc(100vh - 4rem)"
        backgroundImage="url(https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fthe_entry_of_king_othon_of_greece_in_athens.jpg?alt=media&token=1ff2e9b7-39ab-418a-982e-7a04ec257152)"
        backgroundSize="cover"
        position="relative"
        objectFit="contain"
        overflow="hidden"
      >
        <GridItem
          colSpan={{ base: 0, md: 5, lg: 7 }}
          display={display}
          position="relative"
        >
          <ImageCaption
            artist="Peter von Hess"
            work="The Entry of King Othon of Greece in Athens"
          />
        </GridItem>
        <GridItem
          colSpan={{ base: 12, md: 7, lg: 5 }}
          px={8}
          height="100%"
          zIndex="3"
          bg="gray.50"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderLeft="3px solid"
          borderColor="gray.300"
        >
          <Heading>Sign Up</Heading>
          <Button variant="gray" width="100%" mt={5} onClick={signInWithGoogle}>
            <Image src={google} height="18" width="18" me={3} />
            Sign in with Google
          </Button>

          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop="1.5rem"
            marginBottom="1rem"
            width="100%"
          >
            <Divider variant="gray" width="25%" />
            Or sign up with email
            <Divider variant="gray" width="25%" />
          </Flex>

          <FormControl>
            <FormLabel ms={1}>Email</FormLabel>
            <Input
              type="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              variant="primary"
            />
          </FormControl>
          <FormControl>
            <FormLabel ms={1} mt={2}>
              Password
            </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                variant="primary"
                placeholder="choose a password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement>
                <Button
                  variant="light"
                  minWidth="fit-content"
                  minHeight="fit-content"
                  position="absolute"
                  right="0"
                  py={0}
                  px={1}
                  mt={0}
                  me={2}
                  height="fit-content"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button variant="blue" mt={5} onClick={signUpWithEmail}>
            Sign Up
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}
