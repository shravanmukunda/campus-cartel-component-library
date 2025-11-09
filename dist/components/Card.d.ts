import { default as React } from 'react';
import { CardProps as AntCardProps } from 'antd';
export interface CardProps extends AntCardProps {
    children: React.ReactNode;
}
export declare const Card: React.FC<CardProps>;
export default Card;
