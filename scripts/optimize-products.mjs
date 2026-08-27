import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = 'public/images/products';

for (const file of fs.readdirSync(dir)) {
  if (!/\.jpe?g$/i.test(file)) continue;

  const input = path.join(dir, file);
  const out = path.join(dir, file.replace(/\.jpe?g$/i, '.webp'));
  const meta = await sharp(input).metadata();

  await sharp(input)
    .resize(meta.width, meta.height, { fit: 'inside' })
    .webp({ quality: 75 })
    .toFile(out);

  const fromKb = Math.round(fs.statSync(input).size / 1024);
  const toKb = Math.round(fs.statSync(out).size / 1024);
  console.log(`${file} ${fromKb}KB -> ${toKb}KB`);
}
