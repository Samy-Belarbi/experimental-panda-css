import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        $bg: { value: "#eddcd3" },
        $colorFaceParts: { value: "#333232" },
        $colorHead: { value: "#f6efee" },
      },
    },
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",
});
