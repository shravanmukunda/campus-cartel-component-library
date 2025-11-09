import { default as React } from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
export interface InputProps extends AntInputProps {
    label?: string;
    error?: string;
}
declare const InputWrapper: React.FC<InputProps>;
export declare const Input: typeof InputWrapper & {
    Password: typeof AntInput.Password;
    TextArea: typeof AntInput.TextArea;
    Search: typeof AntInput.Search;
    Group: typeof AntInput.Group;
};
export default Input;
