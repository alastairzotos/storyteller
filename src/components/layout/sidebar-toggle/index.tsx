import Image from "next/image";
import React from "react";

import styles from './sidebar-toggle.module.scss';
import { useSidebar } from "@/hooks/sidebar";

export const SidebarToggle: React.FC = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar();

  return (
    <button
      className={styles['sidebar-toggle']}
      onClick={toggleSidebarOpen}
    >
      <Image
        src={sidebarOpen ? "/icons/close.png" : "/icons/hamburger.png"}
        alt="Toggle sidebar"
        width={52}
        height={52}
      />
    </button>
  )
}
