import React from "react";
import { StoryPages } from "@/components/stories/story-pages";
import { Story } from "@/types/stories";

import styles from './story-row.module.scss';
import { StoryStatusIndicator } from "@/components/stories/story-status-indicator";
import { formatPublishDate, formatTableDateTime } from "@/utils/date";
import { StoryActions } from "@/components/stories/story-actions";

interface Props {
  story: Story;
}

export const StoryRow: React.FC<Props> = ({
  story: {
    id,
    title,
    pages,
    lastModified,
    status,
    liveFrom,
    ends,
  }
}) => {
  return (
    <tr>
      <td className={styles.title}>
        <a href="#">{title}</a>
        <br />

        <span>
          {liveFrom ? `(${formatPublishDate(liveFrom)})` : '(No publish date set)'}
        </span>
      </td>

      <td>
        <StoryPages pages={pages} />
      </td>

      <td>
        {formatTableDateTime(lastModified)}
      </td>

      <td>
        <StoryStatusIndicator status={status} />
      </td>

      <td>
        {liveFrom ? formatTableDateTime(liveFrom) : '—'}
      </td>

      <td>
        {ends ? formatTableDateTime(ends) : '—'}
      </td>

      <td>
        <StoryActions />
      </td>
    </tr>
  )
}
