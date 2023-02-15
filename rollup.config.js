import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only'
import terser from "@rollup/plugin-terser";

export default {
	input: ['src/foldable-device-configurator.js'],
	output: {
		file: 'dist/foldable-device-configurator.js',
		format: 'es',
		sourcemap: true
	},
	plugins: [
    	resolve(),
		css({
			output: 'bundle.css' 
		}),
		babel({ babelHelpers: 'bundled' }),
		terser()
  ]
};