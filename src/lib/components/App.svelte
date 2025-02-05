<script lang="ts">
	// import { Canvas } from '@threlte/core';
	// import Scene from './Scene.svelte';
	import Card from './Card.svelte';
	import CrownIcon from './CrownIcon.svelte';
	import LinkIcon from 'virtual:icons/line-md/external-link';
	import LinkedInIcon from 'virtual:icons/line-md/linkedin';
	import GithubIcon from 'virtual:icons/line-md/github';
	import EmailIcon from 'virtual:icons/line-md/email-opened';
	import SomeoneQuote from './SomeoneQuote.svelte';
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { CldImage } from 'svelte-cloudinary';

	export let authorImage: ImageInfo;
	export let featuredImage: ImageInfo;

	import type { ImageInfo } from '$lib/images';

	let someone: HTMLElement;
	let who: HTMLElement;
	let gallery: HTMLElement;

	let resizeObserver: ResizeObserver;

	onMount(() => {
		let fadeInElements = [someone, who, gallery];
		resizeObserver = new ResizeObserver(() => {
			fadeInElements.forEach((el) => {
				el.classList.remove('opacity-0');
				el.classList.add('fadeIn');
			});
		});

		resizeObserver.observe(document.body);
	});

	onDestroy(() => {
		if (resizeObserver) {
			resizeObserver.disconnect();
		}
	});
</script>

<section class="home">
	<Card
		class="justify-center relative md:aspect-auto md:col-span-15 md:row-span-16 col-span-12 row-span-12 aspect-[4/3]"
	>
		<div class="flex flex-wrap w-fit pl-[9%] pb-12 self-start pr-8 font-[Montserrat] mt-[30%]">
			<h1 class="text-5xl !font-medium underline pt-1 opacity-0" bind:this={someone}>Someone</h1>
			<h1 class="text-5xl !font-medium pt-1 opacity-0">&nbsp;</h1>
			<h1 class="text-5xl !font-thin italic pt-1 opacity-0" bind:this={who}>who&nbsp;&nbsp;</h1>
			{#if !browser}
				<h1 class="text-5xl !font-bold italic pt-1 opacity-0">likes to code.</h1>
			{:else}
				<SomeoneQuote />
			{/if}
		</div>
		<CrownIcon class="absolute right-12 top-12 text-7xl" />
	</Card>
	<Card
		class="justify-center overflow-hidden md:aspect-auto md:col-span-9 md:row-span-16  col-span-12 row-span-12 aspect-[4/3]"
	>
		<CldImage
			class="object-cover h-full w-auto"
			src={authorImage.src}
			alt="Author portrait"
			width={authorImage.width}
			height={authorImage.height}
		/>
	</Card>
	<Card
		class="justify-center md:aspect-auto overflow-hidden md:row-span-24 md:col-span-12 col-span-12 row-span-12 aspect-[4/3]"
	>
		<a href="/gallery" class="grid p-0 m-0 h-full w-auto" style="grid-template-columns: 1fr;">
			<CldImage
				class="featured-image object-cover gallery-photo h-full w-auto"
				src={featuredImage.src}
				alt="Featured from gallery"
				width={featuredImage.width}
				height={featuredImage.height}
			/>
			<h1
				class="gallery-text relative p-3 rounded-3xl w-fit h-fit text-[3rem] opacity-0 fadeIn"
				style="grid-row-start: 1; grid-column-start: 1;"
				bind:this={gallery}
			>
				Gallery
			</h1>
		</a>
	</Card>
	<Card
		class="relative justify-end md:col-span-12 md:row-span-12 aspect:auto md:aspect-[4/3] leading-6 col-span-12 row-span-9"
	>
		<img class="flag" alt="Indonesian flag" src="/images/flag_id_nl.png" />
		<span class="font-[Gilroy] !tracking-normal text-lg p-10 pb-14 pr-32">
			Hi, I'm Samuel, a Comp Sci student studying at TU Delft.
		</span>
	</Card>
	<Card
		class="contact-card justify-between relative md:col-span-12 md:row-span-12 col-span-12 row-span-9"
		style="filter: saturate(2) contrast(1.2);"
	>
		<a
			class="flex flex-col items-center relative w-full h-full m-0 p-0 justify-between"
			href="/contact"
		>
			<h4 class="w-fit self-start pl-8 pt-8 text-[1.25rem]">Questions?</h4>
			<h1 class="w-fit self-start pl-8 pb-12 text-[3rem]">Contact me</h1>
			<LinkIcon class="card-link absolute right-8 top-8 text-2xl" />
		</a>
	</Card>
	<Card
		class="!flex-row justify-evenly col-span-12 aspect-auto row-span-4 md:col-span-24 xl:col-span-12"
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

<style lang="postcss">
	:global(.featured-image) {
		grid-row-start: 1;
		grid-column-start: 1;
	}
	:global(.contact-card) {
		cursor: pointer;
	}
	:global(.gallery-photo) {
		transition:
			transform 0.5s,
			filter 0.5s,
			opacity 0.5s;
		filter: saturate(70%);
	}

	:global(.card):hover :global(.gallery-photo) {
		transform: scale(1.01);
		filter: none;
	}

	.gallery-text {
		backdrop-filter: contrast(80%) brightness(150%) saturate(150%) blur(6px);
		box-shadow: 0 0 20px 15px rgba(0, 0, 0, 0.2);
		transition:
			backdrop-filter 0.5s,
			margin 0.5s,
			right 0.5s cubic-bezier(0.33, 1, 0.68, 1),
			transform 0.5s cubic-bezier(0.33, 1, 0.68, 1),
			opacity 0.5s;

		top: 100%;

		right: -100%;
		margin-left: -32px;
		margin-top: -42px;
		transform: translateY(-100%) translateX(-100%);
	}

	:global(.card):hover .gallery-text {
		backdrop-filter: contrast(80%) brightness(150%) saturate(200%) blur(16px);

		transform: translateY(-100%);
		right: 0;
		margin-left: 32px;
	}

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

	:global(h1) {
		font-size: 3rem;
		line-height: 1;
		font-weight: 500;
	}

	:global(h4) {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 300;
	}

	:global(body) {
		border-radius: 1.5rem;
	}

	.home {
		display: grid;
		grid-template-columns: repeat(36, minmax(0, 1fr));
		grid-auto-rows: minmax(0, 1fr);

		column-gap: 1.25rem;
		row-gap: 1.25rem;

		border-radius: 1.5rem;
	}

	@media only screen and (max-width: 1280px) {
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
