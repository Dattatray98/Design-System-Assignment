import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Data Display/Table',
  component: Table,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A flexible and feature-rich table component that supports:
- Sorting (click column headers to sort)
- Filtering (global search across all columns)
- Pagination
- Custom cell rendering
- Loading states
- Empty states
- Row click handling
- Custom styling through className props
- Accessibility support with proper ARIA attributes
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Editor',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice@example.com',
    role: 'User',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Charlie Wilson',
    email: 'charlie@example.com',
    role: 'Editor',
    status: 'Inactive',
  },
];

// Basic columns configuration
const basicColumns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Role' },
  { key: 'status', title: 'Status' },
];

// Columns with custom rendering
const customColumns = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { key: 'role', title: 'Role' },
  {
    key: 'status',
    title: 'Status',
    render: (value) => (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          value === 'Active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {value}
      </span>
    ),
  },
];

export const Basic: Story = {
  args: {
    data: users,
    columns: basicColumns,
  },
};

export const CustomRendering: Story = {
  args: {
    data: users,
    columns: customColumns,
  },
};

export const NoSorting: Story = {
  args: {
    data: users,
    columns: basicColumns,
    sortable: false,
  },
};

export const NoFiltering: Story = {
  args: {
    data: users,
    columns: basicColumns,
    filterable: false,
  },
};

export const NoPagination: Story = {
  args: {
    data: users,
    columns: basicColumns,
    pagination: false,
  },
};

export const Loading: Story = {
  args: {
    data: users,
    columns: basicColumns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: basicColumns,
    emptyState: (
      <div className="text-center">
        <h3 className="text-lg font-medium">No users found</h3>
        <p className="text-sm text-gray-500">Try adding some users to get started.</p>
      </div>
    ),
  },
};

export const WithRowClick: Story = {
  args: {
    data: users,
    columns: customColumns,
    onRowClick: (item) => alert(`Clicked on ${item.name}`),
  },
};

export const CustomStyling: Story = {
  args: {
    data: users,
    columns: customColumns,
    className: 'border rounded-lg shadow-lg',
    headerClassName: 'bg-gray-100',
    rowClassName: 'hover:bg-gray-50',
    cellClassName: 'text-gray-700',
  },
}; 