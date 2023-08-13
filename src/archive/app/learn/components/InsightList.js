import { GridItem } from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
// import article from "../../../data/sampleArticle";

function InsightList({ articles }) {

  return (
    <GridItem colSpan={{ base: 12, md: 8 }} pt={12} px={0} minH="50vh">
      {articles.map((article, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </GridItem>
  );
}

export default InsightList;
