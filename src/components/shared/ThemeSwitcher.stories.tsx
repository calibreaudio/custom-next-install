import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './theme-switcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/Theme Switcher',
  component: ThemeSwitcher,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  args: {},
};