module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    cursorColor: 'rgba(204, 120, 250, 0.5)',
    cursorAccentColor: '#282629',
    foregroundColor: '#E0DCE0',
    backgroundColor: '#282629',
    selectionColor: 'rgba(102, 191, 255, 0.09999999999999998)',
    borderColor: '#26C99E',
    colors: {
      black: '#282629',
      red: '#FF4050',
      green: '#A4CC35',
      yellow: '#FFD24A',
      blue: '#66BFFF',
      magenta: '#F553BF',
      cyan: '#26C99E',
      white: '#E0DCE0',
      lightBlack: '#474247',
      lightRed: '#F28144',
      lightGreen: '#A4CC35',
      lightYellow: '#FFD24A',
      lightBlue: '#66BFFF',
      lightMagenta: '#F553BF',
      lightCyan: '#26C99E',
      lightWhite: '#FFFCFF',
    },
  });
};