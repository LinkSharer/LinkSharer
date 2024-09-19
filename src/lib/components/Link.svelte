<script lang="ts">
	import type { Link } from '$lib/types/link';

	export let link: Link;

	const rel = [
		link.privacy ? 'noopener noreferrer' : undefined,
		link.external ? 'external' : undefined,
	]
		.filter(Boolean)
		.join(' ');
</script>

<a
	href={link.url}
	target="_{link.target ?? 'self'}"
	itemprop={link.sameAs ? 'sameAs' : undefined}
	{rel}
>
	<li>
		<i class={link.icon} />
		{link.name}
	</li>
</a>

<style lang="scss">
	a {
		text-decoration: none;

		li {
			list-style: none;
			color: var(--link-text-color);
			padding: var(--link-padding);
			background-color: var(--link-bg-color);
			border: var(--link-border);
			transition: var(--link-transition);
			border-radius: var(--link-border-radius);
			font-size: var(--link-text-font-size);
			font-weight: var(--link-text-font-weight);

			&:hover {
				color: var(--link-text-color-hover);
				background-color: var(--link-bg-color-hover);
			}
		}
	}
</style>
