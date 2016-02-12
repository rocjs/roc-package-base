import {
    listSettings,
    markdownSettings
} from '../commands';

const rocPackageConfig = {
    settings: {},

    commands: {
        'list-settings': listSettings,
        'markdown-settings': markdownSettings
    },

    plugins: {},

    extensions: []
};

/**
 * Gives the package configuration.
 *
 * @returns {object} - Returns the package configuration.
 */
export default rocPackageConfig;
