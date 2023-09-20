import {
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
  Divider,
  Link,
  textDecoration,
} from "@chakra-ui/react";
import {
  FaLandmark,
  FaCheckToSlot,
  FaGroupArrowsRotate,
  FaCampground,
} from "react-icons/fa6";
import SidebarButton from "./SidebarButton";
import CityStateButton from "./CityStateButton";
import NextLink from "next/link";

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
      w={{ base: "5rem", xl: "20rem" }}
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
          overflowY: "scroll",
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
          px={{ base: 4, xl: 6 }}
          mb={4}
          cursor="pointer"
          color="gray.600"
          _hover={{ color: "blue.600" }}
        >
          <Link href="/">
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
              display={{ base: "none", xl: "flex" }}
              fontFamily="Merriweather"
              fontWeight="900"
              fontSize="lg"
            >
              The School of Athens
            </Text>
          </Link>
        </Box>
        <Stack
          display="flex"
          flexDirection="column"
          mt={2}
          px={{ base: 2, xl: 4 }}
          spacing={2}
        >
          <SidebarButton
            leftIcon={<FaLandmark size={20} />}
            path="/forum"
            active={true}
          >
            Forum
          </SidebarButton>
          <SidebarButton leftIcon={<FaCheckToSlot size={20} />} path="/ballots">
            Ballots
          </SidebarButton>
          <SidebarButton
            leftIcon={<FaGroupArrowsRotate size={20} />}
            path="/citystates"
          >
            CityStates
          </SidebarButton>
          <SidebarButton
            leftIcon={<FaCampground size={20} />}
            path="/community"
          >
            Community
          </SidebarButton>
        </Stack>

        <Flex my={4} justifyContent="center">
          <Divider borderTopWidth="2px" w="75%" borderColor="gray.300" />
        </Flex>
        {/* Citystates */}
        {/* <Stack
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
        </Stack> */}
      </Box>
      {/* <Box h="5rem"></Box> */}
      <Flex
        justifyContent="center"
        position="absolute"
        bottom="0px"
        p={3}
        mb={2}
        width="100%"
        bg="white"
        height="5rem"
      >
        <Link as={NextLink} href="/u/1234" w="full" _hover={{textDecoration: "none"}}>
          <HStack
            justifyContent={{ base: "center", xl: "space-between" }}
            spacing="3"
            w="full"
            bg={{ base: "none", xl: "gray.100" }}
            _hover={{ bg: "gray.200" }}
            p={{ base: 0, xl: 3 }}
            borderRadius="lg"
          >
            <Avatar boxSize="10" src="https://i.pravatar.cc/300" />
            <Box display={{ base: "none", xl: "flex" }}>
              <Text textStyle="sm" fontWeight="medium">
                John Doe
              </Text>
            </Box>
          </HStack>
        </Link>
      </Flex>
      {/* <Box flex="1" justifySelf="stretch" alignSelf="stretch" mb="48px"></Box> */}
    </Flex>
  );
}
