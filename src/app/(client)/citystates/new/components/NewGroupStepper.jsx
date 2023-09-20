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

function NewGroupStepper({ activeStep, setActiveStep }) {
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
      mx={2}
    >

      <Step key={0} onClick={() => setActiveStep(0)}>
        <StepIndicator border="2px">
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>

        <Box flexShrink="0">
          <StepTitle>Basic Info</StepTitle>
          <StepDescription>Fill out group info</StepDescription>
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
          <StepTitle>Customization</StepTitle>
          <StepDescription>Upload images</StepDescription>
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
          <StepTitle>Members & Roles</StepTitle>
          <StepDescription>Add & edit members</StepDescription>
        </Box>
      </Step>

    </Stepper>
  );
}

export default NewGroupStepper;
