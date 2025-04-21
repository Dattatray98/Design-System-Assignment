import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { Tabs } from './components/Tabs/Tabs';
import './styles/colors.css'

const App: React.FC = () => {
  const tabs = [
    {
      id: 'tab1',
      label: 'Overview',
      content: (
        <div className="p-6 bg-surface-light-primary dark:bg-surface-dark-primary rounded-lg shadow-sm border border-border transition-colors duration-400">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Design System Overview</h2>
          <p className="text-muted-foreground">
            Welcome to our comprehensive design system. This system provides a collection of reusable components,
            color tokens, and design patterns to ensure consistency across our applications.
          </p>
        </div>
      ),
    },
    {
      id: 'tab2',
      label: 'Components',
      content: (
        <div className="p-6 bg-surface-light-primary dark:bg-surface-dark-primary rounded-lg shadow-sm border border-border transition-colors duration-400">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Available Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-surface-light-secondary dark:bg-surface-dark-secondary rounded-lg transition-colors duration-400">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Theme Toggle</h3>
              <p className="text-muted-foreground">Switch between light and dark themes</p>
            </div>
            <div className="p-4 bg-surface-light-secondary dark:bg-surface-dark-secondary rounded-lg transition-colors duration-400">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Tabs</h3>
              <p className="text-muted-foreground">Organize content into sections</p>
            </div>
            <div className="p-4 bg-surface-light-secondary dark:bg-surface-dark-secondary rounded-lg transition-colors duration-400">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Color System</h3>
              <p className="text-muted-foreground">Comprehensive color palette</p>
            </div>
            <div className="p-4 bg-surface-light-secondary dark:bg-surface-dark-secondary rounded-lg transition-colors duration-400">
              <h3 className="text-lg font-semibold mb-2 text-foreground">More Coming</h3>
              <p className="text-muted-foreground">Stay tuned for more components</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-400">
        <header className="bg-surface-light-primary dark:bg-surface-dark-primary border-b border-border transition-colors duration-400">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Design System</h1>
            <ThemeToggle />
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Tabs tabs={tabs} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
