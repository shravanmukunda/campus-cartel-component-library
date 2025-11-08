import React from 'react';
import { Form as AntForm, FormProps as AntFormProps } from 'antd';

export interface FormProps extends AntFormProps {
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormProps> = ({ children, ...props }) => {
  return <AntForm {...props}>{children}</AntForm>;
};

// Create a new Form component that combines wrapper and Ant Design properties
export const Form = Object.assign(FormWrapper, {
  Item: AntForm.Item,
  List: AntForm.List,
  ErrorList: AntForm.ErrorList,
  Provider: AntForm.Provider,
  useForm: AntForm.useForm,
  useFormInstance: AntForm.useFormInstance,
  useWatch: AntForm.useWatch,
});

export default Form;
