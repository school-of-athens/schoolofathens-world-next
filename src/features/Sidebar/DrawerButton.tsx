import { Button, Image } from "@chakra-ui/react";


export default function DrawerButton({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <Button onClick={onOpen} display={{ base: "flex", md: "none" }}>
      <Image
        src="/logo.svg"
        // h="3rem"
        transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
        transition="all 0.2s linear"
      />
    </Button>
  );
}
