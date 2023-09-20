import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Alert,
  AlertIcon,
  FormHelperText,
} from "@chakra-ui/react";
import { getNames } from "country-list";

export default function Statistics({
  setActiveStep,
  newVote,
  setNewVote,
}) {
  console.log(getNames());
  return (
    <>
      <Heading mb={10} size="md">Please provide some demographic data</Heading>
      <Alert status="info" borderRadius={8}>
        <AlertIcon />
        We collect minimal demographic data to help us compile statistics for
        the polls. We do not share this data with anyone.
      </Alert>
      <FormControl mt={4}>
        <FormLabel>When were you born?</FormLabel>
        <Select variant="primary" placeholder="Please select age group">
          <option>Before 1950</option>
          <option>1950s</option>
          <option>1960s</option>
          <option>1970s</option>
          <option>1980s</option>
          <option>1990s</option>
          <option>2000s</option>
          <option>2010s</option>
          <option>2020s</option>
        </Select>
        <FormLabel mt={2}>Country</FormLabel>
        <Select variant="primary" placeholder="Please select country">
          {getNames().map((country) => (
            <option>{country}</option>
          ))}
        </Select>
        <FormLabel mt={2}>Legal gender</FormLabel>
        <Select variant="primary" placeholder="Please select legal gender">
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </Select>
        <FormHelperText>
          This is the gender on your ID card / passport / other legal documents.
        </FormHelperText>
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </Box>
    </>
  );
}
