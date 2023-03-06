import React from 'react';
import { ButtonProps } from './Button.types';

function Button({ children }: ButtonProps) {
  return (
    <div className="w-[52px] h-[48px] custom-btn">
      {children}
    </div>
  );
}

export default Button;
