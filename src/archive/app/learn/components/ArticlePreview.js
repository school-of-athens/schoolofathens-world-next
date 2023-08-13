import { Heading, Image, Text, Box, Button } from "@chakra-ui/react";

function ArticlePreview({ article, setExpanded }) {
  // show at most two elements
  // show until the first paragraph element

  const articleTruncated = [];
  if (article.body.length > 0) {
    articleTruncated.push(article.body[0]);
    if (
      article.body[0].type !== "p" &&
      article.body.find((item) => item.type === "p")
    ) {
      articleTruncated.push(article.body.find((item) => item.type === "p"));
    }
  }

  return (
    <>
      {articleTruncated.length === article.body.length ? (
        <Heading size="lg" mb={3}>
          {article.title}
        </Heading>
      ) : (
        <Heading size="lg" mb={3} noOfLines={3}>
          {article.title}
        </Heading>
      )}

      {articleTruncated.map((item, index) => {
        if (item.type === "p") {
          return (
            <Text
              key={index}
              mb={2}
              lineHeight="1.75"
              fontSize="1.05rem"
              fontFamily="Lato"
              noOfLines={5}
              position="relative"
              _after={
                articleTruncated.length !== article.body.length && {
                  content: '""',
                  position: "absolute",
                  zIndex: "1",
                  bottom: "-0.75rem",
                  left: "0",
                  pointerEvents: "none",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
                  width: "100%",
                  height: "4em",
                }
              }
            >
              {item.text}
            </Text>
          );
        } else if (item.type === "img") {
          return (
            <Image
              key={index}
              width="100%"
              objectFit="cover"
              src={item.src || URL.createObjectURL(item.file)}
              mb={2}
              borderRadius="lg"
            />
          );
        } else if (item.type === "h") {
          return (
            <Heading key={index} mb={2} mt={3} fontSize="xl" fontFamily="Lato">
              {item.text}
            </Heading>
          );
        }
      })}

      {articleTruncated.length !== article.body.length && (
        <Box textAlign="end">
          <Button
            variant="ghostGray"
            color="blue.700"
            onClick={() => setExpanded((prev) => !prev)}
          >
            Expand
          </Button>
        </Box>
      )}
    </>
  );
}

export default ArticlePreview;
