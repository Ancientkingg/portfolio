<script lang="ts">
	import Gallery from 'svelte-gallery';
	import GalleryImage from './GalleryImage.svelte';
	import type { SvelteComponent } from 'svelte';

	const images = [
		{ src: 'cld-sample-5', width: 667, height: 447, alt: 'blabla' },
		{ src: 'samples/woman-on-a-football-field', width: 397, height: 446 },
		{ src: 'samples/upscale-face-1', width: 233, height: 233 },
		{ src: 'cld-sample-2', width: 667, height: 447 }
	];

	let rowHeight = 400;
	// @ts-ignore
	let imageComponent: typeof SvelteComponent = GalleryImage;
</script>

<section class="gallery">
	<Gallery {images} {rowHeight} {imageComponent} />
</section>

<style lang="postcss">
</style>
