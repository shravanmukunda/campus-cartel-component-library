import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import type { BaseOptionType, DefaultOptionType } from 'antd/es/select';

export interface SelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> extends AntSelectProps<ValueType, OptionType> {}

// Explicitly type the component
const SelectWrapper = <
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>(
  props: SelectProps<ValueType, OptionType>
): React.ReactElement => {
  return <AntSelect<ValueType, OptionType> {...props} />;
};

// Add explicit type annotation for the exported component
export const Select: typeof SelectWrapper & {
  Option: typeof AntSelect.Option;
  OptGroup: typeof AntSelect.OptGroup;
} = Object.assign(SelectWrapper, {
  Option: AntSelect.Option,
  OptGroup: AntSelect.OptGroup,
}) as any;

export default Select;
