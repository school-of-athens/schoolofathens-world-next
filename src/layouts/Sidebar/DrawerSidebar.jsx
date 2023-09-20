import { AppContext } from "@/context/AppContext";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Stack,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext } from "react";
import {
  FaLandmark,
  FaCheckToSlot,
  FaGroupArrowsRotate,
  FaCampground,
} from "react-icons/fa6";
import SidebarButton from "./SidebarButton";

export default function DrawerSidebar() {
  const { BottomBarIsOpen, BottomBarOnClose } = useContext(AppContext);
  const active = false;

  return (
    <Drawer
      placement="left"
      onClose={BottomBarOnClose}
      isOpen={BottomBarIsOpen}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth="2px"
          fontFamily="Merriweather"
          fontWeight="900"
          fontSize="lg"
          textAlign="center"
          pb={4}
        >
          <Link as={NextLink} href="/" _hover={{color: "blue.600"}}>The School of Athens</Link>
        </DrawerHeader>
        <DrawerBody>
          <Stack
            display="flex"
            flexDirection="column"
            mt={2}
            px={{ base: 2, lg: 4 }}
          >
            <SidebarButton
              leftIcon={<FaLandmark size={20} />}
              path="/forum"
              active={true}
              mode="expanded"
            >
              Forum
            </SidebarButton>
            <SidebarButton
              leftIcon={<FaCheckToSlot size={20} />}
              path="/ballots"
              mode="expanded"
            >
              Ballots
            </SidebarButton>
            <SidebarButton
              leftIcon={<FaGroupArrowsRotate size={20} />}
              path="/citystates"
              mode="expanded"
            >
              CityStates
            </SidebarButton>
            <SidebarButton
              leftIcon={<FaCampground size={20} />}
              path="/community"
              mode="expanded"
            >
              Community
            </SidebarButton>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
