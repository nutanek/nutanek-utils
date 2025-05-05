import fs from 'fs'
import path from 'path'

const srcDir = './src'
const pkgPath = './package.json'

// Read all .ts files from src/
const files = fs.readdirSync(srcDir).filter((file) => file.endsWith('.ts'))

// Build the exports field for package.json
const exportsField = {
  '.': {
    types: './dist/types/index.d.ts',
    import: './dist/esm/index.mjs',
    require: './dist/cjs/index.cjs',
  },
}

for (const file of files) {
  const name = path.basename(file, '.ts')
  if (name === 'index') continue // ✅ Skip index.ts from subpath exports

  exportsField[`./${name}`] = {
    types: `./dist/types/${name}.d.ts`,
    import: `./dist/esm/${name}.mjs`,
    require: `./dist/cjs/${name}.cjs`,
  }
}

// Update package.json
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
pkg.exports = exportsField
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))

console.log('✅ Updated exports field in package.json')
