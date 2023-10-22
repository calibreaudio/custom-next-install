import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from '@/components/shared/other/theme-switcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/Other/Theme Switcher',
  component: ThemeSwitcher,
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  args: {
  },
};