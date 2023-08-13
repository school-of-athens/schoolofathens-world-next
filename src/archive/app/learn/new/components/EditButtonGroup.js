import {
  faChevronDown,
  faChevronUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonGroup, IconButton } from "@chakra-ui/react";

function ActionButtonGroup({ active, index, article, setArticle }) {
  return (
    <ButtonGroup textAlign="end" display={active ? "static" : "none"} mt={2}>
      <IconButton
        variant="light"
        px={3}
        minW="0"
        icon={<FontAwesomeIcon icon={faChevronUp} />}
        onClick={() => {
          if (index > 0) {
            setArticle((prev) => {
              const newArticle = { ...prev };
              newArticle.body.splice(index - 1, 0, newArticle.body[index]);
              newArticle.body.splice(index + 1, 1);
              return newArticle;
            });
          }
        }}
      />
      <IconButton
        variant="light"
        px={3}
        minW="0"
        icon={<FontAwesomeIcon icon={faChevronDown} />}
        onClick={() => {
          if (index < article.body.length - 1) {
            setArticle((prev) => {
              const newArticle = { ...prev };
              newArticle.body.splice(index + 2, 0, newArticle.body[index]);
              newArticle.body.splice(index, 1);
              return newArticle;
            });
          }
        }}
      />
      <IconButton
        colorScheme="red"
        icon={<FontAwesomeIcon icon={faTrashCan} />}
        onClick={() => {
          setArticle((prev) => {
            const newArticle = { ...prev };
            newArticle.body.splice(index, 1);
            return newArticle;
          });
        }}
      />
    </ButtonGroup>
  );
}

export default ActionButtonGroup;
