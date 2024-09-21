import type { Link } from './link';
import type { Social } from './social';

export interface Config {
	/**
	 * CSS Template to use
	 *
	 * @example "@minimal-blue", "myTemplate.css", "https://example.com/myTemplate.css"
	 * @see https://linksharer.js.org/docs/templates
	 */
	template: string;
	/**
	 * CNAME to use
	 *
	 * @see https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
	 */
	cname?: string;
	/**
	 * SEO configurations
	 */
	seo: SEO;
	/**
	 * Information about the user
	 */
	user: User;
	/**
	 * An array of links/resources to be shared
	 */
	links: Link[];
	/**
	 * An array of socials to be displayed after the links
	 */
	socials?: Social[];
	/**
	 * Whether the credits should be displayed or not
	 */
	credits?: boolean;
	/**
	 * Whether analytics should be included or not
	 *
	 * @see https://linksharer.js.org/docs/analytics
	 */
	analytics?: boolean;
	/**
	 * An array of scripts
	 */
	scripts?: Script[];
}

export interface User {
	/**
	 * The name of the user
	 */
	name: string;
	/**
	 * A small description of user
	 */
	bio: string;
	/**
	 * The avatar to be displayed along the other information about the user
	 */
	avatar: string;
}

export interface SEO {
	/**
	 * The <title> tag
	 */
	title: string;
	/**
	 * A description of the website
	 */
	description: string;
}

export interface Script {
	/**
	 * The src atribute of the <script> tag
	 */
	src: string;
	/**
	 * Whether the script should be included in the <head> or in the <body> tag
	 */
	head?: boolean;
	/**
	 * Any other key-value pair like `async` or `defer`
	 */
	[key: string]: any;
}
