/**
 * ============================================================================
 * NAYAUI Design System
 * Border Style Tokens
 * ============================================================================
 */

export const borderStyle = {
  solid: "solid",
  dashed: "dashed",
  dotted: "dotted",
  double: "double",
  none: "none",
} as const;

export type BorderStyle = typeof borderStyle;
