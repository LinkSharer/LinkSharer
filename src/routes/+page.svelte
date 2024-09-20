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
		? `https://linksharer.github.io/Templates/templates/${data.config.template.slice(1)}`
		: data.config.template;
</script>

<Seo {...data.config.seo} />

<svelte:head>
	<link rel="stylesheet" href={template} />
</svelte:head>

<div class="container">
	<main>
		<UserInfo user={data.config.user} />
		<Links links={data.config.links} />

		{#if data.config.socials}
			<Socials socials={data.config.socials} />
		{/if}
	</main>

	<Footer showCredits={data.config.credits || true} />
</div>

<style lang="scss">
	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		font-weight: normal;
	}

	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--page-bg-color);
		font-family: var(--page-font-family);

		main {
			min-width: 30%;
			display: flex;
			flex-direction: column;
		}
	}
</style>
