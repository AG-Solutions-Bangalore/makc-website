const REMOTE_IMAGE_BASE = "https://agsdemo.in/macapi/public/assets/images/web_images";

export const getImageUrl = (filename: string) => {
  if (!filename) return "";
  
  // Strip any accidental folder paths that might be passed in
  const baseName = filename.split('/').pop() || filename;
  
  return `${REMOTE_IMAGE_BASE}/${baseName}`;
};
