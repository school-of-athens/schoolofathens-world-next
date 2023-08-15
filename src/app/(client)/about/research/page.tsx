"use client";

import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import HeadBar from "@/layouts/HeadBar";
import { BlogPost } from './BlogPost'
import { posts } from './data'

export default function Research() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Research
        </Text>
        <ButtonGroup spacing={4}>
          <Button variant="lightBlueWithShadow">Sign In</Button>
          <Button variant="grayWithShadow">Sign Up</Button>
        </ButtonGroup>
      </HeadBar>
      <Container
        maxW={{ base: "container.md", lg: "container.lg" }}
        // h="calc(100vh - 4rem)"
        py={12}
      >
        {/* <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <Heading size="lg">🚧 Under Development</Heading>

        </Flex> */}
        <SimpleGrid
          columns={2}
          gridRowGap={{ base: "8", md: "16" }}
          gridColumnGap="8"
        >
          {posts.map((post) => (
            <GridItem
              key={post.id}
              sx={{
                ":nth-of-type(3n-2)": { gridColumn: "span 2" },
              }}
              gridColumn={{ base: "span 2", md: "span 1" }}
            >
              <BlogPost post={post} />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
