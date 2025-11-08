import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the card content',
  },
};

export const WithExtra: Story = {
  args: {
    title: 'Card Title',
    extra: <a href="#">More</a>,
    children: 'Card with extra action',
  },
};

export const Bordered: Story = {
  args: {
    title: 'Bordered Card',
    bordered: true,
    children: 'This card has a border',
  },
};

export const NoBorder: Story = {
  args: {
    title: 'Borderless Card',
    bordered: false,
    children: 'This card has no border',
  },
};
