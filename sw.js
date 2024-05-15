// The version of the cache.
const VERSION = "v1.240515001";

// The name of the cache
const CACHE_NAME = `6minutes-tech-pwa-${VERSION}`;

// The static resources that the app needs to function.
// Dynamically determine the base path depending on where the app is hosted.
const getBasePath = () => {
  if (
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.hostname === ""
  ) {
    return "/"; // No base path for localhost
  }
  return "/6minutes-tech-pwa/"; // Adjust the base path for GitHub Pages or other environments
};

// Base path for the hosted app
const BASE_PATH = getBasePath();
console.log(location.hostname, BASE_PATH);
const APP_STATIC_RESOURCES = [
  `${BASE_PATH}index.html`,
  `${BASE_PATH}app.js`,
  `${BASE_PATH}style.css`,
  `${BASE_PATH}6minutes-tech-pwa.json`,
  `${BASE_PATH}favicon-32x32.png`,

  // Windows 11 Icons
  `${BASE_PATH}windows11/SmallTile.scale-100.png`,
  `${BASE_PATH}windows11/SmallTile.scale-125.png`,
  `${BASE_PATH}windows11/SmallTile.scale-150.png`,
  `${BASE_PATH}windows11/SmallTile.scale-200.png`,
  `${BASE_PATH}windows11/SmallTile.scale-400.png`,
  `${BASE_PATH}windows11/Square150x150Logo.scale-100.png`,
  `${BASE_PATH}windows11/Square150x150Logo.scale-125.png`,
  `${BASE_PATH}windows11/Square150x150Logo.scale-150.png`,
  `${BASE_PATH}windows11/Square150x150Logo.scale-200.png`,
  `${BASE_PATH}windows11/Square150x150Logo.scale-400.png`,
  `${BASE_PATH}windows11/Wide310x150Logo.scale-100.png`,
  `${BASE_PATH}windows11/Wide310x150Logo.scale-125.png`,
  `${BASE_PATH}windows11/Wide310x150Logo.scale-150.png`,
  `${BASE_PATH}windows11/Wide310x150Logo.scale-200.png`,
  `${BASE_PATH}windows11/Wide310x150Logo.scale-400.png`,
  `${BASE_PATH}windows11/LargeTile.scale-100.png`,
  `${BASE_PATH}windows11/LargeTile.scale-125.png`,
  `${BASE_PATH}windows11/LargeTile.scale-150.png`,
  `${BASE_PATH}windows11/LargeTile.scale-200.png`,
  `${BASE_PATH}windows11/LargeTile.scale-400.png`,
  `${BASE_PATH}windows11/Square44x44Logo.scale-100.png`,
  `${BASE_PATH}windows11/Square44x44Logo.scale-125.png`,
  `${BASE_PATH}windows11/Square44x44Logo.scale-150.png`,
  `${BASE_PATH}windows11/Square44x44Logo.scale-200.png`,
  `${BASE_PATH}windows11/Square44x44Logo.scale-400.png`,
  `${BASE_PATH}windows11/StoreLogo.scale-100.png`,
  `${BASE_PATH}windows11/StoreLogo.scale-125.png`,
  `${BASE_PATH}windows11/StoreLogo.scale-150.png`,
  `${BASE_PATH}windows11/StoreLogo.scale-200.png`,
  `${BASE_PATH}windows11/StoreLogo.scale-400.png`,
  `${BASE_PATH}windows11/SplashScreen.scale-100.png`,
  `${BASE_PATH}windows11/SplashScreen.scale-125.png`,
  `${BASE_PATH}windows11/SplashScreen.scale-150.png`,
  `${BASE_PATH}windows11/SplashScreen.scale-200.png`,
  `${BASE_PATH}windows11/SplashScreen.scale-400.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-16.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-20.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-24.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-30.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-32.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-36.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-40.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-44.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-48.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-60.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-64.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-72.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-80.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-96.png`,
  `${BASE_PATH}windows11/Square44x44Logo.targetsize-256.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-16.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-20.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-24.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-30.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-32.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-36.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-40.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-44.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-48.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-60.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-64.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-72.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-80.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-96.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-unplated_targetsize-256.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png`,
  `${BASE_PATH}windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png`,

  // Android Icons
  `${BASE_PATH}android/android-launchericon-512-512.png`,
  `${BASE_PATH}android/android-launchericon-192-192.png`,
  `${BASE_PATH}android/android-launchericon-144-144.png`,
  `${BASE_PATH}android/android-launchericon-96-96.png`,
  `${BASE_PATH}android/android-launchericon-72-72.png`,
  `${BASE_PATH}android/android-launchericon-48-48.png`,

  // iOS Icons
  `${BASE_PATH}ios/16.png`,
  `${BASE_PATH}ios/20.png`,
  `${BASE_PATH}ios/29.png`,
  `${BASE_PATH}ios/32.png`,
  `${BASE_PATH}ios/40.png`,
  `${BASE_PATH}ios/50.png`,
  `${BASE_PATH}ios/57.png`,
  `${BASE_PATH}ios/58.png`,
  `${BASE_PATH}ios/60.png`,
  `${BASE_PATH}ios/64.png`,
  `${BASE_PATH}ios/72.png`,
  `${BASE_PATH}ios/76.png`,
  `${BASE_PATH}ios/80.png`,
  `${BASE_PATH}ios/87.png`,
  `${BASE_PATH}ios/100.png`,
  `${BASE_PATH}ios/114.png`,
  `${BASE_PATH}ios/120.png`,
  `${BASE_PATH}ios/128.png`,
  `${BASE_PATH}ios/144.png`,
  `${BASE_PATH}ios/152.png`,
  `${BASE_PATH}ios/167.png`,
  `${BASE_PATH}ios/180.png`,
  `${BASE_PATH}ios/192.png`,
  `${BASE_PATH}ios/256.png`,
  `${BASE_PATH}ios/512.png`,
  `${BASE_PATH}ios/1024.png`,
];

// On install, cache the static resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(APP_STATIC_RESOURCES);
    })()
  );
});

// delete old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
      await clients.claim();
    })()
  );
});

// On fetch, use cache first, then network as a fallback
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // As a single page app, direct app to always go to cached home page.
  //   if (event.request.mode === "navigate") {
  //     event.respondWith(caches.match("/"));
  //     return;
  //   }

  // Ignore non-HTTP/HTTPS schemes like 'chrome-extension'
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    return;
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return (
          response ||
          fetch(event.request).then((response) => {
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          })
        );
      })
      .catch(() => {
        return caches.match(`${BASE_PATH}index.html`);
      })
  );
});
