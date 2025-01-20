export const hexToRgb = (hex: string) => {
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return { r, g, b }
}

export const getBrightness = (r: number, g: number, b: number) => {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

export const calculateTextColor = (r: number, g: number, b: number) => {
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return brightness > 0.5 ? '#000' : '#fff'
}
