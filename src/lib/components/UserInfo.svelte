<script lang="ts">
	import type { User } from '$lib/types/config';

	export let user: User;
</script>

<header itemscope itemtype="http://schema.org/Person" class="user-info">
	<img src={user.avatar} alt="{user.name}'s Avatar" width="100px" height="100px" />
	<h1 itemprop="name">{@html user.name}</h1>
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
