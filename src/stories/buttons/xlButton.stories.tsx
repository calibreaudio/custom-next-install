import type { Meta, StoryObj } from '@storybook/react';
import { xLargeButton } from '@/components/shared/buttons/std-buttons';

const meta: Meta<typeof xLargeButton> = {
  title: 'Components/Buttons/Standard',
  component: xLargeButton,
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
type Story = StoryObj<typeof xLargeButton>;

export const ExtraLarge: Story = {
  args: {
    type: 'button',
    label: 'Click me',
    value: 'value',
    name: 'name',
    disabled: false,
    autoFocus: false,
  },
};