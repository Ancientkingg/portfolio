<script>
	import '../app.css';
</script>

<nav class="flex justify-between items-center bg-green-200 h-24 rounded-2xl mb-4 px-10">
	<a href="https://github.com/ancientkingg" class="text-2xl">
		<span class="name">SAMUEL</span> <span class="ml-1 surname">BRUIN</span></a
	>
	<div class="flex">
		<div class="p-5 rounded-xl mr-6 nav-button hover:bg-green-100 transition-colors">
			<a href="#" class="text-lg">PROJECTS</a>
		</div>
		<div class="p-5 rounded-xl mr-6 nav-button hover:bg-green-100 transition-colors">
			<a href="#" class="text-lg">ABOUT</a>
		</div>
		<div class="p-5 rounded-xl mr-6 nav-button hover:bg-green-100 transition-colors">
			<a href="#" class="text-lg">CONTACT</a>
		</div>
	</div>
</nav>

<slot></slot>

<style lang="postcss">
	@import '/static/style/navbar.css';
	@import '/static/style/fonts.css';

	.surname {
		display: inline-block;
		font-weight: 600;
		color: #1a0000;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: #1a0000;
		-webkit-text-fill-color: #1a0000;
		letter-spacing: 0px;
		font-style: normal;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.name {
		display: inline-block;
		transform: skewX(-20deg);
		font-family: 'Montserrat';
		font-weight: 200;
		color: #1a0000;
		letter-spacing: -1px;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	a:hover .name {
		transform: skewX(0deg);
		font-weight: 600;
		color: #1a0000;
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: #1a0000;
		-webkit-text-fill-color: #1a0000;
		letter-spacing: -1px;
		font-style: normal;
	}

	a:hover .surname {
		transform: skewX(-20deg);
		font-weight: 200;
		-webkit-text-stroke-width: 0px;
		color: #1a0000;
		letter-spacing: -1px;
	}

	nav a {
		font-family: 'Montserrat';
		font-weight: 300;
		color: #1a0000;
	}

	.nav-button a {
		transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.nav-button:hover a {
		display: inline-block;
		transform: skewX(-15deg);
	}

	:global(body) {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		margin-left: 2rem;
		margin-right: 2rem;
	}
</style>
