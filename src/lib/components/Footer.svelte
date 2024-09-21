<script lang="ts">
	export let showCredits: boolean;
</script>

{#if showCredits}
	<footer class="credits">
		<p>
			This website was made with
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
