"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  VStack,
  Button,
  Select,
  FormControl,
  FormLabel,
  Divider,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import VoteList from "./components/VoteList";
import useVoteList from "./hooks/useVoteList";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import VoteBinarySkeleton from "./components/VoteBinarySkeleton";
import ForumContainer from "./components/ForumContainer";
import ForumTitle from "./components/ForumTitle";

const Forum = () => {
  const [voteList, isLoading] = useVoteList();
  const { width } = useWindowDimensions();

  return (
    <>

            
            <ForumContainer>
              <ForumTitle />
              <VoteList voteList={voteList} isLoading={isLoading} />
            </ForumContainer>
          
    </>
  );
};

export default Forum;
