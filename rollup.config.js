import { uglify } from 'rollup-plugin-uglify';
import buble from '@rollup/plugin-buble';
import vue from 'rollup-plugin-vue';
import { merge } from 'lodash';

const defaultConfig = {
  input: 'src/wrapper.js',
  plugins: [
    vue({ css: true, compileTemplate: true }),
    buble({ transforms: { asyncAwait: false } }),
  ],
  output: {
    name: 'MehFooter',
    exports: 'named',
  },
};

export default [
  merge(defaultConfig, {
    output: {
      format: 'umd',
      file: 'dist/meh-footer.umd.js',
    },
  }),
  merge(defaultConfig, {
    output: {
      format: 'es',
      file: 'dist/meh-footer.esm.js',
    },
  }),
  merge(defaultConfig, {
    plugins: [uglify()],
    output: {
      format: 'iife',
      file: 'dist/meh-footer.min.js',
    },
  }),
];
