const join = require('path').join;
const execSync = require('./util').execSync;
const name = require('../package.json').name;
const esdoc = join(__dirname, '..', 'node_modules', '.bin', 'esdoc');

const esdocConfig = require.resolve('../esdoc.js');

const esdocs = (packageName) => `cd packages/${packageName} && ${esdoc} -c ${esdocConfig}`;

execSync(`${esdocs(name)} & ${esdocs(name + '-dev')}`);
