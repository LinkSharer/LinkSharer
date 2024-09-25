export interface SEO {
	/**
	 * The <title> tag
	 */
	title: string;
	/**
	 * A description of the website
	 */
	description: string;
	/**
	 * Canonical tag
	 */
	canonical?: string;
	/**
	 * OpenGraph configuration
	 */
	og?: { [key: string]: string | undefined };
	/**
	 * Twitter configuration
	 */
	twitter?: { [key: string]: string | undefined };
}
