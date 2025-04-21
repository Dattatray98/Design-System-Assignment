/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace React {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
} 