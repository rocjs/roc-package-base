const execSync = require('./util').execSync;
const name = require('../package.json').name;

execSync(`cd packages/${name} && npm run lint & cd packages/${name}-dev && npm run lint`);
