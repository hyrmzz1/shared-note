/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      //Grayscale Colors
      white: "#FFFFFF",
      gray50: "#FAFAFA",
      gray100: "#F5F5F5",
      gray200: "#EFEFEF",
      gray300: "#E2E2E2",
      gray400: "#BFBFBF",
      gray500: "#A0A0A0",
      gray600: "#77777",
      gray700: "#636363",
      gray800: "#44444",
      gray900: "#232527",
      black: "#00000",

      //State Colors
      red: "#FF0101",
      orange: "#FFB724",
      blue: "#2768FF",

      text_default: "#232527",
      text_sub: "#444444",
      text_info: "#777777",
      text_disabled: "#A0A0A0",
      text_success: "#2768FF",
      text_error: "#FF0101",

      icon_default: "#444444",
      icon_sub: "#777777",
      icon_disabled: "#BFBFBF",

      border_defalut: "#BFBFBF",
      border_sub: "#A0A0A0",
      border_disabled: "#EFEFEF",

      divider_default: "#E2E2E2",
      divider_stong: "#A0A0A0",

      Bg_default: "#FFFFFF",
      Bg_light: "#FAFAFA",
      Bg_deep: "#F5F5F5",
    },
  },
  plugins: [],
};
