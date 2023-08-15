import {
  Box,
  Heading,
  Text,
  Select,
  Alert,
  AlertIcon,
  Button,
} from "@chakra-ui/react";

function VoteType({ setActiveStep, newVote, setNewVote }) {
  return (
    <>
      <Heading mb={10}>Select the type of your vote</Heading>
      <Select
        borderWidth="2px"
        variant="primary"
        mb={6}
        value={newVote.type}
        onChange={(e) => {
          setNewVote((prev) => {
            return { ...prev, type: e.target.value };
          });
        }}
      >
        <option value="Poll">Poll</option>
        <option value="Proposal" disabled>
          Proposal
        </option>
        <option value="Election" disabled>
          Election
        </option>
      </Select>
      <Alert status="info" mb={6} borderRadius={8}>
        <Text m={0} lineHeight="1.75" fontSize="md">
          <strong>Polls</strong> are like a discussion or a survey. You can have
          two or more options.
          <br />
          <strong>Proposals</strong> are for decision making. You can only have
          two fixed options: for or against.
          <br />
          <strong>Elections</strong> are for approving members of a group or
          electing officials.
        </Text>
      </Alert>
      <Alert status="warning" borderRadius={8}>
        <AlertIcon />
        Right now we only support polls. Join the developer team to help us make
        progress!
      </Alert>
      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(1)}>
          Next
        </Button>
      </Box>
    </>
  );
}

export default VoteType;
