
import { Flex, Image } from "@chakra-ui/react";


export default function BottomBar() {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      bg="white"
      w="full"
      h="5rem"
      position="sticky"
      bottom="0"
      px={6}
      alignItems="center"
      justifyContent="start"
    >
      <Image src="/logo.svg" h="4rem" />
    </Flex>
  );
}
