export const getRandomHexColor = () => {
  const blueMin = 100;
  const blueMax = 255;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * (blueMax - blueMin + 1) + blueMin);
  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
