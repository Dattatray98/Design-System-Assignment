import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

type ShadeKey = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

interface ColorShade {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

interface ColorPalette {
  primary: ColorShade;
  secondary: ColorShade;
  tertiary: ColorShade;
  neutral: ColorShade;
  success: ColorShade;
  error: ColorShade;
  warning: ColorShade;
  info: ColorShade;
}

interface SurfaceColors {
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    light: string;
    medium: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    inverse: string;
  };
}

interface ThemeColors {
  light: SurfaceColors;
  dark: SurfaceColors;
}

const ColorSystem: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const colors: ColorPalette = {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
    secondary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: '#2e1065',
    },
    tertiary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#022c22',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
    info: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
      950: '#083344',
    },
  };

  const surfaceColors: ThemeColors = {
    light: {
      background: {
        primary: '#ffffff',
        secondary: '#f9fafb',
        tertiary: '#f3f4f6',
      },
      border: {
        light: '#e5e7eb',
        medium: '#d1d5db',
        dark: '#9ca3af',
      },
      text: {
        primary: '#111827',
        secondary: '#4b5563',
        tertiary: '#6b7280',
        inverse: '#ffffff',
      },
    },
    dark: {
      background: {
        primary: '#111827',
        secondary: '#1f2937',
        tertiary: '#374151',
      },
      border: {
        light: '#4b5563',
        medium: '#6b7280',
        dark: '#9ca3af',
      },
      text: {
        primary: '#f9fafb',
        secondary: '#e5e7eb',
        tertiary: '#d1d5db',
        inverse: '#111827',
      },
    },
  };

  return (
    <div className={`p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Color System</h1>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md ${
            theme === 'light' 
              ? 'bg-gray-800 text-white' 
              : 'bg-white text-gray-800'
          }`}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      {/* Main Color Palettes */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Main Color Palettes</h2>
        <div className="grid gap-8">
          {(Object.entries(colors) as [keyof ColorPalette, ColorShade][]).map(([colorName, shades]) => (
            <div key={colorName} className="space-y-2">
              <h3 className="text-lg font-medium capitalize">{colorName}</h3>
              <div className="grid grid-cols-11 gap-2">
                {(Object.entries(shades) as [ShadeKey, string][]).map(([shade, hex]) => (
                  <div key={shade} className="space-y-1">
                    <div
                      className="h-20 rounded-lg border border-gray-200"
                      style={{ backgroundColor: hex }}
                    />
                    <div className="text-xs text-center">
                      <div className="font-medium">{shade}</div>
                      <div className="text-gray-500">{hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Surface Colors */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Surface Colors</h2>
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Backgrounds</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(surfaceColors[theme].background).map(([name, color]) => (
                <div key={name} className="space-y-1">
                  <div
                    className="h-20 rounded-lg border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-xs text-center">
                    <div className="font-medium capitalize">{name}</div>
                    <div className="text-gray-500">{color}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Borders</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(surfaceColors[theme].border).map(([name, color]) => (
                <div key={name} className="space-y-1">
                  <div
                    className="h-20 rounded-lg border border-gray-200"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-xs text-center">
                    <div className="font-medium capitalize">{name}</div>
                    <div className="text-gray-500">{color}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Text Colors</h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(surfaceColors[theme].text).map(([name, color]) => (
                <div key={name} className="space-y-1">
                  <div
                    className="h-20 rounded-lg border border-gray-200 flex items-center justify-center"
                    style={{ backgroundColor: color }}
                  >
                    <span className={`text-sm ${name === 'inverse' ? 'text-gray-900' : 'text-white'}`}>
                      Sample Text
                    </span>
                  </div>
                  <div className="text-xs text-center">
                    <div className="font-medium capitalize">{name}</div>
                    <div className="text-gray-500">{color}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Notes */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Accessibility Notes</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <ul className="list-disc pl-5 space-y-2">
            <li>All color combinations meet WCAG 2.1 AA standards for contrast ratios.</li>
            <li>Text colors are designed to maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text.</li>
            <li>The color system supports both light and dark themes with appropriate contrast adjustments.</li>
            <li>Interactive elements have distinct hover and focus states with sufficient contrast.</li>
            <li>Error and warning states are designed to be distinguishable for colorblind users.</li>
          </ul>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Usage Guidelines</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Do's:</h3>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Use primary colors for main actions and brand elements</li>
            <li>Use secondary colors for supporting actions and accents</li>
            <li>Use tertiary colors for tertiary actions and additional accents</li>
            <li>Use semantic colors (success, error, warning, info) for their intended purposes</li>
            <li>Use neutral colors for text, backgrounds, and borders</li>
            <li>Maintain consistent color usage across the application</li>
          </ul>
          
          <h3 className="font-medium mb-2">Don'ts:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Don't use semantic colors for non-semantic purposes</li>
            <li>Don't use too many colors in a single view</li>
            <li>Don't use colors with insufficient contrast for text</li>
            <li>Don't rely solely on color to convey information</li>
            <li>Don't use custom colors outside the design system</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorSystem;
