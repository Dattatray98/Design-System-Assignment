import React from 'react';
import { render, screen } from '../../../test/test-utils';
import ColorSystem from './ColorSystem';

describe('ColorSystem', () => {
  it('renders without crashing', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Color System')).toBeInTheDocument();
  });

  it('displays primary color palette', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Primary Colors')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByText('950')).toBeInTheDocument();
  });

  it('displays secondary color palette', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Secondary Colors')).toBeInTheDocument();
  });

  it('displays tertiary color palette', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Tertiary Colors')).toBeInTheDocument();
  });

  it('displays semantic colors', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Success Colors')).toBeInTheDocument();
    expect(screen.getByText('Error Colors')).toBeInTheDocument();
    expect(screen.getByText('Warning Colors')).toBeInTheDocument();
    expect(screen.getByText('Info Colors')).toBeInTheDocument();
  });

  it('displays surface colors', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Surface Colors')).toBeInTheDocument();
    expect(screen.getByText('Light Theme')).toBeInTheDocument();
    expect(screen.getByText('Dark Theme')).toBeInTheDocument();
  });

  it('displays accessibility notes', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Accessibility Notes')).toBeInTheDocument();
    expect(screen.getByText(/WCAG 2.1 AA/)).toBeInTheDocument();
  });

  it('displays usage guidelines', () => {
    render(<ColorSystem />);
    expect(screen.getByText('Usage Guidelines')).toBeInTheDocument();
  });
}); 