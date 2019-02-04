const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts(
    withImages({
      webpack(config, options) {
        return config;
      },
    }),
  ),
);
