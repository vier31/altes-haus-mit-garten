import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    secure: true,
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_SECRET
});

export default cloudinary