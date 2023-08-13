import {
  Box,
  Avatar,
  Button,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  FormHelperText,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import useImageUpload from "../hooks/useImageUpload";
import useNewUser from "../hooks/useNewUser";
import useUserUpload from "../hooks/useUserUpload";

const SetUpProfile = () => {
  const [newUser, setNewUser] = useNewUser();
  const [imageURL, imageUpload] = useImageUpload();
  const userUpload = useUserUpload();

  return (
    <>
      <Box
        className="container"
        display="flex"
        flexDirection="column"
        my={12}
        px={{ base: 2, md: 5 }}
      >
        <Heading>Set Up Your Profile</Heading>
        <Grid templateColumns="repeat(12, 1fr)" gap={3}>
          <GridItem colSpan={12}>
            <Avatar
              boxSize="10rem"
              my={4}
              src={imageURL}
              name={newUser.displayName}
            />
          </GridItem>
          <GridItem colSpan={12} mb={3}>
            <FormControl>
              <FormLabel>Pick a profile photo</FormLabel>
              <input
                className="form-control"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  imageUpload(e.target.files[0]);
                }}
              />
              <FormHelperText>
                If you choose not to upload a profile photo, we will create one
                based on your name.
              </FormHelperText>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 4 }}>
            <FormControl>
              <FormLabel>Pick a username</FormLabel>
              <Input
                type="text"
                variant="primary"
                placeholder="Your username"
                onChange={(e) => {
                  setNewUser((prev) => {
                    return { ...prev, displayName: e.target.value };
                  });
                }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 4 }}>
            <FormControl>
              <FormLabel>What's your first name?</FormLabel>
              <Input
                variant="primary"
                type="text"
                placeholder="Your first name"
                onChange={(e) => {
                  setNewUser((prev) => {
                    return { ...prev, firstName: e.target.value };
                  });
                }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 12, md: 4 }}>
            <FormControl>
              <FormLabel>What's your last name?</FormLabel>
              <Input
                variant="primary"
                type="text"
                placeholder="Your last name"
                onChange={(e) => {
                  setNewUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={12} mt={3}>
            <FormControl>
              <FormLabel>Public Bio</FormLabel>
              <Textarea
                variant="primary"
                type="text"
                rows="10"
                onChange={(e) => {
                  setNewUser((prev) => {
                    return { ...prev, bio: e.target.value };
                  });
                }}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={12} textAlign="center">
            <Button
              variant="blue"
              mt="5"
              onClick={() => userUpload(newUser, imageURL)}
            >
              Submit
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default SetUpProfile;
