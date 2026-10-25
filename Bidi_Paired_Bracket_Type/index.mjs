import { brotliDecompressSync } from 'node:zlib';
import decodePropertyMap from '../decode-property-map.mjs';

export default decodePropertyMap(JSON.parse(brotliDecompressSync(Buffer.from('H2UHICyOd2AShxcN1hgP5dYbXJY9ORVLlxvb+m0GIomWiJvlTiDlUmlJIhG39fiLDlsSYKSBeRWFj1m6TaSQjmuKTZWeBhEmXgVReK/Yb0KdIHxWDogdzKm5E90hHSnb/e6oHAP7ttKsKtPNBtMpUCS8E4QZUnK7FDArdkgrz+QCbbWuGk5e0xU2cRLftdhdNygXXymXaHLn3iRmHWrXB2+mwwc=', 'base64'))));
