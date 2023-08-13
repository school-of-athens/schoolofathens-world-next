import { Flex, Stack } from "@chakra-ui/react";
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
      </Flex>
    </Flex>
  );
}
