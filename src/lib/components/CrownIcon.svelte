<script lang="ts">
	import { onMount } from 'svelte';

	import Crown1 from 'virtual:icons/ph/crown?raw';
	import Crown2 from 'virtual:icons/mdi/crown?raw';
	import Crown3 from 'virtual:icons/twemoji/crown?raw';
	import Crown4 from 'virtual:icons/ri/vip-crown-line?raw';
	import Crown5 from 'virtual:icons/streamline/crown?raw';
	import Crown6 from 'virtual:icons/noto/crown?raw';
	import Crown7 from 'virtual:icons/ph/crown-thin?raw';
	import Crown8 from 'virtual:icons/pepicons-pencil/crown?raw';
	import Crown9 from 'virtual:icons/solar/crown-line-outline?raw';
	import Crown10 from 'virtual:icons/majesticons/crown-line?raw';
	import Crown11 from 'virtual:icons/openmoji/crown?raw';
	import Crown12 from 'virtual:icons/fluent-emoji/crown?raw';

	const crowns = [Crown1, Crown2, Crown4, Crown5, Crown7, Crown8, Crown9, Crown10];

	const crownEmojis = [Crown3, Crown6, Crown11, Crown12];

	let crown: typeof Crown1 | string = '';
	let crownEmoji: typeof Crown1 | string = '';
	let emojiOrNot: boolean = false;

	onMount(() => {
		crown = crowns[Math.floor(Math.random() * crowns.length)];
		crownEmoji = crownEmojis[Math.floor(Math.random() * crownEmojis.length)];

		emojiOrNot = Math.random() < crownEmojis.length / (crownEmojis.length + crowns.length);
	});
</script>

<div>
	{#if emojiOrNot}
		<span
			class={$$restProps.class || ''}
			style="filter: invert(42%) sepia(94%) saturate(583%) hue-rotate(95deg) brightness(96%) contrast(83%);"
		>
			{@html crown}
		</span>
	{:else}
		<span class={$$restProps.class || ''}>
			{@html crownEmoji}
		</span>
	{/if}
</div>

<style>
	span {
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
</style>
