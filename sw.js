self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v202007191220').then(function(cache) {
      return cache.addAll([
        '1.jpg',
        //'ChanakyaBBTUni.ttf',
        //'ChanakyaBBTUni-Bold.ttf'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['v202007191220'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheKeeplist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('v202007191220').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
