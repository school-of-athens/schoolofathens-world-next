import { Button, Tooltip, Wrap, WrapItem } from "@chakra-ui/react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faStrikethrough,
  faCode,
  faBroom,
  faParagraph,
  faHeading,
  faListUl,
  faListOl,
  faQuoteLeft,
  faArrowsUpToLine,
  faArrowLeft,
  faRotateLeft,
  faRotateRight,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";

export default function MenuBar({ editor }: { editor: any }) {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  return (
    <Wrap spacing={0}>
      <WrapItem>
        <Tooltip label="bold">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faBold} />
          </Button>
        </Tooltip>
      </WrapItem>

      <WrapItem>
        <Tooltip label="italic">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faItalic} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="strike">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faStrikethrough} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="code">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faCode} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="clear marks">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
          >
            <FontAwesomeIcon icon={faBroom} />
          </Button>
        </Tooltip>
      </WrapItem>

      <WrapItem>
        <Tooltip label="paragraph">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faParagraph} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="heading 1">
          <Button
            variant="light"
            minW="unset"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <FontAwesomeIcon icon={faHeading} fontSize="1.1rem" />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="heading 2">
          <Button
            variant="light"
            minW="unset"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            <FontAwesomeIcon icon={faHeading} fontSize="0.9rem" />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="bullet list">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faListUl} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="ordered list">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faListOl} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="code block">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faFileCode} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="blockquote">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <FontAwesomeIcon icon={faQuoteLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="horizontal rule">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <FontAwesomeIcon icon={faArrowsUpToLine} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="hard break">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().setHardBreak().run()}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="undo">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <FontAwesomeIcon icon={faRotateLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="redo">
          <Button
            variant="light"
            minW="unset"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <FontAwesomeIcon icon={faRotateRight} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="image">
          <Button variant="light" minW="unset" onClick={addImage}>
            <FontAwesomeIcon icon={faImage} />
          </Button>
        </Tooltip>
      </WrapItem>
    </Wrap>
  );
}
