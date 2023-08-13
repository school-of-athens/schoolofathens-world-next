
import { Box, Container, Grid } from "@chakra-ui/react";

export default function ForumContainer({ children }) {
  return (
    <Box bg="gray.100">
      <Container maxW="6xl">
        <Grid templateColumns="repeat(12, 1fr)">{children}</Grid>
      </Container>
    </Box>
  );
}
