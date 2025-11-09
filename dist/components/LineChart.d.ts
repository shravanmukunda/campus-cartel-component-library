import { default as React } from 'react';
export interface LineChartProps {
    title?: string;
    data: number[];
    categories: string[];
    height?: number;
}
export declare const LineChart: React.FC<LineChartProps>;
