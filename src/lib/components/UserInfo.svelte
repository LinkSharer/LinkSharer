<script lang="ts">
	import type { User } from '$lib/types/config';

	export let user: User;
</script>

<header itemscope itemtype="http://schema.org/Person">
	<img src={user.avatar} alt="{user.name}'s Avatar" />
	<h1 itemprop="name">{@html user.name}</h1>
	<p itemprop="description">{@html user.bio}</p>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		img {
			width: var(--profile-avatar-dim);
			margin-bottom: 10px;
		}

		h1 {
			color: var(--profile-name-color);
			line-height: var(--profile-name-line-height);
			font-weight: var(--profile-name-font-weight);
			font-size: var(--profile-name-font-size);
		}

		p {
			color: var(--profile-description-color);
			line-height: var(--profile-description-line-height);
			font-weight: var(--profile-description-font-weight);
			font-size: var(--profile-description-font-size);
		}
	}
</style>
