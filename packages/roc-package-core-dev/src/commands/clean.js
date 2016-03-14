import cleanPromise from '../helpers/clean-promise';

import { invokeHook } from '../roc';

/**
 * Cleans the build files.
 */
export default function clean({ configObject: { settings }}) {
    /*
    * Using hooks here more for documentation purposes than for actually functionality.
    * Will consider to revert back to not using hooks here, we should only use them when we need to.
    */
    const toClean = invokeHook('before-clean', settings);
    Promise.all(toClean.map((path) => cleanPromise(path)))
        .then(invokeHook('after-clean'));
}
