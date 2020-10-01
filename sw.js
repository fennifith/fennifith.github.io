importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute([]);

    // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
    workbox.routing.registerRoute(
        /^https:\/\/fonts\.googleapis\.com/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'google-fonts-stylesheets',
        }),
    );

    // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
    workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        workbox.strategies.cacheFirst({
            cacheName: 'google-fonts-webfonts',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200],
                }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
        ],
    }),
);

    workbox.routing.registerRoute(
        // Cache CSS files
        /.*\.css/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'css-cache',
        })
    );

    workbox.routing.registerRoute(
        // Cache image files
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        workbox.strategies.cacheFirst({
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 100,
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );
} else {
    console.log("Workbox didn't load...");
}
