import { quintOut } from 'svelte/easing';
import { elasticOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';
const [send, receive] = crossfade({
	easing: elasticOut,
	duration: (d) => Math.sqrt(d * 5000),
	fallback(node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
                transform: ${transform} scale(${t});
                opacity: ${t}
            `
		};
	}
});

export { send, receive };
