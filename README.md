# Design System Assignment

A comprehensive design system built with React, TypeScript, TailwindCSS, and Storybook. This project focuses on creating a robust and accessible component library with a strong emphasis on color system, data display, and navigation components.

## Features

- **Color System**: Comprehensive color palette with primary, secondary, and tertiary colors
- **Theme Support**: Light and dark mode with smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant components
- **TypeScript**: Full type safety and better developer experience
- **Storybook**: Interactive documentation and component playground

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

## Documentation

Each component is documented in Storybook with:
- Interactive examples
- Props documentation
- Usage guidelines
- Accessibility considerations

## Testing

```bash
npm run test
# or
yarn test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
