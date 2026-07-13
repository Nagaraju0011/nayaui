/**
 * ============================================================================
 * NAYAUI Design System
 * Semantic Color Tokens
 * ----------------------------------------------------------------------------
 * Semantic colors represent UI meaning.
 * Components MUST consume only semantic colors.
 * ============================================================================
 */

import { primitiveColors } from "./primitive";
import { brandColors } from "./brand";

export const semanticColors = {
  /**
   * Brand
   */
  brand: {
    primary: brandColors.primary[900],
    secondary: brandColors.secondary[500],
    accent: brandColors.secondary[500],
  },

  /**
   * Background
   */
  background: {
    primary: primitiveColors.white,
    secondary: primitiveColors.gray[50],
    tertiary: primitiveColors.gray[100],
    inverse: primitiveColors.gray[900],
  },

  /**
   * Surface
   */
  surface: {
    primary: primitiveColors.white,
    secondary: primitiveColors.gray[50],
    elevated: primitiveColors.white,
    disabled: primitiveColors.gray[100],
  },

  /**
   * Text
   */
  text: {
    primary: primitiveColors.gray[900],
    secondary: primitiveColors.gray[700],
    tertiary: primitiveColors.gray[500],
    disabled: primitiveColors.gray[400],
    inverse: primitiveColors.white,
    link: primitiveColors.blue[600],
  },

  /**
   * Border
   */
  border: {
    default: primitiveColors.gray[300],
    subtle: primitiveColors.gray[200],
    strong: primitiveColors.gray[500],
    focus: primitiveColors.blue[500],
    disabled: primitiveColors.gray[200],
  },

  /**
   * Button
   */
  button: {
    primary: {
      background: primitiveColors.orange[500],
      hover: primitiveColors.orange[600],
      active: primitiveColors.orange[700],
      text: primitiveColors.white,
      disabled: primitiveColors.gray[300],
    },

    secondary: {
      background: primitiveColors.gray[100],
      hover: primitiveColors.gray[200],
      active: primitiveColors.gray[300],
      text: primitiveColors.gray[900],
      disabled: primitiveColors.gray[200],
    },

    ghost: {
      background: primitiveColors.transparent,
      hover: primitiveColors.gray[100],
      active: primitiveColors.gray[200],
      text: primitiveColors.orange[500],
    },
  },

  /**
   * Status
   */
  status: {
    success: primitiveColors.green[500],
    warning: primitiveColors.yellow[500],
    danger: primitiveColors.red[500],
    info: primitiveColors.blue[500],
  },

  /**
   * Focus
   */
  focus: {
    ring: primitiveColors.blue[500],
  },

  /**
   * Overlay
   */
  overlay: {
    backdrop: "rgba(0, 0, 0, 0.50)",
  },
} as const;

export type SemanticColors = typeof semanticColors;
