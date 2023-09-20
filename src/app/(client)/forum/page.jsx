"use client";

import { Flex } from "@chakra-ui/react";
import ForumTitle from "./components/ForumTitle";
import ForumWrap from "./components/ForumWrap";
import PostsList from "./components/PostsList";
import SideView from "./components/SideView";

export default function Forum() {
  return (
    <Flex bg="gray.50" w="full" flexDirection="column">
      <ForumTitle />
      <ForumWrap>
        <PostsList />
        <SideView />
      </ForumWrap>
    </Flex>
  );
}
