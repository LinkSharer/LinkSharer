<script lang="ts">
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		fetch('https://queue.simpleanalyticscdn.com/events', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'User-Agent': data.ua,
			},
			body: JSON.stringify({
				type: 'event',
				hostname: window.location.hostname,
				ua: data.ua,
				path: window.location.pathname,
				event: `short_${data.redirect}`,
				metadata: {
					url: data.redirect,
				},
			}),
			mode: 'no-cors',
		}).finally(() => {
			window.location.href = data.redirect;
		});
	});
</script>

<svelte:head>
	<title>Redirecting...</title>
</svelte:head>
