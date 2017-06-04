// self.addEventListener('install', event => {
//   console.log('V1 installing…');
// });

// self.addEventListener('activate', event => {
//   console.log('V1 now ready to handle fetches!');
// });

// self.addEventListener('fetch', event => {
// });

// ServiceWorkerService.js
const SERVICE_WORKER_API = 'serviceWorker';
const SERVICE_WORKER_FILE_PATH = 'service-worker.js';

const isSupportServiceWorker = () => SERVICE_WORKER_API in navigator;

if (isSupportServiceWorker()) {
    navigator
        .serviceWorker
        .register(SERVICE_WORKER_FILE_PATH)
        .then(() => console.log('Load service worker Success.'))
        .catch(() => console.error('Load service worker fail'));
} else {
    c