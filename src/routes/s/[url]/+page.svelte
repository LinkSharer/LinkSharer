<script lang="ts">
	import { onMount } from 'svelte';

	export let data;

	const redirect = () => (window.location.href = data.redirect);

	onMount(() => {
		if (parseInt(navigator.doNotTrack || '0', 10) === 1) {
			redirect();
		}
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
		}).finally(redirect);
	});
</script>

<svelte:head>
	<title>{data.i18n.title}</title>
</svelte:head>
