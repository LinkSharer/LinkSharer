<script lang="ts">
	export let showCredits: boolean;
</script>

{#if showCredits}
	<footer>
		<p>
			This website was made with
			<a href="https://github.com/LinkSharer/LinkSharer" rel="noopener noreferrer external">
				LinkSharer
			</a>
		</p>
	</footer>
{/if}

<style lang="scss">
	p {
		color: var(--credits-text-color);
		font-size: var(--credits-font-size);
		text-align: center;
		margin: 10px;

		a {
			color: var(--credits-text-color);
		}
	}
</style>
