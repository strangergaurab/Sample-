// const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// module.exports = async function(env, argv) {
//     const config = await createExpoWebpackConfigAsync({
//         ...env,
//         babel: {
//             dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
//         }
//     }, argv);
//     return config;
// };
// webpack.config.js

module.exports = {
    // ...other webpack configuration settings
  
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-optional-chaining'] // Add this plugin
            }
          }
        },
        // ...other loader rules
      ]
    },
  
    // ...other webpack configuration settings
  };
  