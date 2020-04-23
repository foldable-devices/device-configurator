import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {terser } from "rollup-plugin-terser";

export default {
	input: ['src/foldable-device-configurator.js'],
	output: {
		file: 'build/foldable-device-configurator.js',
		format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve(),
		babel(),
		terser()
  ]
};