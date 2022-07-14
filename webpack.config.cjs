const path = require('path');
const createAppPath = appName => path.resolve(__dirname, 'front', 'js', 'apps', `${appName}.js`);

const getJSConfig = (env = { mode: 'development' }) => {
  const config = {
    mode: 'development',
    entry: {
      bannercarousel: createAppPath('bannerCarousel'),
      homebottomcarousel: createAppPath('homeBottomCarousel'),
      servicesgallery: createAppPath('servicesGallery'),
      interestform: createAppPath('interestForm'),
      teamgallery: createAppPath('teamGallery'),
      home: createAppPath('home'),
      gallery: createAppPath('gallery')
    },
    output: {
      path: path.join(__dirname, '/static/js'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      enforceExtension: false,
      modules: [
        path.resolve(__dirname, 'front', 'js'),
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'front', 'js', 'ui'),
        path.resolve(__dirname, 'front', 'js', 'utils'),
        path.resolve(__dirname, 'front', 'js', 'services')
      ]
    }
  }

  return config;
};

module.exports = [getJSConfig];