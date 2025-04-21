import React from 'react';
import { render, screen, fireEvent } from '../../test/test-utils';
import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  it('renders without crashing', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has correct aria-label for light theme', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark theme');
  });

  it('toggles theme when clicked', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    // Initial state (light theme)
    expect(document.documentElement.classList.contains('dark')).toBeFalsy();
    
    // Click to switch to dark theme
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBeTruthy();
    
    // Click again to switch back to light theme
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBeFalsy();
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';
    render(<ThemeToggle className={customClass} />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(customClass);
  });
}); 