import { Button, Tooltip, Wrap, WrapItem, Icon } from "@chakra-ui/react";
import { useCallback } from "react";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaCode,
  FaBroom,
  FaParagraph,
  FaHeading,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaArrowsUpToLine,
  FaArrowLeft,
  FaRotateLeft,
  FaRotateRight,
  FaImage,
  FaFileCode,
} from "react-icons/fa6";

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
    <Wrap spacing={2}>
      <WrapItem>
        <Tooltip label="bold">
          <Button
            variant="light"
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <Icon as={FaBold} />
          </Button>
        </Tooltip>
      </WrapItem>

      <WrapItem>
        <Tooltip label="italic">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <Icon as={FaItalic} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="strike">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <Icon as={FaStrikethrough} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="code">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
          >
            <Icon as={FaCode} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="clear marks">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().unsetAllMarks().run()}
          >
            <Icon as={FaBroom} />
          </Button>
        </Tooltip>
      </WrapItem>

      <WrapItem>
        <Tooltip label="paragraph">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
          >
            <Icon as={FaParagraph} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="heading 1">
          <Button
            variant="light"

            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            <Icon as={FaHeading} fontSize="1.1rem" />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="heading 2">
          <Button
            variant="light"

            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            <Icon as={FaHeading} fontSize="0.9rem" />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="bullet list">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
          >
            <Icon as={FaListUl} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="ordered list">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
          >
            <Icon as={FaListOl} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="code block">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
          >
            <Icon as={FaFileCode} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="blockquote">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
          >
            <Icon as={FaQuoteLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="horizontal rule">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <Icon as={FaArrowsUpToLine} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="hard break">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().setHardBreak().run()}
          >
            <Icon as={FaArrowLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="undo">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <Icon as={FaRotateLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="redo">
          <Button
            variant="light"

            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <Icon as={FaRotateRight} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="image">
          <Button variant="light" onClick={addImage}>
            <Icon as={FaImage} />
          </Button>
        </Tooltip>
      </WrapItem>
    </Wrap>
  );
}
