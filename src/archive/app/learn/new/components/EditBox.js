import { Box } from "@chakra-ui/react";

function EditBox({ children, active, setActive }) {
  return (
    <Box
      onMouseEnter={() => setActive(true)}
      onMouseLeave={(e) => {
        if (e.target !== document.activeElement.parentElement.parentElement) {
          setActive(false);
        }
      }}
      p={2}
      borderRadius="md"
      bg={active ? "gray.100" : "transparent"}
    >
      {children}
    </Box>
  );
}

export default EditBox;
