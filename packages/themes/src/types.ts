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

export interface Theme {
  spacing: typeof spacing;
  borderWidth: typeof borderWidth;
  borderStyle: typeof borderStyle;
  radius: typeof radius;
  breakpoints: typeof breakpoints;
  brandColors: typeof brandColors;
  primitiveColors: typeof primitiveColors;
  semanticColors: typeof semanticColors;
  duration: typeof duration;
  easing: typeof easing;
  opacity: typeof opacity;
  shadow: typeof shadow;
  fontFamily: typeof fontFamily;
  fontSize: typeof fontSize;
  fontWeight: typeof fontWeight;
  letterSpacing: typeof letterSpacing;
  lineHeight: typeof lineHeight;
  zIndex: typeof zIndex;
}
