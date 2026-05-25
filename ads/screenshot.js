const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ADS_DIR = path.resolve(__dirname);

const ads = [
  { file: 'ad1-feed-dor-solucao.html',  width: 1080, height: 1080 },
  { file: 'ad2-feed-prova-social.html',  width: 1080, height: 1080 },
  { file: 'ad3-feed-urgencia.html',      width: 1080, height: 1080 },
  { file: 'ad4-story-whatsapp.html',     width: 1080, height: 1920 },
  { file: 'ad5-banner-google.html',      width: 1200, height: 628  },
];

for (const ad of ads) {
  const input  = path.join(ADS_DIR, ad.file);
  const output = path.join(ADS_DIR, ad.file.replace('.html', '.png'));
  const url    = `file:///${input.replace(/\\/g, '/')}`;

  console.log(`Capturando ${ad.file} → ${ad.width}x${ad.height}...`);

  const cmd = [
    `"${CHROME}"`,
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-web-security',
    '--allow-file-access-from-files',
    '--hide-scrollbars',
    '--disable-extensions',
    `--force-device-scale-factor=1`,
    `--window-size=${ad.width},${ad.height}`,
    `--screenshot="${output}"`,
    `"${url}"`,
  ].join(' ');

  try {
    execSync(cmd, { stdio: 'pipe', timeout: 15000 });
    if (fs.existsSync(output)) {
      console.log(`  ✓ Salvo: ${path.basename(output)}`);
    } else {
      console.log(`  ✗ Arquivo não gerado`);
    }
  } catch (e) {
    console.error(`  ✗ Erro: ${e.message}`);
  }
}

console.log('\nPronto!');
