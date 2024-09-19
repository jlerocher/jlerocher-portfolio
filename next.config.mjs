/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.tailwind-kit.com",
            },
        ],
    },
};

export default nextConfig;
