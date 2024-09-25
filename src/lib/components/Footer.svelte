<script lang="ts">
	import type { i18n } from '$lib/types/i18n';

	export let showCredits: boolean;
	export let i18n: i18n;
</script>

{#if showCredits}
	<footer class="credits">
		<p>
			{i18n.credits}
			<a
				href="https://linksharer.js.org?utm_source=generated_website&utm_medium=credits&utm_campaign=project_usage&utm_content=footer"
				rel="external"
			>
				LinkSharer
			</a>
		</p>
	</footer>
{/if}

<style lang="scss">
	p {
		font-size: 10px;
		text-align: center;
		margin: 10px;

		a {
			color: inherit;
		}
	}
</style>
