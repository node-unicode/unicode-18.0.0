import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H3cB+EUDvca14NhcAT8EcxvV7Q78FkRLs7SBCMYk3dgsqRgFPP+7gf/5S9iGZQ3PCGke+mkeYGhNoo6PiMDQ0nRXjIYloVYzaWz+fzuDdlYijzF8ur/+XUlgN3uBm10gyPf2QBDkLfbNxMsUV3nHltXdNnuebwk=', 'base64')).toString());
