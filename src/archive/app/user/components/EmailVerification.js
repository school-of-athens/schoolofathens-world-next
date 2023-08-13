import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import useSendVerificationEmail from "../hooks/useSendVerificationEmail";
import useCheckIfVerified from "../hooks/useCheckIfVerified";

const EmailVerification = () => {
  const sendVerificationEmail = useSendVerificationEmail();
  const checkIfVerified = useCheckIfVerified();

  return (
    <Box
      className="container"
      height="calc(100vh - 4rem)"
      justifyContent="center"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        fontSize="4rem"
        color="blue.400"
        backgroundColor="blue.100"
        width="8rem"
        height="8rem"
        justifyContent="center"
        alignItems="center"
        borderRadius="4rem"
        marginBottom="2rem"
      >
        <FontAwesomeIcon icon={faEnvelopeOpenText} />
      </Flex>

      <Heading>Please verify your email</Heading>
      <Text my={4} textAlign="center">
        Check your inbox! We sent an email verification link to name@example.com
      </Text>

      <Button variant="blue" onClick={checkIfVerified}>
        I verified my email
      </Button>
      <Button variant="light" mt={3} onClick={sendVerificationEmail}>
        Resend verification email
      </Button>
    </Box>
  );
};

export default EmailVerification;
