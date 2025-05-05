import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import glob from 'fast-glob'

const input = await glob(['src/*.ts'])

const plugins = [
  resolve(),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: false,
    emitDeclarationOnly: false,
  }),
]

export default [
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].mjs',
      sourcemap: true,
    },
    plugins,
    external: ['tslib'],
    treeshake: {
      moduleSideEffects: false,
    },
  },
  {
    input,
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs',
      sourcemap: true,
    },
    plugins,
    external: ['tslib'],
    treeshake: {
      moduleSideEffects: false,
    },
  },
]
