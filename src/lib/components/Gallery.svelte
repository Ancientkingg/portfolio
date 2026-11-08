<script lang="ts">
	import Gallery from 'svelte-gallery';
	import GalleryImage from './GalleryImage.svelte';
	import GalleryLightbox from './GalleryLightbox.svelte';
	import { setContext, type SvelteComponent } from 'svelte';
	import type { ImageInfo } from '$lib/images';

	export let images: ImageInfo[];
	let selected = -1;
	const rowHeight = 400;
	const imageComponent = GalleryImage as typeof SvelteComponent;
	setContext('open-gallery-photo', (src: string) => {
		selected = images.findIndex((image) => image.src === src);
	});
</script>

<section class="gallery" aria-label="Photography gallery">
	<Gallery {images} {rowHeight} {imageComponent} />
</section>
<GalleryLightbox {images} bind:selected />
