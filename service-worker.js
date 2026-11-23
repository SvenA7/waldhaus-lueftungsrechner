const CACHE_NAME = 'waldhaus-lueften-v2';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(Promise.all([caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))), self.clients.claim()])));
self.addEventListener('fetch', e => { if (e.request.method !== 'GET' || new URL(e.request.url).origin !== self.location.origin) return; e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request))); });
