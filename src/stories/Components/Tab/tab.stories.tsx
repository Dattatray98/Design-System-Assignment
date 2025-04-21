import { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Design System/Navigation/Tabs',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Tabs Component

The Tabs component allows users to switch between different views or sections of content. It's a common navigation pattern that helps organize content into logical groups.

### Features

- Multiple tab variants (default, pills, underline)
- Different sizes (small, medium, large)
- Full-width option
- Disabled tabs
- Keyboard navigation
- ARIA attributes for accessibility
- Custom styling options

### Usage

\`\`\`tsx
import Tab from './Tab';

const tabs = [
  {
    id: 'tab1',
    label: 'Tab 1',
    content: <div>Content for Tab 1</div>,
  },
  {
    id: 'tab2',
    label: 'Tab 2',
    content: <div>Content for Tab 2</div>,
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    content: <div>Content for Tab 3</div>,
    disabled: true,
  },
];

function MyComponent() {
  return (
    <Tab 
      tabs={tabs} 
      defaultActiveTab="tab1"
      variant="default"
      size="medium"
      fullWidth={false}
      onChange={(activeTab) => console.log('Active tab:', activeTab)}
    />
  );
}
\`\`\`

### Accessibility

- Uses proper ARIA attributes (role="tablist", role="tab", role="tabpanel")
- Keyboard navigation with arrow keys, Home, End, Enter, and Space
- Focus management
- Screen reader friendly
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tab>;

const sampleTabs = [
  {
    id: 'tab1',
    label: 'Overview',
    content: (
      <div className="p-4 bg-surface-background-secondary rounded-md">
        <h3 className="text-lg font-medium mb-2">Overview</h3>
        <p>
          This is the overview tab content. It contains general information about the topic.
        </p>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: 'Features',
    content: (
      <div className="p-4 bg-surface-background-secondary rounded-md">
        <h3 className="text-lg font-medium mb-2">Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: 'Documentation',
    content: (
      <div className="p-4 bg-surface-background-secondary rounded-md">
        <h3 className="text-lg font-medium mb-2">Documentation</h3>
        <p>
          This tab contains documentation and usage examples for the component.
        </p>
      </div>
    ),
  },
  {
    id: 'tab4',
    label: 'Disabled',
    content: (
      <div className="p-4 bg-surface-background-secondary rounded-md">
        <h3 className="text-lg font-medium mb-2">Disabled Tab</h3>
        <p>
          This tab is disabled and cannot be selected.
        </p>
      </div>
    ),
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveTab: 'tab1',
  },
};

export const DefaultActiveTab: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveTab: 'tab2',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates setting a default active tab.',
      },
    },
  },
};

export const Pills: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveTab: 'tab1',
    variant: 'pills',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the pills variant of the tabs component.',
      },
    },
  },
};

export const Underline: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveTab: 'tab1',
    variant: 'underline',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the underline variant of the tabs component.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveTab: 'tab1',
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the small size variant of the tabs component.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveTab: 'tab1',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the large size variant of the tabs component.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    tabs: sampleTabs,
    defaultActiveTab: 'tab1',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the full-width variant of the tabs component.',
      },
    },
  },
};
