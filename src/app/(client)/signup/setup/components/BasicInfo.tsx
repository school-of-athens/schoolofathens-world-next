import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Avatar,
  Flex,
} from "@chakra-ui/react";

export default function BasicInfo({ setActiveStep }: { setActiveStep: any }) {
  return (
    <>
      <Heading mb={10} size="md">
        Fill out your information
      </Heading>
      <FormControl>
        <FormLabel htmlFor="profile-pic" display="flex" flexDirection="column">
          Profile picture
          <Flex mt={4} justify="center" border="2px dashed" borderRadius="xl" borderColor="gray.300" py={4}>
            <Avatar size="xl" />
          </Flex>
        </FormLabel>
        <Input display="none" id="profile-pic" type="file" accept="image/*" />

        <FormLabel mt={4}>Username</FormLabel>
        <Input variant="primary" type="text" placeholder="Your username" />
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </Box>
    </>
  );
}
