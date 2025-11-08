import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends AntButtonProps {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  label, 
  children, 
  ...props 
}) => {
  return (
    <AntButton {...props}>
      {label || children}
    </AntButton>
  );
};

export default Button;
