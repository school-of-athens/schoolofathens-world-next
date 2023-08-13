"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Button,
  Avatar,
  AvatarGroup,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Image,
  Card,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import "@/assets/dissapear.css";
import sampleGroup from "@/data/sampleGroup.js";
import useWindowDimensions from "@/hooks/useWindowDimensions";

function SingleGroup() {
  const { width, height } = useWindowDimensions();
  const overlay = {
    position: "absolute",
    overflow: "hidden",
    top: "250px",
    left: "50px",
  };

  const mainView = {
    backgroundColor: "white",
    height: height * 0.8 + "px",
    width: width * 0.8 - 10 + "px",
    fontFamily: "Arial",
  };
  const alternative = {
    backgroundColor: "white",
    height: height * 0.8 + "px",
    width: width * 0.2 - 10 + "px",
    fontFamily: "Arial",
  };

  var memberList = sampleGroup.members;

  return (
    <div>
      <Flex flexDirection="column">
        <Image
          src={sampleGroup.profilePhoto}
          alt="group profile picture"
          style={overlay}
          z-index="9"
          vertical-align="middle"
          borderRadius="full"
          boxSize="150px"
        />
        <box id="under">
          <img
            style={{ width: "100%", height: "300px" }}
            src={sampleGroup.backgroudPhoto}
            alt="Banner"
          />
        </box>
        <Box padding="50px">
          <Box h="20px" />
          <Heading>Group Name</Heading>
          <HStack spacing="10px">
            <img
              style={{ width: "50px", height: "50px" }}
              src={sampleGroup.minorPhoto1}
              alt=""
            />
            <img
              style={{ width: "50px", height: "50px" }}
              src={sampleGroup.minorPhoto2}
              alt=""
            />
            <Box>
              <text>{sampleGroup.location}</text>
            </Box>
          </HStack>
          <Box h="10px" />
          <Text>{sampleGroup.description}</Text>
          <Flex>
            <Box style={mainView}>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Recent</Tab>
                  <Tab>Polls</Tab>
                  <Tab>Posts</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <p>Nothing Here Yet!</p>
                    <Card variant="plain">
                      <Text lineHeight="1.75">Sample Card?</Text>
                    </Card>
                  </TabPanel>
                  <TabPanel>
                    <p>Nothing Here Either!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Nothing Here Too!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            <Box className="disappear" w="20px" h="80px"></Box>
            <Box className="disappear" style={alternative}>
              <Button colorScheme="blue">Invite People to Join</Button>
              <hr />
              <Text as="b">Member Count </Text>
              <AvatarGroup size="md" max={4}>
                {sampleGroup.members.map((item) => (
                  <Avatar name={item.numberName} src={item.personPhoto} />
                ))}
              </AvatarGroup>
              <hr />
              <Text as="b">Superfictial Leaderboard or News/Highlights</Text>
            </Box>
          </Flex>
          <box className="appear">
            <Button
              leftIcon={<ArrowLeftIcon />}
              colorScheme="pink"
              variant="solid"
              style={{ position: "fixed", bottom: "0", right: "0" }}
            ></Button>
          </box>
        </Box>
      </Flex>
    </div>
  );
}
export default SingleGroup;
