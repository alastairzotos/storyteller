import React from "react";
import styles from "./layout.module.scss";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}
