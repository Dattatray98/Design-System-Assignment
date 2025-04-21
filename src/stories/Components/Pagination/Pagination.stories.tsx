import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Design System/Navigation/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
    },
    showFirstLast: {
      control: 'boolean',
    },
    showPrevNext: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log(`Page changed to ${page}`),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default pagination with 10 pages, showing current page 5.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small-sized pagination buttons.',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large-sized pagination buttons.',
      },
    },
  },
};

export const WithoutFirstLast: Story = {
  args: {
    ...Default.args,
    showFirstLast: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination without first/last page buttons.',
      },
    },
  },
};

export const WithoutPrevNext: Story = {
  args: {
    ...Default.args,
    showPrevNext: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination without previous/next buttons.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled pagination state.',
      },
    },
  },
};

export const ManyPages: Story = {
  args: {
    ...Default.args,
    currentPage: 50,
    totalPages: 100,
    siblingCount: 2,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with many pages, showing more siblings around the current page.',
      },
    },
  },
}; 