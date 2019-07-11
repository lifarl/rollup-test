import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import visualizer from 'rollup-plugin-visualizer'
import ts from '@wessberg/rollup-plugin-ts'
import commonjs from 'rollup-plugin-commonjs'

// import { terser } from 'rollup-plugin-terser'
// import svgr from '@svgr/rollup'

export default [
  // browser-friendly UMD build
	// {
	// 	input: 'src/main.tsx',
	// 	output: {
	// 		name: 'rollup-test',
	// 		file: pkg.browser,
  //     format: 'umd',
  //     sourcemap: true
	// 	},
	// 	plugins: [
  //     resolve({
  //       extensions: ['.js', '.jsx', '.ts', '.tsx' ]
  //     }),   // so Rollup can find `ms`
  //     commonjs({
  //       namedExports: {
  //         'node_modules/react/index.js': ['createElement'],
  //         'node_modules/react-dom/index.js': ['render']
  //       }
  //     }),  // so Rollup can convert `ms` to an ES module
  //     typescript(), // so Rollup can convert TypeScript to JavaScript
  //     postcss({
  //       plugins: [],
  //       minimize: true,
  //       sourceMap: 'inline',
  //     }),
  //     tsx(),
	// 	]
	// },
	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'src/main.tsx',
		// external: ['ms'],
		output: [
      // { 
      //   file: pkg.main,
      //   format: 'cjs',
      //   sourcemap: true
      // },
			{
        file: pkg.module,
        format: 'es',
        sourcemap: true        
      }
    ],
    external: [
      'react',
      'react-dom'
    ],
    plugins: [
      resolve(),
      ts({}),
      postcss({
        plugins: [],
        minimize: true,
        sourceMap: 'inline',
      }),
      filesize(),
      progress({ clearLine: false }),
      visualizer({
        filename: './bundleStats.html',
        title: 'Bundle Stats',
      }),
      commonjs({
        namedExports: {
          'node_modules/react/index.js': ['createElement'],
          'node_modules/react-dom/index.js': ['render']
        }
      }),
      // svgr(),
      // terser(),
    ],
	}
];