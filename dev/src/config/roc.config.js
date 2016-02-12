import clean from '../commands/clean';

const rocPackageConfig = {
    settings: {
        dev: {
            // We define this here since this is something that several extensions might want to use.
            debug: 'roc:*'
        },

        build: {
            targets: [],
            input: '',
            output: ''
        }
    },

    commands: {
        clean,
        build: () => {
            throw new Error('Not implemented.');
        },
        dev: () => {
            throw new Error('Not implemented.');
        }
    }
};

/**
 * Gives the package dev configuration.
 *
 * @returns {object} - Returns the package configuration.
 */
export default rocPackageConfig;
