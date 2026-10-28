import fs from 'fs';
import path from 'path';

function getAllSourceFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'scratch', 'lighthouse-reports'].includes(entry.name)) {
        files = files.concat(getAllSourceFiles(fullPath));
      }
    } else {
      const ext = path.extname(entry.name);
      if (['.tsx', '.ts', '.jsx', '.js', '.html', '.css', '.scss'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const files = [
  ...getAllSourceFiles(path.resolve('src')),
  path.resolve('index.html')
];

// Patterns to look for:
// 1. Strings matching /images/...
// 2. Calls to getImageUrl(...)
// 3. Any reference to local image files
const imageRegex = /["'`](\/images\/[^"'`]+|images\/[^"'`]+)["'`]/g;
const getImageUrlRegex = /getImageUrl\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g;

const matches = [];

for (const file of files) {
  const relPath = path.relative(path.resolve('.'), file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf8');

  let m;
  while ((m = imageRegex.exec(content)) !== null) {
    matches.push({
      file: relPath,
      type: 'direct_path',
      matched: m[1],
      fullMatch: m[0]
    });
  }

  while ((m = getImageUrlRegex.exec(content)) !== null) {
    matches.push({
      file: relPath,
      type: 'getImageUrl',
      arg: m[1],
      fullMatch: m[0]
    });
  }
}

console.log(`Total direct path matches: ${matches.filter(m => m.type === 'direct_path').length}`);
console.log(`Total getImageUrl calls: ${matches.filter(m => m.type === 'getImageUrl').length}`);

// Group by file
const grouped = {};
for (const m of matches) {
  if (!grouped[m.file]) grouped[m.file] = [];
  grouped[m.file].push(m);
}

fs.writeFileSync('scratch/image-analysis-details.json', JSON.stringify({ matches, grouped }, null, 2));

console.log('\nBreakdown by file:');
for (const [file, items] of Object.entries(grouped)) {
  console.log(`${file}: ${items.length} (direct: ${items.filter(i => i.type === 'direct_path').length}, getImageUrl: ${items.filter(i => i.type === 'getImageUrl').length})`);
}
