import fs from 'fs';
import path from 'path';
import https from 'https';

const REMOTE_BASE = 'https://makcautomations.com/crmapi/public/assets/images/web_images/';

// Read local-images.json
const localImages = JSON.parse(fs.readFileSync('scratch/local-images.json', 'utf8'));
// Read getimageurl-args.json
const getImageUrlArgs = JSON.parse(fs.readFileSync('scratch/getimageurl-args.json', 'utf8'));

// The mapping table from src/utils/image.ts
const ALIAS_MAP = {
  "hero_bg.webp": "home/hero_bg.webp",
  "hero_bg.avif": "home/hero_bg.avif",
  "hero_bg-light.webp": "home/hero_bg-light-1392.webp",
  "hero_bg-768.webp": "home/hero_bg-768.webp",
  "hero_bg-1280.webp": "home/hero_bg-1280.webp",
  "hero_bg-1440.webp": "home/hero_bg-1440.webp",
  "hero_bg-light-768.webp": "home/hero_bg-light-768.webp",
  "hero_bg-light-1280.webp": "home/hero_bg-light-1280.webp",
  "hero_bg-light-1392.webp": "home/hero_bg-light-1392.webp",
  "smarter_way_bg.webp": "home/smarter_way_bg.webp",
  "smarter_way_bg.avif": "home/smarter_way_bg.avif",
  "contact_villa_night.webp": "home/contact_villa_night.webp",
  "contact_villa_night.avif": "home/contact_villa_night.avif",
  "why_choose_us.webp": "home/why_choose_us.webp",
  "project_apartments.webp": "home/project_apartments.webp",
  "project_commercial.webp": "home/project_commercial.webp",
  "project_farmhouses.webp": "home/project_farmhouses.webp",
  "project_penthouses.webp": "home/project_penthouses.webp",
  "project_villas.webp": "home/project_villas.webp",
  "service_automation.webp": "home/service_automation.webp",
  "service_automation.avif": "home/service_automation.avif",
  "service_energy.webp": "home/service_energy.webp",
  "service_energy.avif": "home/service_energy.avif",
  "service_lighting.webp": "home/service_lighting.webp",
  "service_lighting.avif": "home/service_lighting.avif",
  "service_networking.webp": "home/service_networking.webp",
  "service_networking.avif": "home/service_networking.avif",
  "service_security.webp": "home/service_security.webp",
  "service_security.avif": "home/service_security.avif",
  "service_theatre.webp": "home/service_theatre.webp",
  "service_theatre.avif": "home/service_theatre.avif",

  "automation.avif": "services/automation.avif",
  "audio.avif": "services/audio.avif",
  "electricals.avif": "services/electricals.avif",
  "ligting.avif": "services/lighting.avif",
  "networking.avif": "services/networking.avif",
  "security.avif": "services/security.avif",

  "industrial-automation-overview.webp": "services/industrial/automation-overview.webp",
  "system-integration.webp": "services/industrial/system-integration.webp",
  "scada-development.webp": "services/industrial/scada-development.webp",
  "control-system-design.webp": "services/industrial/control-system-design.webp",
  "electrical-design.webp": "services/industrial/electrical-design.webp",
  "electrical-installation.webp": "services/industrial/electrical-installation.webp",
  "industrial-cybersecurity.webp": "services/industrial/cybersecurity.webp",
  "smart-manufacturing.webp": "services/industrial/smart-manufacturing.webp",
  "cloud-integration.webp": "services/industrial/cloud-integration.webp",

  "CA1.webp": "services/details/curtain-track.webp",
  "CA2.webp": "services/details/curtain-bedroom.webp",
  "DA1.webp": "services/details/door-1.webp",
  "DA2.webp": "services/details/door-2.webp",
  "EA1.webp": "services/details/electrical-switches.webp",
  "EA2.webp": "services/details/electrical-living-room.webp",
  "GA1.webp": "services/details/gate-swing.webp",
  "GA2.webp": "services/details/gate-sliding.webp",
  "WN1.webp": "services/details/wired-network-1.webp",
  "WN2.webp": "services/details/wired-network-2.webp",
  "MW1.webp": "services/details/mesh-wifi-1.webp",
  "MW2.webp": "services/details/mesh-wifi-2.webp",
  "CC1.webp": "services/details/cctv-1.webp",
  "CC2.webp": "services/details/cctv-2.webp",
  "RGB1.webp": "services/details/rgb-lighting-1.webp",
  "RGB2.webp": "services/details/rgb-lighting-2.webp",
  "SB1.webp": "services/details/sensor-1.webp",
  "SB2.webp": "services/details/sensor-2.webp",
  "SBL1.webp": "services/details/scene-lighting-1.webp",
  "SBL2.webp": "services/details/scene-lighting-2.webp",
  "DTL2.webp": "services/details/dimming-2.webp",
  "DTL2a.webp": "services/details/dimming-2.webp",
  "OLL2.webp": "services/details/outdoor-2.webp",
  "OLLa2.webp": "services/details/outdoor-2.webp",
  "ol1.webp": "services/details/outdoor-1.webp",

  "automation_banner.png": "banners/automation_banner.webp",
  "automation_banner.webp": "banners/automation_banner.webp",
  "curtain_automation.webp": "automation/curtain_automation.webp",
  "doorautomation1.webp": "automation/doorautomation1.webp",
  "doorautomation2.webp": "automation/doorautomation2.webp",
  "doorautomation3.webp": "automation/doorautomation3.webp",
  "getAuto1.webp": "automation/get-auto-1.webp",
  "electric automation.webp": "automation/electric-automation.webp",
  "ha1.1.webp": "automation/ha1-1.webp",
  "ha1.2.webp": "automation/ha1-2.webp",
  "ha1.3.webp": "automation/ha1-3.webp",

  "smart_dimming_lighting.webp": "lighting/smart_dimming_lighting.webp",
  "smart_outdoor_lighting.webp": "lighting/smart_outdoor_lighting.webp",
  "smart_rgb_lighting.webp": "lighting/smart_rgb_lighting.webp",
  "lightimage1.webp": "lighting/lighting-1.webp",
  "dimeLight.webp": "lighting/dime-light.webp",
  "outdoorImage1.webp": "lighting/outdoor-image-1.webp",
  "rgbmod.webp": "lighting/rgb-mod.webp",
  "timeLightImage.webp": "lighting/time-based-lighting.webp",
  "Touch panels.webp": "lighting/touch-panels.webp",
  "Voice Commands.webp": "lighting/voice-commands.webp",
  "Mood Lighting.webp": "lighting/mood-lighting.webp",
  "Scheduling.webp": "lighting/scheduling.webp",
  "fhha.webp": "lighting/fhha.webp",

  "security_banner.webp": "banners/security_banner.webp",
  "cam1.webp": "security/cam1.webp",
  "sensor.webp": "security/sensor.webp",
  "Homes & Apartments.webp": "security/homes-apartments.webp",
  "Offices & Workspaces.webp": "security/offices-workspaces.webp",
  "Retail & Commercial Spaces.webp": "security/retail-commercial.webp",
  "Villas.webp": "security/villas.webp",

  "networking_banner.webp": "banners/networking_banner.webp",
  "netSolutionImage1.webp": "networking/net-solution-1.webp",
  "wiredNetwork.webp": "networking/wired-network.webp",
  "home.webp": "networking/home.webp",
  "house.webp": "networking/house.webp",
  "commercial.webp": "networking/commercial.webp",
  "workshop.webp": "networking/workshop.webp",
  "Multi-floor.webp": "networking/multi-floor.webp",

  "audio_banner.webp": "banners/audio_banner.webp",
  "lighting_banner.webp": "banners/lighting_banner.webp",
  "about-us.webp": "banners/about-us.webp",
  "embedded-banner.webp": "about/embedded-banner.webp",

  "client-04-q973yadybx3esxnjyeias1xijm81e9ufszb7iuhaeg.webp": "about/client-04.webp",
  "client-05-q973y9g45324hbox3w3o7k61y8co6kqpgunq1kioko.webp": "about/client-05.webp",
  "client-08-q973y7kfrezju3rnevaf2kn4rglxr6j8slcr30lgx4.webp": "about/client-08.webp",
  "client-10-q973y6mlkky9iht0kcvsi2vo62qkjhfiggp9lqmv3c.webp": "about/client-10.webp",
  "mack-logo-12-q99691wi5yn8iger7l1n233otynezih2vu28askwdk.webp": "about/mack-logo-12.webp",
  "mack-logo-13-q99692uccsoiu2de23g9mkv5fcis77kt7ypps2ji7c.webp": "about/mack-logo-13.webp",
  "mack-logo-15-q99693s6jmpt5oc0wluw72mm0qe5ewojk3d79ci414.webp": "about/mack-logo-15.webp",
  "name_03-1-1.webp": "about/team-abhay.webp",
  "name_02-2.webp": "about/team-manan.webp",
  "name_01-1.webp": "about/team-charu.webp",
  "name-4.webp": "about/team-amit.webp",

  "process_consultation.webp": "process/consultation.webp",
  "process_design.webp": "process/design.webp",
  "process_installation.webp": "process/installation.webp",
  "process_support.webp": "process/support.webp",

  "Rectangle 54360.webp": "gallery/rectangle-54360.webp",
  "Rectangle 54362.webp": "gallery/rectangle-54362.webp",
  "Rectangle 54364.webp": "gallery/rectangle-54364.webp",
  "Rectangle 54366.webp": "gallery/rectangle-54366.webp",
  "Rectangle 54367.webp": "gallery/rectangle-54367.webp",
  "Rectangle 54368.webp": "gallery/rectangle-54368.webp",

  "star.webp": "common/star.webp",

  "MAKc-Logo.svg": "/icons/MAKc-Logo.svg",
  "MAKc-Logo-white.webp": "/icons/MAKc-Logo-white-360.webp",
};

