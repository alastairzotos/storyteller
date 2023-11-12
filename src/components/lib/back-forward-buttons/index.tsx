import React from 'react';
import styles from './back-forward-buttons.module.scss';

export const BackForwardButtons: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles['button-left']} />
      <button className={styles['button-right']} />
    </div>
  )
}
