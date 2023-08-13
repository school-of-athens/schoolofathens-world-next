"use client";

import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import original from "@/assets/original.svg"

export default function Page() {
  const [hovered, setHovered] = useState(true);
  const [message, setMessage] = useState(0);
  const messages = [
    "Vote on Ongoing Issues",
    "Provide and Absorb Insights",
    "Group with Your Friends",
    "Democracy on Blockchain",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((message) => (message + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  console.log(message);

  return (
    <>
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        position="relative"
        width="100%"
        h="100vh"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          //   as={motion.img}
          width="100vw"
          src="/original.png"
          height="100vh"
          objectFit="cover"
          position="absolute"
          top="0"
          //   zIndex={1}
          //   _hover={{ filter: "brightness(0.6)" }}
        />

        <Image
          as={motion.img}
          width="100vw"
          src="/bg.png"
          objectFit="cover"
          position="absolute"
          top="0"
          height="100vh"
          zIndex={2}
          backdropFilter="brightness(0.5)"
          // initial={{ backdropFilter: "brightness(1)" }}
          // animate={{
          // backdropFilter: hovered ? "brightness(0.6)" : "brightness(1)",
          // filter: hovered ? "brightness(1)" : "brightness(0.6)",
          //   scale: 1.1,
          //   transition: { duration: 1 },
          // }}
        />
        {/* {hovered && ( */}
        <Box zIndex={3} mt={24}>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            //   exit={{ opacity: 0 }}
            mb="120px"
          >
            <Heading color="white" size="3xl">
              Welcome to the School of Athens
            </Heading>
          </Box>
          {message === 0 && (
            <Box
              textAlign="center"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Heading color="white" size="xl">
                {messages[message]}
              </Heading>
              <Button variant="gray" mt={3}>
                Learn More
              </Button>
            </Box>
          )}
          {message === 1 && (
            <Box
              textAlign="center"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
            >
              <Heading color="white" size="xl">
                {messages[message]}
              </Heading>{" "}
              <Button variant="gray" mt={3}>
                Learn More
              </Button>
            </Box>
          )}
          {message === 2 && (
            <Box
              textAlign="center"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
            >
              <Heading color="white" size="xl">
                {messages[message]}
              </Heading>{" "}
              <Button variant="gray" mt={3}>
                Learn More
              </Button>
            </Box>
          )}
          {message === 3 && (
            <Box
              textAlign="center"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ y: -50, opacity: 1 }}
            >
              <Heading color="white" size="xl">
                {messages[message]}
              </Heading>{" "}
              <Button variant="gray" mt={3}>
                Learn More
              </Button>
            </Box>
          )}
        </Box>
        {/* )} */}
      </Flex>
    </>
  );
}
