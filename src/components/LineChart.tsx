import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export interface LineChartProps {
  title?: string;
  data: number[];
  categories: string[];
  height?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  title,
  data,
  categories,
  height = 350,
}) => {
  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: { show: true },
    },
    title: { text: title },
    xaxis: { categories },
    stroke: { curve: 'smooth' },
  };

  const series = [{ name: 'Value', data }];

  return <Chart options={options} series={series} type="line" height={height} />;
};
