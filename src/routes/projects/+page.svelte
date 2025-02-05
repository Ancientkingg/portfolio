<script lang="ts">
	import ProjectPage from '$lib/components/ProjectPage.svelte';

	let { data } = $$props;
	let projects = data.projects;
</script>

<svelte:head>
    <title>Samuel Bruin - Projects</title>
</svelte:head>

<ProjectPage {projects} />
