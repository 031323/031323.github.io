self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v201907070947').then(function(cache) {
      return cache.addAll([
        '1.jpg',
        //'ChanakyaBBTUni.ttf',
        //'ChanakyaBBTUni-Bold.ttf'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['v201907070947'];

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
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
