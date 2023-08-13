import NewOpinionButton from "./NewOpinionButton";
import { Box, Heading, Select } from "@chakra-ui/react";

export default function OpinionsControl({ onOpen }) {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        bg="white"
        padding="0.75rem 2rem"
        background-color="white"
        borderBottom="2px solid"
        borderBottomColor="gray.300"
        position="sticky"
        top="4rem"
      >
        <Box display="flex" alignItems="center">
          <Heading size="md" width="100%" marginBottom={0}>
            Sort by
          </Heading>
          <Select variant="primary" defaultValue="NEWEST" disabled>
            <option value="NEWEST">Newest</option>
            <option value="VOTES">Most Upvotes</option>
            <option value="OPINIONS">Oldest</option>
          </Select>
        </Box>
        <NewOpinionButton onOpen={onOpen} />
      </Box>
    </>
  );
}
