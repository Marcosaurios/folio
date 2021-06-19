<script>
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let variants,
		initial = undefined,
		custom = undefined,
		animate = undefined;
</script>

<Motion let:motion {variants} {initial} {animate} {custom}>
	<li use:motion>
		<slot />
	</li>
</Motion>
