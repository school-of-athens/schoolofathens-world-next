import ArticleCard from "@/components/ArticleCard";
import OpinionCard from "@/components/OpinionCardWithBallot";
import DiscussionCard from "@/components/DiscussionCard";
import { VStack, GridItem, Card, Heading, Flex } from "@chakra-ui/react";
import {
  exampleArticlePost,
  exampleOpinionPost,
  exampleDiscussionPost,
} from "@/data/examples";
import { useState } from "react";
import getRandomInt from "@/utils/randInt";
import BallotCard from "@/components/BallotCard";

export default function PostsList() {
  const [width, setWidth] = useState(30);

  const handleClick = () => {
    setWidth(getRandomInt(10, 90));
  };

  return (
    // <VStack spacing={4}>
    // </VStack>
    <GridItem
      colSpan={{ base: 12, md: 7 }}
      pt={{ base: 0, md: 12 }}
      pb={12}
      order={{ base: 1, md: 0 }}
      overflow={{ base: "visible", md: "overlay" }}
      pe={4}
      css={{
        "&::-webkit-scrollbar": {
          width: "3px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
          marginTop: "3rem",
          marginBottom: "3rem",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "var(--chakra-colors-gray-200)",
        },
      }}
    >
      <VStack spacing={8}>
        <ArticleCard article={exampleArticlePost} />
        <OpinionCard opinion={exampleOpinionPost} />
        <DiscussionCard discussion={exampleDiscussionPost} />
        <BallotCard />
      </VStack>
    </GridItem>
  );
}
