import type { Meta, StoryObj } from '@storybook/react';
import { Statistic } from './Statistic';
import { Row, Col } from 'antd';
import React from 'react';

const meta: Meta<typeof Statistic> = {
  title: 'Components/Statistic',
  component: Statistic,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Statistic>;

export const Basic: Story = {
  args: {
    title: 'Total Events',
    value: 128,
  },
};

export const TrendUp: Story = {
  args: {
    title: 'Active Users',
    value: 1893,
    trend: 'up',
    suffix: '+12.5%',
  },
};

export const TrendDown: Story = {
  args: {
    title: 'Cancellations',
    value: 23,
    trend: 'down',
    suffix: '-8.3%',
  },
};

export const InCard: Story = {
  args: {
    title: 'Revenue',
    value: 112893,
    prefix: '₹',
    showCard: true,
    cardTitle: 'Total Revenue',
  },
};

export const Dashboard: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={6}>
        <Statistic
          title="Total Events"
          value={48}
          showCard
          valueStyle={{ color: '#1890ff' }}
        />
      </Col>
      <Col span={6}>
        <Statistic
          title="Active Attendees"
          value={2345}
          showCard
          trend="up"
          suffix="+15%"
        />
      </Col>
      <Col span={6}>
        <Statistic
          title="Revenue"
          value={458900}
          prefix="₹"
          showCard
        />
      </Col>
      <Col span={6}>
        <Statistic
          title="Avg Rating"
          value={4.8}
          suffix="/ 5"
          showCard
          valueStyle={{ color: '#52c41a' }}
        />
      </Col>
    </Row>
  ),
};
