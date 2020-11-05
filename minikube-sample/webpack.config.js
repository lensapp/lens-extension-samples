const path = require('path');

module.exports = [
  {
    entry: './main',
    context: __dirname,
    target: "electron-main",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    externals: [
      {
        "@k8slens/extensions": "var global.LensExtensions",
        "react": "var global.React",
        "mobx": "var global.Mobx"
      },
      "@kubernetes/client-node"
    ],
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      libraryTarget: "commonjs2",
      globalObject: "this",
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
  },
];
