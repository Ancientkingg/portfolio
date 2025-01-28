<script lang="ts">
	import Card from "./Card.svelte";

</script>

<section class="project-page">
    <Card class="col-span-12 row-span-16"></Card>
	<Card class="col-span-12 row-span-16"></Card>
    <Card class="col-span-12 row-span-16"></Card>
    <Card class="col-span-12 row-span-16"></Card>
    <Card class="col-span-12 row-span-16"></Card>
    <Card class="col-span-12 row-span-16"></Card>
</section>

<style lang="postcss">
	:global(body) {
		border-radius: 1.5rem;
	}

	.project-page {
		display: grid;
		grid-template-columns: repeat(36, minmax(0, 1fr));
		grid-auto-rows: minmax(0, 1fr);

		column-gap: 1.25rem;
		row-gap: 1.25rem;

		border-radius: 1.5rem;
	}

	@media only screen and (max-width: 1280px) {
		.project-page {
			grid-template-columns: repeat(24, minmax(0, 1fr));
		}
	}
	@media only screen and (max-width: 768px) {
		.project-page {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}
</style>
