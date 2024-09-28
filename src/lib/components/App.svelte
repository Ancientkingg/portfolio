<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Card from './Card.svelte';
	import CrownIcon from './CrownIcon.svelte';
	import IconLink from 'virtual:icons/line-md/external-link';
</script>

<section class="home">
	<Card class="justify-end relative aspect-auto col-span-15 row-span-16">
		<h1 class="w-fit pl-8 pb-24 self-start">Skibidi sigma toilet</h1>
		<CrownIcon class="absolute right-12 top-12 text-7xl" />
	</Card>
	<Card class="justify-center overflow-hidden aspect-auto col-span-9 row-span-16">
		<img class="object-cover h-full w-auto" alt="Author portrait" src="/images/mirror.png" />
	</Card>
	<Card class="justify-center aspect-auto row-span-24 col-span-12">3</Card>
	<Card class="justify-center col-span-12 row-span-12 aspect-[4/3]">4</Card>
	<Card
		class="justify-between relative col-span-12 row-span-12 aspect-[4/3]"
		style="filter: saturate(1.5);"
	>
		<h4 class="w-fit self-start pl-8 pt-8">Questions?</h4>
		<h1 class="w-fit self-start pl-8 pb-12">Contact me</h1>
		<IconLink class="absolute right-8 top-8 text-2xl" />
	</Card>
	<Card class="justify-center col-span-12 aspect-auto row-span-4">6</Card>
</section>

<!-- <Canvas>
  <Scene />
</Canvas> -->

<style>
	img {
		transition: opacity 0.5s;
		animation-name: fadeIn;
		animation-timing-function: ease-in-out;
		animation-duration: 1.5s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	h1 {
		font-size: 3rem;
		line-height: 1;
		font-weight: 500;
	}

	h4 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 300;
	}

	.home {
		display: grid;
		grid-template-columns: repeat(36, minmax(0, 1fr));
		grid-auto-rows: minmax(0, 1fr);

		column-gap: 1.25rem;
		row-gap: 1.25rem;

		border-radius: 1.5rem;
	}

	@media only screen and (max-width: 1200px) {
		.home {
			grid-template-columns: repeat(24, minmax(0, 1fr));
		}
	}
	@media only screen and (max-width: 768px) {
		.home {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}
</style>
