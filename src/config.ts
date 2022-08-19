export const SITE = {
	title: 'dc.eco',
	description: 'Awoooo',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/wxifuwu/dc-eco/blob/mistress/assets/candy_preview.png?raw=true',
		alt:
			'DC.ECO documentation' +
			' find on npm',
	},
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
 export const GITHUB_EDIT_URL = `https://github.com/wxifuwu/dc.eco-docs`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Getting Started', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Install', link: 'en/install' },

		{ text: 'References', header: true },
		{ text: 'Functions', link: 'en/functions' },
	],
};
