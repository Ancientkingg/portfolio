import type { PageServerLoad } from './$types';

import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET
});


export const load: PageServerLoad = async () => {

    const getImagesInfo = new Promise((resolve, reject) => {
        cloudinary.api.resources({
            type: 'upload',
            prefix: 'photos'
          }, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            }

            resolve(result.resources.map((image: { public_id: string, width: number, height: number, created_at: string }) => {
                const timestamp = image.created_at.slice(0, 10);

                return {
                    src: image.public_id,
		            width: image.width,
		            height: image.height,
		            alt: 'Gallery image',
		            caption: timestamp,
                }
            }));
          });
    });

    return { images: await getImagesInfo };
};