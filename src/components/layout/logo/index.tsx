import Image from "next/image";
import React from "react";
import styles from "./logo.module.scss";

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo} aria-labelledby="storyteller-label">
      <Image src="/icons/logo.png" alt="Storyteller Logo" width={37} height={34} />
      <Image src="/icons/storyteller.png" alt="Storyteller" className={styles.storyteller} width={135} height={12} />

      <span id="storyteller-label" className="hidden">Storyteller Logo</span>
    </div>
  )
}
