const join = require('path').join;
const execSync = require('./util').execSync;
const name = require('../package.json').name;
const rimraf = join(__dirname, '..', 'node_modules', '.bin', 'rimraf');

const clean = (packageName) => `${rimraf} packages/${packageName}/lib packages/${packageName}/esdocs`;

execSync(`${clean(name)} & ${clean(name + '-dev')}`);
