const join = require('path').join;
const execSync = require('./util').execSync;
const name = require('../package.json').name;
const babel = join(__dirname, '..', 'node_modules', '.bin', 'babel');

const babelCommand = (packageName) =>
    `${babel} packages/${packageName}/src --out-dir  packages/${packageName}/lib --source-maps`;

execSync(`${babelCommand(name)} & ${babelCommand(name + '-dev')}`);
