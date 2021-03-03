type theme = {
  alpha: number;
  degree: number;
};

const colors = {
  // #45404A
  primaryDark: (alpha?: theme['alpha']) => `hsla(270, 7%, 27%, ${alpha || 1})`,
  // #6A57DC
  primary: (alpha?: theme['alpha']) => `hsla(249, 66%, 60%, ${alpha || 1})`,
  // #A883F8
  secondary: (alpha?: theme['alpha']) => `hsla(259, 89%, 74%, ${alpha || 1})`,
  // #C5C8FB
  secondaryLight: (alpha?: theme['alpha']) =>
    `hsla(237, 87%, 88%, ${alpha || 1})`,
  // #3BFFB7
  accentOne: (alpha?: theme['alpha']) => `hsla(158, 100%, 62%, ${alpha || 1})`,
  // #FF471F
  accentTwo: (alpha?: theme['alpha']) => `hsla(11, 100%, 56%, ${alpha || 1})`,
  // #E39862
  accentThree: (alpha?: theme['alpha']) => `hsla(25, 70%, 64%, ${alpha || 1})`,
  // linear-gradient(150deg, hsla(11, 70%, 64%, 1), hsla(22, 70%, 64%, 1))
  accentFour: (degree?: theme['degree']) =>
    `linear-gradient(${
      degree || 150
    }deg, hsla(11, 70%, 64%, 1), hsla(22, 70%, 64%, 1))`,
  // #120D17
  black: (alpha?: theme['alpha']) => `hsla(270, 28%, 7%, ${alpha || 1})`,
  // #4D4D4D
  grayDark: (alpha?: theme['alpha']) => `hsla(0, 0%, 30%, ${alpha || 1})`,
  // #E5E5E5
  gray: (alpha?: theme['alpha']) => `hsla(0, 0%, 90%, ${alpha || 1})`,
  // #F2F2F2
  grayLight: (alpha?: theme['alpha']) => `hsla(0, 0%, 95%, ${alpha || 1})`,
  // hsla(270, 28%, 7%, 0.2)
  shadow: (alpha?: theme['alpha']) => `hsla(270, 28%, 7%, ${alpha || 0.2})`,
  // #FFFFF4
  offWhite: (alpha?: theme['alpha']) => `hsla(60, 100%, 98%, ${alpha || 1})`,
  // #ffffff
  white: (alpha?: theme['alpha']) => `hsla(0, 0%, 100%, ${alpha || 1})`,
};

const sizes = {
  xs: 480,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1400,
};

const layers = {
  layer0: -1,
  layer1: 250,
  layer2: 500,
  layer3: 750,
  layer4: 1000,
  layer5: 9999,
};

const theme = {
  lightMode: {
    background: colors.white,
    backgroundAlt: colors.gray,
    card: {
      background: colors.offWhite,
      text: colors.black,
      alt: {
        background: colors.primaryDark,
        text: colors.offWhite,
      },
    },
    text: colors.black,
    focusUnderline: colors.grayDark,
    scrollbar: colors.primary,
    boxShadow: `0 0.3rem 0.6rem ${colors.primaryDark(
      0.16
    )}, 0 0.3rem 0.6rem ${colors.primaryDark(0.23)}`,
    link: {
      default: colors.primary,
      hover: colors.accentThree,
    },
    button: {
      primarySolo: {
        text: colors.white,
        background: colors.primary,
        border: colors.primary,
        focus: colors.primaryDark,
        focusAlt: colors.secondaryLight,
      },
      primary: {
        text: colors.white,
        background: colors.primary,
        border: colors.primary,
        focus: colors.primaryDark,
        focusAlt: colors.secondaryLight,
      },
      secondary: {
        text: colors.primary,
        background: `transparent`,
        border: colors.primary,
        focus: colors.primaryDark,
        focusAlt: colors.secondaryLight,
      },
      disabled: {
        text: colors.grayDark,
        background: `transparent`,
        border: colors.grayDark,
      },
    },
    input: {
      border: `3px solid ${colors.grayDark()}`,
      focusColor: colors.secondary,
    },
  },
  darkMode: {
    background: colors.black,
    backgroundAlt: colors.black,
    card: {
      background: colors.grayDark,
      text: colors.offWhite,
      alt: {
        background: colors.gray,
        text: colors.primaryDark,
      },
    },
    text: colors.offWhite,
    focusUnderline: colors.grayDark,
    scrollbar: colors.secondary,
    boxShadow: `0 0.3rem 0.6rem ${colors.primaryDark(
      0.16
    )}, 0 0.3rem 0.6rem ${colors.primaryDark(0.23)}`,
    link: {
      default: colors.secondary,
      hover: colors.secondaryLight,
    },
    button: {
      primarySolo: {
        text: colors.white,
        background: colors.secondary,
        border: colors.secondary,
        focus: colors.secondaryLight,
        focusAlt: colors.primaryDark,
      },
      primary: {
        text: colors.white,
        background: colors.secondary,
        border: colors.secondary,
        focus: colors.secondaryLight,
        focusAlt: colors.primaryDark,
      },
      secondary: {
        text: colors.secondary,
        background: `transparent`,
        border: colors.secondary,
        focus: colors.secondaryLight,
        focusAlt: colors.primaryDark,
      },
      disabled: {
        text: colors.gray,
        background: `transparent`,
        border: colors.gray,
      },
    },
    input: {
      border: `3px solid ${colors.grayDark()}`,
      focusColor: colors.primary,
    },
  },
};

export { colors, sizes, layers, theme };
