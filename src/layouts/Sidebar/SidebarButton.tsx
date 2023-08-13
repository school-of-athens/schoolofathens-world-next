import { Box, Button, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SidebarButton({
  children,
  leftIcon,
  path,
  active = false,
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
      display={{ base: "none", md: "flex", lg: "none" }}
    >
      <Link href={path}>
        <Button
          justifyContent={{ base: "center", lg: "start" }}
          alignItems="center"
          cursor="pointer"
          px={{base: 3, lg: 8}}
          py={6}
          w="100%"
          color={"/" + pathname.split("/", 2)[1] === path ? "blue.500" : "gray.500"}
          bg={"/" + pathname.split("/", 2)[1] === path ? "blue.50" : "transparent"}
          border={"/" + pathname.split("/", 2)[1] === path ? "2px solid" : "none"}
          fontSize="md"
          _hover={{
            bg: "/" + pathname.split("/", 2)[1] === path ? "blue.50" : "gray.100",
          }}
        >
          {leftIcon}
          <Box
            display={
              mode === "responsive"
                ? { base: "none", lg: "flex" }
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
