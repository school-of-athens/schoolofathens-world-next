"use client";

import { Progress } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Progress
      size="xs"
      colorScheme="blue"
      isIndeterminate
      position="sticky"
      top="4rem"
      zIndex={10}
    />
  );
}
