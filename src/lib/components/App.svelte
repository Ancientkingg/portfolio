<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Card from './Card.svelte';
</script>

<section class="home">
	<Card class="!aspect-auto !col-span-8 !row-span-7">1</Card>
	<Card class="!aspect-auto !col-span-4 !row-span-7">2</Card>
	<Card class="!aspect-auto !row-span-11">3</Card>
	<Card class="">4</Card>
	<Card class="">5</Card>
	<Card class="!aspect-auto !row-span-2">6</Card>
</section>

<!-- <Canvas>
  <Scene />
</Canvas> -->

<style>
	.home {
		display: grid;
		grid-template-columns: repeat(18, auto);
		grid-auto-rows: 1fr;

		column-gap: 1.25rem;
		row-gap: 1.25rem;

		border-radius: 1.5rem;
		/* background-color: green; */
	}

	@media only screen and (max-width: 1200px) {
		.home {
			grid-template-columns: repeat(12, auto);
		}
	}
	@media only screen and (max-width: 768px) {
		.home {
			grid-template-columns: repeat(6, auto);
		}
	}
</style>
