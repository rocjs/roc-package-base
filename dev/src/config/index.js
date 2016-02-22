import { merge } from 'roc';
import { rocPackageConfig as config, rocPackageMetaConfig as meta } from 'roc-package-core';

/**
* Gives the package dev configuration merged with the normal one.
 *
 * @returns {object} - Returns the package configuration.
 */
export const rocPackageConfig = merge(config, require('./roc.config.js').default);

/**
 * Gives the package dev meta configuration merged with the normal one.
 *
 * @returns {object} - Returns the package dev meta configuration.
 */
export const rocPackageMetaConfig = merge(meta, require('./roc.config.meta.js').default);
