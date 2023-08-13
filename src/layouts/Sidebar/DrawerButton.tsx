import { AppContext } from "@/context/AppContext";
import { Button, Image } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useContext } from "react";


export default function DrawerButton() {

  const { BottomBarOnOpen, BottomBarIsOpen } = useContext(AppContext);

  return (
    <Button variant="unstyled" onClick={BottomBarOnOpen} display={{ base: "flex", md: "none" }}>
      <Image
        src="/logo.svg"
        h="2.5rem"
        transform={BottomBarIsOpen ? "rotate(180deg)" : "rotate(0)"}
        transition="all 0.2s linear"
      />
    </Button>
  );
}
