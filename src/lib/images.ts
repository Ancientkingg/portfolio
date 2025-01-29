import {v2 as cloudinary} from 'cloudinary';

export interface ImageInfo {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
    secure_url: string;
}

cloudinary.config({
  cloud_name: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
  api_secret: import.meta.env.VITE_CLOUDINARY_API_SECRET
});

let imagesInfo: ImageInfo[] | null = null;
let imagesInfoDate: number | null = null;
const expirationLimit = 1000 * 60 * 60 * 24; // 24 hour

export const getImagesInfo = (): Promise<ImageInfo[]> => new Promise((resolve, reject) => {
    if (imagesInfo && imagesInfoDate && Date.now() - imagesInfoDate < expirationLimit) {
        resolve(imagesInfo);
    }

    cloudinary.api.resources({
        type: 'upload',
        prefix: 'photos',
        max_results: 500,
      }, (err, result) => {
        if (err) {
            console.log(err);
            reject(err);
        }

        console.log(result);

        imagesInfo = result.resources.map((image: { public_id: string, width: number, height: number, created_at: string, secure_url: string }) => {
            const timestamp = image.created_at.slice(0, 10);
            return {
                src: image.public_id,
                width: image.width,
                height: image.height,
                alt: 'Gallery image',
                caption: timestamp,
                secure_url: image.secure_url
            } as ImageInfo;
        });
        imagesInfoDate = Date.now();

        resolve(imagesInfo!);
      });
});

export const selectFeaturedImage = (images: ImageInfo[]) => {
    return images[Math.floor(Math.random() * images.length)];
}