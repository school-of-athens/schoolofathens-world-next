import {
  Box,
  HStack,
  Heading,
  Avatar, 
  Flex, 
  Spacer, 
  UnorderedList,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";

function Tomomi() {
  
  return (
    <Box pb={5} backgroundColor="teal.200">
      <Flex>
        <Box width="200"></Box>
        <Box>
          <Box objectFit='cover' h='10'/>
          <Flex>
            <Spacer />
            <Box w='100px'>
              <Avatar name='profile pic' referrerPolicy="no-referrer" src='https://instagram.fpen1-2.fna.fbcdn.net/v/t51.2885-19/355060169_3345704112406383_2976918749781946614_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpen1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=6yCRmy3tFx0AX-gqF7y&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCkuAqezk67i4hHEGOP1_MUQyToiY8crqL0SWd5zETjfg&oe=649B2CDC&_nc_sid=ee9879' crossOrigin="anonymous"/>
              <img referrerPolicy="no-referrer" src='https://instagram.fpen1-2.fna.fbcdn.net/v/t51.2885-19/355060169_3345704112406383_2976918749781946614_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpen1-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=6yCRmy3tFx0AX-gqF7y&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCkuAqezk67i4hHEGOP1_MUQyToiY8crqL0SWd5zETjfg&oe=649B2CDC&_nc_sid=ee9879' crossOrigin="anonymous" height="200" width="200" />
            </Box>
            <Box w='70px'/>
            <Box backgroundColor = "red.500" w='300px'>
              <h1>Tomomi Nakamura</h1>
              <UnorderedList spacing={1}>
                <ListItem>An international student in Malaysia</ListItem>
                <ListItem>Year 10</ListItem>
                <ListItem>Programming Languages: Python, Java, Javascript</ListItem>
              </UnorderedList>
            </Box>
            <br></br>
          </Flex>
          <Box objectFit='cover' h='10'/>
          <Flex>
            <Box flex="1"> 
              <h1>About Me!</h1>
              <Text>I am an international student who considers herself rather vocal on world issues. I believe the greatest cause of polarization is the media, propaganda and how it portrays certain facts, causing people to shift towards far left and right sides of an argument without considering the other point of view. This divides our society and can lead to conflict. In my free time, I enjoy going down movie series' rabbit holes as well as play anime songs on the violin. Through School Of Athens, I'm excited to be able to exchange perspectives with all sorts of people from the world and widen my thought bubble.
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box style={{ width: 100}}></Box>
      </Flex>

    </Box>
  );
}

export default Tomomi;