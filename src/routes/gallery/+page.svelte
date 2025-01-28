<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';

	let { data } = $$props;

	const images = data.images;
</script>

<Gallery {images} />
