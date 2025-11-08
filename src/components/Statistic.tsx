import React from 'react';
import { Statistic as AntStatistic, StatisticProps as AntStatisticProps, Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export interface StatisticProps extends AntStatisticProps {
  trend?: 'up' | 'down';
  showCard?: boolean;
  cardTitle?: string;
}

const StatisticWrapper: React.FC<StatisticProps> = ({ 
  trend,
  showCard = false,
  cardTitle,
  ...props 
}) => {
  const statisticContent = (
    <AntStatistic
      {...props}
      prefix={
        trend === 'up' ? (
          <ArrowUpOutlined style={{ color: '#3f8600' }} />
        ) : trend === 'down' ? (
          <ArrowDownOutlined style={{ color: '#cf1322' }} />
        ) : (
          props.prefix
        )
      }
      valueStyle={{
        color: trend === 'up' ? '#3f8600' : trend === 'down' ? '#cf1322' : undefined,
        ...props.valueStyle,
      }}
    />
  );

  if (showCard) {
    return (
      <Card bordered={false} title={cardTitle}>
        {statisticContent}
      </Card>
    );
  }

  return statisticContent;
};

// Attach the Countdown component from Ant Design
export const Statistic = Object.assign(StatisticWrapper, {
  Countdown: AntStatistic.Countdown,
});

export default Statistic;
