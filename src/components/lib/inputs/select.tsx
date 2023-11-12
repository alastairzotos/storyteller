import React from "react";
import cn from 'classnames';

import styles from './inputs.module.scss';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  adornment?: React.ReactElement;
}

export const Select: React.FC<Props> = ({
  adornment,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        {...props}
      />

      {adornment}
    </div>
  )
}
