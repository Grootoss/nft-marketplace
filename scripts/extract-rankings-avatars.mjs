import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('public/images/ava/rankings');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.svg'));

for (const file of files) {
  const svgPath = path.join(dir, file);
  const text = fs.readFileSync(svgPath, 'utf8');
  const match = text.match(
    /(?:xlink:)?href="(data:image\/([a-zA-Z0-9+]+);base64,([^"]+))"/,
  );

  if (!match) {
    console.log('no image in', file);
    continue;
  }

  const ext = match[2] === 'jpeg' ? 'jpg' : match[2];
  const outName = file.replace(/\.svg$/i, `.${ext}`);
  const outPath = path.join(dir, outName);
  fs.writeFileSync(outPath, Buffer.from(match[3], 'base64'));

  const svgKb = Math.round(fs.statSync(svgPath).size / 1024);
  const outKb = Math.round(fs.statSync(outPath).size / 1024);
  console.log(`${file} (${svgKb}KB) -> ${outName} (${outKb}KB)`);
}
