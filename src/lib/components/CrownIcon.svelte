<script lang="ts">
	import { onMount, SvelteComponent } from 'svelte';

	const crownImports = [
		() => import('virtual:icons/ph/crown?raw'),
		() => import('virtual:icons/mdi/crown?raw'),
		() => import('virtual:icons/ri/vip-crown-line?raw'),
		() => import('virtual:icons/streamline/crown?raw'),
		() => import('virtual:icons/ph/crown-thin?raw'),
		() => import('virtual:icons/pepicons-pencil/crown?raw'),
		() => import('virtual:icons/solar/crown-line-outline?raw'),
		() => import('virtual:icons/majesticons/crown-line?raw')
	];

	const emojiImports = [
		() => import('virtual:icons/twemoji/crown?raw'),
		() => import('virtual:icons/noto/crown?raw'),
		() => import('virtual:icons/openmoji/crown?raw'),
		() => import('virtual:icons/fluent-emoji/crown?raw')
	];

	export let crown: { emojiOrNot: boolean; index: number };

	let svg: unknown;
	let crownIcon: HTMLSpanElement;

	onMount(async () => {
		const loader = crown.emojiOrNot ? crownImports[crown.index % crownImports.length] : emojiImports[crown.index % emojiImports.length];
		const mod = await loader();
		svg = mod.default;

		crownIcon.classList.add('fadeIn');
		crownIcon.classList.remove('opacity-0');
	});
</script>

<div>
	<span
		bind:this={crownIcon}
		class="{$$restProps.class || ''} opacity-0"
		style={crown.emojiOrNot
			? 'filter: invert(42%) sepia(94%) saturate(583%) hue-rotate(95deg) brightness(96%) contrast(83%);'
			: ''}
	>
		{@html svg}
	</span>
</div>

<style>
	.fadeIn {
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
