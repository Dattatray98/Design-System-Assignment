import { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Accordion Component

The Accordion component allows users to expand and collapse sections of content. It's useful for organizing information in a collapsible format.

### Features

- Single or multiple open sections
- Customizable styling
- Keyboard navigation support
- ARIA attributes for accessibility

### Usage

\`\`\`tsx
import Accordion from './Accordion';

const items = [
  {
    id: 'section1',
    title: 'Section 1',
    content: <p>Content for section 1</p>
  },
  {
    id: 'section2',
    title: 'Section 2',
    content: <p>Content for section 2</p>
  }
];

function MyComponent() {
  return (
    <Accordion 
      items={items} 
      defaultOpen={['section1']} 
      allowMultiple={false} 
    />
  );
}
\`\`\`

### Accessibility

- Uses proper ARIA attributes (aria-expanded, aria-controls, aria-hidden)
- Keyboard navigable
- Focus management
- Screen reader friendly
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const sampleItems = [
  {
    id: 'section1',
    title: 'What is a design system?',
    content: (
      <div>
        <p className="mb-2">
          A design system is a collection of reusable components, guided by clear standards, 
          that can be assembled together to build any number of applications.
        </p>
        <p>
          Design systems help teams build high-quality digital experiences with greater 
          efficiency and consistency.
        </p>
      </div>
    ),
  },
  {
    id: 'section2',
    title: 'Why use a design system?',
    content: (
      <div>
        <p className="mb-2">
          Design systems provide a single source of truth for design and development teams, 
          ensuring consistency across products and platforms.
        </p>
        <p>
          They also improve efficiency by reducing the need to recreate common UI patterns 
          and components from scratch.
        </p>
      </div>
    ),
  },
  {
    id: 'section3',
    title: 'Key components of a design system',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Color palette and typography</li>
        <li>UI components and patterns</li>
        <li>Spacing and layout guidelines</li>
        <li>Accessibility standards</li>
        <li>Documentation and usage guidelines</li>
      </ul>
    ),
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    defaultOpen: ['section1'],
    allowMultiple: false,
  },
};

export const MultipleOpen: Story = {
  args: {
    items: sampleItems,
    defaultOpen: ['section1', 'section2'],
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'This example allows multiple sections to be open at the same time.',
      },
    },
  },
};

export const CustomStyling: Story = {
  args: {
    items: sampleItems,
    defaultOpen: ['section1'],
    allowMultiple: false,
    className: 'max-w-2xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates custom styling using the className prop.',
      },
    },
  },
}; 