
'use client';

import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const value = {
    BottomBarIsOpen: isOpen,
    BottomBarOnOpen: onOpen,
    BottomBarOnClose: onClose,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };