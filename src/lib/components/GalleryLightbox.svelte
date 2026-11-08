<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getCldImageUrl } from 'svelte-cloudinary';
	import type { ImageInfo } from '$lib/images';

	export let images: ImageInfo[];
	export let selected = -1;
	let reduced = false;
	let viewing = 0;
	$: if (selected >= 0) viewing = selected;
	let displayed: (ImageInfo & { url: string }) | null = null;
	let loading = false;
	let failed = false;
	let request = 0;
	let touch: { x: number; y: number } | null = null;

	onMount(() => {
		const media = matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => (reduced = media.matches);
		update();
		media.addEventListener('change', update);
		return () => {
			media.removeEventListener('change', update);
			request++;
		};
	});

	function photoUrl(photo: ImageInfo) {
		const density = Math.min(window.devicePixelRatio || 1, 2);
		return getCldImageUrl({
			src: photo.src,
			width: Math.ceil(Math.min(window.innerWidth, 1200) * density),
			height: Math.ceil(window.innerHeight * density),
			crop: 'limit'
		});
	}

	async function load(index: number) {
		const id = ++request;
		failed = false;
		if (index < 0) {
			loading = false;
			return;
		}
		loading = true;
		const photo = images[index];
		const image = new Image();
		try {
			const url = photoUrl(photo);
			image.src = url;
			await image.decode();
			if (id !== request) return;
			displayed = { ...photo, url };
			// Warm only the two neighbours; retain the current photo until decoding completes.
			for (const offset of [-1, 1]) {
				const neighbour = new Image();
				neighbour.src = photoUrl(images[(index + offset + images.length) % images.length]);
			}
		} catch {
			if (id === request) failed = true;
		} finally {
			if (id === request) loading = false;
		}
	}

	$: if (typeof window !== 'undefined') load(selected);
	function navigate(delta: number) {
		if (selected < 0 || images.length < 2) return;
		selected = (selected + delta + images.length) % images.length;
	}
	function close() {
		selected = -1;
	}
	function mountDialog(node: HTMLDialogElement) {
		displayed = null;
		const opener = document.activeElement as HTMLElement | null;
		const overflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		node.showModal();
		node.querySelector<HTMLButtonElement>('.close')?.focus();
		return {
			destroy() {
				node.close();
				document.body.style.overflow = overflow;
				opener?.focus({ preventScroll: true });
			}
		};
	}
	function keydown(event: KeyboardEvent) {
		if (selected < 0) return;
		if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			event.preventDefault();
			navigate(event.key === 'ArrowRight' ? 1 : -1);
		}
	}
	function touchstart(event: TouchEvent) {
		touch =
			event.touches.length === 1
				? { x: event.touches[0].clientX, y: event.touches[0].clientY }
				: null;
	}
	function touchend(event: TouchEvent) {
		if (!touch || event.touches.length) {
			touch = null;
			return;
		}
		const dx = event.changedTouches[0].clientX - touch.x;
		const dy = event.changedTouches[0].clientY - touch.y;
		if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) navigate(dx < 0 ? 1 : -1);
		touch = null;
	}
</script>

<svelte:window on:keydown={keydown} />

{#if selected >= 0}
	<dialog
		use:mountDialog
		transition:fade={{ duration: reduced ? 0 : 180 }}
		aria-label="Photo viewer"
		on:cancel|preventDefault={close}
	>
		<button class="backdrop" aria-label="Close photo viewer" tabindex="-1" on:click={close}
		></button>
		<div class="viewer">
			<button class="close control" aria-label="Close photo viewer" on:click={close}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					aria-hidden="true"
					focusable="false"
				>
					<path d="M6 6 18 18M18 6 6 18" />
				</svg>
			</button>
			<div
				class="stage"
				on:touchstart|passive={touchstart}
				on:touchend={touchend}
				on:touchcancel={() => (touch = null)}
			>
				{#if displayed}
					{#key displayed.src}
						<img
							src={displayed.url}
							alt={displayed.alt}
							in:fade={{ duration: reduced ? 0 : 220 }}
							out:fade={{ duration: reduced ? 0 : 180 }}
							draggable="false"
						/>
					{/key}
				{/if}
				{#if loading || failed}
					<div class="status" role="status">
						{#if failed}This photo couldn’t load. <button on:click={() => load(selected)}
								>Try again</button
							>{:else}Loading photo…{/if}
					</div>
				{/if}
			</div>
			<footer>
				<button
					class="control"
					aria-label="Previous photo"
					disabled={images.length < 2}
					on:click={() => navigate(-1)}>←</button
				>
				<div class="caption" aria-live="polite" aria-atomic="true">
					<span>{loading || failed ? images[viewing]?.caption : displayed?.caption}</span>
					<span class="counter">{viewing + 1} / {images.length}</span>
				</div>
				<button
					class="control"
					aria-label="Next photo"
					disabled={images.length < 2}
					on:click={() => navigate(1)}>→</button
				>
			</footer>
		</div>
	</dialog>
{/if}

<style>
	dialog {
		position: fixed;
		inset: 0;
		width: 100%;
		max-width: none;
		height: 100%;
		height: 100dvh;
		max-height: none;
		margin: 0;
		padding: 0;
		border: 0;
		background: transparent;
		color: white;
	}
	dialog::backdrop {
		background: transparent;
	}
	.backdrop {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: rgba(16, 19, 16, 0.96);
		cursor: default;
	}
	.viewer {
		position: relative;
		pointer-events: none;
		width: min(1200px, 100%);
		height: 100%;
		margin: auto;
		padding: max(64px, env(safe-area-inset-top)) 64px max(16px, env(safe-area-inset-bottom));
		display: flex;
		flex-direction: column;
	}
	.stage {
		position: relative;
		flex: 1;
		min-height: 0;
		pointer-events: auto;
		touch-action: pan-y pinch-zoom;
	}
	.stage img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: contain;
		border-radius: 1rem;
	}
	.control {
		pointer-events: auto;
		display: grid;
		place-items: center;
		padding: 0;
		width: 48px;
		height: 48px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		background: rgba(40, 43, 40, 0.8);
		color: white;
		font-size: 25px;
		transition: background 180ms ease;
	}
	.control:hover {
		background: #3b5144;
	}
	button:focus-visible {
		outline: 2px solid var(--color-fg);
		outline-offset: 4px;
	}
	.control:disabled {
		opacity: 0.3;
	}
	.close {
		position: absolute;
		top: max(8px, env(safe-area-inset-top));
		right: 16px;
	}
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
		padding-top: 16px;
	}
	.caption {
		text-align: center;
		font-family: 'Montserrat', sans-serif;
		font-size: 14px;
		min-width: 110px;
	}
	.counter {
		display: block;
		opacity: 0.6;
		font-size: 12px;
		margin-top: 4px;
	}
	.status {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		padding: 12px 18px;
		border-radius: 12px;
		background: #282b28;
		text-align: center;
		font-size: 14px;
	}
	.status button {
		text-decoration: underline;
		margin-left: 4px;
	}
	@media (max-width: 600px) {
		.viewer {
			padding-left: 12px;
			padding-right: 12px;
		}
		footer {
			gap: 16px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.control {
			transition: none;
		}
	}
</style>
