import React from 'react';
import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';

export interface DatePickerProps extends AntDatePickerProps {}

const DatePickerWrapper: React.FC<DatePickerProps> = (props) => {
  return <AntDatePicker {...props} />;
};

export const DatePicker = Object.assign(DatePickerWrapper, {
  RangePicker: AntDatePicker.RangePicker,
  TimePicker: AntDatePicker.TimePicker,
  WeekPicker: AntDatePicker.WeekPicker,
  MonthPicker: AntDatePicker.MonthPicker,
  QuarterPicker: AntDatePicker.QuarterPicker,
  YearPicker: AntDatePicker.YearPicker,
});

export default DatePicker;
