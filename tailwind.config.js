// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   // NOTE: Update this to include the paths to all files that contain Nativewind classes.
//   content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: { extend: {
    colors: {
        primary: "#FFBE46",
        // secondary: "#282828",
        placeholder: "#282828",
        // grayLight: "#464646",
        // accent: "#06D6A0",
        // dark: "#1C1C1C",
      },
  } },
  plugins: [],
};
