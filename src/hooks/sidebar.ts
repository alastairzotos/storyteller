import React from "react";

interface SidebarContextProps {
  sidebarOpen: boolean;
  toggleSidebarOpen: () => void;
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  sidebarOpen: false,
  toggleSidebarOpen: () => {},
})

export const useSidebar = () => React.useContext(SidebarContext);
