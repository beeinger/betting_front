const withCSS = require("@zeit/next-css");

const nextConfig = {
  cssLoaderOptions: {
    url: false
  }
};

module.exports = withCSS(nextConfig);
