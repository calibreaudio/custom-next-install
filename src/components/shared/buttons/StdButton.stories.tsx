import type { Meta, StoryObj } from '@storybook/react';
import Button from './std-button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Standard',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Button',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};