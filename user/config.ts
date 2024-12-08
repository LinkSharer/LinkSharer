import i18n from '$lib/i18n/en';
import type { Config } from '../src/lib/types/config';
import { faFile, faFilePdf, faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const config: Config = {
	template: '@monochrome',
	cname: 'demo.linksharer.js.org',
	i18n,
	// analytics: true,
	googleSiteVerification: 'SkbQbFxbI39ZoFZR7oEZv9bKJ13TxmN8oj56rISwyZE',
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
	},
	links: [
		{
			name: 'Documentation',
			url: 'https://linksharer.js.org',
			icon: faFile,
			sameAs: true,
			external: true,
			short: 'docs',
		},
		{
			name: 'Github',
			url: 'https://github.com/LinkSharer/LinkSharer',
			icon: faGithub,
			sameAs: true,
			privacy: true,
			external: true,
			short: 'gh',
		},
		{
			name: 'A cool PDF',
			url: 'myCoolFile.pdf',
			icon: faFilePdf,
		},
		{
			name: 'Email',
			url: 'mailto:sebastiano@racca.me',
			icon: faEnvelope,
			sameAs: true,
		},
		{
			name: 'Help Us',
			url: 'https://racca.me/donate',
			icon: faHeart,
			target: 'blank',
			external: true,
			short: 'donate',
		},
	],
	socials: [
		{
			url: 'https://github.com/LinkSharer/LinkSharer',
			icon: faGithub,
			name: "LinkSharer's GitHub Account",
		},
		{
			url: 'mailto:sebastiano@racca.me',
			icon: faEnvelope,
			name: "Sebastiano Racca's Email",
		},
	],
};

export default config;
