
import { Box, Heading, Image } from "@chakra-ui/react";
import ScrollV from "./ParallaxText";

const Hero = () => {

  return (
    <Box h="200vh">
      <Image src="/people.png" />
      <ScrollV />
    </Box>
  );
};

export default Hero;
