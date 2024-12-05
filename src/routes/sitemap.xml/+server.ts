import config from '../../../user/config';
import fs from 'fs';
import path from 'path';

export const GET = ({ url }) => {
	const filePath = path.resolve('./user/config.ts');

	let lastModified: string;

	try {
		lastModified = fs.statSync(filePath).mtime.toISOString().split('T')[0];
	} catch (error) {
		lastModified = new Date().toISOString().split('T')[0];
	}

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>https://${config.cname || url.hostname}/</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>1</priority>
  </url>
</urlset>
`,
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
};
