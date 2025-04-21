import React, { useState, useEffect, useRef } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  className?: string;
  onChange?: (activeTab: string) => void;
  variant?: 'default' | 'pills' | 'underline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Tab: React.FC<TabProps> = ({
  tabs,
  defaultActiveTab,
  className = '',
  onChange,
  variant = 'default',
  size = 'medium',
  fullWidth = false,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0]?.id || ''
  );
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (defaultActiveTab) {
      setActiveTab(defaultActiveTab);
    }
  }, [defaultActiveTab]);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, tabId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTabClick(tabId);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const currentIndex = tabs.findIndex((tab) => tab.id === tabId);
      const nextIndex = (currentIndex + 1) % tabs.length;
      const nextTab = tabs[nextIndex];
      if (!nextTab.disabled) {
        handleTabClick(nextTab.id);
        focusTab(nextTab.id);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const currentIndex = tabs.findIndex((tab) => tab.id === tabId);
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      const prevTab = tabs[prevIndex];
      if (!prevTab.disabled) {
        handleTabClick(prevTab.id);
        focusTab(prevTab.id);
      }
    } else if (e.key === 'Home') {
      e.preventDefault();
      const firstEnabledTab = tabs.find((tab) => !tab.disabled);
      if (firstEnabledTab) {
        handleTabClick(firstEnabledTab.id);
        focusTab(firstEnabledTab.id);
      }
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastEnabledTab = [...tabs].reverse().find((tab) => !tab.disabled);
      if (lastEnabledTab) {
        handleTabClick(lastEnabledTab.id);
        focusTab(lastEnabledTab.id);
      }
    }
  };

  const focusTab = (tabId: string) => {
    const tabElement = document.getElementById(`tab-${tabId}`);
    if (tabElement) {
      tabElement.focus();
    }
  };

  const getTabClasses = (isActive: boolean, isDisabled: boolean) => {
    const baseClasses = 'tab-item focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2';
    
    const variantClasses = {
      default: isActive 
        ? 'border-b-2 border-primary-500 text-primary-600' 
        : 'border-b-2 border-transparent text-surface-text-secondary hover:text-primary-500 hover:border-primary-300',
      pills: isActive 
        ? 'bg-primary-100 text-primary-700' 
        : 'bg-surface-background-secondary text-surface-text-secondary hover:bg-surface-background-tertiary',
      underline: isActive 
        ? 'border-b-2 border-primary-500 text-primary-600' 
        : 'border-b-2 border-transparent text-surface-text-secondary hover:text-primary-500 hover:border-primary-300',
    };
    
    const sizeClasses = {
      small: 'px-3 py-1.5 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-5 py-2.5 text-lg',
    };
    
    const disabledClasses = isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`;
  };

  return (
    <div className={`tabs ${className}`}>
      <div 
        className={`tab-list flex ${fullWidth ? 'w-full' : ''} ${
          variant === 'pills' ? 'space-x-1' : ''
        }`}
        role="tablist"
        ref={tabListRef}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isDisabled = tab.disabled || false;
          
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={getTabClasses(isActive, isDisabled)}
              onClick={() => !isDisabled && handleTabClick(tab.id)}
              onKeyDown={(e) => !isDisabled && handleKeyDown(e, tab.id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              disabled={isDisabled}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      
      <div className="tab-content mt-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          
          return (
            <div
              key={tab.id}
              id={`tabpanel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={isActive ? 'block' : 'hidden'}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
