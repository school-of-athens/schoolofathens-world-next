import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Flex,
  IconButton,
  Box,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import Logo from "./Logo";
import NavbarBody from "./NavbarBody";
import NavbarTab from "./NavbarTab";

export default function OffcanvasButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex h="full" alignItems="center">
        <IconButton
          icon={<HamburgerIcon />}
          variant="ghost"
          fontSize="2xl"
          ref={btnRef}
          onClick={onOpen}
        >
          Open
        </IconButton>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody mt={12}>
            <VStack spacing={6}>
              <NavbarTab href="/forum">Forum</NavbarTab>
              <NavbarTab href="/learn">Learn</NavbarTab>
              <NavbarTab href="/groups">Groups</NavbarTab>
              <NavbarTab href="/community">Community</NavbarTab>
              <NavbarTab href="/about">About</NavbarTab>
            </VStack>
          </DrawerBody>

          <DrawerFooter display="flex" justifyContent="center">
            <Logo flexDirection="column" />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
