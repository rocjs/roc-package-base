import cleanPromise from '../helpers/clean-promise';
import isString from 'lodash/isString';

/**
 * Cleans the build files.
 * *
 * @param {object} rocCommandObject - A command object
 */
export default function clean({ configObject: { settings }}) {
    const toClean = isString(settings.build.output) ?
        [cleanPromise(settings.build.output)] :
        Object.keys(settings.build.output)
            .map((prop) => cleanPromise(settings.build.output[prop]));

    Promise.all(toClean)
        .then(() => {
            /* eslint-disable no-console */
            console.log('Cleaned build directories!');
            /* eslint-enable */
        });
}
