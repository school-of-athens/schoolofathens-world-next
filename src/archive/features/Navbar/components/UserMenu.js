import {
  Avatar,
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Flex,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import useSignOut from "../hooks/useSignOut";
import NextLink from "next/link";

const UserPortrait = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signOut = useSignOut();

  return (
    <Menu isOpen={isOpen}>
      <Flex
        justifyContent="center"
        alignItems="center"
        py={2}
        ps={1}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        lineHeight="0"
      >
        <MenuButton>
          <Avatar
            size="sm"
            referrerPolicy="no-referrer"
            name={user.displayName}
            src={user.photoURL}
          />
        </MenuButton>
      </Flex>

      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem>
          <Link as={NextLink} href={`/user/${user.uid}`} fontSize="1rem" _hover={{ textDecoration: "none" }} color="gray.500" fontWeight={500}>
            <Icon as={FontAwesomeIcon} icon={faUser} me={2} />
            My Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={signOut} fontSize="1rem" color="gray.500" fontWeight={500}>
          <Icon as={FontAwesomeIcon} icon={faRightFromBracket} me={2} />
          Log out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserPortrait;
