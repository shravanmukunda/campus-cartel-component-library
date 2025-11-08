import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Primary Button',
  },
};

export const Default: Story = {
  args: {
    label: 'Default Button',
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    label: 'Dashed Button',
  },
};

export const Large: Story = {
  args: {
    type: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};

export const Disabled: Story = {
  args: {
    type: 'primary',
    disabled: true,
    label: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    type: 'primary',
    loading: true,
    label: 'Loading Button',
  },
};
