import { Meta, StoryObj } from '@storybook/react';
import ColorSystem from './ColorSystem';
import { ThemeProvider } from '../../../context/ThemeContext';

const meta: Meta<typeof ColorSystem> = {
  title: 'Design System/Color System',
  component: ColorSystem,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Color System

The color system is the foundation of our design system, providing a comprehensive set of colors for building consistent and accessible user interfaces.

### Features

- **Main Color Palettes**: Primary, Secondary, Tertiary, and Neutral colors with 11 shades each
- **Semantic Colors**: Success, Error, Warning, and Info colors for specific UI states
- **Surface Colors**: Background, border, and text colors for different UI layers
- **Theme Support**: Light and dark theme variants
- **Accessibility**: WCAG 2.1 AA compliant contrast ratios

### Usage

The color system is designed to be used consistently across the application. Use the appropriate color tokens based on their semantic meaning and intended purpose.

### Accessibility

All color combinations in this system meet WCAG 2.1 AA standards for contrast ratios. Text colors maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ColorSystem>;

export const Default: Story = {
  args: {},
};

export const DarkMode: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The color system supports both light and dark themes. This story demonstrates the dark theme variant.',
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="bg-gray-900 min-h-screen">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};
