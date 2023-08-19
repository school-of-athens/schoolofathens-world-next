import { Box, Button, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SidebarButton({
  children,
  leftIcon,
  path,
  mode = "responsive",
}: {
  children: string | ReactNode | undefined;
  leftIcon: ReactElement | undefined;
  path: string;
  active?: boolean;
  mode?: "expanded" | "collapsed" | "responsive";
}) {
  const pathname = usePathname();

  return (
    <Tooltip
      label={children}
      aria-label={children as string}
      hasArrow
      placement="right"
      display={{ base: "none", md: "flex", xl: "none" }}
    >
      <Link href={path}>
        <Button
          justifyContent={{ base: "center", xl: "start" }}
          alignItems="center"
          cursor="pointer"
          px={{base: 3, xl: 8}}
          py="1.4rem"
          w="100%"
          color={"/" + pathname.split("/", 2)[1] === path ? "blue.500" : "gray.500"}
          bg={"/" + pathname.split("/", 2)[1] === path ? "blue.50" : "transparent"}
          border="2px"
          borderColor={"/" + pathname.split("/", 2)[1] === path ? "blue.400" : "transparent"}
          fontSize="md"
          _hover={{
            bg: "/" + pathname.split("/", 2)[1] === path ? "blue.50" : "gray.100",
          }}
        >
          {leftIcon}
          <Box
            display={
              mode === "responsive"
                ? { base: "none", xl: "flex" }
                : mode === "collapsed"
                ? "none"
                : "flex"
            }
            ms={4}
          >
            {children}
          </Box>
        </Button>
      </Link>
    </Tooltip>
  );
}
