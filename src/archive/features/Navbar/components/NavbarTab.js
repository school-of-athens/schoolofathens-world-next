import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavbarTab({ href, children }) {
  return (
    <Flex
      // h="100%"
      alignItems="center"
      px={5}
      border="4px solid transparent"
      _hover={{ borderBottomColor: "blue.400" }}
    >
      <Link
        fontWeight="500"
        color="gray.500"
        fontSize="1rem"
        as={NextLink}
        href={href}
        _hover={{ textDecoration: "none" }}
      >
        {children}
      </Link>
    </Flex>
  );
}
