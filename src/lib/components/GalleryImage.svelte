<script lang="ts">
	import type { ImageInfo } from '$lib/images';
	import { CldImage } from 'svelte-cloudinary';

	const imageInfo = { ...$$restProps } as ImageInfo & { scaledHeight: number; scaledWidth: number };

	const width = Math.ceil(imageInfo.scaledWidth);
	const height = Math.ceil(imageInfo.scaledHeight);
</script>

<div>
	<CldImage class="gallery-image" src={imageInfo.src} alt={imageInfo.alt} {width} {height} />
	<p class="bg">{imageInfo.caption}</p>
	<p>{imageInfo.caption}</p>
</div>

<style lang="postcss">
	div {
		position: relative;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	:global(.gallery-image) {
		border-radius: 1rem;
		width: 100%;
		max-width: 100% !important;
		max-height: 100% !important;
		height: auto;
	}

	.bg {
		backdrop-filter: brightness(65%) contrast(170%) invert(100%);
		color: rgba(0, 0, 0, 0);
		mix-blend-mode: normal;
	}

	p {
		opacity: 0;
		cursor: default;
		padding-left: 2px;
		padding-right: 2px;
		border-radius: 2px;
		font-weight: 500;
		font-family: 'Montserrat';
		font-size: 18px;
		position: absolute;
		bottom: 0.75rem;
		left: 1rem;
		transition: opacity 0.3s;
		mix-blend-mode: difference;
		color: white;
	}

	div:hover p {
		opacity: 100%;
	}
</style>
