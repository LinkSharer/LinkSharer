import type { Link } from './link';
import type { Social } from './social';

export interface Config {
	template: string;
	cname?: string;
	seo: SEO;
	user: User;
	links: Link[];
	socials?: Social[];
	credits?: boolean;
	analytics?: boolean;
}

export interface User {
	name: string;
	bio: string;
	avatar: string;
}

export interface SEO {
	title: string;
	description: string;
}
