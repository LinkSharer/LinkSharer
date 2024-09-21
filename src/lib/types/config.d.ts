import type { Link } from './link';
import type { Social } from './social';
import type { SEO } from './seo';
import type { Script } from './script';
import type { User } from './user';

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
