<script lang="ts">
	import type { Social } from '$lib/types/social';

	export let social: Social;
</script>

<a
	href={social.url}
	target="_{social.target ?? 'self'}"
	itemprop="sameAs"
	rel="noopener noreferrer"
>
	<li>
		<i class={social.icon} />
	</li>
</a>

<style lang="scss">
	a {
		text-decoration: none;

		li {
			list-style: none;
			text-align: center;
			color: var(--social-text-color);
			padding: var(--social-padding);
			height: var(--social-height);
			display: flex;
			align-items: center;

			&:hover {
				color: var(--social-text-color-hover);
			}

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
