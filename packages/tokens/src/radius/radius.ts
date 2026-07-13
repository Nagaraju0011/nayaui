/**
 * ============================================================================
 * NAYAUI Design System
 * Radius Tokens
 * ----------------------------------------------------------------------------
 * Border radius values used throughout the design system.
 * Components should use these tokens instead of hardcoded values.
 * ============================================================================
 */

export const radius = {
  none: "0",

  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",

  full: "9999px",
} as const;

export type Radius = typeof radius;
