    // The code below is injected by flutter web optimizer, do not edit!!!!!!
    
    // window.assetBase
    var assetBase = "https://ibinbro.github.io/bnnormal/";
    
    // window.mainjsManifest
    var mainjsManifest = {
  "main.dart.js": "main.dart.f0ac0823.js",
  "main.dart_0.js": "main.dart_0.90d8a42c.js",
  "main.dart_1.js": "main.dart_1.39d157ef.js",
  "main.dart_2.js": "main.dart_2.9b323db2.js",
  "main.dart_3.js": "main.dart_3.b8d60e17.js",
  "main.dart_4.js": "main.dart_4.8547f35f.js",
  "main.dart_5.js": "main.dart_5.53cc9c07.js"
};
    
    // window.hashFileManifest
    var hashFileManifest = {
  "assets/AssetManifest.json": "assets/AssetManifest.7241576d.json",
  "assets/FontManifest.json": "assets/FontManifest.d7517139.json",
  "assets/assets/b1.webp": "assets/assets/b1.807dc523.webp",
  "assets/assets/b2.webp": "assets/assets/b2.83177d2d.webp",
  "assets/assets/b3.webp": "assets/assets/b3.2a02bd46.webp",
  "assets/assets/b4.webp": "assets/assets/b4.bb09542a.webp",
  "assets/assets/b5.webp": "assets/assets/b5.85ed1930.webp",
  "assets/assets/b6.webp": "assets/assets/b6.3b48d805.webp",
  "assets/assets/buy_vip_back.webp": "assets/assets/buy_vip_back.32bdd754.webp",
  "assets/assets/buy_vip_card_top.webp": "assets/assets/buy_vip_card_top.78b13486.webp",
  "assets/assets/cube_left.webp": "assets/assets/cube_left.2e345505.webp",
  "assets/assets/cube_left_2.webp": "assets/assets/cube_left_2.02ebbfe0.webp",
  "assets/assets/cube_right.webp": "assets/assets/cube_right.ce27a493.webp",
  "assets/assets/cube_right_2.webp": "assets/assets/cube_right_2.41a5feb6.webp",
  "assets/assets/sssvip_back.webp": "assets/assets/sssvip_back.ecfc0656.webp",
  "assets/assets/sssvip_card.webp": "assets/assets/sssvip_card.e4fc27d9.webp",
  "assets/assets/sssvip_id.webp": "assets/assets/sssvip_id.2f5937c7.webp",
  "assets/assets/sssvip_top.webp": "assets/assets/sssvip_top.13523ab7.webp",
  "assets/assets/ssvip_back.webp": "assets/assets/ssvip_back.c0acdfc2.webp",
  "assets/assets/ssvip_card.webp": "assets/assets/ssvip_card.0d3d9118.webp",
  "assets/assets/ssvip_card_back.webp": "assets/assets/ssvip_card_back.ac8607cd.webp",
  "assets/assets/ssvip_id.webp": "assets/assets/ssvip_id.e0aeb24b.webp",
  "assets/assets/ssvip_top.webp": "assets/assets/ssvip_top.2e1d4024.webp",
  "assets/assets/svip_back.webp": "assets/assets/svip_back.dc1d4995.webp",
  "assets/assets/svip_card.webp": "assets/assets/svip_card.180bc80c.webp",
  "assets/assets/svip_card_back.webp": "assets/assets/svip_card_back.55f58f6d.webp",
  "assets/assets/svip_id.webp": "assets/assets/svip_id.cdb16d70.webp",
  "assets/assets/svip_top.webp": "assets/assets/svip_top.72309df1.webp",
  "assets/assets/vip/sssvip.webp": "assets/assets/vip/sssvip.39a480d6.webp",
  "favicon.png": "favicon.5dcef449.png",
  "flutter.js": "flutter.822458aa.js",
  "main.dart.js": "main.dart.f0ac0823.js",
  "main.dart_0.js": "main.dart_0.90d8a42c.js",
  "main.dart_1.js": "main.dart_1.39d157ef.js",
  "main.dart_2.js": "main.dart_2.9b323db2.js",
  "main.dart_3.js": "main.dart_3.b8d60e17.js",
  "main.dart_4.js": "main.dart_4.8547f35f.js",
  "main.dart_5.js": "main.dart_5.53cc9c07.js",
  "manifest.json": "manifest.0abe5cbd.json"
};
    
    // hook dynamic create element `src` `href` property
    (function(){
      var _defineProperty = function (element, property) {
        var value;
        Object.defineProperty(element, property, {
          get: function () {
            return value;
          },
          set: function (v) {
            value = v;
            if (typeof v === 'string') {
              if (v.startsWith('./')) {
                v = v.replace('./', '');
              }
              if (hashFileManifest[v]) {
                value = assetBase + hashFileManifest[v];
              }
            }
            element.setAttribute(property, value);
          }
        })
  
        var _setAttribute = element.setAttribute;
        element.setAttribute = function () {
          var args = Array.prototype.slice.call(arguments);
          // if (args[0] === 'src') {
          //   //do something here
          //   console.log('setAttribute', args[1])
          // }
          _setAttribute.apply(element, args);
        }
      }
  
      var _createElement = document.createElement;
      var _hookProperties = {'link': 'href', 'script': 'src', 'audio': 'src', 'video': 'src', 'map': 'src', 'img': 'src'};
      document.createElement = function (tagName) {
        var element = _createElement.call(document, tagName);
        var property = _hookProperties[tagName.toLowerCase()];
        if (property) {
          _defineProperty(element, property);
        }
        return element;
      }  
    })();

    // load main.dart.js_xxx.part js
    function dartDeferredLibraryLoader(uri, successCallback, errorCallback, loadId) {
      console.info('uri: ' + uri + ', loadId: '+ loadId);
      var src;
      try {
        var url = new URL(uri);
        var key = url.pathname.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      } catch (e) {
        var key = uri.replaceAll(/(.*)(main\.dart\.(.+)\.js)/g, '$2');
        src = assetBase + mainjsManifest[key];
      }
    
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      script.addEventListener("load", successCallback, false);
      script.addEventListener("error", errorCallback, false);
      document.body.appendChild(script);
    }
    