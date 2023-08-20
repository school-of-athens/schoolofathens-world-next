"use client";

import NewVoteStepper from "./components/NewVoteStepper";
import VoteType from "./components/VoteType";
import PollInfo from "./components/PollInfo";
import PollOptions from "./components/PollOptions";
import PollRestrictions from "./components/PollRestrictions";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  useSteps,
} from "@chakra-ui/react";
import { useState } from "react";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";

const Propose = () => {
  const [newVote, setNewVote] = useState({
    type: "Poll",
    title: "",
    // topics: [],
    description: "",
    options: [
      {
        title: "",
        description: "",
        votes: 0,
      },
      {
        title: "",
        description: "",
        votes: 0,
      },
    ],
    // viewRestriction: [],
    // voteRestriction: [],
    // due: null
  });

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 4,
  });

  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Set Up Profile
        </Text>
        <AuthButtonGroup />
      </HeadBar>
      <Container maxW={{ base: "container.md", lg: "container.lg" }} py={12}>
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={{ base: 12, md: 4, lg: 3 }}>
            <NewVoteStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </GridItem>
          <GridItem
            colSpan={{ base: 12, md: 8, lg: 9 }}
            px={{ base: 6, sm: 12, md: 14, lg: 16 }}
          >
            {activeStep === 0 && (
              <VoteType
                setActiveStep={setActiveStep}
                newVote={newVote}
                setNewVote={setNewVote}
              />
            )}
            {activeStep === 1 && (
              <PollInfo
                setActiveStep={setActiveStep}
                newVote={newVote}
                setNewVote={setNewVote}
              />
            )}
            {activeStep === 2 && (
              <PollOptions
                setActiveStep={setActiveStep}
                newVote={newVote}
                setNewVote={setNewVote}
              />
            )}
            {activeStep === 3 && (
              <PollRestrictions
                setActiveStep={setActiveStep}
                newVote={newVote}
                setNewVote={setNewVote}
              />
            )}
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
};

export default Propose;
