import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import NavbarTab from "./NavbarTab";

const NavbarBody = () => {
  return (
    <Flex>
      <Logo />
      <NavbarTab href="/forum">Forum</NavbarTab>
      <NavbarTab href="/learn">Learn</NavbarTab>
      <NavbarTab href="/groups">Groups</NavbarTab>
      <NavbarTab href="/community">Community</NavbarTab>
      <NavbarTab href="/about">About</NavbarTab>
    </Flex>
  );
};

export default NavbarBody;
