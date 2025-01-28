<script lang="ts">
	import Gallery from 'svelte-gallery';
	import GalleryImage from './GalleryImage.svelte';
	import type { SvelteComponent } from 'svelte';

  export let images;

	let rowHeight = 400;
	// @ts-ignore
	let imageComponent: typeof SvelteComponent = GalleryImage;
</script>

<section class="gallery">
	<Gallery {images} {rowHeight} {imageComponent} />
</section>

<style lang="postcss">
</style>
