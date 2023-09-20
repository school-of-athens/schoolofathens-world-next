import { Avatar, Button, Flex, Stack } from "@chakra-ui/react";
import SidebarButton from "./SidebarButton";
import {
  FaLandmark,
  FaCheckToSlot,
  FaGroupArrowsRotate,
  FaCampground,
} from "react-icons/fa6";

export default function BottomBar() {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      bg="white"
      w="full"
      h="4rem"
      position="sticky"
      bottom="0"
      px={6}
      alignItems="center"
      justifyContent="start"
      borderTopWidth="2px"
      borderColor="gray.300"
      zIndex={2}
    >
      <Flex justifyContent="space-around" w="full">
        <SidebarButton
          leftIcon={<FaLandmark size={20} />}
          path="/forum"
          active={true}
          mode="collapsed"
        >
          Forum
        </SidebarButton>
        <SidebarButton
          leftIcon={<FaCheckToSlot size={20} />}
          path="/ballots"
          mode="collapsed"
        >
          Ballots
        </SidebarButton>
        <SidebarButton
          leftIcon={<FaGroupArrowsRotate size={20} />}
          path="/citystates"
          mode="collapsed"
        >
          Citystates
        </SidebarButton>
        <SidebarButton
          leftIcon={<FaCampground size={20} />}
          path="/community"
          mode="collapsed"
        >
          Community
        </SidebarButton>
        <Button
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          py="1.4rem"
          px={3}
          // w="100%"
          color="gray.500"
          bg="transparent"
          border="2px"
          borderColor="transparent"
          fontSize="md"
          _hover={{
            bg: "gray.100",
          }}
        >
          <Avatar size="xs" />
        </Button>
      </Flex>
    </Flex>
  );
}
