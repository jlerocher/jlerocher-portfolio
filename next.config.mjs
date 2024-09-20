/** @type {import('next').NextConfig} */

import { withContentlayer } from "next-contentlayer";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.tailwind-kit.com",
            },
        ],
    },
};

export default withContentlayer(nextConfig);
