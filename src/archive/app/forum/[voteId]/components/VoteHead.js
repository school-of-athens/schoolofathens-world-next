import {
  Heading,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import VoteBarBinary from "./VoteBarBinary";
import getSortedObjectKeys from "@/utils/getSortedObjectKeys";

function VoteHead({ voteData, setVoteData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = getSortedObjectKeys(voteData.options);

  return (
    <Box
      bg="gray.100"
      pt={12}
      pb={4}
      borderBottom="2px solid"
      borderColor="gray.300"
    >
      <Box className="container">
        <Heading textAlign="center" mt={0} mb={2}>
          {voteData.title}
        </Heading>

        <Text
          py={3}
          px={{ base: 3, md: 5 }}
          textAlign="center"
          ms="auto"
          me="auto"
          mb={4}
        >
          {voteData.description}
        </Text>

        <VoteBarBinary
          voteData={voteData}
          options={options}
          setVoteData={setVoteData}
        />

        <Grid templateColumns="repeat(12, 1fr)" my={4}>
          <GridItem
            colSpan={{ base: 12, md: 6 }}
            borderRight="3px dashed"
            borderColor="gray.200"
            me="-1px"
          >
            <Accordion
              onClick={isOpen ? onClose : onOpen}
              index={isOpen ? [0] : []}
            >
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  justifyContent="space-between"
                  borderStartRadius="md"
                  _hover={{ bg: "gray.200" }}
                >
                  <Heading m={0} size={{ base: "md", lg: "lg" }}>
                    {options[0]}
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={4}>
                  <Text size="md" m={0}>
                    {voteData.options[options[0]].description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Accordion
              onClick={isOpen ? onClose : onOpen}
              index={isOpen ? [0] : []}
            >
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  justifyContent="space-between"
                  borderEndRadius="md"
                  _hover={{ bg: "gray.200" }}
                >
                  <AccordionIcon />
                  <Heading my={0} mx={4} size={{ base: "md", lg: "lg" }}>
                    {options[1]}
                  </Heading>
                </AccordionButton>
                <AccordionPanel py={4}>
                  <Text size="md" m={0}>
                    {voteData.options[options[1]].description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

export default VoteHead;
