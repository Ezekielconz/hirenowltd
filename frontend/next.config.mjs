/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Local dev media
      { protocol: 'http',  hostname: 'localhost', port: '1337', pathname: '/uploads/**' },

      // Strapi Cloud API host (JSON, admin, etc.) – keep this placeholder
      { protocol: 'https', hostname: 'https://successful-benefit-b57e4c2a6b.strapiapp.com', pathname: '/uploads/**' },

      // Strapi Cloud media CDN (automatic)
      { protocol: 'https', hostname: '*.media.strapiapp.com', pathname: '/**' },
    ],
  },
  // Expose env so client-side code can read it
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_PUBLIC_STRAPI_API_TOKEN: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
  },
};

export default nextConfig;
