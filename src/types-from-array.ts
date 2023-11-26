const COLORS = ["VIOLET", "INDIGO", "BLUE", "GREEN", "YELLOW", "ORANGE", "RED"] as const

type ColorType = typeof COLORS[number];

export const getColorIndex = (color: ColorType) => {
  return COLORS.indexOf(color);
}
