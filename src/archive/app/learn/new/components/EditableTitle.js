import {
  Editable,
  EditablePreview,
  EditableTextarea,
  Heading,
  Tooltip,
} from "@chakra-ui/react";

// q: what is ternary operator?
// a: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

function EditableTitle({ article, setArticle }) {
  return (
    <Tooltip label="Click to edit" placement="top">
      <Editable
        value={article.title}
        _hover={{ bg: "gray.100" }}
        p={1}
        borderRadius="md"
        as={Heading}
        width="100%"
        display="flex"
        m={0}
      >
        <EditablePreview width="100%" />
        <EditableTextarea
          resize="none"
          overflowY="hidden"
          rows="1"
          onChange={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
            setArticle({ ...article, title: e.target.value || "Untitled" });
          }}
          _focusVisible={{ boxShadow: "none", bg: "gray.100" }}
        />
      </Editable>
    </Tooltip>
  );
}

export default EditableTitle;
