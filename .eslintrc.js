module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'no-console': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'prettier/prettier': 'error',
		'@typescript-eslint/explicit-function-return-type': ['error'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
	},
};
