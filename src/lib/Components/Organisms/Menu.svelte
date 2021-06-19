<script>
	import { onMount } from 'svelte';
	import MenuItem from '../Molecules/MenuItem.svelte';
	import MotionUl from '../Atoms/MotionUl.svelte';
	import MotionLi from '../Atoms/MotionLi.svelte';

	let isOpen = false;
	const triggerNav = () => (isOpen = !isOpen);

	onMount(() => {
		function sizesUpdated(e) {
			e.target.innerWidth > 500 ? (isOpen = true) : 0;
		}
		window.onresize = sizesUpdated;
	});

	// TODO create reactive variable to fetch current path (active menu item)

	const items = [
		{ component: MenuItem, content: 'Home', props: { href: '/' } },
		{ component: MenuItem, content: 'About', props: { href: '/about' } },
		{ component: MenuItem, content: 'Hello', props: { href: '/helo' } }
	];
	const listVariants = {
		visible: {
			transform: 'translateX(0px)',
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.3,
				staggerDirection: 1
			}
		},
		hidden: {
			transform: 'translateX(-100vw)',
			transition: {
				when: 'afterChildren',
				staggerChildren: 0.3,
				staggerDirection: -1
			}
		}
	};

	const itemVariants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 }
	};
</script>

<MotionUl {isOpen} {listVariants} initial="hidden">
	<nav>
		<ul>
			{#each items as item}
				<MotionLi variants={itemVariants}>
					<svelte:component this={item.component} {...item?.props}>
						{item?.content}
					</svelte:component>
				</MotionLi>
			{/each}
		</ul>
	</nav>
</MotionUl>

<div class="close-btn" on:click={triggerNav}>X</div>

<style lang="scss">
	@import 'src/lib/_common/_viewports';

	// MOBILE FIRST
	nav {
		width: 100%;
		height: 100vh;
		margin: 0 auto;

		background-color: var(--menu-bg);

		position: absolute;

		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		justify-content: flex-start;
		overflow: hidden;

		@include desktop {
			position: relative;

			flex-direction: row;
			background-color: transparent;
		}

		ul {
			list-style: none;

			a {
				padding: 1em;
			}
		}
	}

	.close-btn {
		position: absolute;
		bottom: 0;
		left: calc(100vw - 50%);
		background-color: white;
		z-index: 9999;

		@include desktop {
			visibility: hidden;
			display: none;
		}
	}
</style>
