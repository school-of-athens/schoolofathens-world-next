import {
  Box,
  Heading,
  Select,
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";

function PollRestrictions({ setActiveStep, newVote, setNewVote, submit }) {
  return (
    <>
      <Heading mb={8}>Who can vote and who can view</Heading>
      <Alert status="warning" borderRadius={8}>
        <AlertIcon />
        This function is still under development. If you have set up your vote,
        please click propose.
      </Alert>
      <FormControl mt={6}>
        <FormLabel>
          View Restriction{" "}
          <Switch id="viewRestriction" ms={2} isChecked isDisabled />
        </FormLabel>

        <Select borderWidth="2px" variant="primary" mb={6} isDisabled>
          <option value="public">public</option>
        </Select>
        <FormLabel>
          Vote Restriction{" "}
          <Switch id="voteRestriction" ms={2} isChecked isDisabled />
        </FormLabel>
        <Select borderWidth="2px" variant="primary" mb={6} isDisabled>
          <option value="public">public</option>
        </Select>
        <FormLabel>
          Due date <Switch id="due" ms={2} isChecked isDisabled />
        </FormLabel>
        <Input type="date" variant="primary" isDisabled />
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button
          variant="blue"
          onClick={submit}
        >
          Propose
        </Button>
      </Box>
    </>
  );
}

export default PollRestrictions;
