workbox.skipWaiting();
workbox.clientsClaim();

self.addEventListener("install", event => {
  console.log("install");
});

self.addEventListener("activate", event => {
  console.log("activate");
});

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
