import NextLink from "next/link";
import { Flex, Image, Link } from "@chakra-ui/react";
import { logo } from "@/data/projectFiles";

export default function Logo(props) {
  return (
    <Flex
      h="100%"
      alignItems="center"
      px={3}
      border="4px solid transparent"
      justifyContent="center"
      flexDirection="column"
      _hover={{ borderBottomColor: "blue.400" }}
    >
      <Link
        as={NextLink}
        _hover={{ textDecoration: "none" }}
        href="/"
        fontFamily="Merriweather, serif"
        color="gray.500"
        fontWeight="bold"
        fontSize="md"
        mb={0}
      >
        <Flex alignItems="center" {...props}>
          <Image src={logo} me={4} h="2rem" />
          The School of Athens
        </Flex>
      </Link>
    </Flex>
  );
}
