import { getImagesInfo } from '$lib/images';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {

    return { images: await getImagesInfo() };
};