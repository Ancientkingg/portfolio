<script lang="ts">
	import Card from './Card.svelte';
	import LinkedInIcon from 'virtual:icons/line-md/linkedin';
	import GithubIcon from 'virtual:icons/line-md/github';
	import EmailIcon from 'virtual:icons/line-md/email-opened';

	import { Tooltip } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	const email = 'samuelmbruin@yahoo.com';

	const copyEmail = () => {
		navigator.clipboard.writeText(email);
	};

	const createSVG = (width: number, height: number, radius: number) => {
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

		const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

		svg.setAttributeNS('http://www.w3.org/2000/svg', 'viewBox', `0 0 ${width} ${height}`);

		rectangle.setAttribute('x', '0');
		rectangle.setAttribute('y', '0');
		rectangle.setAttribute('width', '100%');
		rectangle.setAttribute('height', '100%');
		rectangle.setAttribute('rx', `${radius}`);
		rectangle.setAttribute('ry', `${radius}`);
		rectangle.setAttribute('pathLength', '10');

		svg.appendChild(rectangle);

		return svg;
	};

	let button: HTMLElement;

	onMount(() => {
		const style = getComputedStyle(button);

		const lines = document.createElement('div');

		lines.classList.add('lines');

		const groupTop = document.createElement('div');
		const groupBottom = document.createElement('div');

		const svg = createSVG(
			button.offsetWidth,
			button.offsetHeight,
			parseInt(style.borderRadius, 10)
		);

		groupTop.appendChild(svg);
		groupTop.appendChild(svg.cloneNode(true));
		groupTop.appendChild(svg.cloneNode(true));
		groupTop.appendChild(svg.cloneNode(true));

		groupBottom.appendChild(svg.cloneNode(true));
		groupBottom.appendChild(svg.cloneNode(true));
		groupBottom.appendChild(svg.cloneNode(true));
		groupBottom.appendChild(svg.cloneNode(true));

		lines.appendChild(groupTop);
		lines.appendChild(groupBottom);

		button.appendChild(lines);

		button.addEventListener('pointerenter', () => {
			button.classList.add('start');
		});

		svg.addEventListener('animationend', () => {
			button.classList.remove('start');
		});
	});
</script>

<section class="contact">
	<Card
		class="!flex-col justify-evenly row-span-12 aspect-auto col-span-3 md:row-span-16 xl:row-span-16"
	></Card>
	<Card
		class="!font-[Gilroy] !tracking-normal text-lg justify-center relative md:aspect-auto md:col-span-15 md:row-span-16 col-span-12 row-span-12 aspect-[4/3]"
	>
		<h1 class="w-fit self-start pl-8 pb-20 text-[3rem]">Contact</h1>
		<h4 class="w-fit self-start pl-8 pt-2 text-[1.25rem]">
			I prefer to be contacted through email.
		</h4>
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a id="email" class="w-fit self-start ml-6 text-[1.25rem] email" on:click={copyEmail} href="#"
			>{email}</a
		>
		<Tooltip trigger="click" triggeredBy="#email" placement="bottom">Copied email</Tooltip>
	</Card>
	<Card
		class="!font-[Gilroy] !tracking-normal text-lg justify-center relative md:aspect-auto md:col-span-15 md:row-span-16 col-span-12 row-span-12 aspect-[4/3]"
	>
		<h1 class="w-fit self-start pl-8 pb-20 text-[3rem]">Curriculum Vitae</h1>
		<a
			href="/docs/CV_Resume_Bruin_Samuel.pdf"
			download="CV_Bruin_Samuel.pdf"
			bind:this={button}
			class="download-button">Download</a
		>
	</Card>
	<Card
		class="!flex-col justify-evenly row-span-12 aspect-auto col-span-3 md:row-span-16 xl:row-span-16"
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
	<Card class="col-span-24 row-span-16"></Card>
	<Card class="col-span-12 row-span-16"></Card>
</section>

<style lang="postcss">
	:global(.download-button.start svg) {
		animation: stroke 1s linear;
	}

	:global(.download-button .lines) {
		position: absolute;
		inset: 0;
		mix-blend-mode: hard-light;
		pointer-events: none;
		z-index: 1;
	}

	:global(.download-button .lines > div:last-child) {
		transform: rotate(180deg);
	}

	:global(.download-button .lines > div svg) {
		display: block;
		position: absolute;
		inset: 0;
		overflow: visible;
		fill: none;
		stroke-width: 2;
		stroke: #dfffc9;
		width: 100%;
		height: 100%;
		stroke-dasharray: 2 10;
		stroke-dashoffset: 14;
		opacity: 0;
	}
	:global(.download-button .lines > div svg:nth-child(1)) {
		stroke: #f9fff8;
	}
	:global(.download-button .lines > div svg:nth-child(2)) {
		stroke-width: 6px;
		filter: blur(20px);
	}
	:global(.download-button .lines > div svg:nth-child(3)) {
		stroke-width: 5px;
		filter: blur(6px);
	}
	:global(.download-button .lines > div svg:nth-child(4)) {
		stroke-width: 10px;
		filter: blur(56px);
	}

	:global(.download-button .lines > div) {
		position: absolute;
		inset: 0;
	}

	:global(.download-button) {
		-webkit-tap-highlight-color: transparent;
		cursor: pointer;
		appearance: none;
		outline: none;
		border: none;
		font-family: 'Inter';
		font-size: 16px;
		font-weight: bold;
		background-color: #26d56c;
		border-radius: 11px;
		padding: 12px 20px;
		position: relative;
		line-height: 24px;
		box-shadow:
			0 1px 2px rgba(0 0 0 / 3%),
			0 4px 16px rgba(0 0 0 / 3%),
			0 4px 24px rgba(0 0 0 / 3%);
	}

	@keyframes stroke {
		30%,
		55% {
			opacity: 1;
		}
		100% {
			stroke-dashoffset: 4;
			opacity: 0;
		}
	}

	.email {
		cursor: pointer;
		color: brown;
		font-weight: bold;
		font-family: 'Inter';
		border-radius: 12px;
		padding: 1px;
		padding-left: 8px;
		padding-right: 8px;
		transition: backdrop-filter 0.3s;
	}

	.email:hover {
		backdrop-filter: saturate(130%) brightness(90%);
	}

	.email:active {
		backdrop-filter: saturate(150%) brightness(80%);
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

	.social-link {
		padding: 2rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.social-link:hover {
		animation: bob 1s infinite ease-in-out;
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

	.contact {
		display: grid;
		grid-template-columns: repeat(36, minmax(0, 1fr));
		grid-auto-rows: minmax(0, 1fr);

		column-gap: 1.25rem;
		row-gap: 1.25rem;

		border-radius: 1.5rem;
	}

	@media only screen and (max-width: 1280px) {
		.contact {
			grid-template-columns: repeat(24, minmax(0, 1fr));
		}
	}
	@media only screen and (max-width: 768px) {
		.contact {
			grid-template-columns: repeat(16, minmax(0, 1fr));
		}
	}
</style>
