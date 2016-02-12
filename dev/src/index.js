/**
* Configuration
*
* All extensions must export this for them to be considered valid extensions.
*/
export { rocPackageConfig } from './config';
export { rocPackageMetaConfig } from './config';

/**
* Commands
*
* This is exported for convenance so other extensions can access it.
*/
export clean from './commands/clean';

/**
* Helpers
*
* This is exported for convenance so other extensions can access it.
*/
export validateTarget from './helpers/validate-target';
export cleanPromise from './helpers/clean-promise';
export getValueFromPotentialObject from './helpers/get-value-from-potential-object';
