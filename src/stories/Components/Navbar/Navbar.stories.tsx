import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Design System/Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Navbar Component

A responsive navigation bar component with support for:
- Dropdown menus
- Mobile-friendly design
- Multiple variants (default, transparent, solid)
- Positioning options (static, fixed, sticky)
- Custom branding
- Accessibility features

### Features

- Responsive design that adapts to different screen sizes
- Dropdown menus for nested navigation
- Mobile menu with hamburger toggle
- Keyboard navigation support
- ARIA attributes for accessibility
- Custom styling options
- Multiple variants and positioning options

### Usage

\`\`\`tsx
import Navbar from './Navbar';

const links = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
  },
  {
    id: 'products',
    label: 'Products',
    href: '#products',
    children: [
      {
        id: 'product1',
        label: 'Product 1',
        href: '#product1',
      },
      {
        id: 'product2',
        label: 'Product 2',
        href: '#product2',
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
];

function MyComponent() {
  return (
    <Navbar 
      brand="My Brand" 
      links={links} 
      variant="default"
      position="static"
    />
  );
}
\`\`\`

### Accessibility

- Uses semantic HTML elements
- Includes proper ARIA attributes
- Supports keyboard navigation
- Provides visual indicators for interactive elements
- Maintains sufficient color contrast
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Sample links with dropdowns
const linksWithDropdowns = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
  },
  {
    id: 'products',
    label: 'Products',
    href: '#products',
    children: [
      {
        id: 'product1',
        label: 'Product 1',
        href: '#product1',
      },
      {
        id: 'product2',
        label: 'Product 2',
        href: '#product2',
      },
      {
        id: 'product3',
        label: 'Product 3',
        href: '#product3',
      },
    ],
  },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
    children: [
      {
        id: 'service1',
        label: 'Service 1',
        href: '#service1',
      },
      {
        id: 'service2',
        label: 'Service 2',
        href: '#service2',
      },
    ],
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
  },
];

// Simple links without dropdowns
const simpleLinks = [
  {
    id: 'home',
    label: 'Home',
    href: '#',
  },
  {
    id: 'about',
    label: 'About',
    href: '#about',
  },
  {
    id: 'services',
    label: 'Services',
    href: '#services',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
  },
];

export const Default: Story = {
  args: {
    brand: 'My Brand',
    links: simpleLinks,
  },
};

export const WithDropdowns: Story = {
  args: {
    brand: 'My Brand',
    links: linksWithDropdowns,
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the Navbar with dropdown menus.',
      },
    },
  },
};

export const CustomBrand: Story = {
  args: {
    brand: <div className="flex items-center"><img src="https://via.placeholder.com/30" alt="Logo" className="mr-2" />Custom Brand</div>,
    links: simpleLinks,
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates using a custom brand element.',
      },
    },
  },
};

export const Transparent: Story = {
  args: {
    brand: 'My Brand',
    links: simpleLinks,
    variant: 'transparent',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the transparent variant of the Navbar.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen p-4">
        <Story />
        <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Content Below Navbar</h1>
          <p className="mb-4">This is some content that appears below the transparent navbar.</p>
          <p>Scroll down to see how the transparent navbar looks with content underneath.</p>
        </div>
      </div>
    ),
  ],
};

export const Solid: Story = {
  args: {
    brand: 'My Brand',
    links: simpleLinks,
    variant: 'solid',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the solid variant of the Navbar.',
      },
    },
  },
};

export const Fixed: Story = {
  args: {
    brand: 'My Brand',
    links: simpleLinks,
    position: 'fixed',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the fixed positioning of the Navbar.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <Story />
        <div className="container mx-auto mt-20 p-8">
          <h1 className="text-3xl font-bold mb-4">Content Below Fixed Navbar</h1>
          <p className="mb-4">This is some content that appears below the fixed navbar.</p>
          <p>Scroll down to see how the fixed navbar stays at the top of the viewport.</p>
          <div className="h-96 bg-gray-100 flex items-center justify-center mt-8">
            <p className="text-gray-500">Scroll down to see more content</p>
          </div>
          <div className="h-96 bg-gray-200 flex items-center justify-center mt-8">
            <p className="text-gray-500">More content</p>
          </div>
        </div>
      </div>
    ),
  ],
};

export const Sticky: Story = {
  args: {
    brand: 'My Brand',
    links: simpleLinks,
    position: 'sticky',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates the sticky positioning of the Navbar.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen">
        <div className="h-20 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Content above the sticky navbar</p>
        </div>
        <Story />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-4">Content Below Sticky Navbar</h1>
          <p className="mb-4">This is some content that appears below the sticky navbar.</p>
          <p>Scroll down to see how the sticky navbar behaves.</p>
          <div className="h-96 bg-gray-100 flex items-center justify-center mt-8">
            <p className="text-gray-500">Scroll down to see more content</p>
          </div>
          <div className="h-96 bg-gray-200 flex items-center justify-center mt-8">
            <p className="text-gray-500">More content</p>
          </div>
        </div>
      </div>
    ),
  ],
};
