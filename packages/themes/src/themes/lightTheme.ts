import {
  spacing,
  radius,
  borderWidth,
  borderStyle,
  breakpoints,
  brandColors,
  primitiveColors,
  semanticColors,
  duration,
  easing,
  opacity,
  shadow,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  zIndex,
} from "@nayaui/tokens";

import { createTheme } from "../createTheme";

export const lightTheme = createTheme({
  brandColors,
  primitiveColors,
  semanticColors,

  spacing,

  borderWidth,
  borderStyle,
  radius,

  breakpoints,

  duration,
  easing,

  opacity,
  shadow,

  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,

  zIndex,
});
