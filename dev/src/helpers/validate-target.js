import chalk from 'chalk';

/**
 * Helper function that can be used to validate a project.
 *
 * Will give print an error and terminate the process if it's not valid.
 *
 * @param {string} target - The target.
 * @param {string[]} allowedTargets - The allowed targets.
 * @param {boolean} validate - If it should validate.
 */
export default function validateTarget(target, allowedTargets, validate) {
    if (validate && allowedTargets.indexOf(target) === -1) {
        const feedback = allowedTargets.length === 1 ?
            `${chalk.underline(allowedTargets)}` :
            `one of ${chalk.underline(allowedTargets)}`;
        /* eslint-disable no-process-exit, no-console */
        console.log(chalk.red(`Invalid target, must be ${feedback}. Was instead ${chalk.underline(target)}.`));
        process.exit(1);
        /* eslint-enable */
    }
}
