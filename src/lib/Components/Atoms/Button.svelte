<script></script>

<div>
	<slot />
</div>

<style lang="scss">
	div {
		--bg-color: white;

		background-color: var(--bg-color);

		display: flex;
		justify-content: center;
		align-items: center;

		:deep * {
			color: var(--text-color);
		}
	}
</style>
