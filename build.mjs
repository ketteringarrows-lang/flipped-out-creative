import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const base = new URL('./media/exhibition-loop/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('manifest.json', base), 'utf8'));
const chunks = [];
for (const part of manifest.parts) chunks.push(await readFile(new URL(part, base)));
const video = Buffer.concat(chunks);
if (video.length !== manifest.bytes || createHash('sha256').update(video).digest('hex') !== manifest.sha256) {
  throw new Error('The exhibition video is incomplete or corrupted.');
}
const output = new URL('./public/assets/ap/exhibition-loop.mp4', import.meta.url);
await mkdir(new URL('.', output), { recursive: true });
await writeFile(output, video);
console.log('Exhibition video assembled and verified. Static website is ready.');
