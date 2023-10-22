import type { Meta, StoryObj } from '@storybook/react';
import { xSmallButton } from '@/components/shared/buttons/std-buttons';

const meta: Meta<typeof xSmallButton> = {
  title: 'Components/Buttons/Standard',
  component: xSmallButton,
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
type Story = StoryObj<typeof xSmallButton>;

export const ExtraSmall: Story = {
  args: {
    type: 'button',
    label: 'Click me',
    value: 'value',
    name: 'name',
    disabled: false,
    autoFocus: false,
  },
};