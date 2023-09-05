/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.alias['follow-redirects/debug'] = './node_modules/follow-redirects/debug';
        }
    
        return config;
      },
}

module.exports = nextConfig
