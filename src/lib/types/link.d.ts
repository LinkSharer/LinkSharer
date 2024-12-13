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
	 * Set this to false to not display the link in the list
	 */
	display?: boolean;
}
