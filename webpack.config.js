const path = require('path')

function toAbsPath(...args) {
  return path.join(__dirname, ...args)
}

const SRC_ROOT = './'
const SRC_CLIENT = './client'
const DIST_PUBLIC = './dist/public'

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [toAbsPath(SRC_ROOT), 'node_modules']
  },
  entry: {
    bootstrap: toAbsPath(SRC_CLIENT, 'index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.client.json'
            }
          }
        ]
      }
    ]
  },
  output: {
    path: toAbsPath(DIST_PUBLIC),
    publicPath: '/assets/'
  }
}
