import { generateTextDocumentation, generateMarkdownDocumentation } from 'roc';

/**
 * List the settings that are possible with the current packages.
 *
 * @param {object} rocCommandObject - A command object
 */
export function listSettings({ metaObject, extensionConfig }) {
    /* eslint-disable no-console */
    console.log(generateTextDocumentation(extensionConfig, metaObject));
    /* eslint-enable */
}

/**
 * List the settings that are possible with the current packages in a markdown format.
 *
 * Tip: Can be used to create Markdown files.
 * `roc markdown-settings > settings.md`
 *
 * @param {object} rocCommandObject - A command object
 */
export function markdownSettings({ metaObject, extensionConfig }) {
    /* eslint-disable no-console */
    console.log(generateMarkdownDocumentation(extensionConfig, metaObject));
    /* eslint-enable */
}
