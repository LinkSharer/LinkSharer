<script lang="ts">
	import LinkElement from './Link.svelte';
	import type { Link } from '$lib/types/link';

	export let links: Link[];
</script>

<section class="links">
	<ul>
		{#each links as link}
			<LinkElement {link} />
		{/each}
	</ul>
</section>

<style lang="scss">
	ul {
		padding-left: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 30px 0 15px 0;
	}
</style>
