import React from 'react';
import { ButtonProps } from './Button.types';

function Button({ onClick, children, styles = 'small-btn' }: ButtonProps) {
  return (
    <div role="button" onClick={onClick} className={`${styles} custom-btn`}>
      {children}
    </div>
  );
}

export default Button;
