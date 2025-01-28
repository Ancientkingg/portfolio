<script lang="ts">
	import Gallery from 'svelte-gallery';
	import GalleryImage from './GalleryImage.svelte';
	import type { SvelteComponent } from 'svelte';

	const images = [
    { src: 'https://picsum.photos/600/400', width: 600, height: 400, alt: "blabla" },
    { src: 'https://picsum.photos/400/600', width: 400, height: 600 },
    { src: 'https://picsum.photos/300/200', width: 300, height: 200 },
    { src: 'https://picsum.photos/800/1200', width: 800, height: 1200 },
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
