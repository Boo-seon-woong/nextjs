/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    assetPrefix:
        process.env.NODE_ENV === "production"
        ? "https://boo-seon-woong.github.io/nextjs" : "",
};

export default nextConfig;
