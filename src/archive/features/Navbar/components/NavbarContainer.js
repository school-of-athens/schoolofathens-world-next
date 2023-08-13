import { Flex } from "@chakra-ui/react";

const NavbarContainer = ({ children }) => {
  return (
    <Flex
      h="4.15rem"
      px={8}
      justify="space-between"
      borderBottom="2px solid"
      borderBottomColor="gray.300"
      position="sticky"
      top="0"
      zIndex={10}
      w="full"
      bg="white"
    >
        {children}
    </Flex>
  );
};

export default NavbarContainer;