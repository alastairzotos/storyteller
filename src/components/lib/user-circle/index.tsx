import React from 'react';
import styles from './user-circle.module.scss';

interface Props {
  initials: string;
}

export const UserCircle: React.FC<Props> = ({ initials }) => {
  return (
    <button className={styles['user-circle']} role="menuitem">
      <span>{initials}</span>
    </button>
  )
}
