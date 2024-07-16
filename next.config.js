/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'mqgoqkhkbjcxdwiyttdg.supabase.co',
      'dxopeluemaqsycxtzmwz.supabase.co'
    ],
  },

  webpack: (config) => {
    config.externals.push('encoding', /* add any other modules that might be causing the error */);
    return config;
  },
};

module.exports = nextConfig;