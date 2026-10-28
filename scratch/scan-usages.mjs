import fs from 'fs';
import path from 'path';

// Load the 177 local image paths (relative to public/images, and also with 'images/')
const localImages = JSON.parse(fs.readFileSync('scratch/local-images.json', 'utf8'));

// Scan src directory, index.html, public files, config files
function getAllSourceFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist' && entry.name !== 'scratch' && entry.name !== 'lighthouse-reports') {
        files = files.concat(getAllSourceFiles(fullPath));
      }
    } else {
      const ext = path.extname(entry.name);
      if (['.tsx', '.ts', '.jsx', '.js', '.html', '.css', '.scss', '.json'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const sourceFiles = [
  ...getAllSourceFiles(path.resolve('src')),
  path.resolve('index.html')
];

// Look for image references in source files
const imageUsages = [];

for (const file of sourceFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(path.resolve('.'), file).replace(/\\/g, '/');

  // Regex patterns:
  // 1. Strings containing /images/ or images/
  // 2. Exact filenames from localImages
  const lines = content.split('\n');
  lines.forEach((line, lineIndex) => {
    // Check if line contains /images/ or images/ or any of the image paths
    if (line.includes('images/') || line.includes('/images') || line.includes('.webp') || line.includes('.avif') || line.includes('.png') || line.includes('.jpg') || line.includes('.svg') || line.includes('.mp4')) {
      imageUsages.push({
        file: relPath,
        line: lineIndex + 1,
        content: line.trim()
      });
    }
  });
}

console.log(`Found ${imageUsages.length} lines with possible image references across ${new Set(imageUsages.map(u => u.file)).size} files.`);

fs.writeFileSync('scratch/image-usages.json', JSON.stringify(imageUsages, null, 2));

// Summary by file
const byFile = {};
for (const u of imageUsages) {
  byFile[u.file] = (byFile[u.file] || 0) + 1;
}
console.log('Files with image references:');
console.table(Object.entries(byFile).map(([file, count]) => ({ file, count })));
