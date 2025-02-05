<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';

	let { data } = $$props;

	const images = data.images;
</script>

<svelte:head>
    <title>Samuel Bruin - Gallery</title>
</svelte:head>

<Gallery {images} />
