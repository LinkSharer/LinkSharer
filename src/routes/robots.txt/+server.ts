import config from '../../../user/config';

export const GET = ({ url }) => {
	return new Response(`User-agent: *
Allow: /
Sitemap: https://${config.cname || url.hostname}/sitemap.xml
`);
};
