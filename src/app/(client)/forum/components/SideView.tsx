import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  Stack,
  Divider,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Card,
  ButtonGroup,
  CheckboxGroup,
  Wrap,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import {
  FaDiscord,
  FaGithub,
  FaTwitter,
  FaMagnifyingGlass,
} from "react-icons/fa6";

export default function SideView() {
  return (
    <GridItem
      colSpan={{ base: 12, md: 5 }}
      py={{ base: 0, md: 12 }}
      order={{ base: 0, md: 1 }}
      overflow={{ base: "visible", md: "overlay" }}
      pe={4}
      css={{
        "&::-webkit-scrollbar": {
          width: "3px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
          marginTop: "3rem",
          marginBottom: "3rem",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "var(--chakra-colors-gray-200)",
        },
      }}
      top={{ base: "auto", md: "7.5rem" }}
      mt={{ base: 12, md: 0 }}
    >
      <FormControl>
        <InputGroup>
          <InputRightElement>
            <Icon as={FaMagnifyingGlass} color="blue.500" fontSize="lg" />
          </InputRightElement>
          <Input
            placeholder="Search"
            variant="primary"
            borderRadius="xl"
            boxShadow="4px 4px 0 0 var(--chakra-colors-gray-300)"
          />
        </InputGroup>
      </FormControl>
      {/* </Card> */}
      <Card
        variant="grayWithShadowFixed"
        px={6}
        py={4}
        mt={6}
        borderColor="gray.300"
      >
        <FormControl mt={4}>
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
          <Stack spacing={2} direction="column"></Stack>
          <CheckboxGroup>
            <Wrap spacing={2}>
              <Checkbox variant="tag">General</Checkbox>
              <Checkbox variant="tag">School</Checkbox>
              <Checkbox variant="tag">Entertainment</Checkbox>
              <Checkbox variant="tag">Current Events</Checkbox>
              <Checkbox variant="tag">Politics</Checkbox>
              <Checkbox variant="tag">Society</Checkbox>
              <Checkbox variant="tag">Economics</Checkbox>
              <Checkbox variant="tag">International Relations</Checkbox>
              <Checkbox variant="tag">Ethics and Morality</Checkbox>
              <Checkbox variant="tag">Sciences</Checkbox>
              <Checkbox variant="tag">Humanities</Checkbox>
              <Checkbox variant="tag">Arts</Checkbox>
            </Wrap>
          </CheckboxGroup>
        </FormControl>
      </Card>
      <Card
        display={{ base: "none", md: "flex" }}
        variant="grayWithShadowFixed"
        mt={4}
        px={6}
        py={4}
      >
        <Wrap>
          <Link>About</Link>·<Link>Team</Link>·<Link>Research</Link>·
          <Link>Protocol</Link>
        </Wrap>
        <ButtonGroup variant="tertiary" mt={2} ms="-1">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaDiscord />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Card>
    </GridItem>
  );
}
