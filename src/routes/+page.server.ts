import { getImagesInfo, selectRandomImage, getAuthorImages } from '$lib/images';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {

    const [featuredImages, authorImages] = await Promise.all([getImagesInfo(), getAuthorImages()]);

    const featuredImage = selectRandomImage(featuredImages);
    const authorImage = selectRandomImage(authorImages);

    return { featuredImage, authorImage };
};