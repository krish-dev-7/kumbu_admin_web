'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "399af87a6bb26a75d7ce7cd9209f775a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "09d93742b5b74eff0ba1e3212c663840",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "808584987f4037f6562f260a6f978d8d",
".git/logs/refs/heads/main": "b2c7e9e9057dfbd404858e19ad9d7faf",
".git/logs/refs/remotes/origin/main": "9315b149bfb866f3c75e56d3ba678f51",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/2ea92031e1b72881dfdf94a42cdc60d345cca7": "3e29be20b0bb2eecc2fa868aff04cfa1",
".git/objects/35/9dc912b26a54b89b5335f973cc26c3f0ae97f6": "414c3f0c987a908deb7799c0a3c55f57",
".git/objects/39/1882ba31cf73843add06e855de239abfef6de8": "4f854546431d380a72480fb5edb690c1",
".git/objects/3a/dece941264b4357e1afde8cffebf94e55a5b30": "0bac1201d9fc4ce555ab83b94a0b95b1",
".git/objects/3d/77547150881c2d7750f9ea94244067a848d78c": "d87300774d4e2fcfbd228a377deeeaac",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/ffb1ab44d28beb24b9acf051ecf7a787560830": "48c127eac6ae9c987465ba82777896f0",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6b/9cefa3700c3d59c84592c02edfbbfff88f82fc": "1071ae474cebaecf58e60977140f6145",
".git/objects/6d/525a3e68882c8075171cc8c33025885659a8c7": "d47b218d4bfd5c4532291f269eaf305d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/8641f085d8af32695b2b38d4bcf9685744d092": "f03b38c110b43695247779e42eb5756b",
".git/objects/77/a6905d5cfdb2aeb543970d017a14071dd3ea1c": "46fa343ee08393bcc8864581a63be92e",
".git/objects/84/67b35516e3fa6c7949eb3f81b207d29c0d266d": "39738eb09fb0e1cc19516de54f32ae6c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8b/8802d54b6392880c0b8c850afec0887d6e9874": "04d7d2210b251379419749ae971cff5f",
".git/objects/8f/6499b2fb3d066b203b320ffe071daf26fa8121": "93f954e9ea37e7a77a3d5cd0ed580762",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/1ace4649c2a6ad21742ef1f0d0e782ddca492f": "937b54e91d88b8501e6a1ac7b63d05f4",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/7cd2f631da59bdc513abe180688dbc3bed9b18": "2e71af39e5578b00b0dcf437e571bd92",
".git/objects/a8/9504857e213e519c2baa81cf1bc014c1e44a22": "669ebc27b25ed1351e8971d6658e6bf1",
".git/objects/ad/620bb6b7804acfd03d03bb0b55e10b5bc0ea3d": "2d16336e5b17462365d04c3bdc70f9f4",
".git/objects/ae/618d3974b10f2dc844b39482e64b18a5e27f5e": "6adc4538efcb2d80c35f0cee42156a7b",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/d19a1cd6ed70306b3a23d44732811c995678e8": "2414e03dae111b0ee72fe2ea344c32df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/5093e92ff49a0bfeb7d56fbdcd406779e21630": "929063939ccd483d801b461e4ddbea50",
".git/objects/c6/3f9f268ee40f933783b4224d8e707e3e527f8d": "f8cf5db1ff28f8a03eb383e927c4b5d6",
".git/objects/c7/4b1997c39af398c13005dc48c6adb8d2723a40": "c5849164d42bd6cf23ed2377d0bdafea",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/41533f7c15638dc6fd49d73aaa038a2554dd7e": "276ddd117b87599e187b0c7dca612254",
".git/objects/cb/b7e58a06b3d7ebfa468606df823058e9134730": "cc105fd7a2a25bbc12dff3e0aa3634d2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/aaa8393637c1ef18e5fb663078cbaec8afd0b9": "995390f4085f5456363629b57f0ba949",
".git/objects/ea/dcc7d05fa408596e4f95b80ccf9aa6454de29f": "dc83e5bb445884461e019dbad6de6d29",
".git/objects/ea/e8a337dd6893fe684b47010c7bc4e78d377eec": "6583c0dc3d8c8c708d31714286f8393f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/84f4d7222871515c3b2bd1ac84444dcc921e47": "91e98c866649ba6147e985707ab7f6e4",
".git/objects/fe/840693cd88b53bdf3b305d38d2adddce673379": "7fb9380ae948bdeb6481aa8767cacf94",
".git/refs/heads/main": "dd8541b8cad2e361cb332ffc6a31e5cb",
".git/refs/remotes/origin/main": "dd8541b8cad2e361cb332ffc6a31e5cb",
"assets/AssetManifest.bin": "b198d7a1f20704096bffe934063a9c25",
"assets/AssetManifest.bin.json": "67a5b498d9bbeff871e49802e993783e",
"assets/AssetManifest.json": "280c6d6255a94b05a2f772a50f9fa10c",
"assets/assets/Barbell.png": "ae9f98c568014b7701a665dff6c436a9",
"assets/assets/bgImage.jpg": "06fbfd60ede82c480fd16997ca560d5c",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/FontManifest.json": "29f2044531f4a95c0c4cf0bd58c0da05",
"assets/fonts/MaterialIcons-Regular.otf": "c3e553bb6d7f9891eb67cc9310ca8f11",
"assets/NOTICES": "a9f49940697f821f535a72c7b28e7b09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"conf/app.conf": "27b9f8f06e2c2ba98a11a9a2b7d808b2",
"conf/nginx.conf": "6fd1f0c6d710b273aab3c81e895158ff",
"Dockerfile": "814e0c8e66fb59c1d44cb098b2ab06d2",
"favicon.png": "9e9265cb947aa0649eb51ee85ab6506e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d1a3002195ae13da9b762e3ca47e51a1",
"icons/Icon-192.png": "f884de80d4c85f504444e09df0e24678",
"icons/Icon-512.png": "394a59134e53d2530594172141f5f564",
"icons/Icon-maskable-192.png": "f884de80d4c85f504444e09df0e24678",
"icons/Icon-maskable-512.png": "394a59134e53d2530594172141f5f564",
"index.html": "52566b4db559099dde3c7495a68a77b3",
"/": "52566b4db559099dde3c7495a68a77b3",
"main.dart.js": "e03e4922a9ab5191958d2ccc4358d33c",
"manifest.json": "b77c0e553563f6ac1484e7ae62486c9f",
"version.json": "eaa6d77346c4161038ae67a04c06c32c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
