import { Avatar, Button } from "@chakra-ui/react";

export default function UserButton() {
  return (
    <Button variant="ghostGray">
      <Avatar size="xs" mr={2} />
      Username
    </Button>
  );
}
