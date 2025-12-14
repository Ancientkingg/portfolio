import { getImagesInfo, selectRandomImage, getAuthorImages } from '$lib/images';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {

    const [featuredImages, authorImages] = await Promise.all([getImagesInfo(), getAuthorImages()]);

	const crownsCount = 8;
	const emojisCount = 4;

	const emojiOrNot =
		Math.random() < emojisCount / (emojisCount + crownsCount);

	const crownIndex = Math.floor(
		Math.random() * (emojiOrNot ? emojisCount : crownsCount)
	);

    return {
		featuredImage: selectRandomImage(featuredImages),
		authorImage: selectRandomImage(authorImages),
		crown: {
			emojiOrNot,
			index: crownIndex
		},
		quoteIdx: Math.floor(Math.random() * 100)
	};
};