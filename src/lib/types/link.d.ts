import type { Social } from './social';

export interface Link extends Social {
	/**
	 * The name of the link
	 */
	name: string;
	/**
	 * Whether itemprop="sameAs" should be included in the HTML element or not
	 */
	sameAs?: boolean;
	/**
	 * Whether rel="noopener noreferrer" should be included in the HTML element or not
	 */
	privacy?: boolean;
	/**
	 * Whether rel="external" should be included in the HTML element or not
	 */
	external?: boolean;
	/**
	 * Set this to false to not display the link in the list.
	 * This is useful if you don't want users to view it but still be able to use the short version of it (and collect analytics).
	 */
	display?: boolean;
	/**
	 * A shorter version of the url
	 * You can also collect analytics if you set config.analytics to true
	 *
	 * @see https://linksharer.js.org/docs/urlShortener
	 */
	short?: string;
}
