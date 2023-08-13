"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import ArticleCard from "../components/ArticleCard";
// import article from "../data/sampleArticle";
import {
  faHeading,
  faImage,
  faParagraph,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useNewArticle from "./hooks/useNewArticle";
import Editor from "./components/Editor";
import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import useSubmitArticle from "./hooks/useSubmitArticle";

const Compose = () => {
  const [article, setArticle] = useNewArticle();
  const [showPreview, setShowPreview] = useState(true);
  const [newImageURL, setNewImageURL] = useState("");
  const { width } = useWindowDimensions();
  const submitArticle = useSubmitArticle({ article });

  const height = useBreakpointValue({
    base: "initial",
    md: "calc(100vh - 4rem)",
  });

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem
        colSpan={{ base: 12, md: 5, lg: 6 }}
        height={height}
        overflowY="auto"
        bg="gray.50"
      >
        <Flex
          bg="blue.200"
          width="100%"
          p={2}
          position="sticky"
          top="0"
          zIndex={5}
          px={4}
          justifyContent="space-between"
        >
          <Heading mb={0}>Preview</Heading>
          {width < 768 && (
            <Button
              variant="light"
              minW="0"
              px={3}
              onClick={() => setShowPreview((prev) => !prev)}
            >
              {showPreview ? "Hide" : "Show"}
            </Button>
          )}
        </Flex>
        <Box
          py={12}
          px={8}
          display={showPreview || width >= 768 ? "static" : "none"}
        >
          <ArticleCard article={article} mode="preview" />
        </Box>
      </GridItem>
      <GridItem
        colSpan={{ base: 12, md: 7, lg: 6 }}
        height={height}
        borderLeft="2px solid"
        borderLeftColor="gray.300"
        overflowY="auto"
      >
        <Flex
          bg="gray.200"
          width="100%"
          p={2}
          position="sticky"
          top="0"
          zIndex={5}
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          px={4}
        >
          <Heading mb={0} me={2}>
            Editor
          </Heading>
          <ButtonGroup spacing={2} pt={{ base: 1, md: 0 }}>
            <Tooltip label="New paragraph" placement="top">
              <IconButton
                variant="light"
                minW="0"
                px={3}
                icon={<FontAwesomeIcon icon={faParagraph} />}
                onClick={() => {
                  setArticle((prev) => {
                    return {
                      ...prev,
                      body: [
                        ...prev.body,
                        {
                          type: "p",
                          text: "Paragraph",
                        },
                      ],
                    };
                  });
                }}
              />
            </Tooltip>
            <Tooltip label="New subtitle" placement="top">
              <IconButton
                variant="light"
                minW="0"
                px={3}
                icon={<FontAwesomeIcon icon={faHeading} />}
                onClick={() => {
                  setArticle((prev) => {
                    return {
                      ...prev,
                      body: [
                        ...prev.body,
                        {
                          type: "h",
                          text: "Heading",
                        },
                      ],
                    };
                  });
                }}
              />
            </Tooltip>
            <Popover border="2px solid green">
              <Menu>
                <Tooltip label="New image" placement="top">
                  <MenuButton
                    as={IconButton}
                    variant="light"
                    minW="0"
                    px={3}
                    aria-label="Search database"
                    icon={<FontAwesomeIcon icon={faImage} />}
                  />
                </Tooltip>

                <MenuList>
                  <MenuItem>
                    <label htmlFor="file-upload">Upload an image</label>
                    <input
                      type="file"
                      id="file-upload"
                      hidden
                      accept="image/*"
                      multiple
                      onChange={(e) => {
                        setArticle((prev) => {
                          const newArticle = { ...prev };
                          for (const file of e.target.files) {
                            newArticle.body.push({
                              type: "img",
                              file: file,
                            });
                          }
                          return newArticle;
                        });
                      }}
                    />
                  </MenuItem>

                  <PopoverTrigger>
                    <MenuItem>Paste a source url</MenuItem>
                  </PopoverTrigger>
                </MenuList>
              </Menu>
              <PopoverContent border="2px solid" borderColor="gray.300">
                <PopoverCloseButton />
                <PopoverHeader
                  borderBottom="2px solid"
                  borderBottomColor="gray.300"
                >
                  Paste the URL of your image here:
                </PopoverHeader>
                <PopoverBody>
                  <Input
                    variant="primary"
                    value={newImageURL}
                    onChange={(e) => setNewImageURL(e.target.value)}
                  />
                  <Box textAlign="end" mt={2}>
                    <Button
                      variant="light"
                      onClick={() => {
                        setArticle((prev) => {
                          return {
                            ...prev,
                            body: [
                              ...prev.body,
                              {
                                type: "img",
                                src: newImageURL,
                              },
                            ],
                          };
                        });
                        setNewImageURL("");
                      }}
                    >
                      Confirm
                    </Button>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Button variant="blue" onClick={submitArticle}>
              Submit
            </Button>
          </ButtonGroup>
        </Flex>
        <Box minH="calc(100vh - 4rem)">
          {article.userId && (
            <Editor article={article} setArticle={setArticle} />
          )}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Compose;
