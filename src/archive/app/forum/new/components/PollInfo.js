import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

function PollInfo({ setActiveStep, newVote, setNewVote }) {
  return (
    <>
      <Heading mb={10}>Provide an overview of your poll</Heading>
      <FormControl>
        <FormLabel>What's the title of your poll?</FormLabel>
        <Input type="text" variant="primary" value={newVote.title} onChange={(e) => {
          setNewVote((prev) => {
            return {...prev, title: e.target.value}
          });
        }} />
        <FormLabel mt={2}>Give a brief description</FormLabel>
        <Textarea variant="primary" rows={6} value={newVote.description}  onChange={(e) => {
          setNewVote((prev) => {
            return {...prev, description: e.target.value}
          });
        }}></Textarea>
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </Box>
    </>
  );
}

export default PollInfo;
