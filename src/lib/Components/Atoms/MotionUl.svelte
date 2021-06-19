<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let items, listVariants, itemVariants, initial;

	// Controller
	export let isOpen = false;
	$: animate = isOpen ? 'visible' : 'hidden';
</script>

<Motion variants={listVariants} {initial} {animate} let:motion>
	<span use:motion>
		<slot />
	</span>
</Motion>

<style>
	span {
		display: block;
	}
</style>
