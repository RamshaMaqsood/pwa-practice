// console.log("Service Worker from Public")

// self.addEventListener('install', (event) => {
//     console.log('Service Worker installing.');
//   });
  
//   self.addEventListener('activate', (event) => {
//     console.log('Service Worker activating.');
//   });
  
//   self.addEventListener('fetch', (event) => {
//     console.log('Service Worker fetching:', event.request.url);
//   });

// let cacheData = "appV1";

// this.addEventListener("install", (event)=>{
//     event.waitUntil(
//         caches.open(cacheData).then((cache)=>{
//             cache.addAll([
//                 "/@vite/client",
//                 "/src/About.jsx",
//                 "/src/Home.jsx",
//                 "/sw.js",
//                 "/src/index.css",
//                 "/src/main.jsx?t=1729916551706",
//                 "/@react-refresh",
//                 "/node_modules/vite/dist/client/env.mjs",
//                 "/node_modules/.vite/deps/react-dom_client.js?v=6c59e14f",
//                 "/node_modules/.vite/deps/react.js?v=6fceeed9",
//                 "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=6fceeed9",
//                 "/node_modules/.vite/deps/chunk-I4MZPW7S.js?v=bc3332e9",
//                 "/src/swDev.js?t=1729916444883",
//                 "/node_modules/.vite/deps/react-router-dom.js?v=d808edef",
//                 "/node_modules/bootstrap/dist/css/bootstrap.min.css",
//                 "/src/App.jsx?t=1729906739111",
//                 "/node_modules/.vite/deps/react-bootstrap.js?v=cfe16d9c",
//                 "/node_modules/.vite/deps/chunk-XPR23Y44.js?v=bc3332e9",
//                 "/node_modules/.vite/deps/chunk-GRWX7YRK.js?v=bc3332e9",
//                 "/src/App.css?t=1729906739111",
//                 "/src/Users.jsx?t=1729904606441",
//                 "/"
//             ])
//         })
//     )
// })


// this.addEventListener("fetch", (event)=>{
//     event.respondWith(
//         caches.match(event.request).then((result)=>{
//             return result;
//         })
//     )
// })


let cacheData = "appV1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        "/", // Home route
        "/index.html",
        "/src/About.jsx",
        "/src/Home.jsx",
        "/src/App.css",
        "/src/Users.jsx",
        "/node_modules/bootstrap/dist/css/bootstrap.min.css",
        "/src/main.jsx", // Adjust based on actual entry point filename
        // Add other assets as needed for offline use
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
              return (
                cachedResponse ||
                fetch(event.request).catch(() => {
                  console.warn(`Resource not cached and fetch failed for: ${event.request.url}`);
                })
              );
              let requestUrl = event.request.clone();
              return fetch(requestUrl)
            })
          );   
    }
});
