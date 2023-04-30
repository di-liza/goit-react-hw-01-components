export const theme = Object.freeze({
  colors: {
    white: '#fff',
    black: '#010101',
    grey: '#b4b3b3',
    green: '#4caf50',
    red: '#f44336',
    blue: '#8bc5e9',
    tableBorder: '#ccc',
    boxShadowColor: 'rgba(0, 0, 0, 0.1)',
    primaryText: '#212121',
    secondaryText: '#757575,',
  },
  spacing: (topBott, leftRight) => `${topBott * 2}px ${leftRight * 2}px`,
});
