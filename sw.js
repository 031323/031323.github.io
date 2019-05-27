self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/नर्मदादर्शनकथा.html',
        '2.js',
        'index.html',
        '1.jpg',
        'ChanakyaBBTUni.ttf',
        'ChanakyaBBTUni-Bold.ttf'
      ]);
    })
  );
});
