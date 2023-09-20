import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function Bio({ setActiveStep, newVote, setNewVote }) {
  return (
    <>
      <Heading mb={10} size="md">Share more about you</Heading>
      <FormControl>
        <FormLabel>Public bio</FormLabel>
        <Textarea variant="primary"></Textarea>
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </Box>
    </>
  );
}
