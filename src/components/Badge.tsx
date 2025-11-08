import React from 'react';
import { Badge as AntBadge, BadgeProps as AntBadgeProps } from 'antd';

export interface BadgeProps extends AntBadgeProps {
  children?: React.ReactNode;
}

const BadgeWrapper: React.FC<BadgeProps> = ({ children, ...props }) => {
  return <AntBadge {...props}>{children}</AntBadge>;
};

export const Badge = Object.assign(BadgeWrapper, {
  Ribbon: AntBadge.Ribbon,
});

export default Badge;
