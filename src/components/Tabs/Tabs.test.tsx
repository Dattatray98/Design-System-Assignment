import React from 'react';
import { render, screen, fireEvent } from '../../test/test-utils';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  const mockTabs = [
    {
      id: 'tab1',
      label: 'First Tab',
      content: <div data-testid="tab1-content">First tab content</div>,
    },
    {
      id: 'tab2',
      label: 'Second Tab',
      content: <div data-testid="tab2-content">Second tab content</div>,
    },
    {
      id: 'tab3',
      label: 'Third Tab',
      content: <div data-testid="tab3-content">Third tab content</div>,
    },
  ];

  it('renders without crashing', () => {
    render(<Tabs tabs={mockTabs} />);
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('renders all tab buttons', () => {
    render(<Tabs tabs={mockTabs} />);
    const tabButtons = screen.getAllByRole('tab');
    expect(tabButtons).toHaveLength(3);
  });

  it('shows the first tab content by default', () => {
    render(<Tabs tabs={mockTabs} />);
    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();
    expect(screen.queryByTestId('tab2-content')).not.toBeInTheDocument();
  });

  it('shows the specified default tab content', () => {
    render(<Tabs tabs={mockTabs} defaultTab="tab2" />);
    expect(screen.getByTestId('tab2-content')).toBeInTheDocument();
    expect(screen.queryByTestId('tab1-content')).not.toBeInTheDocument();
  });

  it('switches tab content when a tab is clicked', () => {
    render(<Tabs tabs={mockTabs} />);
    
    // Initially shows first tab
    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();
    
    // Click second tab
    fireEvent.click(screen.getByText('Second Tab'));
    expect(screen.getByTestId('tab2-content')).toBeInTheDocument();
    expect(screen.queryByTestId('tab1-content')).not.toBeInTheDocument();
    
    // Click third tab
    fireEvent.click(screen.getByText('Third Tab'));
    expect(screen.getByTestId('tab3-content')).toBeInTheDocument();
    expect(screen.queryByTestId('tab2-content')).not.toBeInTheDocument();
  });

  it('applies custom classNames when provided', () => {
    render(
      <Tabs
        tabs={mockTabs}
        className="custom-container"
        tabClassName="custom-tab"
        contentClassName="custom-content"
      />
    );
    
    expect(screen.getByRole('tablist').parentElement).toHaveClass('custom-container');
    expect(screen.getAllByRole('tab')[0]).toHaveClass('custom-tab');
    expect(screen.getByTestId('tab1-content').parentElement).toHaveClass('custom-content');
  });
}); 