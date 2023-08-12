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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "./SidebarButton";
import CityStateButton from "./CityStateButton";

export default function MainSidebar() {
  return (
    <Flex
      alignItems="center"
      overflowY="hidden"
      zIndex="4"
      bg="white"
      display={{ base: "none", md: "flex" }}
      borderRight="2px solid"
      borderRightColor="gray.300"
      w={{ base: "5rem", lg: "20rem" }}
      h="100vh"
      position="sticky"
      top="0"
      pt={6}
      flexDirection="column"
    >
      <Box
        width="100%"
        overflowY="hidden"
        px="3px"
        _hover={{
          overflowY: "overlay",
          pe: "0px",
        }}
        css={{
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            width: "0px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "var(--chakra-colors-gray-200)",
          },
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="start"
          flexDirection="column"
          px={{ base: 4, lg: 6 }}
          mb={4}
          cursor="pointer"
          color="gray.600"
          _hover={{ color: "blue.600" }}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width="5rem"
            mb={4}
            transition="all 0.75s ease"
            transform="rotate(0)"
            _hover={{ transform: "rotate(360deg)" }}
          />
          <Text
            display={{ base: "none", lg: "flex" }}
            fontFamily="Merriweather"
            fontWeight="900"
            fontSize="lg"
          >
            The School of Athens
          </Text>
        </Box>
        <Stack
          display="flex"
          flexDirection="column"
          mt={2}
          px={{ base: 2, lg: 4 }}
        >
          <SidebarButton leftIcon={<FiGrid />} active={true}>
            Forum
          </SidebarButton>
          <SidebarButton leftIcon={<FiPieChart />}>Ballots</SidebarButton>
          <SidebarButton leftIcon={<FiClock />}>Nations</SidebarButton>
          <SidebarButton leftIcon={<FiBookmark />}>Community</SidebarButton>
        </Stack>

        <Flex
          mt={4}
          mb={4}
          ps={{ base: 0, lg: 8 }}
          justifyContent={{ base: "center", lg: "start" }}
        >
          <Divider borderTopWidth="2px" w="75%" borderColor="gray.300" />
        </Flex>
        <Stack
          display="flex"
          flexDirection="column"
          px={{ base: 2, lg: 6 }}
          mb="5rem"
        >
          <CityStateButton leftIcon={<FiGrid />}>Forum</CityStateButton>
          <CityStateButton leftIcon={<FiPieChart />}>Ballots</CityStateButton>
          <CityStateButton leftIcon={<FiClock />}>City-states</CityStateButton>
          <CityStateButton leftIcon={<FiBookmark />}>Community</CityStateButton>
          <CityStateButton leftIcon={<FiGrid />}>Forum</CityStateButton>
          <CityStateButton leftIcon={<FiPieChart />}>Ballots</CityStateButton>
          <CityStateButton leftIcon={<FiClock />}>City-states</CityStateButton>
          <CityStateButton leftIcon={<FiBookmark />}>Community</CityStateButton>
          <CityStateButton leftIcon={<FiGrid />}>Forum</CityStateButton>
          <CityStateButton leftIcon={<FiPieChart />}>Ballots</CityStateButton>
          <CityStateButton leftIcon={<FiClock />}>City-states</CityStateButton>
          <CityStateButton leftIcon={<FiBookmark />}>Community</CityStateButton>
          <CityStateButton leftIcon={<FiGrid />}>Forum</CityStateButton>
          <CityStateButton leftIcon={<FiPieChart />}>Ballots</CityStateButton>
          <CityStateButton leftIcon={<FiClock />}>City-states</CityStateButton>
          <CityStateButton leftIcon={<FiBookmark />}>Community</CityStateButton>
        </Stack>
      </Box>
      {/* <Box h="5rem"></Box> */}
      <Flex
        justifyContent="center"
        position="absolute"
        bottom="0px"
        p={3}
        width="100%"
        bg="white"
        height="5rem"
      >
        <HStack
          justifyContent={{ base: "center", lg: "space-between" }}
          spacing="3"
          bg={{ base: "none", lg: "gray.100" }}
          w="full"
          p={{ base: 0, lg: 4 }}
          borderRadius="lg"
        >
          <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
          <Box display={{ base: "none", lg: "flex" }}>
            <Text textStyle="sm" fontWeight="medium">
              John Doe
            </Text>
          </Box>
        </HStack>
      </Flex>
      {/* <Box flex="1" justifySelf="stretch" alignSelf="stretch" mb="48px"></Box> */}
    </Flex>
  );
}
