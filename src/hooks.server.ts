import config from '$user/config';

export const handle = async ({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', config.i18n.code),
	});
};
