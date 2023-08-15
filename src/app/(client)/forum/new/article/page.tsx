"use client";

import {
  Flex,
  Text,
  Button,
  Container,
  ButtonGroup,
  Link,
  Box,
  Code,
  Heading,
  Input,
} from "@chakra-ui/react";
import NextLink from "next/link";
import HeadBar from "@/layouts/HeadBar";
import { EditorContent, generateHTML, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import MenuBar from "./MenuBar";
import Image from "@tiptap/extension-image";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Typography from "@tiptap/extension-typography";
import CharacterCount from "@tiptap/extension-character-count";

export default function NewArticle() {
  const [content, setContent] = useState<any>(null);
  // if (content) {
  //   console.log(generateHTML(content, [StarterKit, Image]));
  // }
  console.log(content);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2],
        },
      }),
      Image,
      CharacterCount,
      Typography,
    ],
    content: `
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
    display: none;
  }</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,
    onUpdate({ editor }) {
      setContent(editor.getJSON());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          New Article
        </Text>
        <Flex alignItems="center">
          {/* <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button> */}
          <Text
            border="2px solid"
            px={2}
            borderRadius="md"
            borderColor="gray.300"
            me={4}
          >
            {" "}
            Words count: {editor.storage.characterCount.words()}
          </Text>
          <Button variant="blueWithShadow">Publish</Button>
        </Flex>
      </HeadBar>
      <Box bg="blue.200" w="full" h="10rem"></Box>
        <Input placeholder="Title" size="lg" />
      <Box
        bg="white"
        borderBottom="2px solid"
        borderBottomColor="gray.300"
        position="sticky"
        top="4rem"
        zIndex={1}
      >
        <Container maxW={{ base: "container.md", lg: "container.lg" }} py={3}>
          <MenuBar editor={editor} />
        </Container>
      </Box>
      <Container
        maxW={{ base: "container.md", lg: "container.lg" }}
        h={{ base: "auto", md: "calc(100vh - 4rem)" }}
      >
        <Prose>
          <EditorContent editor={editor} />
        </Prose>
        {/* {content && (
          <Prose
            dangerouslySetInnerHTML={{
              __html: generateHTML(content, [StarterKit, Image]),
            }}
          >
          </Prose>
        )} */}
      </Container>
    </Flex>
  );
}
