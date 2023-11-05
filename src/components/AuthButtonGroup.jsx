import { Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";

export default function AuthButtonGroup() {
  return (
    <ButtonGroup spacing={4}>
      <Link href="/signup">
        <Button variant="lightBlueWithShadow">Sign up</Button>
      </Link>
      <Link href="/signin">
        <Button variant="grayWithShadow">Sign in</Button>
      </Link>
    </ButtonGroup>
  );
}
