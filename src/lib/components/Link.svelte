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

<li class="link">
	<a
		href={link.url}
		target="_{link.target ?? 'self'}"
		itemprop={link.sameAs ? 'sameAs' : undefined}
		{rel}
	>
		<i class={link.icon} />
		{link.name}
	</a>
</li>

<style lang="scss">
	li {
		list-style: none;

		a {
			color: inherit;
			text-decoration: none;
			width: 100%;
			display: inline-block;
			padding: 20px;
			font-size: 16px;
			font-weight: 500;
			transition:
				box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99),
				color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99),
				border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99),
				transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99),
				background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99);
		}
	}
</style>
