import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

async function convertSvgDir(dir, size = 96) {
  if (!fs.existsSync(dir)) return;

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.svg')) continue;

    const svgPath = path.join(dir, file);
    const text = fs.readFileSync(svgPath, 'utf8');
    const match = text.match(
      /(?:xlink:)?href="data:image\/([a-zA-Z0-9+]+);base64,([^"]+)"/,
    );

    if (!match) {
      console.log('skip (no embedded image):', file);
      continue;
    }

    const input = Buffer.from(match[2], 'base64');
    const outPath = path.join(dir, file.replace(/\.svg$/i, '.webp'));
    await sharp(input)
      .resize(size, size, { fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(outPath);

    const fromKb = Math.round(fs.statSync(svgPath).size / 1024);
    const toKb = Math.round(fs.statSync(outPath).size / 1024);
    console.log(`${path.relative(process.cwd(), svgPath)} ${fromKb}KB -> ${toKb}KB`);
  }
}

await convertSvgDir('public/images/ava', 96);
await convertSvgDir('public/images/ava/rankings', 96);
await convertSvgDir('public/images/creators', 120);
await convertSvgDir('public/images/artist', 240);
