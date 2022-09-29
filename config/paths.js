const path = require('path');

module.exports = {
   // Source files
   src: path.resolve(__dirname, '../src'),

   // Production build files
   build: path.resolve(__dirname, '../dist'),

   // Static files that get copied to build folder
   public: path.resolve(__dirname, '../public'),

   //
   alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@my-store': path.resolve(__dirname, '../src/store'),
      '@my-store/*': path.resolve(__dirname, '../src/store/*'),
      '@context': path.resolve(__dirname, '../src/context'),
      '@context/*': path.resolve(__dirname, '../src/context/*'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@constants/*': path.resolve(__dirname, '../src/constants/*'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@pages/*': path.resolve(__dirname, '../src/pages/*'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@styles/*': path.resolve(__dirname, '../src/styles/*'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@components/*': path.resolve(__dirname, '../src/components/*'),
      '@router': path.resolve(__dirname, '../src/router'),
      '@router/*': path.resolve(__dirname, '../src/router/*'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@services/*': path.resolve(__dirname, '../src/services/*'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@assets/*': path.resolve(__dirname, '../src/assets/*'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@utils/*': path.resolve(__dirname, '../src/utils/*'),
      '@models': path.resolve(__dirname, '../src/models'),
      '@models/*': path.resolve(__dirname, '../src/models/*'),
   },
};
