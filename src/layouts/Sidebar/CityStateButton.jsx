import { Box, Button, ButtonProps, Tooltip, Image } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import choose from "@/utils/choose";

export default function CityStateButton({children, leftIcon}) {

  const colors = ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple', 'pink']

  return (
    <Tooltip
      label={children}
      aria-label={children}
      hasArrow
      placement="right"
      display={{ base: "none", md: "flex", lg: "none" }}
    >
      <Button
        justifyContent={{base: "center", lg: "start"}}
        alignItems="center"
        cursor="pointer"
        px={0}
        py={0}
        overflow="hidden"
        bg="white"
        border="2px solid"
        borderColor="gray.200"
        boxSizing="content-box"
        height="3rem"
        color="gray.600"
        fontSize="md"
        borderRadius="lg"
        _hover={{
          // bg: "blue.50",
          // color: "blue.500",
          // border: "2px solid",
          // borderColor: "blue.500",
          bg: "gray.100",
        }}
      >
        <Box width="3rem" height="3rem" bg={`${choose(colors)}.500`}></Box>
        <Box display={{base: "none", lg: "flex"}} ms={6}>
          {children}
        </Box>
      </Button>
    </Tooltip>
  );
}
