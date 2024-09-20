import type { Config } from '../src/lib/types/config';

const config: Config = {
	template: '@pretty',
	cname: 'demo.linksharer.js.org',
	seo: {
		title: 'Demo | LinkSharer',
		description: "LinkSharer' Demo website.",
	},
	user: {
		name: 'LinkSharer',
		bio: 'This is just a Demo<br>Check out the Docs for more information',
		avatar: 'avatar.png',
	},
	links: [
    {
      name: 'Documentation',
      url: 'https://linksharer.js.org',
      icon: 'fa-regular fa-file',
      sameAs: true,
      external: true,
    },
		{
			name: 'Github',
			url: 'https://github.com/LinkSharer/LinkSharer',
			icon: 'fa-brands fa-github',
			sameAs: true,
			privacy: true,
			external: true,
		},
		{
			name: 'A cool PDF',
			url: 'myCoolFile.pdf',
			icon: 'fa-solid fa-file-pdf',
		},
		{
			name: 'Email',
			url: 'mailto:sebastiano@racca.me',
			icon: 'fa-solid fa-envelope',
			sameAs: true,
		},
		{
			name: 'Help Us',
			url: 'https://racca.me/donate',
			icon: 'fa-solid fa-heart',
			target: 'blank',
			external: true,
		},
	],
	socials: [
		{
			url: 'https://github.com/LinkSharer/LinkSharer',
			icon: 'fa-brands fa-github',
		},
		{
			url: 'mailto:sebastiano@racca.me',
			icon: 'fa-solid fa-envelope',
		},
	],
};

export default config;
