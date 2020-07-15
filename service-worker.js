/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "42ee0b0c804a767d21016d2b14c7e60c"
  },
  {
    "url": "assets/css/0.styles.61d48021.css",
    "revision": "0d8113c6f044d4719821160683d760c7"
  },
  {
    "url": "assets/img/logo.jpg",
    "revision": "01be12037fb049ada876e77763c5c83b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0c0a7067.js",
    "revision": "8877a374b739c369b4b14e78dd494323"
  },
  {
    "url": "assets/js/11.ca2f0d37.js",
    "revision": "baa7994fc4f51710f1d0c969391255ae"
  },
  {
    "url": "assets/js/12.e1453921.js",
    "revision": "015032d880c4516e14f050384f4d20d1"
  },
  {
    "url": "assets/js/13.823707ed.js",
    "revision": "afe31ff4f4dbf26ae762c4affe2921b6"
  },
  {
    "url": "assets/js/14.2bf433c7.js",
    "revision": "a4d920226b25b8b602e7f8592779c641"
  },
  {
    "url": "assets/js/15.f2dcb714.js",
    "revision": "b1beab519da8c5483be95fd5e947a01d"
  },
  {
    "url": "assets/js/16.0efaf9e9.js",
    "revision": "adb7a05774657306a154ab2438ecffaa"
  },
  {
    "url": "assets/js/17.43385b14.js",
    "revision": "c2a5f3d06e100f331c0868923838aab1"
  },
  {
    "url": "assets/js/18.ad5c43c1.js",
    "revision": "36311370f01d3cd1e5f269b325acacaf"
  },
  {
    "url": "assets/js/19.92274233.js",
    "revision": "d90f6f1bc00a5dd58ece9fbd877e2d0f"
  },
  {
    "url": "assets/js/2.5303703b.js",
    "revision": "37a165e6fcb1adffa77d127e2088fe96"
  },
  {
    "url": "assets/js/20.24c72954.js",
    "revision": "8de53817c2db3ae5439f24ba04a2e1ff"
  },
  {
    "url": "assets/js/21.4e2f88d3.js",
    "revision": "d0ea39bdd9557eaca65d077bd818b8da"
  },
  {
    "url": "assets/js/22.4993cc59.js",
    "revision": "715bc4a868ab3a2781bc844d067614be"
  },
  {
    "url": "assets/js/23.b619a06e.js",
    "revision": "62322fd5a3fd91693a1ef37397cbbca0"
  },
  {
    "url": "assets/js/24.0cfe81ef.js",
    "revision": "e905096d15d82d76d069b6e7015ce3df"
  },
  {
    "url": "assets/js/25.f1eee312.js",
    "revision": "207155ac1a44bc38eb3aa7268339d2ce"
  },
  {
    "url": "assets/js/3.fedda29c.js",
    "revision": "91621f74bed2abad99564a1a08567c0c"
  },
  {
    "url": "assets/js/4.eab665ed.js",
    "revision": "d7e597d3a671c547f67bb250ca3b218c"
  },
  {
    "url": "assets/js/5.d54ea942.js",
    "revision": "c6c4989dd18a38bd35fbec0beb9964b9"
  },
  {
    "url": "assets/js/6.c0c4dbca.js",
    "revision": "e9c26753e3fc15c2a88e1fd6ebfbf07b"
  },
  {
    "url": "assets/js/7.575d3f5c.js",
    "revision": "51ecb5e2a93b4451b1b82af00e88488b"
  },
  {
    "url": "assets/js/8.3e107b1e.js",
    "revision": "759490d2e7d90ec3b31cf180997a6b44"
  },
  {
    "url": "assets/js/9.692b887e.js",
    "revision": "a71a99318e4a5f72ad8bd5c33855818f"
  },
  {
    "url": "assets/js/app.50b8492d.js",
    "revision": "e5ea9cb6069fba12d07ce4a867e9212b"
  },
  {
    "url": "css/css-1.html",
    "revision": "84525d3a275249419f623b335fead26b"
  },
  {
    "url": "css/index.html",
    "revision": "609d76beac4076c55363a2e8a7c19d85"
  },
  {
    "url": "html/html-1.html",
    "revision": "6fdb8880ba69e7a73794e1fc71bc0a8e"
  },
  {
    "url": "html/html-2.html",
    "revision": "1db40c51ba24ff6175e7b46022e35f9e"
  },
  {
    "url": "html/index.html",
    "revision": "5b88350a813ced935f0da04797b712ec"
  },
  {
    "url": "index.html",
    "revision": "bb8d79a0e1fd0293d03544181b5888ac"
  },
  {
    "url": "js/AMD.html",
    "revision": "29a17b8d506e78431fdeb58d7cd23f6f"
  },
  {
    "url": "js/CommonJS-Browserify.html",
    "revision": "141cc568ef1062d99831546c96d6d34e"
  },
  {
    "url": "js/commonJS.html",
    "revision": "5899bb13e36ae23c07fd0bc0636e7ce1"
  },
  {
    "url": "js/ES6-module.html",
    "revision": "4319e64416db175156abb73bc604e0b0"
  },
  {
    "url": "js/index.html",
    "revision": "4e1d44071a94770e1a248273de0fe214"
  },
  {
    "url": "js/js-1.html",
    "revision": "bb2e4beec6bba28699aaddc3f5755679"
  },
  {
    "url": "js/js-module-history.html",
    "revision": "dafbf283d37844256eed76ff674379b9"
  },
  {
    "url": "js/seaJS.html",
    "revision": "593066ce903d337636967e536d253361"
  },
  {
    "url": "node/index.html",
    "revision": "175738da44aaced0cd42293e8fcfb66f"
  },
  {
    "url": "node/node-1.html",
    "revision": "19a7b971a6e713d99d75edb7c1f1008d"
  },
  {
    "url": "vue/index.html",
    "revision": "fb72d4dee0463d64252b4e51c718d6b5"
  },
  {
    "url": "vue/VueBug.html",
    "revision": "ca4d9f2367183a305499f5230be1814b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
