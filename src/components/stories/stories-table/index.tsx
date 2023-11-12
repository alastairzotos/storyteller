import React from "react";
import { Story } from "@/types/stories";
import { StoryRow } from "@/components/stories/story-row";

import styles from './stories-table.module.scss';
import { StoriesFooter } from "@/components/stories/stories-footer";
import { StoriesHeader } from "@/components/stories/stories-header";
import { SortIndicator } from "@/components/lib/sort-indicator";

interface Props {
  stories: Story[];
}

export const StoriesTable: React.FC<Props> = ({ stories }) => {
  return (
    <>
      <StoriesHeader />
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.title}>
                Title
                <SortIndicator state="unsorted" />
              </th>

              <th>Pages</th>

              <th>
                Last Modified
                <SortIndicator state="down" />
              </th>

              <th>
                Status
                <SortIndicator state="unsorted" />
              </th>

              <th>
                Live From
                <SortIndicator state="up" />
              </th>

              <th>
                Ends
                <SortIndicator state="unsorted" />
              </th>

              <th></th>
            </tr>
          </thead>

          <tbody>
            {stories.map(story => <StoryRow key={story.id} story={story} />)}
          </tbody>
        </table>

      </div>
      <StoriesFooter />
    </>
  )
}