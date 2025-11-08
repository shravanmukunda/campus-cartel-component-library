import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatePicker } from './DatePicker';
import dayjs from 'dayjs';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Select date',
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: dayjs(),
  },
};

export const RangePicker: Story = {
  render: () => <DatePicker.RangePicker />,
};

export const WithTime: Story = {
  args: {
    showTime: true,
    format: 'YYYY-MM-DD HH:mm:ss',
  },
};

export const MonthPicker: Story = {
  render: () => <DatePicker.MonthPicker placeholder="Select month" />,
};

export const YearPicker: Story = {
  render: () => <DatePicker.YearPicker placeholder="Select year" />,
};
