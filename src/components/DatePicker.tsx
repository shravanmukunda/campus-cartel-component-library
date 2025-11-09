import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import type { DatePickerProps as AntDatePickerProps } from 'antd';

export interface DatePickerProps extends AntDatePickerProps {}

const DatePickerWrapper: React.FC<DatePickerProps> = (props) => {
  return <AntDatePicker {...props} />;
};

// Explicit type annotation
export const DatePicker: typeof DatePickerWrapper & {
  RangePicker: typeof AntDatePicker.RangePicker;
  TimePicker: typeof AntDatePicker.TimePicker;
  WeekPicker: typeof AntDatePicker.WeekPicker;
  MonthPicker: typeof AntDatePicker.MonthPicker;
  QuarterPicker: typeof AntDatePicker.QuarterPicker;
  YearPicker: typeof AntDatePicker.YearPicker;
} = Object.assign(DatePickerWrapper, {
  RangePicker: AntDatePicker.RangePicker,
  TimePicker: AntDatePicker.TimePicker,
  WeekPicker: AntDatePicker.WeekPicker,
  MonthPicker: AntDatePicker.MonthPicker,
  QuarterPicker: AntDatePicker.QuarterPicker,
  YearPicker: AntDatePicker.YearPicker,
}) as any;

export default DatePicker;
