<script lang="ts">
	import MediaQuery from 'svelte-media-queries';
</script>

<MediaQuery query="only screen and (min-width: 768px)" let:matches>
	{#if matches}
		<div class="card {$$restProps.class || ''}" style={$$restProps.style}>
			<div class="inline-border"></div>
			<slot></slot>
		</div>
	{:else}
		<div class="{$$restProps.class || ''} card" style={$$restProps.style}>
			<slot></slot>
		</div>
	{/if}
</MediaQuery>

<style>
	:global(.card) {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: theme('colors.green.300');
		border-radius: 1.5rem;
		position: relative;
		/* grid-column: span 12; */
		/* grid-row: span 12; */
		/* aspect-ratio: 4/3; */

		font-family: 'Montserrat Alternates';
		letter-spacing: -1px;
	}

	.inline-border {
		position: absolute;
		width: 100%;
		height: 100%;
        border-radius: 1.5rem;
        transition: border 0.1s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.4s;
        opacity: 0%;
	}

	.card:hover .inline-border {
		border: 3px solid theme('colors.green.500');
        opacity: 70%;
	}
</style>
