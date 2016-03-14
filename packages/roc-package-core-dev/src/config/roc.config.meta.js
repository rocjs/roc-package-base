import {
    isString,
    isPath,
    isArray
} from 'roc/validators';

const meta = {
    settings: {
        descriptions: {
            dev: {
                debug: 'Filter for debug messages that should be shown during development, see ' +
                    'https://npmjs.com/package/debug.'
            },

            build: {
                targets: 'For what targets the code should be built for.',
                input: 'The entry point for the build.',
                output: 'The output directory for the build.'
            }
        },

        validations: {
            dev: {
                debug: isString
            },

            build: {
                targets: isArray(),
                input: isPath,
                output: isPath
            }
        }
    },

    commands: {
        build: {
            description: 'Not implemented.'
        },
        clean: {
            settings: ['build'],
            description: 'Cleans the current project.'
        },
        dev: {
            description: 'Not implemented.'
        }
    }
};

/**
 * Gives the package dev meta configuration.
 *
 * @returns {object} - Returns the package dev meta configuration.
 */
export default meta;
