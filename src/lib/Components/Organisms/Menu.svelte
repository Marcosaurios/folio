<script>
	import { onMount } from 'svelte';
	import MotionUl from '../Atoms/MotionUl.svelte';
	import MotionLi from '../Atoms/MotionLi.svelte';
	import MenuItem from '../Molecules/MenuItem.svelte';

	let isOpen = false;
	const triggerNav = () => (isOpen = !isOpen);

	let navigateTo = false;

	onMount(() => {
		// TODO resize?
		// function sizesUpdated(e) {
		// 	e.target.innerWidth > 500 ? (isOpen = true) : 0;
		// 	heightCheck();
		// }
		// window.onresize = sizesUpdated;
	});

	// TODO create reactive variable to fetch current path (active menu item)
	const items = [
		{ component: MenuItem, content: 'Home', href: '/' },
		{ component: MenuItem, content: 'About', href: '/about' },
		{ component: MenuItem, content: 'Hello', href: '/helo' }
	];
	const listVariants = {
		visible: {
			transform: 'translateY(0px)',
			transition: {
				type: 'tween',
				when: 'beforeChildren',
				staggerChildren: 0.2,
				staggerDirection: 1
			}
		},
		hidden: {
			transform: 'translateY(-1000px)',
			transition: {
				when: 'afterChildren',
				staggerChildren: 0.2,
				staggerDirection: -1
			}
		}
	};

	const itemVariants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 }
	};

	/**
	 * Closes the menu, avoids navigating and sets the link
	 *
	 * @param e	Event triggered from click
	 * @param link	Link to navigate
	 */
	const onLinkClicked = (e, link) => {
		isOpen = false;
		e.preventDefault();

		navigateTo = link;
	};
</script>

<MotionUl
	animate={isOpen ? 'visible' : 'hidden'}
	{listVariants}
	onComplete={function (animationName) {
		console.log(animationName, 'Completed from parent');

		if (animationName == 'hidden' && !isOpen && window.location != navigateTo && navigateTo) {
			window.location = navigateTo;
		}
	}}
	initial="hidden"
>
	<nav>
		<ul>
			{#each items as item}
				<MotionLi variants={itemVariants}>
					<svelte:component
						this={item.component}
						href={item?.href}
						on:click={(e) => onLinkClicked(e, item?.href)}
					>
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

		position: relative;

		overflow: hidden;

		@include desktop {
			position: relative;

			flex-direction: row;
			background-color: transparent;
		}

		ul {
			display: flex;
			flex-direction: column;
			/* justify-content: center; */
			justify-content: flex-start;
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
