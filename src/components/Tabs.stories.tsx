import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    key: '1',
    label: 'Overview',
    children: 'Overview content goes here',
  },
  {
    key: '2',
    label: 'Analytics',
    children: 'Analytics charts and data',
  },
  {
    key: '3',
    label: 'Settings',
    children: 'Settings configuration',
  },
];

export const Basic: Story = {
  args: {
    defaultActiveKey: '1',
    items,
  },
};

export const Card: Story = {
  args: {
    type: 'card',
    items,
  },
};

export const Centered: Story = {
  args: {
    centered: true,
    items,
  },
};
