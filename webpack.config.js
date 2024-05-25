// webpack.config.js
module.exports = {
    // ...outras configurações...
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'assets/images',
              },
            },
          ],
        },
      ],
    },
  };
  