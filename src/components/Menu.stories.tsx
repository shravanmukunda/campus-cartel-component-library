import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Menu } from './Menu';
import { 
  DashboardOutlined, 
  CalendarOutlined, 
  TeamOutlined,
  BarChartOutlined,
  SettingOutlined 
} from '@ant-design/icons';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

const items = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'events',
    icon: <CalendarOutlined />,
    label: 'Events',
    children: [
      { key: 'all-events', label: 'All Events' },
      { key: 'upcoming', label: 'Upcoming' },
      { key: 'past', label: 'Past Events' },
    ],
  },
  {
    key: 'attendees',
    icon: <TeamOutlined />,
    label: 'Attendees',
  },
  {
    key: 'analytics',
    icon: <BarChartOutlined />,
    label: 'Analytics',
  },
  {
    key: 'settings',
    icon: <SettingOutlined />,
    label: 'Settings',
  },
];

export const Vertical: Story = {
  args: {
    mode: 'vertical',
    items,
    defaultSelectedKeys: ['dashboard'],
    style: { width: 256 },
  },
};

export const Inline: Story = {
  args: {
    mode: 'inline',
    items,
    defaultSelectedKeys: ['dashboard'],
    defaultOpenKeys: ['events'],
    style: { width: 256 },
  },
};
