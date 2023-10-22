import type { Meta, StoryObj } from '@storybook/react';
import AddOnInput from '@/components/shared/inputs/add-on-input';

const meta: Meta<typeof AddOnInput> = {
  title: 'Components/Inputs/Add-on',
  component: AddOnInput,
  argTypes: {
    label: {
      name: 'Label',
      defaultValue: 'Input',
      control: 'text',
    },
    addon: {
      name: 'Add-on',
      defaultValue: 'https://',
      control: 'text',
    },
    name: {
      name: 'Name',
      defaultValue: 'text',
      control: 'text',
    },
    type: {
      name: 'Input Type',
      options: ['text', 'date', 'email', 'number', 'password', 'time', 'url', 'week', 'tel'],
      control: 'select',
    },
    placeholder: {
      name: 'Placeholder',
      defaultValue: 'Placeholder text',
      control: 'text',
    },
    description: {
      name: 'Description',
      defaultValue: 'This is a description',
      control: 'text',
    },
    required: {
      name: 'Required field',
      defaultValue: false,
      control: 'boolean',
    },
    errors: {
      name: 'Error message',
      defaultValue: '',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AddOnInput>;

export const Default: Story = {
  args: {
    label: 'This is a label',
    addon: 'https://',
    name: 'Name',
    type: 'text',
    placeholder: 'Placeholder',
    description: 'This is a description',
    required: false,
    errors: '',
  },
};