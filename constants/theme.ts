export const colors = {
  primary: "#160C28",
  white: "#EEEEEE"
};

export const radius = {
  small: "15px",
  medium: "25px",
  large: "50px",
  circle: "100%"
};

export const spacing = {
  small: "12px",
  medium: "18px",
  large: "28px",
  xLarge: "42px",
  xxxLarge: "74px"
};

export const shadow = {
  medium: "4px 4px 6px rgba(0, 0, 0, 0.1);"
};

export const border = {
  xSmall: (color: string) => `1px solid ${color}`,
  small: (color: string) => `2px solid ${color}`,
  medium: (color: string) => `3px solid ${color}`
};
