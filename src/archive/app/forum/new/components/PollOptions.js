import {
  Box,
  Heading,
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Divider,
} from "@chakra-ui/react";
import React from "react";

function PollOptions({ setActiveStep, newVote, setNewVote }) {
  return (
    <>
      <Heading mb={8}>Set up the options of your poll</Heading>
      <Alert status="warning" borderRadius={8}>
        <AlertIcon />
        Currently we only support vote with two options. Join the developer team
        to help us make progress!
      </Alert>
      <FormControl mt={4}>
        {newVote.options.map((option, index) => (
          <React.Fragment key={index}>
            <FormLabel mt={2}>Option {index + 1}</FormLabel>
            <Input
              type="text"
              variant="primary"
              value={newVote.options[index].title}
              onChange={(e) => {
                setNewVote((prev) => {
                  let updatedVote = { ...prev };
                  updatedVote.options[index].title = e.target.value;
                  return updatedVote;
                });
              }}
            />
            <FormLabel mt={2}>Give a brief summary of opinions</FormLabel>
            <Textarea
              variant="primary"
              rows={6}
              mb={2}
              value={newVote.options[index].description}
              onChange={(e) => {
                setNewVote((prev) => {
                  let updatedVote = { ...prev };
                  updatedVote.options[index].description = e.target.value;
                  return updatedVote;
                });
              }}
            ></Textarea>
            {index < newVote.options.length - 1 && <Divider variant="gray" />}
          </React.Fragment>
        ))}
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(3)}>
          Next
        </Button>
      </Box>
    </>
  );
}

export default PollOptions;
