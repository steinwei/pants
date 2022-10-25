const fs = require('fs')
const version = require('../package.json').version
const path = require('path')

fs.writeFileSync(path.resolve(__dirname, '../src/version.ts'), `export default '${version}'`, 'utf-8')
