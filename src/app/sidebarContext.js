"use client";

import { createContext, useContext, useState ,useEffect} from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
useEffect(() => {
  if (window.innerWidth < 768) {
    setIsOpen(false); 
  } else {
    setIsOpen(true);  
  }
}, []);
  return (
    
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}


export function useSidebar() {
  return useContext(SidebarContext);
}

