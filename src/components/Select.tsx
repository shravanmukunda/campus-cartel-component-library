import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';

export interface SelectProps extends AntSelectProps {}

const SelectWrapper: React.FC<SelectProps> = (props) => {
  return <AntSelect {...props} />;
};

export const Select = Object.assign(SelectWrapper, {
  Option: AntSelect.Option,
  OptGroup: AntSelect.OptGroup,
});

export default Select;
