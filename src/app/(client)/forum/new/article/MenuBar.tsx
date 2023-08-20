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
            p={0}
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaBold} />
          </Button>
        </Tooltip>
        <Tooltip label="italic">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
            borderStartRadius="0"
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaItalic} />
          </Button>
        </Tooltip>
        <Tooltip label="strike">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={!editor.can().chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
            borderStartRadius="0"
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaStrikethrough} />
          </Button>
        </Tooltip>
        <Tooltip label="code">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={!editor.can().chain().focus().toggleCode().run()}
            className={editor.isActive("code") ? "is-active" : ""}
            borderStartRadius="0"
          >
            <Icon boxSize={4} as={FaCode} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="clear marks">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
          >
            <Icon boxSize={4} as={FaBroom} />
          </Button>
        </Tooltip>
      </WrapItem>

      <WrapItem>
        <Tooltip label="paragraph">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={editor.isActive("paragraph") ? "is-active" : ""}
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaParagraph} />
          </Button>
        </Tooltip>
        <Tooltip label="heading 1">
          <Button
            variant="light"
            p={0}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
            borderStartRadius="0"
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={5} as={FaHeading} />
          </Button>
        </Tooltip>
        <Tooltip label="heading 2">
          <Button
            variant="light"
            p={0}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
            borderStartRadius="0"
          >
            <Icon boxSize={4} as={FaHeading} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="image">
          <Button variant="light" p={0} onClick={addImage}>
            <Icon boxSize={4} as={FaImage} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="bullet list">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive("bulletList") ? "is-active" : ""}
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaListUl} />
          </Button>
        </Tooltip>
        <Tooltip label="ordered list">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive("orderedList") ? "is-active" : ""}
            borderStartRadius="0"
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaListOl} />
          </Button>
        </Tooltip>
        <Tooltip label="code block">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={editor.isActive("codeBlock") ? "is-active" : ""}
            borderStartRadius="0"
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaFileCode} />
          </Button>
        </Tooltip>
        <Tooltip label="blockquote">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive("blockquote") ? "is-active" : ""}
            borderStartRadius="0"
          >
            <Icon boxSize={4} as={FaQuoteLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="horizontal rule">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaArrowsUpToLine} />
          </Button>
        </Tooltip>
        <Tooltip label="hard break">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().setHardBreak().run()}
            borderStartRadius="0"
          >
            <Icon boxSize={4} as={FaArrowLeft} />
          </Button>
        </Tooltip>
      </WrapItem>
      <WrapItem>
        <Tooltip label="undo">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
            borderEndRadius="0"
            borderEnd="none"
          >
            <Icon boxSize={4} as={FaRotateLeft} />
          </Button>
        </Tooltip>
        <Tooltip label="redo">
          <Button
            variant="light"
            p={0}
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
            borderStartRadius="0"
          >
            <Icon boxSize={4} as={FaRotateRight} />
          </Button>
        </Tooltip>
      </WrapItem>
      
    </Wrap>
  );
}
