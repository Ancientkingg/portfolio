<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Card from './Card.svelte';
	import CrownIcon from './CrownIcon.svelte';
	import LinkIcon from 'virtual:icons/line-md/external-link';
	import LinkedInIcon from 'virtual:icons/line-md/linkedin';
	import GithubIcon from 'virtual:icons/line-md/github';
	import EmailIcon from 'virtual:icons/line-md/email-opened';
</script>

<section class="home">
	<Card
		class="justify-end relative md:aspect-auto md:col-span-15 md:row-span-16 col-span-12 row-span-12 aspect-[4/3]"
	>
		<h1 class="w-fit pl-8 pb-24 self-start !font-semibold">A Software engineer</h1>
		<CrownIcon class="absolute right-12 top-12 text-7xl" />
	</Card>
	<Card
		class="justify-center overflow-hidden md:aspect-auto md:col-span-9 md:row-span-16  col-span-12 row-span-12 aspect-[4/3]"
	>
		<img class="object-cover h-full w-auto" alt="Author portrait" src="/images/mirror.png" />
	</Card>
	<Card
		class="justify-center md:aspect-auto md:row-span-24 md:col-span-12 col-span-12 row-span-12 aspect-[4/3]"
		>3 (photo gallery)</Card
	>
	<Card
		class="relative justify-end md:col-span-12 md:row-span-12 aspect:auto md:aspect-[4/3] !p-10 !pb-14 !pr-32 leading-6 col-span-12 row-span-9"
	>
		<img class="flag" alt="Indonesian flag" src="/images/flag_id_nl.png" />
		<span class="font-[Gilroy] !tracking-tight text-lg">
			Hello, I'm Samuel Bruin, a software engineer based in The Netherlands, but originally from
			Indonesia.
		</span>
	</Card>
	<Card
		class="justify-between relative md:col-span-12 md:row-span-12 col-span-12 row-span-9"
		style="filter: saturate(1.5);"
	>
		<h4 class="w-fit self-start pl-8 pt-8">Questions?</h4>
		<h1 class="w-fit self-start pl-8 pb-12">Contact me</h1>
		<LinkIcon class="card-link absolute right-8 top-8 text-2xl" />
	</Card>
	<Card
		class="!flex-row justify-evenly col-span-12 aspect-auto row-span-4"
	>
		<a class="social-link" href="https://www.linkedin.com/in/samuelbruin" target="_blank">
			<LinkedInIcon class="text-green-950 text-3xl" />
		</a>
		<a class="social-link" href="https://github.com/ancientkingg" target="_blank">
			<GithubIcon class="text-green-950 text-3xl" />
		</a>
		<a class="social-link" href="mailto: samuelmbruin@yahoo.com">
			<EmailIcon class="text-green-950 text-3xl" />
		</a>
	</Card>
</section>

<!-- <Canvas>
  <Scene />
</Canvas> -->

<style>
	.flag {
		border-radius: 6px;
		position: absolute;
		width: 3.25rem;
		opacity: 80%;
		top: 2.25rem;
		left: 2.75rem;
	}

	.social-link {
		padding: 2rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.social-link:hover {
		animation: bob 1s infinite ease-in-out;
	}

	:global(.card-link) {
		transition:
			right 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
			top 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	:global(.card:hover .card-link) {
		right: 1.5rem;
		top: 1.5rem;
		animation: bob-diagonal 1s infinite ease-in-out;
	}

	@keyframes bob {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-0.2rem);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes bob-diagonal {
		0% {
			transform: translateY(0) translateX(0);
		}
		50% {
			transform: translateY(-0.2rem) translateX(0.2rem);
		}
		100% {
			transform: translateY(0) translateX(0);
		}
	}

	img {
		transition: opacity 0.5s;
		animation-name: fadeIn;
		animation-timing-function: ease-in-out;
		animation-duration: 1.5s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	h1 {
		font-size: 3rem;
		line-height: 1;
		font-weight: 500;
	}

	h4 {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 300;
	}

	.home {
		display: grid;
		grid-template-columns: repeat(36, minmax(0, 1fr));
		grid-auto-rows: minmax(0, 1fr);

		column-gap: 1.25rem;
		row-gap: 1.25rem;

		border-radius: 1.5rem;
	}

	@media only screen and (max-width: 1200px) {
		.home {
			grid-template-columns: repeat(24, minmax(0, 1fr));
		}
	}
	@media only screen and (max-width: 768px) {
		.home {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}
</style>
