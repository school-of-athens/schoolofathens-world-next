import { Box, Button, ButtonProps, Tooltip } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

export default function SidebarButton({children, leftIcon, active = false}: {children: string | ReactNode | undefined, leftIcon: ReactElement | undefined, active?: boolean}) {

  return (
    <Tooltip
      label={children}
      aria-label={children as string}
      hasArrow
      placement="right"
      display={{ base: "none", md: "flex", lg: "none" }}
    >
      <Button
        justifyContent="start"
        alignItems="center"
        cursor="pointer"
        px={4}
        py={6}
        color={active ? "blue.500" : "gray.600"}
        bg={active ? "blue.50" : "transparent"}
        border={active ? "2px solid" : "none"}
        fontSize="md"
        _hover={{
          // bg: "blue.50",
          // color: "blue.500",
          // border: "2px solid",
          // borderColor: "blue.500",
          bg: active ? "blue.50" : "gray.100",
        }}
      >
        {leftIcon}
        <Box display={{base: "none", lg: "flex"}} ms={2}>
          {children}
        </Box>
      </Button>
    </Tooltip>
  );
}
