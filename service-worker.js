importScripts("./pwa-assets.js");

const CACHE_VERSION = "fpv-voice-v1";
const RUNTIME_ASSETS = self.PWA_ASSETS || [];

async function cacheRuntimeAssets() {
  const cache = await caches.open(CACHE_VERSION);
  await cache.addAll(RUNTIME_ASSETS);
}

async function cacheIsReady() {
  const cache = await caches.open(CACHE_VERSION);
  const results = await Promise.all(RUNTIME_ASSETS.map((asset) => cache.match(asset)));
  return results.every(Boolean);
}

async function broadcastStatus(status) {
  const clientsList = await self.clients.matchAll({ includeUncontrolled: true });
  clientsList.forEach((client) => {
    client.postMessage({ type: "OFFLINE_CACHE_STATUS", status });
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    await cacheRuntimeAssets();
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((cacheName) => cacheName !== CACHE_VERSION)
        .map((cacheName) => caches.delete(cacheName))
    );
    await self.clients.claim();
    await broadcastStatus(await cacheIsReady() ? "Ready" : "Error");
  })());
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "CHECK_OFFLINE_CACHE") return;

  event.waitUntil((async () => {
    const status = await cacheIsReady() ? "Ready" : "Preparing...";
    event.source?.postMessage({ type: "OFFLINE_CACHE_STATUS", status });
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;

    const response = await fetch(event.request);
    if (response && response.ok) {
      const cache = await caches.open(CACHE_VERSION);
      await cache.put(event.request, response.clone());
    }
    return response;
  })());
});
