export interface Social {
	/**
	 * The url to the resource
	 */
	url: string;
	/**
	 * The icon to use
	 *
	 * @see https://fontawesome.com/search?o=r&m=free
	 */
	icon: string;
	/**
	 * The target of the anchor element
	 */
	target?: 'blank' | 'parent' | 'self' | 'top';
	/**
	 * The name of the resource
	 */
	name?: string;
}
