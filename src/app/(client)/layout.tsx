"use client";

import { Flex } from "@chakra-ui/react";
import { MainSidebar } from "@/features/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      minH="100vh"
      // flexDirection={{ base: "column", md: "row" }}
    >
      <MainSidebar />
      {children}
      {/* BottomBar */}
      {/* DrawerSidebar */}
    </Flex>
  );
}
