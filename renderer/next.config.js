module.exports = {
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/ticket': { page: '/ticket' }
        }
      },
      images: {
        loader: 'imgix',
        domains: [ 'http://pruebas.grupobasa.com.ar/' ],
        path: '',
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
      },
  }