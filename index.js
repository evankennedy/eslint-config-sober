module.exports = {
	extends: 'airbnb-base',
	rules: {
		'array-element-newline': [2, 'consistent'],
		'array-bracket-newline': [2, 'consistent'],
		'arrow-parens': [2, 'as-needed'],
		'comma-dangle': [2, {
			arrays: 'always-multiline',
			exports: 'never',
			functions: 'never',
			imports: 'never',
			objects: 'always-multiline',
		}],
		'indent': [2, 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
		}],
		'quote-props': [1, 'consistent-as-needed'],
		'no-param-reassign': 1,
		'no-tabs': [2, { allowIndentationTabs: true }],
		'no-unused-vars': 1,
		'no-use-before-define': 1,
	},
};
