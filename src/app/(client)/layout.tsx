"use client";

import { Flex } from "@chakra-ui/react";
import { BottomBar, DrawerSidebar, MainSidebar } from "@/layouts/Sidebar";
import { useContext } from "react";
import { AppContext, AppProvider } from "@/context/AppContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <Flex minH="100vh" flexDirection={{ base: "column", md: "row" }}>
        <MainSidebar />
        {children}
      </Flex>
        <DrawerSidebar />

      <BottomBar />
    </AppProvider>
  );
}
