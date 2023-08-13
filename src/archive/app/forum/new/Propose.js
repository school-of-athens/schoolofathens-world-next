import {
  NewVoteStepper,
  VoteType,
  PollInfo,
  PollOptions,
  PollRestrictions,
  useNewVote,
  useSubmit,
} from "../features/NewVote";
import { Box, Grid, GridItem, useSteps } from "@chakra-ui/react";

const Propose = () => {
  const [newVote, setNewVote] = useNewVote();

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 4,
  });

  const submit = useSubmit(setActiveStep, newVote);

  return (
    <Box className="container">
      <Grid minHeight="calc(100vh - 8rem)" templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={{ base: 12, md: 4, lg: 3 }}>
          <NewVoteStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </GridItem>
        <GridItem
          colSpan={{ base: 12, md: 8, lg: 9 }}
          px={{ base: 6, sm: 12, md: 14, lg: 16 }}
          py={{ base: 6, sm: 12 }}
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
              submit={submit}
            />
          )}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Propose;
