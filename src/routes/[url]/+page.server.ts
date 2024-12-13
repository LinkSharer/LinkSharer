import config from '$user/config.js';
import { error, redirect } from '@sveltejs/kit';
import { version } from '$project/package.json';

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

export const load = async ({ params, url }) => {
	const r = links.find((link) => link.short == params.url)?.url;
	if (!r) {
		return error(404);
	}

	if (!config.analytics) {
		redirect(301, r);
	}

	const ua = `LinkSharer v${version}`;
	await fetch('https://queue.simpleanalyticscdn.com/events', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': ua,
		},
		body: JSON.stringify({
			type: 'event',
			hostname: config.cname, // TODO: add support for websites hosted on github pages
			ua,
			path: url.pathname,
			event: `short_${r}`,
			metadata: {
				url: r,
			},
		}),
	});

	redirect(302, r);
};
