import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Avatar,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

function GroupCutomize({ setActiveStep }) {

  const [imageURL, setImageURL] = useState('');

  return (
    <>
      <Heading mb={10}>Customize your group</Heading>
      <FormControl>
        <FormLabel htmlFor="profile" display="flex" flexDirection="column">
          Upload profile image
          <Avatar size="2xl" my={4} src={imageURL} />
        </FormLabel>
        <Input
          id="profile"
          type="file"
          accept="image/*"
          display="none"
          variant="primary"
          onChange={(e) => {
            setImageURL(URL.createObjectURL(e.target.files[0]))
            setNewGroup({
              ...newGroup,
              photo: e.target.files[0]
            })
          }}
        />
        <FormLabel htmlFor="bg" display="flex" flexDirection="column">
          Upload background image
          <Image
            width="100%"
            height="3xs"
            bg="gray.300"
            border="none"
            my={4}
          />
        </FormLabel>
        <Input id="bg" type="file" accept="" display="none" variant="primary" />
      </FormControl>
      <Heading size="md">Preview</Heading>
      <Box pb={6} pt={0} border="solid" borderWidth="2px" borderColor="gray.500">
        <Image
          width="100%"
          height="3xs"
          bg="gray.300"
          border="none"
        />
        <Flex marginTop="-3rem" ms={8} alignItems="end">
          <Avatar size="2xl" />
          <Heading ms={4} mb={6}>Group Title</Heading>
        </Flex>
      </Box>

      <Box textAlign="center" mt={12}>
        <Button variant="blue" onClick={() => setActiveStep(2)}>
          Next
        </Button>
      </Box>
    </>
  );
}

export default GroupCutomize;
