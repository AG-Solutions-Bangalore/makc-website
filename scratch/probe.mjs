import https from 'https';

const testUrls = [
  'https://makcautomations.com/crmapi/public/assets/images/web_images/images/about/client-04.webp',
  'https://makcautomations.com/crmapi/public/assets/images/web_images/about/client-04.webp',
  'https://makcautomations.com/crmapi/public/assets/images/web_images/images/home/banner/hero.webp',
  'https://makcautomations.com/crmapi/public/assets/images/web_images/home/banner/hero.webp'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve({
        url,
        statusCode: res.statusCode,
        headers: res.headers
      });
    });
    req.on('error', (err) => resolve({ url, error: err.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url, error: 'timeout' }); });
    req.end();
  });
}

async function run() {
  for (const u of testUrls) {
    const res = await checkUrl(u);
    console.log(u, '->', res.statusCode || res.error, res.headers ? res.headers['content-type'] : '');
  }
}

run();
