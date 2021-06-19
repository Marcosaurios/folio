<script>
	export let href = '/';
</script>

<a class="menu-item" {href} on:click>
	<slot />
</a>

<style lang="scss">
	@import 'src/lib/_common/_viewports';

	.menu-item {
		margin: 3rem auto;

		color: var(--text-color);

		font-family: 'Oswald';
		font-style: italic;
		font-size: var(--font-menu-item);

		/* Specific styling */
		-webkit-text-stroke: 1px white;
		-webkit-text-fill-color: var(--menu-bg);
		text-decoration: none;
	}
</style>
