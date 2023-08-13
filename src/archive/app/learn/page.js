"use client";

import ContainerGrid from "@/layouts/ContainerGrid";
import LearnTitle from "./components/LearnTitle";
import InsightList from "./components/InsightList";
import QuerySelector from "./components/QuerySelector";
import useArticleList from "./hooks/useArticleList";
import { Box } from "@chakra-ui/react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

export default function Learn() {
  const { articles, isLoading } = useArticleList();
  const { width } = useWindowDimensions();

  return (
    <>
      <LearnTitle />
      <Box bg="gray.50">
        <ContainerGrid>
          {width >= 768 ? (
            <>
              <InsightList articles={articles} />
              <QuerySelector />
            </>
          ) : (
            <>
              <QuerySelector />
              <InsightList articles={articles} />
            </>
          )}
        </ContainerGrid>
      </Box>
    </>
  );
}
