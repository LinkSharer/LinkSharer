<script lang="ts">
	import type { Social } from '$lib/types/social';

	export let social: Social;
</script>

<li class="social">
	<a
		href={social.url}
		target="_{social.target ?? 'self'}"
		itemprop="sameAs"
		rel="noopener noreferrer"
		aria-label={social.name}
	>
		<i class={social.icon}></i>
	</a>
</li>

<style lang="scss">
	li {
		list-style: none;
		text-align: center;
		padding: 10px;
		height: 50px;
		display: flex;
		align-items: center;

		a {
			text-decoration: none;
			color: inherit;

			i {
				font-size: 30px;
				transition: font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1);

				&:hover {
					font-size: 35px;
				}
			}
		}
	}
</style>
