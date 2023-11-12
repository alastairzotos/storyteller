import Image from "next/image";
import React from "react";

import styles from "./header-menu.module.scss";
import { UserCircle } from "@/components/lib/user-circle";

export const HeaderMenu: React.FC = () => {
  return (
    <menu className={styles.menu}>
      <Image src="/icons/question-icon.png" alt="Help" width={20} height={20} />

      <UserCircle initials="AZ" />
    </menu>
  )
}
