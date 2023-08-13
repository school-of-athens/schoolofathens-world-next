import {
  Heading,
  Text,
  Editable,
  EditablePreview,
  EditableTextarea,
  Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import EditBox from "./EditBox";
import EditButtonGroup from "./EditButtonGroup";

function EditableSubtitle({ article, setArticle, index }) {
  const [active, setActive] = useState(false);

  return (
    <EditBox active={active} setActive={setActive}>
      <Tooltip label="Click to edit" placement="top">
        <Editable
          value={article.body[index].text}
          as={Heading}
          key={index}
          display="flex"
          m={0}
          fontFamily="Lato"
        >
          <EditablePreview fontSize="xl" mb={0} />
          <EditableTextarea
            resize="none"
            fontSize="xl"
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

export default EditableSubtitle;
