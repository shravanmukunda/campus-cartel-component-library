import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Drawer } from './Drawer';
import { Button } from './Button';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    title: 'Event Details',
    placement: 'right',
    children: (
      <div>
        <p>Event Name: Tech Conference 2025</p>
        <p>Date: Nov 15, 2025</p>
        <p>Attendees: 250</p>
      </div>
    ),
  },
};

export const LeftPlacement: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Left Drawer
        </Button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    title: 'Filters',
    placement: 'left',
    children: <p>Filter options here...</p>,
  },
};
