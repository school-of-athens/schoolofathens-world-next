"use client";

import {
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  useSteps,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import AuthButtonGroup from "@/components/AuthButtonGroup";
import SetUpStepper from "./components/SetUpStepper";
import BasicInfo from "./components/BasicInfo";
import Statistics from "./components/Statistics";
import Bio from "./components/Bio";
import supabase from "@/services/supabase";

export default function SetUp() {
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
        {!supabase.auth && <AuthButtonGroup /> }
        
      </HeadBar>
      <Container maxW={{ base: "container.lg", lg: "container.xl" }} py={12}>
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={{ base: 12, md: 4, lg: 3 }}>
            <SetUpStepper
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </GridItem>
          <GridItem
            colSpan={{ base: 12, md: 8, lg: 9 }}
            px={{ base: 6, sm: 12, md: 14, lg: 16 }}
          >
            {activeStep === 0 && <BasicInfo setActiveStep={setActiveStep} />}
            {activeStep === 1 && <Statistics setActiveStep={setActiveStep} />}
            {activeStep === 2 && <Bio setActiveStep={setActiveStep} />}
          </GridItem>
        </Grid>
      </Container>
    </Flex>
  );
}
