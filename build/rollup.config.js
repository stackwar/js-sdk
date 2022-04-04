const babel = require('rollup-plugin-babel')
// const typescript = require('@rollup/plugin-typescript');

module.exports = [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'iife',
      name: 'helloworld',
    }, 
    plugins: [
      // typescript(),
      babel({
        babelrc: false,
            presets: [
          ['@babel/preset-env', { modules: false }]
        ],
        plugins: [
          ["@babel/plugin-transform-classes", {
            "loose": true
          }]
        ]
      }),
    ],
  },
]