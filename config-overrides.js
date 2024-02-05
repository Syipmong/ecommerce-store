// config-overrides.js

module.exports = function override(config, env) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    };
  
    return config;
  };
  