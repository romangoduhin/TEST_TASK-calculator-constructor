import React from 'react';
import { ButtonProps } from './Button.types';

function Button({ children, styles = 'small-btn' }: ButtonProps) {
  return (
    <div className={`${styles} custom-btn`}>
      {children}
    </div>
  );
}

export default Button;
