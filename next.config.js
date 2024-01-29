/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
    redirects: async () => [
        {
            source: "/:path*",
            has: [
                { type: "host", value: "www.lendysx16.ru" },
                { type: "host", value: "www.lendysx16.vercel.app" },
            ],
            destination: "https://lendysx16.ru/:path*",
            permanent: true,
        },
    ],
};

module.exports = nextConfig;
