import { useState } from "react";
import { Tooltip, Image } from "@chakra-ui/react";
import EditButtonGroup from "./EditButtonGroup";
import EditBox from "./EditBox";

function EditableImage({ index, article, setArticle }) {
  const [active, setActive] = useState(false);

  return (
    <EditBox active={active} setActive={setActive}>
      <Tooltip label="Click to edit" placement="top">
        <Image
          width="100%"
          objectFit="cover"
          src={
            article.body[index].src ||
            URL.createObjectURL(article.body[index].file)
          }
          mb={4}
          borderRadius="lg"
        />
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

export default EditableImage;
