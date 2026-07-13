/**
 * ============================================================================
 * NAYAUI Design System
 * Shadow Tokens
 * ----------------------------------------------------------------------------
 * Elevation shadows used across the design system.
 * Components should use these tokens instead of hardcoded box-shadows.
 * ============================================================================
 */

export const shadow = {
  none: "none",

  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",

  sm: "0 1px 3px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.06)",

  md: "0 4px 6px rgba(0, 0, 0, 0.10), 0 2px 4px rgba(0, 0, 0, 0.06)",

  lg: "0 10px 15px rgba(0, 0, 0, 0.10), 0 4px 6px rgba(0, 0, 0, 0.05)",

  xl: "0 20px 25px rgba(0, 0, 0, 0.12), 0 8px 10px rgba(0, 0, 0, 0.06)",

  "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",

  inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
} as const;

export type Shadow = typeof shadow;