// Proposed getImageUrl implementation
function getImageUrl(imagePath) {
  if (!imagePath) return "";

  // External URLs
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Check alias map by filename or exact key
  const baseName = imagePath.split("/").pop() || imagePath;
  if (ALIAS_MAP[imagePath]) {
    const mapped = ALIAS_MAP[imagePath];
    if (mapped.startsWith("/")) return mapped; // local icon like /icons/
    return `${REMOTE_BASE}${mapped}`;
  }
  if (ALIAS_MAP[baseName]) {
    const mapped = ALIAS_MAP[baseName];
    if (mapped.startsWith("/")) return mapped;
    return `${REMOTE_BASE}${mapped}`;
  }

  // Strip leading slashes and optional 'images/' prefix
  const cleanPath = imagePath.replace(/^\/+/, '').replace(/^images\//, '');
  return `${REMOTE_BASE}${cleanPath}`;
}

function checkHead(url) {
  if (!url.startsWith('http')) return Promise.resolve({ url, status: 'local' });
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
      resolve({ url, status: res.statusCode });
    });
    req.on('error', (err) => resolve({ url, error: err.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url, error: 'timeout' }); });
    req.end();
  });
}

async function run() {
  console.log('Testing resolution for known getImageUrl arguments...');
  const tests = [];
  for (const [rawArg] of getImageUrlArgs) {
    // Strip quotes if any
    const arg = rawArg.replace(/^["']|["']$/g, '');
    if (arg.includes('?') || arg.includes('||')) continue; // expressions
    const resolved = getImageUrl(arg);
    tests.push({ input: arg, resolved });
  }

  // Add tests for direct paths from sections
  const extraPaths = [
    '/images/partners/jr-automation.png',
    '/images/partners/wipro-lighting.svg',
    '/images/services/automation.avif',
    '/images/blogs/future-of-smart-lighting.webp',
    '/images/video/bedroom_animation.mp4',
    '/images/video/living_room_animation.mp4',
    '/images/video/reels/dimming-and-tuning.mp4',
    '/images/brands/iso-image.svg',
    'images/home/hero_bg-1280.webp',
    'home/hero_bg-1280.webp'
  ];

  for (const p of extraPaths) {
    tests.push({ input: p, resolved: getImageUrl(p) });
  }

  console.log(`Testing ${tests.length} resolved URLs...`);
  const results = [];
  for (const t of tests) {
    const res = await checkHead(t.resolved);
    results.push({ ...t, status: res.status, error: res.error });
  }

  const failures = results.filter(r => r.status !== 200 && r.status !== 'local');
  console.log(`Resolution test completed.`);
  console.log(`Total tested: ${results.length}`);
  console.log(`Success (200 / local): ${results.length - failures.length}`);
  console.log(`Failures: ${failures.length}`);

  if (failures.length > 0) {
    console.log('Failures:');
    for (const f of failures) {
      console.log(`Input: ${f.input} -> ${f.resolved} (${f.status || f.error})`);
    }
  } else {
    console.log('ALL RESOLUTIONS PASSED 100%!');
  }
}

run();
