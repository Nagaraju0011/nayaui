/**
 * ============================================================================
 * NAYAUI Design System
 * Motion Easing Tokens
 * ============================================================================
 */

export const easing = {
  linear: "linear",

  ease: "ease",

  easeIn: "cubic-bezier(0.4, 0, 1, 1)",

  easeOut: "cubic-bezier(0, 0, 0.2, 1)",

  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export type Easing = typeof easing;
