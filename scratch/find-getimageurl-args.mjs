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
      if (['.tsx', '.ts', '.jsx', '.js', '.html'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const files = getAllSourceFiles(path.resolve('src'));
const callMap = new Map();

const regex = /getImageUrl\s*\(\s*([^)]+)\s*\)/g;

for (const f of files) {
  const rel = path.relative(path.resolve('.'), f).replace(/\\/g, '/');
  if (rel === 'src/utils/image.ts') continue;
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = regex.exec(content)) !== null) {
    const arg = m[1].trim();
    if (!callMap.has(arg)) callMap.set(arg, []);
    callMap.get(arg).push(rel);
  }
}

console.log(`Unique arguments to getImageUrl: ${callMap.size}`);
for (const [arg, occurrences] of callMap.entries()) {
  console.log(`${arg} (${occurrences.length} files: ${occurrences[0]}${occurrences.length > 1 ? '...' : ''})`);
}

fs.writeFileSync('scratch/getimageurl-args.json', JSON.stringify(Array.from(callMap.entries()), null, 2));
