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
