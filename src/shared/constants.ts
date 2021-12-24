const RUBLE_SIGN = '₽';

enum COLORS {
  dark = '#1f2041',
  dark75 = 'rgba(31, 32, 65, .75)',
  dark50 = 'rgba(31, 32, 65, .50)',
  dark30 = 'rgba(31, 32, 65, .30)',
  dark25 = 'rgba(31, 32, 65, .25)',
  dark10 = 'rgba(31, 32, 65, .1)',
  dark5 = 'rgba(31, 32, 65, .05)',
  white = '#fff',
  purple = '#bc9cff',
  green = '#6fcf97',
  black = '#000',
};

enum GRADIENTS {
  purple = 'linear-gradient(180deg, #bc9cff 0%, #8BA4F9 100%)',
  green = 'linear-gradient(180deg, #6fcf97 0%, #66D2EA 100%)',
  yellow = 'linear-gradient(180deg, #FFE39C 0%, #FFBA9C 100%)',
  gray = 'linear-gradient(180deg, #919191 0%, #3D4975 100%)',
};

enum BREAKPOINTS {
  xxs = 320,
  xs = 575,
  sm = 767,
  md = 991,
  lg = 1199,
  xl = 1440,
};

export {
  RUBLE_SIGN, COLORS, GRADIENTS, BREAKPOINTS,
};
