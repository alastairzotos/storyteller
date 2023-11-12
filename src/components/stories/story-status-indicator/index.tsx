import React from "react";
import cn from 'classnames';
import { StoryStatus } from "@/types/stories";

import styles from './story-status-indicator.module.scss';
import { storyStatusText } from "@/utils/stories";

interface Props {
  status: StoryStatus;
}

export const StoryStatusIndicator: React.FC<Props> = ({ status }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={cn({
          [styles.draft]: status === 'draft',
          [styles.live]: status === 'live',
          [styles.past]: status === 'past',
          [styles.scheduled]: status === 'scheduled',
        })}
      >
        {storyStatusText[status]}
      </div>
    </div>
  )
}
