import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HzoCCIyUqONbFtM5rkbamVykIhq9h5oSLYe3dM9Pn4028jGOwue3QOysaZhlnkLuxEQvZn3uHmFn1CK+VkW3hComjhodfhnnf7YRHB51LFR1bWAwRKDDY5XaHKpaCahVtZ9AjOxVfp9D5c+MFggFEchu6LH/9oFDVXQT3I7vUfIedoOhZYc6mFiv89ji0XpPQ3dow32T92wIxOg9OSMfH9Vni+Xq+3mPKoc7XDaxJgwKLbryQJwRgwgyNxqODcnKkmAml3ng+LHsAcjZTozek4dH1Y0/00Cj9XoCvA7gJLJJeJNvIgTfCKzHnxxOFqZjbn4fu0D/+bfW/eFwaLcyWzJC35lLCMdE/NQa29h/pUbpw6VlGjKiFzi2JIvL0uRCLjFPSUwnBg==', 'base64')).toString());
