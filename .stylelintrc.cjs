module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-standard-scss',
    ],
    plugins: [
		'stylelint-order',
        'stylelint-scss',
	],
    rules: {
        'order/order': [
			'custom-properties',
			'declarations'
		],
		'order/properties-order': [
			"width",
			"height"
		],
        'indentation': 4,
        'max-empty-lines': 1,
        // recommended rules
        // "at-rule-no-unknown": null,
        'scss/at-rule-no-unknown': true,
        'scss/selector-no-redundant-nesting-selector': true,
    },
};
