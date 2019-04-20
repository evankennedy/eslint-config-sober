/* eslint no-console: "off" */
const eslint = require('eslint');
const chalk = require('chalk'); // eslint-disable-line

// The source files to lint.
const repoFiles = [
	'index.js',
	'test.js',
	'spec/*.js',
];

// Use the rules defined in this repo to test against.
const eslintOpts = {
	useEslintrc: true,
};

const colorBySeverity = {
	0: 'gray',
	1: 'yellow',
	2: 'red',
};

// Runs the linter on the repo files and asserts no errors were found.
const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(repoFiles);

if (report.errorCount || report.warningCount) {
	report.results
		.filter(result => result.errorCount || result.warningCount)
		.forEach(result => {
			console.log(chalk.inverse(result.filePath));
			result.messages
				.sort((a, b) => (b.severity - a.severity) || (a.line - b.line) || (a.column - b.column))
				.forEach(message => {
					console.log(`\t${chalk[colorBySeverity[message.severity]](message.message)} (${message.line}:${message.column}, ${message.ruleId})`);
				});
			console.log();
		});

	console.log(chalk.inverse(`Warnings: ${report.warningCount}`));
	console.log(chalk.inverse(`Errors: ${report.errorCount}`));

	process.exit(1);
}
