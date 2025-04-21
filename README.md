# Design System Assignment

A comprehensive design system built with React, TypeScript, TailwindCSS, and Storybook. This project focuses on creating a robust and accessible component library with a strong emphasis on color system, data display, and navigation components.

## Features

- **Color System**: Comprehensive color palette with primary, secondary, and tertiary colors
- **Theme Support**: Light and dark mode with smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant components
- **TypeScript**: Full type safety and better developer experience
- **Storybook**: Interactive documentation and component playground
- **Testing**: Comprehensive unit tests with React Testing Library and Vitest

## Components

### Color System
The color system provides a comprehensive set of colors with semantic meaning and accessibility considerations.

```tsx
// Using color tokens in your components
<div className="bg-primary-500 text-white">
  Primary colored element
</div>
```

### Theme Toggle
A button component that switches between light and dark themes.

```tsx
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
```

### Tabs
A flexible tabs component with customizable styling and content.

```tsx
import { Tabs } from './components/Tabs';

const tabs = [
  {
    id: 'tab1',
    label: 'First Tab',
    content: <div>First tab content</div>
  },
  {
    id: 'tab2',
    label: 'Second Tab',
    content: <div>Second tab content</div>
  }
];

function App() {
  return <Tabs tabs={tabs} />;
}
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/design-system-assignment.git
cd design-system-assignment
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Start Storybook:
```bash
npm run storybook
# or
yarn storybook
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Testing

This project uses Vitest and React Testing Library for testing. To run the tests:

```bash
# Run tests in watch mode
npm run test
# or
yarn test

# Run tests with coverage
npm run test:coverage
# or
yarn test:coverage
```

## Documentation

Each component is documented in Storybook with:
- Interactive examples
- Props documentation
- Usage guidelines
- Accessibility considerations

### Component Documentation

#### ThemeToggle

The ThemeToggle component allows users to switch between light and dark themes.

**Props:**
- `className` (optional): Additional CSS classes to apply to the button

**Usage:**
```tsx
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
```

#### Tabs

The Tabs component provides a way to organize content into sections.

**Props:**
- `tabs`: Array of tab objects with `id`, `label`, and `content` properties
- `defaultTab` (optional): ID of the tab to show by default
- `className` (optional): Additional CSS classes for the container
- `tabClassName` (optional): Additional CSS classes for tab buttons
- `contentClassName` (optional): Additional CSS classes for the content area

**Usage:**
```tsx
import { Tabs } from './components/Tabs';

const tabs = [
  {
    id: 'tab1',
    label: 'First Tab',
    content: <div>First tab content</div>
  },
  {
    id: 'tab2',
    label: 'Second Tab',
    content: <div>Second tab content</div>
  }
];

function App() {
  return <Tabs tabs={tabs} defaultTab="tab2" />;
}
```

## Contributing

We welcome contributions to this project! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests to ensure everything works (`npm run test`)
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write tests for new components and features
- Update documentation as needed
- Ensure all tests pass before submitting a PR
- Use meaningful commit messages

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
