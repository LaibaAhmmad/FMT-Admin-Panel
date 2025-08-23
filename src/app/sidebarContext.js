"use client"; 

import { createContext, useContext, useState } from "react";

//  Context
const SidebarContext = createContext();

//  Provider Component
export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}


