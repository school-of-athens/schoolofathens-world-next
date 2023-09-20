import {
  Editable,
  EditablePreview,
  EditableTextarea,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";

// q: what is ternary operator?
// a: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

function EditableTitle() {

  const [title, setTitle] = useState("");

  return (
    <Tooltip label="Click to edit" placement="top">
      <Editable
        value={title}
        _hover={{ bg: "gray.100" }}
        borderRadius="md"
        as={Heading}
        width="100%"
        display="flex"
        placeholder="Title"
        m={0}
        fontSize="5xl"
      >
        <EditablePreview width="100%" />
        <EditableTextarea
          resize="none"
          overflowY="hidden"
          rows={1}
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
            setTitle(e.target.value);
          }}
          _focusVisible={{ boxShadow: "none", bg: "gray.100" }}
        />
      </Editable>
    </Tooltip>
  );
}

export default EditableTitle;
