import { default as React } from 'react';
import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'antd';
export interface DatePickerProps extends AntDatePickerProps {
}
declare const DatePickerWrapper: React.FC<DatePickerProps>;
export declare const DatePicker: typeof DatePickerWrapper & {
    RangePicker: typeof AntDatePicker.RangePicker;
    TimePicker: typeof AntDatePicker.TimePicker;
    WeekPicker: typeof AntDatePicker.WeekPicker;
    MonthPicker: typeof AntDatePicker.MonthPicker;
    QuarterPicker: typeof AntDatePicker.QuarterPicker;
    YearPicker: typeof AntDatePicker.YearPicker;
};
export default DatePicker;
