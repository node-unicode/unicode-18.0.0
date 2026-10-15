import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAE02SwQ0FIQhEG+IgCAq1EPtv4wdYyL+4eSPgMFl3JOYL8SGGOM97gcI71XNDVQ31yOIFztyAUUJqzZRsq3mDy3QyuEylgO/dcMDPQJrZODO0GJsNXGn39aVA6rl3ByI1cmL3XgE3aTj/cMF5Zio4T4/l+x/pymyacv+9ekWl4naju7jzUi6efqm8pv8UT/8tPs1afJvL22rjtorbu33+Og77/PU2FnlMceSRN4hLP+sXAWkbjZwbsGr8FAdHlj9Zz8i5j9CCOOm99wMKuSKZcAIAAA==', 'base64'))));
