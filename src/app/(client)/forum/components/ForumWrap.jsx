import React from "react";
import { Container, Grid } from "@chakra-ui/react";

export default function ForumWrap({ children }) {
  return (
    <Container
      maxW={{ base: "container.lg", lg: "container.xl" }}
      h={{ base: "auto", md: "calc(100vh - 4rem)" }}
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
