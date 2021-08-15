<script>
	export let href = '/';

	// export let content = 'default';
</script>

<a class="menu-item" {href} on:click style="--prop-text: helo">
	<slot />
</a>

<style lang="scss">
	@import 'src/lib/_common/_viewports';

	.menu-item {
		margin: 3rem auto;

		color: var(--text-color);
		color: black;

		font-family: 'Oswald';
		font-style: italic;
		font-size: var(--font-menu-item);

		/* Specific styling */
		-webkit-text-stroke: 1px white;
		-webkit-text-fill-color: var(--menu-bg);
		text-decoration: none;

		/* Animation */
		transition: all 0.3s ease-in-out;
	}
	/* 
	.menu-item::after {
		content: convert(var(--prop-text) string);
		width: 50px;
		background-color: red;
	} */
</style>
