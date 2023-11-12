import React from "react";
import { StoriesActions } from "@/components/stories/stories-actions";

import styles from './stories-header.module.scss';
import { NewStoryButton } from "@/components/stories/new-story-button";

export const StoriesHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles['title-wrapper']}>
        <h1>Stories</h1>

        <div className="show-tablet">
          <NewStoryButton />
        </div>
      </div>

      <StoriesActions />
    </div>
  )
}
