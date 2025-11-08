import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  args: {
    defaultCurrent: 1,
    total: 50,
  },
};

export const WithSizeChanger: Story = {
  args: {
    defaultCurrent: 1,
    total: 500,
    showSizeChanger: true,
    showTotal: (total) => `Total ${total} items`,
  },
};

export const Simple: Story = {
  args: {
    simple: true,
    defaultCurrent: 2,
    total: 50,
  },
};
