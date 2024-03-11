/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
    headers: () => [
        {
            source: "/:path",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store",
                },
            ],
        },
    ],
};

module.exports = nextConfig;
