import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H1wBQESBdcV0jXU7O8FPmu307ybDDX1sW92lWTcPKKKAA6IwpNyJq3S4HeLlk0Dsdtop/BSquEQrodUQx8PcqiTDbn40e1mi4coni4gNxLMl/scgNY8PwtCyB7GuxCeyapV1Y2I+2N8JTYb45ws4mTGNGJt5l6dBjCgbILV1dV8J', 'base64')).toString());
