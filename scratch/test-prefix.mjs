import https from 'https';

const testPaths = [
  'about/client-04.webp',
  'about/client-05.webp',
  'banners/about-us.webp',
  'home/hero_bg.webp',
  'home/hero_bg.avif'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve({ url, status: res.statusCode, type: res.headers['content-type'] });
    });
    req.on('error', (err) => resolve({ url, error: err.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url, error: 'timeout' }); });
    req.end();
  });
}

async function run() {
  const base = 'https://makcautomations.com/crmapi/public/assets/images/web_images/';
  for (const p of testPaths) {
    const withImages = `${base}images/${p}`;
    const withoutImages = `${base}${p}`;
    const resWith = await checkUrl(withImages);
    const resWithout = await checkUrl(withoutImages);
    console.log(`Path: ${p}`);
    console.log(`  with 'images/':    ${resWith.status} (${resWith.type})`);
    console.log(`  without 'images/': ${resWithout.status} (${resWithout.type})`);
  }
}

run();
