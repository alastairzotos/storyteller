import React from "react";
import Image from "next/image";

import styles from './stories-actions.module.scss';
import { Button } from "@/components/lib/button";

export const StoryActions: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Button variant="danger">
        <Image src="/icons/delete.png" alt="Delete" width={11} height={14} />
      </Button>

      <Button variant="primary">
        <Image src="/icons/edit.png" alt="Delete" width={12} height={14} />
        Edit
      </Button>
    </div>
  )
}
