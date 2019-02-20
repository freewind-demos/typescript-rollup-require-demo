import typescript from 'rollup-plugin-typescript2';

export default [{
  input: 'hello.ts',
  plugins: [typescript()],
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  external: ['lodash']
}, {
  input: 'hello.ts',
  plugins: [typescript()],
  output: {
    file: 'bundle.mjs',
    format: 'esm',
  },
  external: ['lodash']
}
]
