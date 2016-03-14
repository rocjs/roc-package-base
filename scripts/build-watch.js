const join = require('path').join;
const exec = require('./util').exec;
const name = require('../package.json').name;
const babel = join(__dirname, '..', 'node_modules', '.bin', 'babel');

const babelCommandWatch = (packageName) =>
    `${babel} packages/${packageName}/src --out-dir  packages/${packageName}/lib --source-maps --watch`;

exec(`${babelCommandWatch(name)} & ${babelCommandWatch(name + '-dev')}`);
