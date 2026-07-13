/**
 * ============================================================================
 * NAYAUI Design System
 * Line Height Tokens
 * ============================================================================
 */

export const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export type LineHeight = typeof lineHeight;
