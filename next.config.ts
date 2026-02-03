/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Enable experimental features if needed
    experimental: {
        // Add experimental features here
    },
}

export default nextConfig
