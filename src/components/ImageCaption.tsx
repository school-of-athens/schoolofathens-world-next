import { Box } from "@chakra-ui/react";

export default function ImageCaption() {
  return (
    <Box
      position="absolute"
      bottom="0"
      bg="blackAlpha.800"
      w="full"
      color="white"
      px={4}
      py={2}
    >
      Image Caption
    </Box>
  );
}
