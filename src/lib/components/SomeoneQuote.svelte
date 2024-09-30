<script lang="ts">
	import { nextRandom } from '$lib/random';
	import { onMount } from 'svelte';
	const quotes = [
		'wants to make a change.',
		'matters.',
		'likes to code.',
		'creates.',
		'does stuff.',
		'codes.',
		'cares.',
		'takes pictures.',
		'programs.',
        'writes code.',
        'learns.',
        'builds.',
        'designs.',
        'yaps.'
	];

	let quote = quotes[Math.floor(nextRandom() * quotes.length)];

	let element: HTMLSpanElement;

	onMount(() => {
		element.classList.add('fadeInSlow');
		element.classList.remove('opacity-0');
	});
</script>

<h1 class="!font-bold pt-1 opacity-0" bind:this={element}>{quote}</h1>

<style>
	:global(.fadeInSlow) {
		opacity: 0;
		animation-name: fadeIn;
		animation-timing-function: ease-in-out;
		animation-duration: 2.25s;
		animation-delay: 0.25s;
		animation-fill-mode: forwards;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 100%;
		}
	}
</style>
