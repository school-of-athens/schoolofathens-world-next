"use client";

import AuthButtonGroup from "@/components/AuthButtonGroup";
import HeadBar from "@/layouts/HeadBar";
import {
  Flex,
  Container,
  Text,
  ButtonGroup,
  Link,
  Button,
  UnorderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function MainSite() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <HeadBar>
        <Text
          fontWeight="900"
          fontSize="lg"
          fontFamily="Merriweather"
          color="gray.600"
        >
          Welcome to the School of Athens
        </Text>
        <AuthButtonGroup />
      </HeadBar>
      <Container
        maxW={{ base: "container.lg", lg: "container.xl" }}
        // h="calc(100vh - 4rem)"
        py={12}
      >
        <Heading mb={4} size="lg">
          Site map
        </Heading>
        <UnorderedList>
          <ListItem>
            <Link href="/" as={NextLink}>
              /: redirect to either home or dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/home" as={NextLink}>
              /home: the home page, description of the website
            </Link>
          </ListItem>
          <ListItem>
            /forum
            <UnorderedList>
              <ListItem>
                <Link href="/forum" as={NextLink}>
                  /forum: forum page with all posts in timeline
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/forum/new" as={NextLink}>
                  /forum/new: new post
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/forum/postId" as={NextLink}>
                  /forum/[postId]: a specific post
                </Link>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            /ballots
            <UnorderedList>
              <ListItem>
                <Link href="/ballots" as={NextLink}>
                  /ballots: all ballots in a timeline
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/ballots/new" as={NextLink}>
                  /ballots/new:initiate a new ballot
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/ballots/ballotId" as={NextLink}>
                  /ballots/ballotId: a specific ballot
                </Link>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            /citystates
            <UnorderedList>
              <ListItem>
                <Link href="/citystates" as={NextLink}>
                  /citystates: all citystates, with community, popular, and new
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/citystates/new" as={NextLink}>
                  /citystates/new: create a new citystate
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/citystates/csId" as={NextLink}>
                  /citystates/csId: a specific citystate
                </Link>
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            <Link href="/u/userId" as={NextLink}>
              /u/userId: a specific user, changes based on authentification
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/signup" as={NextLink}>
              /signup: signup page
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/login" as={NextLink}>
              /login: login page
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/dashboard" as={NextLink}>
              /dashboard: with user's following
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/community" as={NextLink}>
              /community: community page
            </Link>
          </ListItem>
          <ListItem>
            /about
            <UnorderedList>
              <ListItem>
                <Link href="/about" as={NextLink}>
                  /about: about page
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about/team" as={NextLink}>
                  /about/team: team members
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/about/research" as={NextLink}>
                  /about/research: research projects for the website
                </Link>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Container>
    </Flex>
  );
}
