import {
  Heading,
  Box,
  Flex,
  GridItem,
  Input,
  Stack,
  Divider,
  Button,
  Select,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useAuthRedirect from "@/hooks/useAuthRedirect";

export default function () {

  const authRedirect = useAuthRedirect();

  return (
    <GridItem colSpan={4} bg="white" position="relative">
      <Box position="sticky" top="6rem" px={8}>
        <Heading>Forum</Heading>
        <Stack direction="horizontal" alignItems="start" mt={4} spacing={3}>
          <Button variant="gray">Forum Rules</Button>
          <Button variant="blue" onClick={() => authRedirect("/forum/new")}>
            Propose a Vote
          </Button>
        </Stack>
        <Divider my={6} borderWidth="1.5px" borderColor="gray.300" />
        <FormControl mt={4}>
          <Flex mb={2}>
            <Input
              me={2}
              variant="primary"
              type="search"
              placeholder="Search (Disabled)"
            />
            <Button variant="blue" minW="0">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Flex>
          <FormLabel>Sort by</FormLabel>
          <Select variant="primary" defaultValue="DEFAULT" mb={5}>
            <option value="DEFAULT">Default</option>
            <option value="NEWEST">Newest</option>
            <option value="VOTES">Votes</option>
            <option value="OPINIONS">Opinions</option>
            <option value="DUE_DATE">Due Date</option>
          </Select>
          <Divider my={6} borderWidth="1.5px" borderColor="gray.300" />
          <FormLabel>Topics</FormLabel>
          <Stack spacing={2} direction="column">
            <Checkbox variant="ghost">Study</Checkbox>
            <Checkbox variant="ghost">Current Events</Checkbox>
            <Checkbox variant="ghost">Politics</Checkbox>
            <Checkbox variant="ghost">Society</Checkbox>
          </Stack>
        </FormControl>
      </Box>
    </GridItem>
  );
}
