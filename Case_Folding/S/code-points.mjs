import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H3QA+MWgebE+xnhTFSJg2IDT2AOxiQeBzU8CEjjh+hMF/6nOIRwdvujlawavaeDZ+DurafC3Y/PBE/LUhy4UQxFkugM=', 'base64')).toString());
