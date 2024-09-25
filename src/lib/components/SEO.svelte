<script lang="ts">
	import type { SEO } from '$lib/types/seo';

	export let seo: SEO;
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />

	{#if seo.canonical}
		<link rel="canonical" href={seo.canonical} />
	{/if}

	{#if seo.og}
		{#each Object.entries(seo.og) as og}
			<meta property="og:{og[0]}" content={og[1]} />
		{/each}
	{/if}

	{#if seo.twitter}
		{#each Object.entries(seo.twitter) as tw}
			<meta property="og:{tw[0]}" content={tw[1]} />
		{/each}
	{/if}
</svelte:head>
