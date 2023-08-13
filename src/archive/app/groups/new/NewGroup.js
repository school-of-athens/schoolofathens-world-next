
import { NewGroupStepper, GroupInfo, GroupMembers, GroupCutomize, useNewGroup } from "../features/NewGroup";
import { Box, Grid, GridItem, useSteps } from "@chakra-ui/react";

function NewGroup() {

    const [newGroup, setNewGroup] = useNewGroup();

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: 3,
      });

    return (
        <Box className="container">
      <Grid minHeight="calc(100vh - 8rem)" templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={{ base: 12, md: 4, lg: 3 }}>
          <NewGroupStepper
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
            <GroupInfo setActiveStep={setActiveStep} newGroup={newGroup} setNewGroup={setNewGroup} />
          )}
          {activeStep === 1 && (
            <GroupCutomize setActiveStep={setActiveStep} newGroup={newGroup} setNewGroup={setNewGroup} />
          )}
          {activeStep === 2 && (
            <GroupMembers newGroup={newGroup} setNewGroup={setNewGroup} />
          )}
        </GridItem>
      </Grid>
    </Box>
    );

}

export default NewGroup;