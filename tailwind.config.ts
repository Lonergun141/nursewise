import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F2B5D4',
        'primary-700': '#5639CC',
        'primary-50': '#F4F2FF',
        'success-700': '#027A48',
        'success-50': '#ECFDF3',
      },
      fontFamily:{

      }
    },
  },
  plugins: [],
} satisfies Config;
