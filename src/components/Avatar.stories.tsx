import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';
import { UserOutlined } from '@ant-design/icons';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: <UserOutlined />,
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  },
};

export const WithText: Story = {
  args: {
    children: 'SK',
  },
};

export const Large: Story = {
  args: {
    size: 64,
    icon: <UserOutlined />,
  },
};

export const Group: Story = {
  render: () => (
    <Avatar.Group>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <Avatar style={{ backgroundColor: '#1890ff' }}>S</Avatar>
    </Avatar.Group>
  ),
};
