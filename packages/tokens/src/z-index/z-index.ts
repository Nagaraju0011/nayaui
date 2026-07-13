/**
 * ============================================================================
 * NAYAUI Design System
 * Z-Index Tokens
 * ----------------------------------------------------------------------------
 * Defines the stacking order of UI elements.
 * Components should never use hardcoded z-index values.
 * ============================================================================
 */

export const zIndex = {
  hide: -1,

  auto: "auto",

  base: 0,

  dropdown: 1000,

  sticky: 1010,

  fixed: 1020,

  overlay: 1030,

  drawer: 1040,

  modal: 1050,

  popover: 1060,

  tooltip: 1070,

  toast: 1080,

  notification: 1090,

  maximum: 9999,
} as const;

export type ZIndex = typeof zIndex;
