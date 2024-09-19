import type { Social } from './social';

export interface Link extends Social {
	name: string;
	sameAs?: boolean;
	privacy?: boolean;
	external?: boolean;
}
