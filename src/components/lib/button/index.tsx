import React from "react";
import cn from 'classnames';

import styles from './button.module.scss';

type ButtonVariant = 'primary' | 'danger' | 'adornment';

interface Props {
  variant: ButtonVariant;
}

export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  variant,
  children,
}) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.danger]: variant === 'danger',
        [styles.adornment]: variant === 'adornment',
      })}
    >
      {children}
    </button>
  )
}
