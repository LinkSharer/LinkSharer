<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Link } from '$lib/types/link';
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

	export let link: Link;

	const rel = [
		link.privacy ? 'noopener noreferrer' : undefined,
		link.external ? 'external' : undefined,
	]
		.filter(Boolean)
		.join(' ');

	const goTo = (e: Event) => {
		if (link.short) {
			e.preventDefault();
			const dest = `s/${link.short}?utm_medium=links_btn&utm_campaign=linksharer_links`;
			link.target === 'blank' ? window.open(dest) : goto(dest);
		}
	};
</script>

{#if link.display !== false}
	<li class="link">
		<a
			href={link.url}
			target="_{link.target ?? 'self'}"
			itemprop={link.sameAs ? 'sameAs' : undefined}
			{rel}
			onclick={goTo}
		>
			<FontAwesomeIcon icon={link.icon} style="width: 1em;" />
			{link.name}
		</a>
	</li>
{/if}

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
