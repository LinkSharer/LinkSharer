import config from '../../user/config';
import { version } from '../../package.json';

export const load = () => {
	return {
		config,
		version,
	};
};
