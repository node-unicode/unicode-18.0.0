import { gunzipSync } from 'node:zlib';

export default new Map(JSON.parse(gunzipSync(Buffer.from('H4sIAAAAAAAAEy3QwQ2EQAxD0YZyiDPDxKkF0X8bK4/3gp6sSHx43+ZiVK0vXmZXMM+2l/zYWz72I7d9ZNotj81gdtoj45ra6Z3a6X1SLhuye0Y9dM+oh+4Z9dA9ox7eHqT2Obb2+e/qHNrqnLEZRKY98u0BUi4b8u1B7SBwG7B1s3y/OwY+Pytm32Loa9F609l1EHrqCFXd6/707wf6bIkjgQEAAA==', 'base64'))));
