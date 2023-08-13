"use client";

import OpinionsControl from "./components/OpinionsControl";
import OpinionList from "./components/OpinionList";
import VoteHead from "./components/VoteHead";
import useVoteAndOpinions from "./hooks/useVoteAndOpinions";
import NewOpinionModal from "./components/NewOpinionModal";
import { Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import SingleVoteSkeleton from "./components/SingleVoteSkeleton";

export default function SingleVote({ params }) {
  const [
    voteData,
    setVoteData,
    opinionsData,
    isLoadingVote,
    isLoadingOpinions,
  ] = useVoteAndOpinions(params.voteId);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {voteData && (
        <NewOpinionModal
          voteData={voteData}
          voteId={params.voteId}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}

      {isLoadingVote ? (
        <SingleVoteSkeleton />
      ) : (
        <VoteHead
          voteData={voteData}
          setVoteData={setVoteData}
        />
      )}

      {/* VoteToolbar contains a sort by element and a button to publish a new opinion */}
      <OpinionsControl onOpen={onOpen} />
      {isLoadingOpinions ? (
        <Flex justifyContent="center" my={12}>
          <Spinner
            thickness="5px"
            speed="0.75s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        </Flex>
      ) : (
        Object.keys(opinionsData).length > 0 && (
          <OpinionList
            voteData={voteData}
            opinionsData={opinionsData}
          />
        )
      )}
    </>
  );
}
