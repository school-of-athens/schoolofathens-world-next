"use client";

import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  SimpleGrid,
  Select,
  VStack,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import OpinionCard from "@/components/OpinionCard";
import { exampleOpinionPost } from "@/data/examples";
import AuthButtonGroup from "@/components/AuthButtonGroup";

export default function BallotHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Ballot
        </Text>
        <AuthButtonGroup />

      </HeadBar>
      <Box
        bg="gray.50"
        pt={12}
        pb={8}
        borderBottom="2px solid"
        borderColor="gray.300"
      >
        <Container maxW="container.lg">
          <Heading size="md" textAlign="center" mb={0}>
            VoteTitle
          </Heading>

          <Text mt={4} mb={6} mx={12} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          {/* VoteBar */}
          <Box
            mt={2}
            height="2rem"
            backgroundColor="transparent"
            width="100%"
            position="relative"
            borderRadius="full"
            overflow="hidden"
          >
            <Flex
              width="30%"
              height="100%"
              bg="red.200"
              position="absolute"
              left="0"
              paddingLeft={6}
              justifyContent="start"
              alignItems="center"
            >
              <Text m={0} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                30%
              </Text>
            </Flex>

            <Flex
              width="70%"
              height="100%"
              bg="blue.200"
              position="absolute"
              right="0"
              paddingRight={6}
              justifyContent="end"
              alignItems="center"
            >
              <Text m={0} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                70%
              </Text>
            </Flex>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} mt={4}>
            <Accordion
              onClick={isOpen ? onClose : onOpen}
              index={isOpen ? [0] : []}
            >
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  justifyContent="space-between"
                  borderStartRadius="xl"
                  _hover={{ bg: "gray.200" }}
                >
                  <Heading m={0} size={{ base: "xs", lg: "sm" }}>
                    Option 1
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={4}>
                  <Text size="md" m={0}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion
              onClick={isOpen ? onClose : onOpen}
              index={isOpen ? [0] : []}
            >
              <AccordionItem border="none">
                <AccordionButton
                  display="flex"
                  justifyContent="space-between"
                  borderEndRadius="xl"
                  _hover={{ bg: "gray.200" }}
                >
                  <AccordionIcon />
                  <Heading my={0} mx={4} size={{ base: "xs", lg: "sm" }}>
                    options 2
                  </Heading>
                </AccordionButton>
                <AccordionPanel py={4}>
                  <Text size="md" m={0}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        px={8}
        py={3}
        bg="white"
        borderBottom="2px solid"
        borderBottomColor="gray.300"
        position="sticky"
        top="4rem"
        zIndex={1}
      >
        <Box display="flex" alignItems="center">
          <Heading size="2xs" width="100%" marginBottom={0}>
            Sort by
          </Heading>
          <Select variant="primary" defaultValue="NEWEST" disabled>
            <option value="NEWEST">Newest</option>
            <option value="VOTES">Most Upvotes</option>
            <option value="OPINIONS">Oldest</option>
          </Select>
        </Box>
        <Button variant="blueWithShadow">New Opinion</Button>
      </Box>
      <Container maxW={{ base: "container.lg" }} pt={8} pb={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <VStack spacing={6} pe={{base: 0, md: 6}} borderRight="2px solid" borderColor="gray.300">
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
          </VStack>
          <VStack spacing={6}  ps={{base: 0, md: 6}}>
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
            <OpinionCard opinion={exampleOpinionPost} />
          </VStack>
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
