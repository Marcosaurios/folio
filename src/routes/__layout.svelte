<!-- Main layout to be loaded in every route (menu, footer...) -->
<script>
	import '../app.scss';
	import Menu from '$lib/Components/Organisms/Menu.svelte';
	import Canvas from '$lib/Components/Organisms/Canvas.svelte';
	// footer?
</script>

<main>
	<Menu />
	<Canvas />
	<div class="content">
		<slot />
	</div>
</main>

<style lang="scss">
	div.content {
		padding: 1em;
	}
</style>
