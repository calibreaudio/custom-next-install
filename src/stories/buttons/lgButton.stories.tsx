import type { Meta, StoryObj } from '@storybook/react';
import { largeButton } from '@/components/shared/buttons/std-buttons';

const meta: Meta<typeof largeButton> = {
  title: 'Components/Buttons/Standard',
  component: largeButton,
  argTypes: {
    type: {
      name: 'Type',
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'select',
      },
    },
    label: {
      name: 'Label',
      type: 'string',
      control: {
        type: 'text',
      },
    },
    value: {
      name: 'Value',
      type: 'string',
      control: {
        type: 'text',
      },
    },
    name: {
      name: 'Name',
      type: 'string',
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'Disabled',
      type: 'boolean',
      control: {
        type: 'boolean',
      },
    },
    autoFocus: {
      name: 'Auto Focus',
      type: 'boolean',
      control: {
        type: 'boolean',
      },
    },
  }
};

export default meta;
type Story = StoryObj<typeof largeButton>;

export const Large: Story = {
  args: {
    type: 'button',
    label: 'Click me',
    value: 'value',
    name: 'name',
    disabled: false,
    autoFocus: false,
  },
};