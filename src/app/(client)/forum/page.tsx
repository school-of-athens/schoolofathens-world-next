"use client";

// import Sidebar from "@/features/Sidebar"
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
  Button,
  Image,
  Divider,
  Heading,
  Container,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  VStack,
  Card,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ButtonGroup,
  CheckboxGroup,
  Wrap,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import {
  FiBookmark,
  FiClock,
  FiGrid,
  FiHelpCircle,
  FiMoreVertical,
  FiPieChart,
  FiSearch,
  FiSettings,
} from "react-icons/fi";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRef, useState } from "react";
import Sidebar from "@/features/Sidebar/MainSidebar";
import getRandomInt from "@/utils/randInt";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width, setWidth] = useState(30);

  const handleClick = () => {
    setWidth(getRandomInt(10, 90));
  };

  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <Flex
        w="full"
        position="sticky"
        top="0"
        zIndex={2}
        justifyContent="space-between"
        h="4rem"
        alignItems="center"
        bg="white"
        borderBottom="2px solid"
        borderBottomColor="gray.300"
      >
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            {/* DrawerButton */}

            <Text
              fontWeight="900"
              fontSize="lg"
              fontFamily="Merriweather"
              color="gray.600"
            >
              Forum
            </Text>
            <ButtonGroup spacing={4}>
              <Link display="flex" alignItems="center">
                Rules
              </Link>
              <Button variant="blueWithShadow">Post</Button>

              <Button variant="lightBlueWithShadow">Sign In</Button>
              <Button variant="grayWithShadow">Sign Up</Button>
            </ButtonGroup>
          </Flex>
        </Container>
      </Flex>
      <Container
        maxW={{ base: "container.md", lg: "container.lg" }}
        h="calc(100vh - 5rem)"
      >
        <Grid
          templateColumns="repeat(12, 1fr)"
          gap={8}
          position="relative"
          h="full"
        >
          <GridItem
            colSpan={{ base: 12, md: 7 }}
            py={12}
            order={{ base: 1, md: 0 }}
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
          >
            <VStack spacing={4}>
              <Card variant="grayWithShadow" py={8} px={6}>
                <Heading size="md" textAlign="center" mb={3}>
                  Vote Title
                </Heading>
                <Flex
                  h="2rem"
                  w="full"
                  bg="gray.100"
                  justifyContent="space-between"
                  borderRadius="full"
                  overflow="hidden"
                  transition="all 0.2s linear"
                >
                  <Flex
                    onClick={handleClick}
                    h="full"
                    w={`${width}%`}
                    bg="red.100"
                    _hover={{ bg: "red.200" }}
                    transition="all 0.5s ease"
                  ></Flex>
                  <Flex
                    onClick={handleClick}
                    h="full"
                    w={`${100 - width}%`}
                    bg="blue.100"
                    _hover={{ bg: "blue.200" }}
                    transition="all 0.5s ease"
                  ></Flex>
                </Flex>
              </Card>
              <Card variant="grayWithShadow" h="15rem"></Card>
              <Card variant="grayWithShadow" h="15rem"></Card>
              <Card variant="grayWithShadow" h="15rem"></Card>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={{ base: 12, md: 5 }}
            py={12}
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
            // position={{ base: "relative", md: "sticky" }}
            top={{ base: "auto", md: "7.5rem" }}
            mt={{ base: 12, md: 0 }}
          >
            {/* <Card variant="grayWithShadow" px={6} py={4}> */}
            {/* <Heading size="xs">Forum</Heading>
                <HStack alignItems="start" mt={4} spacing={3}>
                  <Button variant="gray">Forum Rules</Button>
                  <Button variant="blue">Propose a Vote</Button>
                </HStack>
                <Divider my={6} borderWidth="1.5px" borderColor="gray.300" /> */}
            <FormControl>
              <InputGroup>
                <InputRightElement>
                  <Icon as={FiSearch} color="blue.500" fontSize="lg" />
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
                <Stack spacing={2} direction="column">
                  {/* <Checkbox variant="ghost">Study</Checkbox>
                    <Checkbox variant="ghost">Current Events</Checkbox>
                    <Checkbox variant="ghost">Politics</Checkbox>
                    <Checkbox variant="ghost">Society</Checkbox> */}
                </Stack>
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
            <Card variant="grayWithShadowFixed" mt={4} px={6} py={4}>
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
                <IconButton
                  as="a"
                  href="#"
                  aria-label="GitHub"
                  icon={<FaGithub />}
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                />
              </ButtonGroup>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
}
