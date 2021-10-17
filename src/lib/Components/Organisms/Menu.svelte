<script>
	import MotionUl from '../Atoms/MotionUl.svelte';
	import MotionLi from '../Atoms/MotionLi.svelte';
	import MenuItem from '../Molecules/MenuItem.svelte';
	// import Motion from '../Atoms/Motion.svelte';

	let isOpen = false;
	const triggerNav = () => {
		isOpen = !isOpen;
	};

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

	// Gradients
	const gradientsVariants = {
		visible: {
			transform: 'scaleY(1)',
			transition: {
				type: 'tween',
				when: 'beforeChildren',
				staggerChildren: 3,
				staggerDirection: 1
			}
		},
		hidden: {
			transform: 'scaleY(0)',
			transition: {
				when: 'afterChildren',
				staggerChildren: 3,
				staggerDirection: -1
			}
		}
	};
</script>

<MotionUl animate={isOpen ? 'visible' : 'hidden'} {listVariants} initial="hidden">
	<nav>
		<ul>
			{#each items as item}
				<MotionLi variants={itemVariants}>
					<svelte:component this={item.component} href={item?.href} on:click={triggerNav}>
						{item?.content}
					</svelte:component>
				</MotionLi>
			{/each}
		</ul>
		<!-- <Motion animate={!isOpen ? 'visible' : 'hidden'} initial="hidden" {gradientsVariants}> -->
		<!-- <div class="gradients" /> -->
		<!-- </Motion> -->
	</nav>
</MotionUl>

<div class="close-btn" on:click={triggerNav}>X</div>

<style lang="scss">
	@import 'src/lib/_common/_viewports';

	/* mobile first */
	nav {
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		z-index: var(--menuZindex);

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
			/* 
			a {
				padding: 1em;
			} */
		}
	}

	.close-btn {
		position: absolute;
		bottom: 0;
		left: calc(100vw - 50%);
		background-color: white;
		z-index: 9999;

		/* @include desktop {
			visibility: hidden;
			display: none;
		} */
	}

	div.gradients {
		top: 35px;
		left: 25px;
		width: 2px;
		height: 100%;

		position: absolute;

		background-image: linear-gradient(180deg, white, transparent);
	}
</style>
