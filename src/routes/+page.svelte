<script lang="ts">
	import App from '$lib/components/App.svelte';
	let { data } = $$props;

	const featuredImage = data.featuredImage;
	const authorImage = data.authorImage;
</script>

<svelte:head>
    <title>Samuel Bruin - Portfolio</title>
</svelte:head>

<App {featuredImage} {authorImage} />
