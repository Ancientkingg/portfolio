import { getImagesInfo, selectFeaturedImage } from '$lib/images';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {

    const featured = selectFeaturedImage(await getImagesInfo());
	const featuredImage = featured.secure_url;

    return { featuredImage };
};