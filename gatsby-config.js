module.exports = {
	siteMetadata: {
		description: "Personal page of Diky Septa",
		locale: "en",
		title: "Diky Septa",
		formspreeEndpoint: "https://formspree.io/f/xyyorgvj",
	},
	plugins: [
		{
			resolve: "@wkocjan/gatsby-theme-intro",
			options: {
				theme: "gh-inspired",
				showThemeLogo: false,
			},
		},
	],
};
