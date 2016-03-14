import {
    generateTextDocumentation,
    generateMarkdownDocumentation,
    generateMarkdownHooks,
    generateMarkdownActions
} from 'roc';

/**
 * List the settings that are possible with the current packages.
 */
export function listSettings({ metaObject, packageConfig }) {
    /* eslint-disable no-console */
    console.log(generateTextDocumentation(packageConfig, metaObject));
    /* eslint-enable */
}

/**
 * List the settings that are possible with the current packages in a markdown format.
 *
 * Tip: Can be used to create Markdown files.
 * `roc markdown-settings > settings.md`
 */
export function markdownSettings({ info: { name }, metaObject, packageConfig }) {
    /* eslint-disable no-console */
    console.log(generateMarkdownDocumentation(name, packageConfig, metaObject));
    /* eslint-enable */
}

/**
 * List the settings that are possible with the current packages.
 *
 * Tip: Can be used to create Markdown files.
 * `roc markdown-hooks > hooks.md`
 */
export function markdownHooks({ info: { name }, hooks }) {
    /* eslint-disable no-console */
    console.log(generateMarkdownHooks(name, hooks));
    /* eslint-enable */
}

/**
 * List the settings that are possible with the current packages in a markdown format.
 *
 * Tip: Can be used to create Markdown files.
 * `roc markdown-actions > actions.md`
 */
export function markdownActions({ info: { name }, actions }) {
    /* eslint-disable no-console */
    console.log(generateMarkdownActions(name, actions));
    /* eslint-enable */
}
