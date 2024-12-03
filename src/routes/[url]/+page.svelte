<script lang="ts">
	import { browser } from '$app/environment';

	export let data;

	const redirect = () => {
		window.location.href = data.url;
	};
</script>

{#if browser}
	<script
		src="https://scripts.simpleanalyticscdn.com/latest.js"
		on:load={redirect}
		on:error={redirect}
	></script>
	<noscript>
		<img
			src="https://queue.simpleanalyticscdn.com/noscript.gif"
			alt=""
			referrerpolicy="no-referrer-when-downgrade"
		/>
	</noscript>
{/if}

<svelte:head>
	<title>Redirecting...</title>
</svelte:head>
