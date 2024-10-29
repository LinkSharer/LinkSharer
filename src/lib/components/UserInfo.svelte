<script lang="ts">
	import type { i18n as i18nType } from '$lib/types/i18n';
	import type { User } from '$lib/types/user';

	export let user: User;
	export let i18n: i18nType;
</script>

<header itemscope itemtype="http://schema.org/Person" class="user-info">
	<img
		src={user.avatar}
		alt={i18n.avatar.alt.replace('{{userName}}', user.name)}
		width="100px"
		height="100px"
	/>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<h1 itemprop="name">{@html user.name}</h1>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p itemprop="description">{@html user.bio}</p>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		line-height: 1.5;

		img {
			margin-bottom: 10px;
		}

		h1 {
			font-weight: 700;
			font-size: 20px;
		}

		p {
			font-weight: 500;
			font-size: 16px;
		}
	}
</style>
