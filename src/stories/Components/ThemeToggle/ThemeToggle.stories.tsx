import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '../../../components/ThemeToggle/ThemeToggle';
import { ThemeProvider } from '../../../context/ThemeContext';

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'bg-blue-500 hover:bg-blue-600',
  },
}; 