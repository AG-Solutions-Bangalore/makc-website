const sharp = require('sharp');
const path = require('path');

async function generateIlluminatedHero() {
  const width = 1920;
  const height = 1080;

  // Rich architectural landscape lighting on the right side:
  // - Uplights for trees and gate automation area
  // - Warm golden glow for smart switches and terrace area
  // - Atmospheric night fill so the entire right side is beautifully visible
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Broad warm architectural ambient fill across the entire right quadrant (x > 65%) -->
    <linearGradient id="rightAmbientWash" x1="60%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="25%" stop-color="#fdcb6e" stop-opacity="0.18" />
      <stop offset="60%" stop-color="#ffeaa7" stop-opacity="0.32" />
      <stop offset="100%" stop-color="#74b9ff" stop-opacity="0.22" />
    </linearGradient>

    <!-- Warm landscape spotlight for the right trees, gate, and car area -->
    <radialGradient id="gardenSpot" cx="82%" cy="68%" r="40%">
      <stop offset="0%" stop-color="#fffa65" stop-opacity="0.5" />
      <stop offset="35%" stop-color="#ffb142" stop-opacity="0.3" />
      <stop offset="70%" stop-color="#2c2c54" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Mid-level terrace & smart switches warm illumination -->
    <radialGradient id="terraceGlow" cx="80%" cy="46%" r="35%">
      <stop offset="0%" stop-color="#ffeaa7" stop-opacity="0.45" />
      <stop offset="45%" stop-color="#e17055" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Upper canopy moonlight wash so tree foliage isn't pure black -->
    <radialGradient id="canopyMoonlight" cx="88%" cy="22%" r="42%">
      <stop offset="0%" stop-color="#dff9fb" stop-opacity="0.4" />
      <stop offset="45%" stop-color="#81ecec" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#rightAmbientWash)" />
  <rect width="${width}" height="${height}" fill="url(#gardenSpot)" />
  <rect width="${width}" height="${height}" fill="url(#terraceGlow)" />
  <rect width="${width}" height="${height}" fill="url(#canopyMoonlight)" />
</svg>
`;

  const glowPng = await sharp(Buffer.from(svg)).png().toBuffer();

  // First apply CLAHE + slight gamma lift to reveal photographic details in the shadows
  const enhancedMaster = await sharp('public/images/home/hero_bg_original.webp')
    .clahe({ width: 30, height: 30, maxSlope: 4 })
    .modulate({ brightness: 1.18, saturation: 1.15 })
    .composite([
      { input: glowPng, blend: 'screen' }
    ])
    .toBuffer();

  const imgDir = path.join(__dirname, '..', 'public', 'images', 'home');

  // Generate 1920w master
  await sharp(enhancedMaster)
    .webp({ quality: 88 })
    .toFile(path.join(imgDir, 'hero_bg.webp'));
  console.log('Saved 1920w hero_bg.webp');

  // Generate 1440w
  await sharp(enhancedMaster)
    .resize(1440, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(imgDir, 'hero_bg-1440.webp'));
  console.log('Saved 1440w hero_bg-1440.webp');

  // Generate 1280w
  await sharp(enhancedMaster)
    .resize(1280, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(imgDir, 'hero_bg-1280.webp'));
  console.log('Saved 1280w hero_bg-1280.webp');

  // Generate 768w
  await sharp(enhancedMaster)
    .resize(768, null, { withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(imgDir, 'hero_bg-768.webp'));
  console.log('Saved 768w hero_bg-768.webp');

  console.log('All responsive hero background images successfully updated with right-side illumination!');
}

generateIlluminatedHero().catch(console.error);
