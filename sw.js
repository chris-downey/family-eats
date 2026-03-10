const CACHE = 'familyeats-v1';
const ASSETS = ['/', '/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

// Friday vote reminder - check every hour
self.addEventListener('periodicsync', e => {
  if (e.tag === 'vote-reminder') {
    const day = new Date().getDay();
    if (day === 5) {
      self.registration.showNotification('🗳️ FamilyEats — Time to Vote!', {
        body: "It's Friday! Pick next week's meals 🍽️",
        icon: '/icon.png',
        badge: '/icon.png'
      });
    }
  }
});
