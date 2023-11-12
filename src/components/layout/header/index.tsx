import React from "react";
import styles from "./header.module.scss";
import { Logo } from "@/components/layout/logo";
import { HeaderMenu } from "@/components/layout/header-menu";
import { SidebarToggle } from "@/components/layout/sidebar-toggle";

export const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <div className={styles['header-left']}>
        <SidebarToggle />
        <Logo />
      </div>

      <HeaderMenu />
    </nav>
  )
}
