import { useSteps, Stepper, Step, StepIndicator, StepStatus, StepTitle, StepDescription, StepSeparator, Box, StepIcon, StepNumber } from "@chakra-ui/react"

const steps = [
    { title: 'Test', description: 'Wypełniasz krótki test' },
    { title: 'Wynik', description: 'Polecany kierunek nauczania' },
    { title: 'Propozycje', description: 'Proponujemy Ci placówki nauczania'}
  ]
  
  export const MainPageStepper = () => {
    const { activeStep } = useSteps({
      index: -1,
      count: steps.length,
    })
  
    return (
        <Stepper index={0} colorScheme="red">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  