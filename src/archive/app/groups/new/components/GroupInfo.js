import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";

function GroupInfo({ setActiveStep, newGroup, setNewGroup }) {
  return (
    <>
      <Heading mb={10}>Fill out information for your group</Heading>
      <FormControl>
        <FormLabel>What's the name of your group?</FormLabel>
        <Input type="text" variant="primary" value={newGroup.name} onChange={(e) => {
          setNewGroup({
            ...newGroup,
            name: e.target.value
          })
        }} />
        <FormLabel mt={2}>Select a type for your group</FormLabel>
        <Select variant="primary" onChange={(e) => {
          console.log(e.target.value)
        }}>
          <option value="Just for fun">Just for fun</option>
          <option value="a">Organization</option>
          <option value="b">Company</option>
          <option value="c">School</option>
          <option value="d">Political party</option>
          <option value="e">Club</option>
        </Select>
        <FormLabel mt={2}>Give a brief description so that people know what it's about</FormLabel>
        <Textarea variant="primary" rows={6} ></Textarea>
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </Box>
    </>
  );
}

export default GroupInfo;
