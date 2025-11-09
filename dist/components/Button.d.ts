import { default as React } from 'react';
import { ButtonProps as AntButtonProps } from 'antd';
export interface ButtonProps extends AntButtonProps {
    label?: string;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
