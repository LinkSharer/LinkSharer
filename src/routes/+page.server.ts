import config from '../../user/config';
import { version } from '../../package.json';

export const csr = false;

export const load = () => {
	return {
		config,
		version,
	};
};
