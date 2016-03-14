const meta = {
    commands: {
        'list-settings': {
            description: 'Prints all the available settings that can be changed.'
        },
        'markdown-settings': {
            description: 'Prints all the available settings that can be changed in a markdown format.'
        },
        'markdown-hooks': {
            description: 'Prints all the registered hooks in a markdown format.'
        },
        'markdown-actions': {
            description: 'Prints all the registered actions in a markdown format.'
        }
    }
};

/**
 * Gives the package meta configuration.
 *
 * @returns {object} - Returns the package meta configuration.
 */
export default meta;
