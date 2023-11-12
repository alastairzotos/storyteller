import React from "react";
import cn from 'classnames';

import styles from './sort-indicator.module.scss';

type SortState = 'unsorted' | 'up' | 'down';

interface Props {
  state: SortState;
}

export const SortIndicator: React.FC<Props> = ({ state }) => (
  <button
    className={cn(styles.base, {
      [styles.unsorted]: state === 'unsorted',
      [styles.up]: state === 'up',
      [styles.down]: state === 'down',
    })}
  />
)
