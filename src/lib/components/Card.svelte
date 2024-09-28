<script>
	import MediaQuery from "svelte-media-queries";

</script>

<MediaQuery query="only screen and (min-width: 768px)" let:matches>
	{#if matches}
		<div class="card {$$restProps.class || ''}">
			<slot></slot>
		</div>
	{:else}
        <div class="card">
            <slot></slot>
        </div>
    {/if}
</MediaQuery>

<style>
	.card {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: theme("colors.green.400");
		border-radius: 1.5rem;
		grid-column: span 6;
		grid-row: span 6;
		aspect-ratio: 4/3;
	}
</style>
