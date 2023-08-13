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
  useBreakpointValue,
} from "@chakra-ui/react";

function NewVoteStepper({ activeStep, setActiveStep }) {
  // const orientation = useBreakpointValue(
  //   {
  //     base: "horizontal",
  //     md: "vertical",
  //   },
  //   { ssr: false }
  // );

  return (
    <Stepper
      size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
      index={activeStep}
      // orientation={orientation}
      orientation="vertical"
      gap={10}
      my={{ base: 6, sm: 12 }}
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
          <StepTitle>Type</StepTitle>
          <StepDescription>Select vote type</StepDescription>
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
          <StepTitle>Basic Info</StepTitle>
          <StepDescription>Fill out vote info</StepDescription>
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
          <StepTitle>Options</StepTitle>
          <StepDescription>Fill out vote options</StepDescription>
        </Box>
      </Step>
      <Step key={3} onClick={() => setActiveStep(3)}>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>

        <Box flexShrink="0">
          <StepTitle>Restrictions</StepTitle>
          <StepDescription>Qualifications & due date</StepDescription>
        </Box>
      </Step>
    </Stepper>
  );
}

export default NewVoteStepper;
