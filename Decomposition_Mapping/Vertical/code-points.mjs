import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H/gA+I3UVvOOtMQIldwph5QE2gJvgbT/al3MB0U9pzNq7ymznW4bbcOguzL5uySccjiwQDCiqoADKgAB/mhod/BaQ/xBu52h8MbW0OqDCZ7f39Weu1efufU7+0d9maWMVYNnlX37qrgJo1z9KWY4473YKRrwFvad0TzHln4R+MOelnh0mFtGBA==', 'base64')).toString());
