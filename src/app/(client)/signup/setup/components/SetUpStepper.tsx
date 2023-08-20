import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepStatus,
    StepTitle,
    Stepper,
    Box,
  } from "@chakra-ui/react";
  
  export default function SetUpStepper({ activeStep, setActiveStep }: any) {
    return (
      <Stepper
        size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
        index={activeStep}
        orientation="vertical"
        gap={10}
        mx={2}
      >
        <Step key={0} onClick={() => setActiveStep(0)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
  
          <Box flexShrink="0">
            <StepTitle>Basic Info</StepTitle>
            <StepDescription>Fill out your info</StepDescription>
          </Box>
        </Step>
        <Step key={1} onClick={() => setActiveStep(1)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
  
          <Box flexShrink="0">
            <StepTitle>Statistics</StepTitle>
            <StepDescription>Demographic data</StepDescription>
          </Box>
        </Step>
  
        <Step key={2} onClick={() => setActiveStep(2)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
  
          <Box flexShrink="0">
            <StepTitle>Bio</StepTitle>
            <StepDescription>Let others know you</StepDescription>
          </Box>
        </Step>
      </Stepper>
    );
  }