
'use client';

import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

interface AppContextProps {
    BottomBarIsOpen: boolean;
    BottomBarOnOpen: () => void;
    BottomBarOnClose: () => void;
};

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const AppProvider = ({ children }: {children: React.ReactNode}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const value: AppContextProps = {
    BottomBarIsOpen: isOpen,
    BottomBarOnOpen: onOpen,
    BottomBarOnClose: onClose,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };