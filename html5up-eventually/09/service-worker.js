var cacheName = 'pwaTeste+-v1.2';

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener('activate', (event) => {
  event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        // Caminhos
        '/index.html',

        '/homepage.html',
        
        '/assets/sass/base/_bg.scss',
        
        '/assets/sass/base/_page.scss',
        
        '/assets/sass/base/_reset.scss',

        '/assets/sass/base/_typography.scss',
        
        '/assets/sass/components/_button.scss',

        '/assets/sass/components/_form.scss',

        '/assets/sass/components/_icon.scss',

        '/assets/sass/components/_icons.scss',

        '/assets/sass/components/_list.scss',

        '/assets/sass/components/_section.scss',

        '/assets/sass/layout/_footer.scss',

        '/assets/sass/layout/_header.scss',

        '/assets/sass/layout/_signup-form.scss',

        '/assets/sass/libs/_breakpoints.scss',

        '/assets/sass/libs/_functions.scss',

        '/assets/sass/libs/_mixins.scss',

        '/assets/sass/libs/_vars.scss',

        '/assets/sass/libs/_vendor.scss',
        
        'assets/sass/main.scss',
        
        'assets/webfonts',
        
        '/assets/css/fontawesome-all.min.css',

        '/assets/css/hp.css',
        
        '/assets/css/main.css',
       
        '/assets/js/main.js',

        'images/256.png',
        '/images/384.jpg',
        '/images/512.png',
        '/images/512.png',
        '/images/appstore.png',
        '/images/192.png',
        '/images/icone.png',
        '/images/MarcoZero.jpg',
        '/images/Retro.png',
        '/images/SantaCruz.png',
        '/images/Sport.png',
        '/images/Nautico.png',
        '/images/torcidaNautico.jpg',
        '/images/torcidaRetro.jpg',
        '/images/torcidaSantaCruz.jpg',
        '/images/torcidaSport.jpg'

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

   //Atualizacao cache
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});