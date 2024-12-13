import config from '$user/config';
import { version } from '$project/package.json';

export const load = () => {
	return {
		config,
		version,
	};
};
