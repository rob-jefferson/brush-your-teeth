/*const staticCacheName = 'staticfiles';

addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticCacheName)
        .then( staticCache => {
            return staticCache.addAll([
                //
            ])
        }
    ); //end waitUntil
}); // end addEventListener*/

addEventListener('install', function(event){
    console.log('The service worker is installing...');
});

addEventListener('activate', function(event){
    console.log('The service worker is activated.');
});

addEventListener('fetch', fetchEvent => {
    /*const request = fetchEvent.request;
    fetchEvent.respondWith(
        fetch(request)
        .then(respondFromFetch => {
            return reponseFromFetch;
        }) //end fetch then
        .catch(error => {
            console.log(request);
            return new Response(
                '<h1>Oops</h1> <p>Something went wrong.</p>', {
                    headers: {'Content-type': 'text/html; charset=utf-8'}
                }
            );
        }) //end fetch catch
    ); //end respondWith*/
}); //end addEventListener