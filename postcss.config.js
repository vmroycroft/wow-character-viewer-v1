const rucksackcss = require('rucksack-css'),
	tailwindcss = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({
	content: ['./public/**/*.html', './src/**/*.vue'],
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
	plugins: [rucksackcss, tailwindcss, ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])]
};
