<script lang="ts">
	export let imgSrc;
	export let imgClass;
	export let title;
	export let caption;
</script>

<div class="project-container">
	<img src={imgSrc} class="{imgClass || ''} card" alt={$$restProps.alt || ''} />
    <div class="text-container">
        <h1>{title}</h1>
        <p>{caption}</p>
    </div>
</div>

<style lang="postcss">
    h1 {
        padding-top: 3.5rem;
        font-weight: bold;
        font-size: 1.5rem;
    }

    p {
        padding-top: 1.5rem;
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
		border-radius: 1.5rem;
		width: 12rem;
		height: auto;
	}
</style>
