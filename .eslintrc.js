module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules:
		{
			'no-tabs': ['off'],
			indent: ['warn', 'tab'],
			'no-plusplus': ['off'],
			'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
			'no-underscore-dangle': ['off'],
			'no-use-before-define': ['warn', { functions: true, classes: true }],
		},
	ignorePatterns: ['dist/*'],

};
