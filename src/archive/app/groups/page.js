"use client";

import GroupsTitle from "./components/GroupsTitle";
import GroupCard from "./components/GroupCard";
import ContainerGrid from "@/layouts/ContainerGrid";
import { Box, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Groups() {
  return (
    <>
      <GroupsTitle />

      <Box my={8}>
        <Link
          as={NextLink}
          href="/groups/create"
        
        >
          <Button variant="blue">Start a Group</Button>
        </Link>

        <ContainerGrid>
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </ContainerGrid>
      </Box>
    </>
  );
}
