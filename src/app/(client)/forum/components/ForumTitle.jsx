import {
  Text,
  Button,
  ButtonGroup,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import HeadBar from "@/layouts/HeadBar";

export default function ForumTitle() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeadBar>
      <Text
        fontWeight="900"
        fontSize="lg"
        fontFamily="Merriweather"
        color="gray.600"
      >
        Forum
      </Text>
      <ButtonGroup spacing={4}>
        {/* <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button> */}
        <Link
          as={NextLink}
          href="/forum/guidelines"
          display="flex"
          alignItems="center"
        >
          Guidelines
        </Link>
        <Menu>
          <MenuButton
            px={6}
            as={Button}
            variant="blueWithShadow"
            display="flex"
          >
            Post
          </MenuButton>
          <MenuList>
            <MenuItem>
              <NextLink href="/forum/new/discussion">Discussion</NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/forum/new/article">Article</NextLink>
            </MenuItem>
            <MenuItem onClick={onOpen}>Opinion</MenuItem>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Text</ModalBody>

                <ModalFooter>
                  <Button variant="gray" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button variant="blue">Confirm</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </MenuList>
        </Menu>
      </ButtonGroup>
    </HeadBar>
  );
}
