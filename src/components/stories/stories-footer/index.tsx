import React from "react";
import { BackForwardButtons } from "@/components/lib/back-forward-buttons";
import { Pagination } from "@/components/lib/pagination";

import styles from './stories-footer.module.scss';
import { Select } from "@/components/lib/inputs/select";

export const StoriesFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <Pagination />

      <Select>
        <option>20 Rows</option>
        <option>100 Rows</option>
        <option>500 Rows</option>
      </Select>
      
      <BackForwardButtons />
    </div>
  )
}
