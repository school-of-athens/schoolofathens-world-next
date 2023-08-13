import {
  Box,
  HStack,
  Heading,
  Avatar, Flex, Spacer, Text
} from "@chakra-ui/react";
import { SocialIcon } from 'react-social-icons';
import rightPic from '../photos/2.png';
import leftPic from '../photos/1.png';
import "../assets/dissapear.css";

function Soleil() {
  return (
    <div className="mb-5">
      <Flex>
        <img src={rightPic}  alt="rightPic" style={{ width: 500, height: 800 }} className="dissapear"/>
        <box style={{ width: 100}} className="appear"></box>
        <Box>
          <Box objectFit='cover' h='10'/>
          <flex-start>
            <Spacer />
            <Box w='70px'>
              <Avatar name='Soleil Pham' size='2xl' src='https://lh3.googleusercontent.com/a/AAcHTtcoZ1stXBdG5bk1xLZOPutj6_oBIkEA4U1z0eQCrmI_tZD0sJ2YhPfEcisv5TFroESQtnIRyPw_YG2ueWEmmvsUp-g=s576-c-no' />
            </Box>
            <Box w='70px'/>
            <Box w='300px'>
              <h2>Soleil Pham</h2>
              <hr></hr>
              <HStack spacing='10px'> 
                <SocialIcon url="https://www.instagram.com/soleil.pham/" style={{ height: 40, width: 40 }} target="_blank" rel="noopener noreferrer"/>
                <SocialIcon url="https://www.linkedin.com/in/soleil-pham-4876a127a/" style={{ height: 40, width: 40 }} target="_blank" rel="noopener noreferrer"/>
                <Text>Updated on 23 June 2023</Text>
              </HStack>
            </Box>
            <Spacer />
          </flex-start>
          <Box objectFit='cover' h='10'/>
          <flex-start>
            <Box flex="1"> 
              <Heading>About Me</Heading>
              <Text>I am currently a rising senior studying at an international school in Vietnam. I like to think of myself as neutral in most discussions, whether the topic is trivial or more serious — such as politics and policy debates. There are always nuances and complexities in conversations that sometimes blur the line between what is right and wrong. I believe understanding the different arguments can help us be more empathetic and help alleviate extreme ideology. As our world becomes more globalized and interconnected through frequent technology usage, there is a tendency to seek confirmation bias and move toward group polarization. I am thankful to be involved in building an open space for people from different backgrounds and sides to share their views and expose themselves to other perspectives.
              </Text>
              <Heading>Other Fun Facts</Heading>
              <Text>Visual arts and design are a large part of who I am, aside from computer science. I like to draw (digitally and traditionally), and I think the activity is a great de-stressor method. Thus, I enjoy working on creative aspects when programming as well. For example, game development is a hobby  I enjoy doing because a game’s aesthetic is essential in making the game attractive and enjoyable. Additionally, I love to sing, run, swim, and spend time with my family and beloved dog, Icy.
              </Text>
            </Box>
          </flex-start>
        </Box>
        <box style={{ width: 100}} className="appear"></box>
        <img src={leftPic} alt="leftPic" style={{ width: 500, height: 800 }} className="dissapear"/>
      </Flex>

    </div>
  );
}

export default Soleil;
