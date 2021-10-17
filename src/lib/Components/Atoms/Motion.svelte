<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let listVariants, initial;
	export let onComplete = () => {};

	// Controller
	export let animate = false;
</script>

<Motion
	variants={listVariants}
	{initial}
	{animate}
	let:motion
	onAnimationComplete={(animationName) => {
		onComplete(animationName);
	}}
>
	<span use:motion>
		<slot />
	</span>
</Motion>

<style>
	span {
		/* display: block;
		position: absolute; */

		width: 100%;

		/* animation performance stuff*/
		perspective: 10000;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		will-change: transform;
	}
</style>
