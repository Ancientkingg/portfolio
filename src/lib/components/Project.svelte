<script lang="ts">
	import LinkIcon from 'virtual:icons/line-md/external-link';

	export let imgSrc;
	export let imgClass;
	export let title;
	export let caption;
	export let link;
</script>

<div class="project-container">
	<img src={imgSrc} class="{imgClass || ''} card" alt={$$restProps.alt || ''} />
	<div class="text-container">
		<h1>{title}</h1>
		<p>{caption}</p>
	</div>

	{#if link}
		<LinkIcon class="card-link absolute right-8 top-8 text-2xl" />
	{/if}
</div>

<style lang="postcss">
	h1 {
		padding-top: 3.5rem;
		font-weight: bold;
		font-size: 1.5rem;
	}

	p {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
	.text-container {
		font-family: 'Montserrat';
		font-weight: 450;
		display: flex;
		flex-direction: column;
		justify-content: start;
		height: 100%;
		gap: 1rem;
		padding-right: 4rem;
		text-align: right;
		padding-left: 1.5rem;
	}

	.project-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-left: 7.5%;
	}
	img {
		border-radius: 0.5rem;
		width: 12.5rem;
		height: auto;
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
</style>
