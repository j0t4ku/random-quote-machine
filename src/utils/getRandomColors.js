import { COLORS } from "../config/colors";

export function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}