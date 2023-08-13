import { google } from "@/data/projectFiles";
import useSignInWithEmail from "../hooks/useSignInWithEmail";
import useSignInWithGoogle from "@/hooks/useSignInWithGoogle";
import {
  Button,
  Heading,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Image,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import ImageCaption from "@/components/ImageCaption";

const Login = () => {
  const signInWithGoogle = useSignInWithGoogle();
  const [setEmail, setPassword, signInWithEmail] = useSignInWithEmail();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      width="100vw"
      minHeight="calc(100vh - 4rem)"
      backgroundImage="url(https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fbazar_of_athens.jpg?alt=media&token=4ceeb8ca-1a4c-4ef0-b2fe-77d821f7b323)"
      backgroundSize="cover"
      position="relative"
      objectFit="cover"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      margin="0"
      alignItems="center"
    >
      <ImageCaption artist="Edward Dodwell." work="Bazar of Athens." />
      <Box
        width={{ base: "90%", md: "75%", lg: "50%", xl: "35%" }}
        px={{ base: 4, sm: 6, md: 8, lg: 10, xl: 12 }}
        backgroundColor="gray.50"
        py={12}
        borderRadius="xl"
        border="3px solid var(--border-gray-darker)"
        borderColor="gray.300"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading>Sign In</Heading>
        <Button variant="gray" width="100%" onClick={signInWithGoogle} mt={5}>
          <Image src={google} height="18" width="18" me={3} />
          Sign in with Google
        </Button>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mt={6}
          mb={4}
          width="100%"
        >
          <Divider variant="gray" width="25%" mx={0} />
          Or sign in with email
          <Divider variant="gray" width="25%" mx={0} />
        </Box>
        <FormControl>
          <FormLabel ms={1} >Email</FormLabel>
          <Input
            type="email"
            variant="primary"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel ms={1} mt={2}>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              variant="primary"
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

        <Button mt={5} variant="blue" onClick={signInWithEmail}>
          Sign In
        </Button>
        <Button mt={4} variant="ghostGray" color="blue.600">
          Don't remember your password?
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
