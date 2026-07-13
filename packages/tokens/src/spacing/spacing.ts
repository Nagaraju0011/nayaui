/**
 * ============================================================================
 * NAYAUI Design System
 * Spacing Tokens
 * ----------------------------------------------------------------------------
 * Standard spacing scale used for margin, padding, gap and layout.
 * Components should never use hardcoded spacing values.
 * ============================================================================
 */

export const spacing = {
  0: "0",
  px: "1px",

  0.5: "2px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  3.5: "14px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
  40: "160px",
  48: "192px",
  56: "224px",
  64: "256px",
} as const;

export type Spacing = typeof spacing;
