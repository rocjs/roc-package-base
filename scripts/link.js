const execSync = require('./util').execSync;
const name = require('../package.json').name;

execSync(`cd packages/${name} && npm link & cd ../../packages/${name}-dev && npm link ${name} && npm link`);
