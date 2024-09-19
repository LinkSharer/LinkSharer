<script lang="ts">
	import type { Social } from '$lib/types/social';
	import SocialElement from './Social.svelte';

	export let socials: Social[];
</script>

<article>
	<ul>
		{#each socials as social}
			<SocialElement {social} />
		{/each}
	</ul>
</article>

<style lang="scss">
	ul {
		padding-left: 0;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
