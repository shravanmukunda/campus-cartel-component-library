import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data: DataType[] = Array.from({ length: 46 }, (_, i) => ({
  key: i.toString(),
  name: `Event ${i + 1}`,
  age: 32 + i,
  address: `Venue ${i + 1}, Bangalore`,
  tags: ['active', 'upcoming'],
}));

export const Basic: Story = {
  args: {
    columns,
    dataSource: data.slice(0, 5),
  },
};

export const WithPagination: Story = {
  args: {
    columns,
    dataSource: data,
    pagination: {
      pageSize: 10,
      showSizeChanger: true,
      showTotal: (total) => `Total ${total} events`,
    },
  },
};

export const Sortable: Story = {
  args: {
    columns: columns.map(col => ({
      ...col,
      sorter: col.key === 'age' ? (a: any, b: any) => a.age - b.age : undefined,
    })),
    dataSource: data.slice(0, 10),
  },
};
