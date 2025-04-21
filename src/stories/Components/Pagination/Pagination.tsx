import React from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  siblingCount = 1,
  showFirstLast = true,
  showPrevNext = true,
  disabled = false,
  size = 'medium',
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || disabled) {
      return;
    }
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    
    // Always show first page
    pageNumbers.push(1);
    
    // Calculate range around current page
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);
    
    // Add ellipsis after first page if needed
    if (leftSiblingIndex > 2) {
      pageNumbers.push('...');
    }
    
    // Add page numbers around current page
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pageNumbers.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (rightSiblingIndex < totalPages - 1) {
      pageNumbers.push('...');
    }
    
    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const getButtonClasses = (isActive: boolean, isDisabled: boolean) => {
    const baseClasses = 'pagination-item focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
    
    const sizeClasses = {
      small: 'w-8 h-8 text-sm',
      medium: 'w-10 h-10 text-base',
      large: 'w-12 h-12 text-lg',
    };
    
    const stateClasses = isActive
      ? 'bg-primary-500 text-white'
      : isDisabled
      ? 'bg-surface-background-secondary text-surface-text-tertiary cursor-not-allowed'
      : 'bg-surface-background-secondary text-surface-text-secondary hover:bg-surface-background-tertiary';
    
    return `${baseClasses} ${sizeClasses[size]} ${stateClasses} flex items-center justify-center rounded-md`;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className={`pagination ${className}`}
      role="navigation"
      aria-label="Pagination"
    >
      <ul className="flex items-center space-x-1">
        {showFirstLast && (
          <li>
            <button
              className={getButtonClasses(false, disabled || currentPage === 1)}
              onClick={() => handlePageChange(1)}
              disabled={disabled || currentPage === 1}
              aria-label="Go to first page"
            >
              <span aria-hidden="true">«</span>
            </button>
          </li>
        )}
        
        {showPrevNext && (
          <li>
            <button
              className={getButtonClasses(false, disabled || currentPage === 1)}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={disabled || currentPage === 1}
              aria-label="Go to previous page"
            >
              <span aria-hidden="true">‹</span>
            </button>
          </li>
        )}
        
        {pageNumbers.map((pageNumber, index) => {
          if (pageNumber === '...') {
            return (
              <li key={`ellipsis-${index}`} className="px-2">
                <span className="text-surface-text-tertiary">...</span>
              </li>
            );
          }
          
          const page = pageNumber as number;
          const isActive = page === currentPage;
          
          return (
            <li key={page}>
              <button
                className={getButtonClasses(isActive, disabled)}
                onClick={() => handlePageChange(page)}
                disabled={disabled}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Go to page ${page}`}
              >
                {page}
              </button>
            </li>
          );
        })}
        
        {showPrevNext && (
          <li>
            <button
              className={getButtonClasses(false, disabled || currentPage === totalPages)}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={disabled || currentPage === totalPages}
              aria-label="Go to next page"
            >
              <span aria-hidden="true">›</span>
            </button>
          </li>
        )}
        
        {showFirstLast && (
          <li>
            <button
              className={getButtonClasses(false, disabled || currentPage === totalPages)}
              onClick={() => handlePageChange(totalPages)}
              disabled={disabled || currentPage === totalPages}
              aria-label="Go to last page"
            >
              <span aria-hidden="true">»</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination; 