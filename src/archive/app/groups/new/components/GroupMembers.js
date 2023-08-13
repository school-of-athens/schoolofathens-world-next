import {
  Box,
  Heading,
  Select,
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormLabel,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from "@chakra-ui/react";

function GroupMembers({}) {
  return (
    <>
      <Heading mb={8}>Add members and roles</Heading>
      <Alert status="warning" borderRadius={8}>
        <AlertIcon />
        This is feature is not supported right now.
      </Alert>
      <FormControl mt={6}>
        <FormLabel>Add members to your group from your following / followers</FormLabel>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} variant="light">
          Add
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup title="Following" type="checkbox">
              <MenuItemOption value="asc">Person 1</MenuItemOption>
              <MenuItemOption value="desc">Person 2</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Followers" type="checkbox">
              <MenuItemOption value="email">Person 3</MenuItemOption>
              <MenuItemOption value="phone">Person 4</MenuItemOption>
              <MenuItemOption value="country">Person 5</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <FormLabel mt={2}>Add roles to your group</FormLabel>
      </FormControl>

      <Box textAlign="center" mt={12}>
        <Button
          variant="blue"
          // onClick={submit}
        >
          Propose
        </Button>
      </Box>
    </>
  );
}

export default GroupMembers;
