import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export interface InputProps extends AntInputProps {
  label?: string;
  error?: string;
}

const InputWrapper: React.FC<InputProps> = ({ 
  label, 
  error,
  ...props 
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
          {label}
        </label>
      )}
      <AntInput {...props} status={error ? 'error' : undefined} />
      {error && (
        <div style={{ color: '#ff4d4f', fontSize: '14px', marginTop: '4px' }}>
          {error}
        </div>
      )}
    </div>
  );
};

// Create a new Input component that combines wrapper and Ant Design properties
export const Input: typeof InputWrapper & {
  Password: typeof AntInput.Password;
  TextArea: typeof AntInput.TextArea;
  Search: typeof AntInput.Search;
  Group: typeof AntInput.Group;
} = Object.assign(InputWrapper, {
  Password: AntInput.Password,
  TextArea: AntInput.TextArea,
  Search: AntInput.Search,
  Group: AntInput.Group,
}) as any;


export default Input;
