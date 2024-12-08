import { error, redirect } from '@sveltejs/kit';
import config from '../../../../user/config';

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
	let url = links.find((link) => link.short == params.url)?.url as string;

	if (!url) {
		error(404);
	}

	if (!config.analytics) {
		redirect(302, url);
	}

	let newUrl = new URL(url);
	Object.entries({
		utm_campaign: 'linksharer_links',
		utm_medium: 'linksharer_redirect',
		utm_source: `linksharer_short_${params.url}`,
	}).forEach(([k, v]) => {
		if (!newUrl.searchParams.has(k)) {
			newUrl.searchParams.set(k, v);
		}
	});

	url = newUrl.toString();

	return {
		url,
		config,
	};
};
