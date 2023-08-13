import { Link, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

const LoginSignUp = () => {
  return (
    <Flex alignItems="center">
      <ButtonGroup spacing={3}>
        <Link as={NextLink} href="/login">
          <Button variant="gray">Login</Button>
        </Link>
        <Link as={NextLink} href="/signup">
          <Button variant="blue">Sign Up</Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default LoginSignUp;
