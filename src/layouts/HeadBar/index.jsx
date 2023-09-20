import { Button, ButtonGroup, Container, Flex } from "@chakra-ui/react";
import { DrawerButton } from "../Sidebar";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function HeadBar({ children }) {


  return (
    <Flex
      w="full"
      position="sticky"
      top="0"
      zIndex={2}
      justifyContent="space-between"
      h="4rem"
      alignItems="center"
      bg="white"
      borderBottom="2px solid"
      borderBottomColor="gray.300"
    >
      <Container maxW={{base: "container.md", lg: "container.lg"}} display="flex" alignItems="center">
        <DrawerButton />
        <Flex
          justifyContent="space-between"
          w="full"
          alignItems="center"
          ms={{ base: 4, md: 0 }}
        >
          {children}
        </Flex>
      </Container>
    </Flex>
  );
}
