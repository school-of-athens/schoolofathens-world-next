"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  useSteps,
} from "@chakra-ui/react";
import NewGroupStepper from "./components/NewGroupStepper";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";
import GroupInfo from "./components/GroupInfo";
import GroupCutomize from "./components/GroupCustomize";
import GroupMembers from "./components/GroupMembers";

function NewGroup() {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
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
            <NewGroupStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </GridItem>
          <GridItem
            colSpan={{ base: 12, md: 8, lg: 9 }}
            px={{ base: 6, sm: 12, md: 14, lg: 16 }}
          >
            {activeStep === 0 && <GroupInfo setActiveStep={setActiveStep} />}
            {activeStep === 1 && (
              <GroupCutomize setActiveStep={setActiveStep} />
            )}
            {activeStep === 2 && <GroupMembers />}
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
}

export default NewGroup;
