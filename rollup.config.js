import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import visualizer from 'rollup-plugin-visualizer'
import ts from '@wessberg/rollup-plugin-ts'
import commonjs from 'rollup-plugin-commonjs'

import { terser } from 'rollup-plugin-terser'
import svgr from '@svgr/rollup'

export default [
	{
		input: 'src/main.tsx',
		// external: ['ms'],
		output: [
      // comon js and esm build
      { 
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
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
      svgr(),
      terser(),
    ],
	}
];