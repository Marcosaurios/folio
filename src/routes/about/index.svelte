<script>
	import { send, receive } from '$lib/Crossfade';

	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import MotionLi from '$lib/Components/Atoms/MotionLi.svelte';

	let visible = false;
	let animationProgress = 0;

	// export const srr = false;
	const animatedArray = ['hello', 'this', 'is', 'a', 'test'];

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: '-50vw' }
	};
</script>

<style>
	div {
		width: 100px;
		height: 100px;
		background-color: red;
	}
</style>
