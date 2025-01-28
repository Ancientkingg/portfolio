<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';

	interface ImageInfo {
		src: string;
		width: number;
		height: number;
		alt: string;
		caption: string;
	}

	let imageInfo: ImageInfo = { ...$$restProps } as ImageInfo;
</script>

<div>
	<CldImage
		class="gallery-image"
		src={imageInfo.src}
		alt={imageInfo.alt}
		width="auto"
		height="auto"
	/>
	<p class="bg">25-11-24</p>
	<p>25-11-24</p>
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
