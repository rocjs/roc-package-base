const execShell = require('shelljs').exec;
const execute = require('roc').execute;
const executeSync = require('roc').executeSync;

module.exports = {
    execShell: execShell,
    exec: execute,
    execSync: executeSync
};
