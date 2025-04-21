import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../../components/Tabs/Tabs';
import { ThemeProvider } from '../../../context/ThemeContext';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="w-[600px] p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleTabs = [
  {
    id: 'tab1',
    label: 'Account',
    content: (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Account Settings</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Manage your account settings and preferences here.
        </p>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: 'Notifications',
    content: (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Notification Settings</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Configure your notification preferences and alerts.
        </p>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: 'Security',
    content: (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Security Settings</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Manage your security settings and two-factor authentication.
        </p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
  },
};

export const WithDefaultTab: Story = {
  args: {
    tabs: sampleTabs,
    defaultTab: 'tab2',
  },
};

export const CustomStyling: Story = {
  args: {
    tabs: sampleTabs,
    className: 'max-w-2xl mx-auto',
    tabClassName: 'text-lg',
    contentClassName: 'p-6',
  },
}; 