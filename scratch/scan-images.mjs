import fs from 'fs';
import path from 'path';

const baseDir = path.resolve('public/images');

function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const allFiles = getFiles(baseDir);
console.log(`Total files in public/images: ${allFiles.length}`);

const relativePaths = allFiles.map(f => path.relative(path.resolve('public'), f).replace(/\\/g, '/'));
console.log('Sample relative paths (first 10):');
console.log(relativePaths.slice(0, 10));

const extensions = {};
for (const f of allFiles) {
  const ext = path.extname(f).toLowerCase();
  extensions[ext] = (extensions[ext] || 0) + 1;
}
console.log('Extensions:', extensions);

fs.writeFileSync('scratch/local-images.json', JSON.stringify(relativePaths, null, 2));
console.log('Wrote local image paths to scratch/local-images.json');
