import React from "react";
import { Container, Grid } from "@chakra-ui/react";

export default function ForumWrap({ children }: { children: React.ReactNode }) {
  return (
    <Container
      maxW={{ base: "container.md", lg: "container.lg" }}
      h={{ base: "auto", md: "calc(100vh - 5rem)" }}
    >
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={8}
        position="relative"
        h="full"
      >
        {children}
      </Grid>
    </Container>
  );
}
