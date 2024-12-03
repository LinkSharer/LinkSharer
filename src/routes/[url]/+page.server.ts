import { dev } from '$app/environment';
import { error, redirect } from '@sveltejs/kit';
import config from '../../../user/config.js';

export const csr = true;

const links = config.links.filter((link) => link.short);

export const entries = async () => {
	if (links.length == 0) return [{ url: '-' }];

	return (
		await Promise.all(
			config.links.map(async (link) => {
				return link.short ? { url: link.short } : undefined;
			}),
		)
	).filter((link): link is { url: string } => link !== undefined);
};

export const load = ({ params }) => {
	const url = links.find((link) => link.short == params.url)?.url as string;

	if (!url) {
		error(404);
	}

	if (dev && !config.analytics) {
		redirect(302, url);
	}

	return {
		url,
		config,
	};
};
