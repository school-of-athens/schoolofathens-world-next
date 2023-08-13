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
  Skeleton,
  Flex,
} from "@chakra-ui/react";

export default function SingleVoteSkeleton() {
  return (
    <Box
      bg="gray.100"
      pt={12}
      pb={4}
      borderBottom="2px solid"
      borderColor="gray.300"
    >
      <Box className="container">
        <Skeleton>
          <Heading textAlign="center" mt={0} mb={2}>
            Vote Title
          </Heading>
        </Skeleton>
        <Skeleton>
          <Text
            py={3}
            px={{ base: 3, md: 5 }}
            textAlign="center"
            ms="auto"
            me="auto"
            mb={4}
          >
            Vote Description
          </Text>
        </Skeleton>

        <Box
          height="2rem"
          backgroundColor="transparent"
          width="100%"
          position="relative"
          borderRadius="full"
          overflow="hidden"
        >
          <Flex
            width="50%"
            height="100%"
            bg="blue.300"
            position="absolute"
            left="0"
            paddingLeft={6}
            justifyContent="start"
            alignItems="center"
          ></Flex>

          <Flex
            width="50%"
            height="100%"
            bg="gray.200"
            position="absolute"
            right="0"
            paddingRight={6}
            justifyContent="end"
            alignItems="center"
          ></Flex>
        </Box>
        <Grid templateColumns="repeat(12, 1fr)" my={4}>
          <GridItem
            colSpan={{ base: 12, md: 6 }}
            borderRight="3px dashed"
            borderColor="gray.200"
            me="-1px"
          >
            <Accordion>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  justifyContent="space-between"
                  borderStartRadius="md"
                  _hover={{ bg: "gray.200" }}
                >
                  <Skeleton>
                    <Heading m={0} size={{ base: "md", lg: "lg" }}>
                      Heading 1
                    </Heading>
                  </Skeleton>
                  <AccordionIcon />
                </AccordionButton>
              </AccordionItem>
            </Accordion>
          </GridItem>

          <GridItem colSpan={{ base: 12, md: 6 }}>
            <Accordion>
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  justifyContent="space-between"
                  borderEndRadius="md"
                  _hover={{ bg: "gray.200" }}
                >
                  <AccordionIcon />
                  <Skeleton>
                    <Heading my={0} mx={4} size={{ base: "md", lg: "lg" }}>
                      Heading 2
                    </Heading>
                  </Skeleton>
                </AccordionButton>
              </AccordionItem>
            </Accordion>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
