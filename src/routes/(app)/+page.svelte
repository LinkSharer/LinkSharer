<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Links from '$lib/components/Links.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Socials from '$lib/components/Socials.svelte';
	import { dev } from '$app/environment';
	import type { Script } from '$lib/types/script';

	export let data;

	let scripts: { head: Script[]; body: Script[] } = {
		head: [],
		body: [],
	};

	data.config.scripts?.forEach((s) => {
		const { head, ...obj } = s;

		scripts[head ? 'head' : 'body'].push(obj);
	});
</script>

<Seo seo={data.config.seo} />

<svelte:head>
	{#if scripts.head}
		{#each scripts.head as attributes}
			<script {...attributes}></script>
		{/each}
	{/if}

	{#if data.config.googleSiteVerification}
		<!-- Google verification -->
		<meta name="google-site-verification" content={data.config.googleSiteVerification} />
	{/if}
</svelte:head>

{#if !dev && data.config.analytics}
	<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
	<script
		async
		data-full-urls="true"
		src="https://scripts.simpleanalyticscdn.com/auto-events.js"
	></script>
{/if}

<div class="linksharer">
	<main>
		<UserInfo user={data.config.user} i18n={data.config.i18n} />
		<Links links={data.config.links} />

		{#if data.config.socials}
			<Socials socials={data.config.socials} />
		{/if}
	</main>

	<Footer
		showCredits={data.config.credits || true}
		i18n={data.config.i18n}
		version={data.version}
	/>
</div>

{#if scripts.body}
	{#each scripts.body as attributes}
		<script {...attributes}></script>
	{/each}
{/if}

<style lang="scss">
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		font-weight: normal;
	}

	.linksharer {
		min-height: 100vh;
		font-family: 'DM Sans', sans-serif;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		main {
			min-width: 30%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
