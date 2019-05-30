self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v201905301317').then(function(cache) {
      return cache.addAll([
        '/',
        '/नर्मदादर्शनकथा',
        "5.html",
        "4.html",
        "3.js",
        '2.js',
        '1.jpg',
        'ChanakyaBBTUni.ttf',
        'ChanakyaBBTUni-Bold.ttf'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['v201905301317'];

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
  );
});
