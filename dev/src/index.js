/**
* Configuration
*
* All extensions must export this for them to be considered valid extensions.
*/
export config from './config/roc.config.js';
export metaConfig from './config/roc.config.meta.js';

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
