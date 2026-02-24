/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Ensure CSS is correctly handled
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
};

export default nextConfig;
