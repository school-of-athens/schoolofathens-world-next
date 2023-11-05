"use client";

import { createContext, useEffect, useState } from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import supabase from "@/services/supabase";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  const getCurrentUserData = async () => {};

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session);
      // console.log(session.user.identities[0].identity_data);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      console.log(session);

      if (!session?.session && session?.user) {
        alert("Email Verification");
      }

      if (event) {
        alert(event);
      }
      // INITIAL_SESSION

      if (event == "PASSWORD_RECOVERY") {
        alert("Password recovery");
      }

      if (event == "SIGNED_IN") {
        toast({
          title: "You're signed in.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
          variant: "left-accent",
        });
        getCurrentUserData();
      }
      if (event == "SIGNED_OUT") {
        toast({
          title: "You're signed out.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
          variant: "left-accent",
        });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    BottomBarIsOpen: isOpen,
    BottomBarOnOpen: onOpen,
    BottomBarOnClose: onClose,
    session,
    user,
    setUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
