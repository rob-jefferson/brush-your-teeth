const version = 'V0.06';
const staticCacheName = version + 'staticfiles';

addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticCacheName)
        .then( staticCache => {
            return staticCache.addAll([
                'images/elmo.png',
                'css/styles.css',
                'brushy-brush.mp4',
                'get-your-toothbrush.mp3',
                'js/script.js',
                'offline.html',
                'images/poster.jpg',
                'fa-solid-900.woff2'
            ]);
        })
    ); //end waitUntil
}); // end addEventListener*/

addEventListener('activate', activateEvent => {
    activateEvent.waitUntil (
        caches.keys()
        .then( cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if (cacheName != staticCacheName) {
                        return caches.delete(cacheName);
                        console.log('Old cache deleted');
                    }
                }) //end map
            ); //end return Promise.all
        }) //end keys ten
        .then( () => {
            return clients.claim();
        }) //end then
    ); //end waitUntil
}); //end addEventListener


addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    fetchEvent.respondWith(
        caches.match(request)
        .then (responseFromCache => {
            if (responseFromCache) {
                return responseFromCache;
            }
            return fetch(request)
            .catch (error => {
                return caches.match('offline.html');
            });
        })
    );
});