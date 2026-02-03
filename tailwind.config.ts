import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ["var(--font-playfair)", "Georgia", "Cambria", "serif"],
                sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
            },
            aspectRatio: {
                "portrait": "3/4",
                "landscape": "4/3",
            },
        },
    },
    plugins: [],
};

export default config;
