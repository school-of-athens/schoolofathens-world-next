import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import "../assets/About.css";
import { AboutTitle, Team } from "../features/About";

const About = () => {
  return (
    <div className="mb-5">
      <AboutTitle />

      <div className="container">
        <Team />
        <Heading mt={6}>Attribution</Heading>
        <UnorderedList mt="3">
          <ListItem>The favicon of this website is from Twemoji.</ListItem>
          <ListItem>All the images are in public domain.</ListItem>
        </UnorderedList>
      </div>
    </div>
  );
};

export default About;
