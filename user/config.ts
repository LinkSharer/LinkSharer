import i18n from '$lib/i18n/en';
import type { Config } from '../src/lib/types/config';

const config: Config = {
	template: '@monochrome',
	cname: 'demo.linksharer.js.org',
	i18n,
	analytics: true,
	seo: {
		title: 'Demo | LinkSharer',
		description: "LinkSharer's Demo website.",
		canonical: 'https://demo.linksharer.js.org',
		og: {
			site_name: 'Demo | LinkSharer',
			title: 'Demo | LinkSharer',
			description: "LinkSharer's Demo website.",
			url: 'https://demo.linksharer.js.org?utm_medium=social',
			type: 'website',
		},
		twitter: {
			title: 'Demo | LinkSharer',
			description: "LinkSharer's Demo website.",
			card: 'summary',
			url: 'https://demo.linksharer.js.org?utm_source=twitter&utm_medium=social',
		},
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
			name: "LinkSharer's GitHub Account",
		},
		{
			url: 'mailto:sebastiano@racca.me',
			icon: 'fa-solid fa-envelope',
			name: "Sebastiano Racca's Email",
		},
	],
};

export default config;
