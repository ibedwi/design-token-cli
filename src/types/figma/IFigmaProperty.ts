/**
 * An RGBA Color
 */
export interface IFigmaColor {
  // Red channel value, between 0 and 1
  r: number;
  // Green channel value, between 0 and 1
  g: number;
  // Blue channel value, between 0 and 1
  b: number;
  // Alpha channel value, between 0 and 1
  a: number;
}

/**
 * Format and size to export an asset at
 */
export interface IFigmaExportSetting {
  // File suffix to append to all filenames
  suffix: string;
  // Image type, string enum that supports values JPG, PNG, and SVG
  format: "JPG" | "PNG" | "SVG";

  constraint: IConstraint;
}

/**
 * Sizing constraint for exports
 */
export interface IConstraint {
  // Type of constraint to apply; string enum with potential values below
  // SCALE: Scale by value
  // WIDTH: Scale proportionally and set width to value
  // HEIGHT: Scale proportionally and set height to value
  type: "SCALE" | "WIDTH" | "HEIGHT";

  // See type property for effect of this field
  value: number;
}

/**
 * This type is a string enum with the following possible values
 * Normal blends:
 * PASS_THROUGH (only applicable to objects with children)
 * NORMAL
 *
 * Darken:
 * DARKEN
 * MULTIPLY
 * LINEAR_BURN
 * COLOR_BURN
 *
 * Lighten:
 * LIGHTEN
 * SCREEN
 * LINEAR_DODGE
 * COLOR_DODGE
 *
 * Contrast:
 * OVERLAY
 * SOFT_LIGHT
 * HARD_LIGHT
 *
 * Inversion:
 * DIFFERENCE
 * EXCLUSION
 *
 * Component:
 * HUE
 * SATURATION
 * COLOR
 * LUMINOSITY
 */
export type TBlendMode =
  // Normal Blends
  | "PASS_THROUGH"
  | "NORMAL"
  // Darken
  | "DARKEN"
  | "MULTIPLY"
  | "LINEAR_BURN"
  | "COLOR_BURN"
  // Lighten
  | "LIGHTEN"
  | "SCREEN"
  | "LINEAR_DODGE"
  | "COLOR_DODGE"
  // Contrast
  | "OVERLAY"
  | "SOFT_LIGHT"
  | "HARD_LIGHT"
  // Inversion
  | "DIFFERENCE"
  | "EXCLUSION"
  // Component
  | "HUE"
  | "SATURATION"
  | "COLOR"
  | "LUMINOSITY";
