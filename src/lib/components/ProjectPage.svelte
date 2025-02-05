<script lang="ts">
	import Card from './Card.svelte';
	import Project from './Project.svelte';
	export let projects: Array<{
		imgSrc: string;
		imgStyling: string;
		title: string;
		caption: string;
		link?: string;
	}>;
</script>

<section class="project-page">
	{#each projects as project}
		<Card
			class="max-sm:col-span-16 col-span-20 md:col-span-24 xl:col-span-18 2xl:col-span-18 row-span-16 xl:row-span-20 2xl:row-span-16"
		>
			<Project
				imgSrc={project.imgSrc}
				imgClass={project.imgStyling}
				title={project.title}
				caption={project.caption}
                link={project.link}
			/>
		</Card>
	{/each}
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
