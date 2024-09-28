<script>
	import '../app.css';
</script>

<nav class="flex justify-between items-center bg-green-300 h-24 rounded-3xl mb-5 px-10">
	<a href="https://github.com/ancientkingg" class="text-2xl">
		<span class="name">SAMUEL</span> <span class="ml-1 surname">BRUIN</span></a
	>
	<div class="flex">
		<div class="p-4 rounded-xl mr-6 nav-button hover:bg-green-100 transition-colors">
			<a href="#" class="text-lg">PROJECTS</a>
		</div>
		<!-- <div class="p-4 rounded-xl mr-6 nav-button hover:bg-green-100 transition-colors">
			<a href="#" class="text-lg">ABOUT</a>
		</div>
		<div class="p-4 rounded-xl mr-6 nav-button hover:bg-green-100 transition-colors">
			<a href="#" class="text-lg">CONTACT</a>
		</div> -->
	</div>
</nav>

<slot></slot>

<style lang="postcss">
	/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'); */
	/* @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); */
	/* @import url('https://fonts.cdnfonts.com/css/gilroy-bold'); */
	@import '/static/style/fonts.css';

	.surname {
		display: inline-block;
		font-weight: 600;
		color: theme('colors.gray.900');
		font-style: normal;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		letter-spacing: -1px;
	}

	.name {
		display: inline-block;
		transform: skewX(-15deg);
		font-family: 'Montserrat';
		color: theme('colors.gray.900');
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		letter-spacing: -1px;
	}

	a:hover .name {
		transform: skewX(0deg);
		color: theme('colors.gray.900');
		font-weight: 600;
		font-style: normal;
		letter-spacing: -1px;
	}

	a:hover .surname {
		transform: skewX(-15deg);
		font-weight: 200;
		-webkit-text-stroke-width: 0px;
		color: theme('colors.gray.900');
		letter-spacing: -1px;
	}

	nav a {
		font-family: 'Montserrat';
		font-weight: 300;
		color: theme('colors.gray.900');
	}

	.nav-button a {
		transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.nav-button:hover a {
		display: inline-block;
		transform: skewX(-15deg);
	}

	:global(body) {
		margin-top: 2rem;
		margin-bottom: 2rem;
		margin-left: 8rem;
		margin-right: 8rem;
		background-color: theme('colors.green.100');
	}

	@media only screen and (max-width: 900px) {
		:global(body) {
			margin-left: 2rem;
			margin-right: 2rem;
		}
	}
</style>
