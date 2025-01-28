<script lang="ts">
	import App from '$lib/components/App.svelte';
	let { data } = $$props;

	const featuredImage = data.featuredImage;

	
</script>

<App {featuredImage} />
