<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import Links from '$lib/components/Links.svelte';
	import UserInfo from '$lib/components/UserInfo.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Socials from '$lib/components/Socials.svelte';
	import { dev } from '$app/environment';

	export let data;

	const template = data.config.template.startsWith('@')
		? `https://linksharer.github.io/Templates/templates/${data.config.template.slice(1)}.css`
		: data.config.template;

	let scripts: { head: { [key: string]: any }[]; body: { [key: string]: any }[] } = {
		head: [],
		body: [],
	};

	data.config.scripts?.forEach((s) => {
		const { head, ...obj } = s;

		scripts[head ? 'head' : 'body'].push(obj);
	});
</script>

<Seo {...data.config.seo} />

<svelte:head>
	<link rel="stylesheet" href={template} />

	{#if scripts.head}
		{#each scripts.head as scr}
			<script {...scr}></script>
		{/each}
	{/if}
</svelte:head>

{#if !dev && data.config.analytics}
	<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
	<noscript>
		<img
			src="https://queue.simpleanalyticscdn.com/noscript.gif"
			alt=""
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</noscript>
{/if}

<div class="linksharer">
	<main>
		<UserInfo user={data.config.user} />
		<Links links={data.config.links} />

		{#if data.config.socials}
			<Socials socials={data.config.socials} />
		{/if}
	</main>

	<Footer showCredits={data.config.credits || true} />
</div>

{#if scripts.body}
	{#each scripts.body as scr}
		<script {...scr}></script>
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
