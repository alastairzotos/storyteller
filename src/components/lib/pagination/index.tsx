import React from "react";
import { Input } from "@/components/lib/inputs/input";

import styles from './pagination.module.scss';

export const Pagination: React.FC = () => {
  return (
    <div className={styles.container}>
      Page <Input value={1} /> of 1
    </div>
  )
}
