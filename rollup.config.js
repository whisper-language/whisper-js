import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
export default {
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd'
    },
    plugins: [
        resolve(),
        commonjs()
    ]
};