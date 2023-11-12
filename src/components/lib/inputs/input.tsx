import React from "react";
import cn from 'classnames';

import styles from './inputs.module.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  adornment?: React.ReactElement;
}

export const Input: React.FC<Props> = ({
  adornment,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        {...props}
      />

      {adornment}
    </div>
  )
}
