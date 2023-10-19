import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "class",
    }),
  ]
};

export default preview;
