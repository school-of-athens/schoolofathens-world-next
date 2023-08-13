import {
  Tooltip,
  Editable,
  EditablePreview,
  EditableTextarea,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import EditButtonGroup from "./EditButtonGroup";
import EditBox from "./EditBox";

function EditableParagraph({ index, article, setArticle }) {
  const [active, setActive] = useState(false);

  return (
    <EditBox active={active} setActive={setActive}>
      <Tooltip label="Click to edit" placement="top">
        <Editable display="flex" m={0} value={article.body[index].text}>
          <EditablePreview as={Text} fontFamily="Lato" fontSize="md" mb={0} />
          <EditableTextarea
            resize="none"
            overflowY="hidden"
            rows="1"
            onChange={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = e.target.scrollHeight + "px";
              setArticle((prev) => {
                const newArticle = { ...prev };
                if (!e.target.value) {
                  newArticle.body.splice(index, 1);
                } else {
                  newArticle.body[index].text = e.target.value;
                }
                return newArticle;
              });
            }}
            onBlur={() => {
              setActive(false);
            }}
            _focusVisible={{ boxShadow: "none" }}
          />
        </Editable>
      </Tooltip>
      <EditButtonGroup
        active={active}
        index={index}
        article={article}
        setArticle={setArticle}
      />
    </EditBox>
  );
}

export default EditableParagraph;
