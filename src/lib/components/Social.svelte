<script lang="ts">
	import type { Social } from '$lib/types/social';

	export let social: Social;
</script>

<li>
	<a
		href={social.url}
		target="_{social.target ?? 'self'}"
		itemprop="sameAs"
		rel="noopener noreferrer"
		aria-label={social.name}
	>
		<i class={social.icon} />
	</a>
</li>

<style lang="scss">
	li {
		list-style: none;
		text-align: center;
		padding: var(--social-padding);
		height: var(--social-height);
		display: flex;
		align-items: center;

		&:hover {
			color: var(--social-text-color-hover);
		}

		a {
			text-decoration: none;
			color: var(--social-text-color);

			i {
				font-size: var(--social-dim);
				transition: var(--social-transition);

				&:hover {
					font-size: var(--social-dim-hover);
				}
			}
		}
	}
</style>
