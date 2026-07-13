/**
 * ============================================================================
 * NAYAUI Design System
 * Breakpoint Tokens
 * ----------------------------------------------------------------------------
 * Responsive breakpoints based on a mobile-first approach.
 * ============================================================================
 */

export const breakpoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
} as const;

export type Breakpoints = typeof breakpoints;
