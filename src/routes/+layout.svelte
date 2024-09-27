<script>
	import '../app.css';
</script>

<nav class="flex justify-between items-center bg-green-100 h-16 rounded-2xl mb-4 px-8">
	<a href="https://github.com/ancientkingg" class="text-lg font-semibold">Samuel Bruin</a>
	<div class="flex">
		<a href="#" class="text-sm mr-6 bg-red-700">PROJECTS</a>
		<a href="#" class="text-sm mr-6 bg-green-700">ABOUT</a>
		<a href="#" class="text-sm bg-blue-700">CONTACT</a>
	</div>
</nav>

<slot></slot>

<style lang="postcss">
	@import '/static/style/navbar.css';

	:global(body) {
		margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        margin-left: 2rem;
        margin-right: 2rem;
	}
</style>
