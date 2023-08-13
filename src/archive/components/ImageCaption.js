import { Box } from "@chakra-ui/react";

function ImageCaption({artist, work}) {
  return (
    <Box
      py={2}
      px={8}
      color="white"
      backgroundColor="rgba(0, 0, 0, 0.75)"
      position="absolute"
      bottom="0"
      width="100%"
    >
        {artist}. <em>{work}</em>.
    </Box>
  );
}

export default ImageCaption;
