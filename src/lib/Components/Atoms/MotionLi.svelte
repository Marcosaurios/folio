<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let variants,
		initial = undefined,
		custom = undefined,
		animate = undefined;
</script>

<Motion let:motion {variants} {initial} {animate} {custom}>
	<li use:motion on:click>
		<slot />
	</li>
</Motion>

<style>
	li {
		display: flex;
		justify-content: center;
		align-items: center;

		/* animation performance stuff*/
		perspective: 10000;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		will-change: transform;
	}
</style>
