self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('280520190956').then(function(cache) {
      return cache.addAll([
        '/',
        '/नर्मदादर्शनकथा',
        '2.js',
        'index.html',
        '1.jpg',
        'ChanakyaBBTUni.ttf',
        'ChanakyaBBTUni-Bold.ttf',
        'https://fonts.googleapis.com/css?family=Noto+Sans'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  var cacheKeeplist = ['280520190956'];

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
