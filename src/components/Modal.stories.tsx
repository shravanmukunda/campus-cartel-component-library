import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    title: 'Basic Modal',
    children: 'This is a basic modal content',
  },
};

export const WithFooter: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal
        </Button>
        <Modal
          {...args}
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </>
    );
  },
  args: {
    title: 'Modal with Footer',
    children: 'Modal with custom footer actions',
    okText: 'Confirm',
    cancelText: 'Cancel',
  },
};
