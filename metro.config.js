// metro.config.js

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Base Metro config
const baseConfig = getDefaultConfig(__dirname);

// Your custom options
const customConfig = {
  resetCache: true,
};

// Merge base + custom config
const mergedConfig = mergeConfig(baseConfig, customConfig);

// Wrap with Reanimated config
module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
