"use client";

import { Flex } from "@chakra-ui/react";
import { BottomBar, DrawerSidebar, MainSidebar } from "@/layouts/Sidebar";
import { useContext, useEffect, useState } from "react";
import { AppContext, AppProvider } from "@/context/AppContext";
import supabase from "@/services/supabase";

export default function RootLayout({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      console.log(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      console.log(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // if (!session) {
  //   alert("You are not logged in!");
  // }
  // else {
  //   alert("You are logged in!");
  //   console.log(session);
  // }

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
