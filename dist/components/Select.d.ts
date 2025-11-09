import { default as React } from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
export interface SelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> extends AntSelectProps<ValueType, OptionType> {
}
declare const SelectWrapper: <ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType>(props: SelectProps<ValueType, OptionType>) => React.ReactElement;
export declare const Select: typeof SelectWrapper & {
    Option: typeof AntSelect.Option;
    OptGroup: typeof AntSelect.OptGroup;
};
export default Select;
