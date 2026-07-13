/**
 * ============================================================================
 * NAYAUI Design System
 * Font Family Tokens
 * ============================================================================
 */

export const fontFamily = {
  sans: `'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,

  serif: `Georgia, Cambria, 'Times New Roman', serif`,

  mono: `'Fira Code', 'Courier New', monospace`,
} as const;

export type FontFamily = typeof fontFamily;
