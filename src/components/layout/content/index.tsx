import React from "react";

import styles from './content.module.scss';

export const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles.content}>
      {children}
    </main>
  )
}
