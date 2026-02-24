import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                accent: "#2563eb",
            },
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [],
};
export default config;
