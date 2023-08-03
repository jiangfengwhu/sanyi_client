module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./app'],
        alias: {
          '@bridges': './app/bridges',
          '@utils': './app/utils',
          '@pages': './app/pages',
          '@themes': './app/themes',
          '@routes': './app/routes',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
  ],
};
