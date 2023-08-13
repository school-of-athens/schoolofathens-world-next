import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function () {
  return (
    <Box h="calc(100vh - 8rem)" position="relative">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fthe_school_of_athens_draft.jpg?alt=media&token=5212af2c-470f-4324-9086-8df86e7a6863"
        width="100vw"
      />

      <Box mt={12} width="100vw" textAlign="center" mb={12}>
        <Heading mb={10}>404: Page Not Found</Heading>
        <Text>
          The specified file was not found on this website. Please check the URL
          for mistakes and try again.
        </Text>
      </Box>
    </Box>
  );
}
