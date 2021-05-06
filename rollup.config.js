export default {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/esm',
      format: 'esm',
      exports: 'auto',
      sourcemap: true,
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
  ],
};
