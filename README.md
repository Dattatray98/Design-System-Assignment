# Design System Assignment

A comprehensive design system built with React, TypeScript, TailwindCSS, and Storybook. This project focuses on creating a token-based color system, data display components, and navigation components with a strong emphasis on accessibility and documentation.

## Project Overview

This design system includes:

- **Color System**: A comprehensive token-based color system with primary, secondary, tertiary, and semantic colors, along with light/dark theme support.
- **Data Display Components**: Table, Accordion, and Tab components for displaying structured data.
- **Navigation Components**: Navbar and Pagination components for navigation.

## Color System

The color system is built on a token-based approach with the following features:

- **Main Color Palettes**:
  - Primary colors (11 shades)
  - Secondary colors (11 shades)
  - Tertiary colors (11 shades)
  - Neutral colors (11 shades)

- **Semantic Colors**:
  - Success colors (11 shades)
  - Error colors (11 shades)
  - Warning colors (11 shades)
  - Info colors (11 shades)

- **Surface Colors**:
  - Background colors (primary, secondary, tertiary)
  - Border colors
  - Text colors

- **Theme Support**:
  - Light theme
  - Dark theme
  - Theme context for managing theme state

- **Accessibility**:
  - WCAG 2.1 AA compliant
  - Sufficient color contrast
  - Semantic color usage

### Usage Example

```tsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="bg-surface-background-primary text-surface-text-primary">
      <h1>My Component</h1>
      <button 
        onClick={toggleTheme}
        className="bg-primary-500 text-white px-4 py-2 rounded"
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
  );
}
```

## Data Display Components

### Table

A flexible table component with sorting, filtering, and pagination capabilities.

**Features**:
- Sortable columns
- Global filtering
- Pagination
- Custom cell rendering
- Loading states
- Empty states
- Row click handling
- Custom styling

### Accordion

A collapsible content component for organizing information.

**Features**:
- Single or multiple open sections
- Customizable styling
- Keyboard navigation
- ARIA attributes for accessibility

### Tab

A tabbed interface component for switching between different views.

**Features**:
- Multiple tab variants (default, pills, underline)
- Different sizes (small, medium, large)
- Full-width option
- Disabled tabs
- Keyboard navigation
- ARIA attributes for accessibility

## Navigation Components

### Navbar

A responsive navigation bar with dropdown menus and mobile support.

**Features**:
- Dropdown menus
- Mobile-friendly design
- Multiple variants (default, transparent, solid)
- Positioning options (static, fixed, sticky)
- Custom branding
- Accessibility features

### Pagination

A component for navigating through paginated content.

**Features**:
- Customizable page size
- First/last page buttons
- Previous/next buttons
- Sibling count control
- Disabled state
- Different sizes
- Accessibility support

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/design-system.git
   cd design-system
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Start Storybook:
   ```
   npm run storybook
   # or
   yarn storybook
   ```

## Documentation

Each component is documented in Storybook with:

- Usage examples
- Props documentation
- Accessibility information
- Variants and states
- Code snippets

## Testing

Run tests with:

```
npm test
# or
yarn test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Storybook](https://storybook.js.org/) for component documentation
- [React](https://reactjs.org/) for the UI library
- [TypeScript](https://www.typescriptlang.org/) for type safety
