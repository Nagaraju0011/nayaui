/**
 * ============================================================================
 * NAYAUI Design System
 * Motion Duration Tokens
 * ============================================================================
 */

export const duration = {
  instant: "0ms",

  fastest: "75ms",
  faster: "100ms",
  fast: "150ms",

  normal: "200ms",

  slow: "300ms",
  slower: "500ms",
  slowest: "700ms",
} as const;

export type Duration = typeof duration;
