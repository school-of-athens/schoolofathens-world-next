import EditableParagraph from "./EditableParagraph";
import EditableImage from "./EditableImage";
import EditableTitle from "./EditableTitle";
import { Box } from "@chakra-ui/react";
import EditableSubtitle from "./EditableSubtitle";

function Editor({ article, setArticle }) {

  return (
    <Box p={5} mb={12}>
      <EditableTitle article={article} setArticle={setArticle} />
      {article.body.map((item, index) => {
        if (item.type === "p") {
          return (
            <EditableParagraph
              key={index}
              index={index}
              article={article}
              setArticle={setArticle}
            />
          );
        } else if (item.type === "img") {
          return (
            <EditableImage
              key={index}
              index={index}
              article={article}
              setArticle={setArticle}
            />
          );
        }
        else if (item.type === "h") {
          return (
            <EditableSubtitle
              key={index}
              index={index}
              article={article}
              setArticle={setArticle}
            />
          );
        }
      })}
    </Box>
  );
}

export default Editor;
