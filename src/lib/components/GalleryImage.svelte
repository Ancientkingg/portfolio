<script lang="ts">
	import type { ImageInfo } from '$lib/images';
	import { CldImage } from 'svelte-cloudinary';
	import { getContext } from 'svelte';

	const open = getContext<(src: string) => void>('open-gallery-photo');
	$: imageInfo = { ...$$restProps } as ImageInfo & { scaledHeight: number; scaledWidth: number };
	$: width = Math.ceil(imageInfo.scaledWidth);
	$: height = Math.ceil(imageInfo.scaledHeight);
	let loaded = false;
	let failed = false;
	let source = '';
	$: if (source !== imageInfo.src) {
		source = imageInfo.src;
		loaded = false;
		failed = false;
	}
</script>

<button
	type="button"
	class:loaded
	on:click={() => open(imageInfo.src)}
	aria-label={`Open photo: ${imageInfo.caption || imageInfo.alt}`}
	aria-haspopup="dialog"
>
	<CldImage
		class="gallery-image"
		src={imageInfo.src}
		alt={imageInfo.alt}
		{width}
		{height}
		loading="lazy"
		decoding="async"
		on:load={() => {
			loaded = true;
			failed = false;
		}}
		on:error={() => (failed = true)}
	/>
	{#if failed}<span class="error">Preview unavailable · Open photo</span>{/if}
	<span class="caption bg" aria-hidden="true">{imageInfo.caption}</span>
	<span class="caption">{imageInfo.caption}</span>
</button>

<style>
	button {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		border-radius: 1rem;
		overflow: hidden;
		background: rgba(255, 255, 255, 0.04);
		cursor: zoom-in;
		text-align: left;
	}
	button :global(.gallery-image) {
		display: block;
		border-radius: 1rem;
		width: 100%;
		max-width: 100% !important;
		max-height: 100% !important;
		height: auto;
		opacity: 0;
		transition:
			opacity 320ms ease,
			transform 400ms ease;
	}
	button.loaded :global(.gallery-image) {
		opacity: 1;
	}
	button:focus-visible {
		outline: 2px solid var(--color-fg);
		outline-offset: 3px;
	}
	.bg {
		backdrop-filter: brightness(65%) contrast(170%) invert(100%);
		color: transparent !important;
		mix-blend-mode: normal !important;
	}
	.caption {
		opacity: 0;
		padding: 0 2px;
		border-radius: 2px;
		font-weight: 500;
		font-family: 'Montserrat';
		font-size: 18px;
		position: absolute;
		bottom: 0.75rem;
		left: 1rem;
		transition: opacity 220ms ease;
		mix-blend-mode: difference;
		color: white;
	}
	button:focus-visible .caption {
		opacity: 1;
	}
	.error {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		color: white;
		font-size: 14px;
	}
	@media (hover: hover) {
		button:hover .caption {
			opacity: 1;
		}
		button.loaded:hover :global(.gallery-image) {
			transform: scale(1.015);
		}
	}
	@media (hover: none) {
		.caption {
			opacity: 1;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		button :global(.gallery-image),
		.caption {
			transition: none;
		}
		button.loaded:hover :global(.gallery-image) {
			transform: none;
		}
	}
</style>
