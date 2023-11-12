import React from "react";

import styles from './story-pages.module.scss';

interface Props {
  pages: string[];
}

const MAX_PAGES = 6;

export const StoryPages: React.FC<Props> = ({ pages }) => {
  return (
    <div className={styles.pages}>
      {pages.slice(0, MAX_PAGES).map((page, index) => (
        <div
          key={index}
          className={styles.page}
          style={{
            backgroundImage: `url(${page})`
          }}
        />
      ))}

      {pages.length > MAX_PAGES && (
        <div className={styles.extras}>
          +{(pages.length - MAX_PAGES)}
        </div>
      )}
    </div>
  )
}
