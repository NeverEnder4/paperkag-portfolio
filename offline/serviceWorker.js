const CACHE_NAME = 'page-cache';
const urlsToCache = ['/', '/art', '/modeling'];

self.addEventListener('install', event => {
  const preLoaded = caches
    .open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
    .catch(err => console.log(err));
  event.waitUntil(preLoaded);
});

self.addEventListener('fetch', event => {
  const response = caches
    .match(event.request)
    .then(match => match || fetch(event.request))
    .catch(err => console.log(err));
  event.respondWith(response);
});
