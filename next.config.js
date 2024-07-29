module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'sismapblog.wpcomstaging.com',
          port: '',
          pathname: '/wp-content/uploads/**',
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  }