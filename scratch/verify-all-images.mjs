import fs from 'fs';
import path from 'path';
import https from 'https';

const BASE_URL = 'https://makcautomations.com/crmapi/public/assets/images/web_images/';

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

const localImages = getFiles(path.resolve('public/images'));

function fetchHead(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 10000 }, (res) => {
      resolve({
        statusCode: res.statusCode,
        contentType: res.headers['content-type'],
        contentLength: res.headers['content-length']
      });
    });
    req.on('error', (err) => resolve({ error: err.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ error: 'timeout' });
    });
    req.end();
  });
}

function fetchGet(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'GET', timeout: 10000 }, (res) => {
      resolve({
        statusCode: res.statusCode,
        contentType: res.headers['content-type'],
        contentLength: res.headers['content-length']
      });
      res.resume(); // discard body
    });
    req.on('error', (err) => resolve({ error: err.message }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ error: 'timeout' });
    });
    req.end();
  });
}

async function verifyImage(relPathUnderImages) {
  // test without 'images/' prefix first: e.g. BASE_URL + relPathUnderImages
  const directUrl = `${BASE_URL}${relPathUnderImages}`;
  let headRes = await fetchHead(directUrl);
  if (headRes.statusCode === 405 || headRes.statusCode === 403 || headRes.error) {
    headRes = await fetchGet(directUrl);
  }

  // Also test with 'images/' prefix just in case
  const withImagesUrl = `${BASE_URL}images/${relPathUnderImages}`;
  let headWithRes = null;
  if (headRes.statusCode !== 200) {
    headWithRes = await fetchHead(withImagesUrl);
    if (headWithRes.statusCode === 405 || headWithRes.statusCode === 403) {
      headWithRes = await fetchGet(withImagesUrl);
    }
  }

  return {
    relPathUnderImages,
    directUrl,
    directStatus: headRes.statusCode,
    directType: headRes.contentType,
    directLength: headRes.contentLength,
    directError: headRes.error,
    withImagesUrl,
    withImagesStatus: headWithRes ? headWithRes.statusCode : null
  };
}

async function runInBatches(items, batchSize, fn) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
    process.stdout.write(`Verified ${results.length}/${items.length}\r`);
  }
  console.log();
  return results;
}

async function main() {
  console.log(`Starting verification of ${localImages.length} images...`);
  const relPaths = localImages.map(f => path.relative(path.resolve('public/images'), f).replace(/\\/g, '/'));

  const results = await runInBatches(relPaths, 15, verifyImage);

  const direct200 = results.filter(r => r.directStatus === 200);
  const withImages200 = results.filter(r => r.withImagesStatus === 200);
  const failed = results.filter(r => r.directStatus !== 200 && r.withImagesStatus !== 200);

  console.log(`--- Verification Summary ---`);
  console.log(`Total local images: ${localImages.length}`);
  console.log(`Accessible directly (web_images/${'{path}'}): ${direct200.length}`);
  console.log(`Accessible with 'images/' (web_images/images/${'{path}'}): ${withImages200.length}`);
  console.log(`Failed / Inaccessible on remote: ${failed.length}`);

  if (failed.length > 0) {
    console.log('\nFailed images:');
    for (const f of failed) {
      console.log(`- ${f.relPathUnderImages} (direct: ${f.directStatus || f.directError}, with images: ${f.withImagesStatus})`);
    }
  }

  // Also check non-image or unexpected content types
  const unexpectedTypes = results.filter(r => {
    if (r.directStatus !== 200) return false;
    const t = (r.directType || '').toLowerCase();
    const isImage = t.startsWith('image/');
    const isVideo = t.startsWith('video/') || r.relPathUnderImages.endsWith('.mp4');
    return !isImage && !isVideo;
  });

  if (unexpectedTypes.length > 0) {
    console.log(`\nFiles with unexpected content types (${unexpectedTypes.length}):`);
    for (const u of unexpectedTypes) {
      console.log(`- ${u.relPathUnderImages}: ${u.directType}`);
    }
  }

  // Also let's test public/icons just to see if any are on remote
  console.log('\nChecking public/icons availability on remote server...');
  const iconFiles = fs.readdirSync(path.resolve('public/icons')).filter(f => !fs.statSync(path.join(path.resolve('public/icons'), f)).isDirectory());
  for (const ic of iconFiles) {
    const directRes = await fetchHead(`${BASE_URL}icons/${ic}`);
    const withImgRes = await fetchHead(`${BASE_URL}images/icons/${ic}`);
    const rootRes = await fetchHead(`${BASE_URL}${ic}`);
    console.log(`Icon ${ic}: direct icons/: ${directRes.statusCode}, with images/icons/: ${withImgRes.statusCode}, root: ${rootRes.statusCode}`);
  }

  fs.writeFileSync('scratch/remote-verification-report.json', JSON.stringify({
    totalLocalImages: localImages.length,
    directSuccessCount: direct200.length,
    withImagesSuccessCount: withImages200.length,
    failedCount: failed.length,
    failedItems: failed,
    unexpectedTypes,
    allResults: results
  }, null, 2));

  console.log('Saved detailed report to scratch/remote-verification-report.json');
}

main().catch(console.error);
