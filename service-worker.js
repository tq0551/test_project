const isSupportServiceWorker = () => SERVICE_WORKER_API in navigator;

const _self = this;

console.log('In service worker.');

_self.addEventListener('install', function () {
    console.log('Install success');
});

_self.addEventListener('activate', function () {
    console.log('Activated');
});

if (isSupportServiceWorker()) {
    navigator
        .serviceWorker
        .register(SERVICE_WORKER_FILE_PATH)
        .then(() => console.log('Load service worker Success.'))
        .catch(() => console.error('Load service worker fail'));
} else {
    console.info('Browser not support Service Worker.');
}
