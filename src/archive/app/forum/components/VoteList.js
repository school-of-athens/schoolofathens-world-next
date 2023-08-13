import VoteBinary from "./VoteBinary";
import VoteBinarySkeleton from "./VoteBinarySkeleton";
import VoteMultiple from "./VoteMultiple";
import { GridItem, VStack } from "@chakra-ui/react";

export default function ({ voteList, isLoading }) {
  return (
    <GridItem colSpan={8} my={8} ms={16}>
      <VStack spacing={6}>
        {isLoading && (
          <>
            <VoteBinarySkeleton />
            <VoteBinarySkeleton />
            <VoteBinarySkeleton />
            <VoteBinarySkeleton />
            <VoteBinarySkeleton />
            <VoteBinarySkeleton />
          </>
        )}

        {voteList.map((voteData) => {
          return Object.keys(voteData.options).length > 2 ? (
            <VoteMultiple voteData={voteData} key={voteData.id} />
          ) : (
            <VoteBinary voteData={voteData} key={voteData.id} />
          );
        })}
      </VStack>
    </GridItem>
  );
}
