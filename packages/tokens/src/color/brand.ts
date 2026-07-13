/**
 * ============================================================================
 * NAYAUI Design System
 * Brand Color Tokens
 * ----------------------------------------------------------------------------
 * Brand tokens define a company's identity.
 * They map primitive colors to the brand.
 *
 * Components MUST NOT consume brand tokens directly.
 * Components should consume Semantic Tokens.
 * ============================================================================
 */

import { primitiveColors } from "./primitive";

export const brandColors = {
  /**
   * Primary Brand
   */
  primary: {
    50: primitiveColors.primary[50],
    100: primitiveColors.primary[100],
    200: primitiveColors.primary[200],
    300: primitiveColors.primary[300],
    400: primitiveColors.primary[400],
    500: primitiveColors.primary[500],
    600: primitiveColors.primary[600],
    700: primitiveColors.primary[700],
    800: primitiveColors.primary[800],
    900: primitiveColors.primary[900],
    950: primitiveColors.primary[950],
  },

  /**
   * Secondary Brand
   */
  secondary: {
    50: primitiveColors.secondary[50],
    100: primitiveColors.secondary[100],
    200: primitiveColors.secondary[200],
    300: primitiveColors.secondary[300],
    400: primitiveColors.secondary[400],
    500: primitiveColors.secondary[500],
    600: primitiveColors.secondary[600],
    700: primitiveColors.secondary[700],
    800: primitiveColors.secondary[800],
    900: primitiveColors.secondary[900],
    950: primitiveColors.secondary[950],
  },

  /**
   * Accent Brand
   */
  accent: {
    50: primitiveColors.blue[50],
    100: primitiveColors.blue[100],
    200: primitiveColors.blue[200],
    300: primitiveColors.blue[300],
    400: primitiveColors.blue[400],
    500: primitiveColors.blue[500],
    600: primitiveColors.blue[600],
    700: primitiveColors.blue[700],
    800: primitiveColors.blue[800],
    900: primitiveColors.blue[900],
    950: primitiveColors.blue[950],
  },
} as const;

export type BrandColors = typeof brandColors;
