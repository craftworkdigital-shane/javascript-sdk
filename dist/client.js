!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define("SelzClient",["exports"],e):e(t.SelzClient={})}(this,function(t){"use strict";var e=function(t){return null!==t&&void 0!==t?t.constructor:null},n=function(t){return Array.isArray(t)},r=function(t){return e(t)===Object},i=function(t){return e(t)===String},o=function(t){return null===t||void 0===t},u=function(t){return o(t)||(i(t)||n(t))&&!t.length||r(t)&&!Object.keys(t).length},a={array:n,object:r,number:function(t){return e(t)===Number&&!Number.isNaN(t)},string:i,boolean:function(t){return e(t)===Boolean},function:function(t){return e(t)===Function},nullOrUndefined:o,objectId:function(t){return i(t)&&/^[a-f\d]{24}$/i.test(t)},currencyCode:function(t){return i(t)&&/^[A-z]{3}$/.test(t)},url:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(function(t,e){return Boolean(t&&e&&t instanceof e)}(t,window.URL))return!0;var n=t;e||/^https?:\/\/*/.test(t)||(n="http://"+t);try{return!u(new URL(n).hostname)}catch(t){return!1}},empty:u};function s(t){return"https://"+(a.empty(t)?"":t+"-")+"selz.com/sdk/"}var c={product:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(t)+"products/find?url="+e},products:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return s(t)+"products/all"+e+"?q="+n+"&p="+r},store:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a.number(e)?s(t)+"store/find/"+e:s(t)+"store/find?url="+e},createCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(t)+"cart/create/"+e},getCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(t)+"cart/"+e},checkCarts:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(t)+"cart/verify?ids="+e},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(t)+"cart/add/"+e},updateCartItemQuantity:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(t)+"cart/updateitemquantity/"+e},removeFromCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return s(t)+"cart/remove/"+e}},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),d=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},v=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=null,y=function t(e){f(this,t),Object.assign(this,e)},p=function t(e){f(this,t),Object.assign(this,e)},m=function t(e){f(this,t),Object.assign(this,e),this.cover=new p(e.cover)},b=function t(e){f(this,t),Object.assign(this,e)},w=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";f(this,t),Object.assign(this,e),this.selected=e.id===n},j=function t(e){f(this,t),Object.assign(this,e),this.options=Object.keys(e.options).map(function(t){return new function t(e,n){f(this,t),this.id=e,this.label=n}(t,e.options[t])})},C=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(f(this,t),a.object(n)){if(g=e,Object.assign(this,n),this.store=g.store,a.object(n.urls)&&(this.urls=new y(n.urls)),a.object(n.media)&&(this.media=new m(n.media)),a.array(n.images)&&(this.images=n.images.map(function(t){return new p(t)})),a.array(n.files)&&(this.files=n.files.map(function(t){return new b(t)})),n.has_variants){var i=a.empty(r)?n.variants[0].id:r;this.variants=n.variants.map(function(t){return new w(t,i)})}n.has_variant_attributes&&(this.variant_attributes=n.variant_attributes.map(function(t){return new j(t)}))}}return h(t,[{key:"selected_variant",get:function(){return a.empty(this.variants)?null:this.variants.find(function(t){return t.selected})}}]),t}(),k=null,S=function t(e,n){f(this,t),this.cartId=n,Object.assign(this,e),this.product=new C(k,e.product,e.variant_id)},O=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];f(this,t),null!==n&&(k=e,Object.assign(this,n),this.store=k.store,this.active=r,this.items=Array.from(n.items).map(function(t){return new S(t,n.id)}))}return h(t,[{key:"add",value:function(t){return k.addToCart(this.id,t)}},{key:"remove",value:function(t){return k.removeFromCart(this.id,t)}}]),t}(),E=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;f(this,t),a.object(e)&&Object.assign(this,e)};function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString())}var A=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],r=arguments[2],i=n||new FormData,o=void 0;return a.object(e)?(Object.keys(e).forEach(function(n){o=r?r+"["+n+"]":n,"object"!==l(e[n])||e[n]instanceof File?i.append(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString();return I(t=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toString().replace(/\w\S*/g,function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})}(t=I(t=I(t,"-"," "),"_"," "))," ","")}(o),e[n]):t(e[n],i,n)}),i):i};function P(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();return a.object(i)?(Object.keys(i).forEach(function(e){a.object(i[e])?(Object.keys(t).includes(e)||Object.assign(t,d({},e,{})),P(t[e],i[e])):Object.assign(t,d({},e,i[e]))}),P.apply(void 0,[t].concat(n))):t}var q={type:"GET",body:{},responseType:"json"};function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=P({},q,e),r=n.type,i=n.body,o=n.responseType;return new Promise(function(e,n){try{var u=new XMLHttpRequest;if(!("withCredentials"in u)){var a=new Error("No CORS support");throw a.request=u,a}u.addEventListener("load",function(){var t=u.response;"json"===o?function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e,n){try{e(JSON.parse(t))}catch(t){n(t)}})}(t).then(function(t){if(!t.success){var n=new Error("Request failed");throw n.errors=t.errors,n}e(t.data)}).catch(n):e(t)}),u.addEventListener("error",function(){var t=new Error(u.status);throw t.request=u,t}),u.open(r,t,!0),"json"!==o&&(u.responseType=o),u.send(A(i))}catch(a){n(a)}})}var _={},N=function(t){if(!Object.keys(_).includes(t)){_[t]=U(t);var e=function(){delete _[t]};_[t].then(e).catch(e)}return _[t]},T=function(t){return U(t,{type:"POST",body:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}})};var x=new Map,L=function(t){if(null===t)return null;var e=function(t){var e=t;/^https?:\/\/*/.test(t)||(e="http://"+t);try{return new URL(e)}catch(t){return null}}(t);return null===e?null:(""+e.host+e.pathname).replace(/\/$/,"")},R=function(){function t(e){f(this,t),this.config=Object.assign({keys:{root:"selz-js-sdk",carts:"carts",stores:"stores"},ttl:3600,schema:new Date("2018-07-02").getTime()},e),this.purge()}return h(t,[{key:"get",value:function(e){var n=x.get(this.config.keys.root);if(t.supported){var r=window.localStorage.getItem(this.config.keys.root);a.empty(r)||(n=JSON.parse(r))}return a.empty(n)?null:a.empty(e)?n:Object.keys(n).includes(e)?n[e]:null}},{key:"set",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.get()||{};if(r&&Object.keys(i).includes(e)?i[e]=P(i[e],n):i[e]=n,x.set(this.config.keys.root,i),t.supported){i.schema=this.config.schema;try{window.localStorage.setItem(this.config.keys.root,JSON.stringify(i))}catch(t){}}}},{key:"purge",value:function(){var t=this.get();if(!a.empty(t))if(Number(t.schema)===this.config.schema){var e=this.get(this.config.keys.stores)||[];a.empty(e)||this.set(this.config.keys.stores,e.filter(function(t){var e=Number(t.ttl);return e>0&&e>Date.now()}))}else window.localStorage.removeItem(this.config.keys.root)}},{key:"getCarts",value:function(t){var e=this.get(this.config.keys.carts)||{};return a.empty(e)?null:a.number(t)?Object.keys(e).includes(t.toString())?e[t.toString()]:null:e}},{key:"getCart",value:function(t,e){var n=this.getCarts(t);return a.empty(n)?null:a.string(e)?Object.keys(n).includes(e.toUpperCase())?n[e.toUpperCase()]:null:n}},{key:"setCart",value:function(t,e,n){this.set(this.config.keys.carts,d({},t,d({},e.toUpperCase(),{id:n.id,active:n.active})),!0)}},{key:"setCarts",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.set(this.config.keys.carts,d({},t,e))}},{key:"getStore",value:function(t){var e=null;if(!a.number(t)&&!a.url(t))return null;var n=this.get(this.config.keys.stores)||[];if(a.number(t))e=n.find(function(e){return a.object(e.data)&&e.data.id===t});else if(a.url(t)){var r=L(t);if(null===r)return null;e=n.find(function(t){return a.array(t.urls)&&t.urls.includes(r)})}if(!a.object(e))return null;var i=Number(e.ttl);return i>0&&i<Date.now()?(this.purge(),null):new E(e.data)}},{key:"setStore",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=L(e),r=this.get(this.config.keys.stores)||[],i=null;a.empty(r)||(i=r.find(function(e){return e.data.id===t.id}));var o,u=Date.now()+this.config.ttl;if(a.object(i)){if(Object.assign(i,{data:t,ttl:u}),null!==n){a.array(i.urls)?i.urls.push(n):i.urls=[n];var s=(o=i.urls,a.array(o)?o.filter(function(t,e){return o.indexOf(t)===e}):o);Object.assign(i,{urls:s})}}else{var c={data:t,ttl:u};null!==n&&Object.assign(c,{urls:[n]}),r.push(c)}this.set(this.config.keys.stores,r)}}],[{key:"supported",get:function(){if(!window.localStorage)return!1;var t="___test";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}}}]),t}(),F=function(){function t(e){f(this,t);var n=e.env,r=e.store;if(this.env=a.empty(n)?"":n,this.store=r,!a.url(r)&&!a.number(r))throw Error("A store ID or URL is required to create a client");this.storage=new R}return h(t,[{key:"getStoreId",value:function(){var t=this;return new Promise(function(e,n){a.number(t.store)?e(t.store):t.store instanceof E?e(t.store.id):(a.url(t.store)||n(new Error("Url is required for user lookup")),t.getStore().then(function(t){e(t.id)}).catch(n))})}},{key:"getStore",value:function(){var t=this;return new Promise(function(e,n){if(a.number(t.store)||a.url(t.store)){var r=t.storage.getStore(t.store);if(null!==r&&r instanceof E)return void e(r)}if(t.store instanceof E)e(t.store);else{var i=c.store(t.env,t.store);N(i).then(function(n){t.setStore(n),e(t.store)}).catch(n)}})}},{key:"setStore",value:function(t){if(a.object(t)){var e=a.url(this.store)?this.store:null;this.store=new E(t),this.storage.setStore(this.store,e)}}},{key:"getProduct",value:function(t){var e=this;return new Promise(function(n,r){N(c.product(e.env,t)).then(function(t){e.store instanceof E||e.setStore(t.store),n(new C(e,t))}).catch(r)})}},{key:"getProducts",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise(function(r,i){t.getStoreId().then(function(o){N(c.products(t.env,o,e,n<1?1:n)).then(function(e){r(e.map(function(e){return new C(t,e)}))}).catch(i)}).catch(i)})}},{key:"createCart",value:function(t,e){var n=this;return new Promise(function(r,i){a.empty(t)?i(new Error("currency is required")):n.getStoreId().then(function(o){var u=t.toUpperCase();T(c.createCart(n.env,o),{currency:u,discount:a.empty(e)?null:e}).then(function(t){var e=new O(n,t);n.storage.setCart(o,u,e),r(e)}).catch(i)}).catch(i)})}},{key:"getCartId",value:function(t){var e=this;return new Promise(function(n,r){a.currencyCode(t)?e.getStoreId().then(function(i){var o=t.toUpperCase(),u=e.storage.getCart(i,o);a.empty(u)?e.createCart(o).then(function(t){return n(t.id)}).catch(r):n(u.id)}).catch(r):r(new Error("A valid currency code is required"))})}},{key:"getCart",value:function(t){var e=this;return new Promise(function(n,r){var i=a.currencyCode(t),o=a.objectId(t);if(i||o)if(i){var u=t.toUpperCase();e.getCartId(u).then(function(t){a.empty(t)?r(new Error("Could not find matching cart for currency code '"+u+"'")):e.getCart(t).then(function(t){e.setStore(t.store),n(t)}).catch(r)}).catch(r)}else N(c.getCart(e.env,t)).then(function(t){var r=e.getActiveCart(),i=new O(e,t,t.id===r);e.setStore(i.store),n(i)}).catch(r);else r(new Error("A valid currency code or cart id are required"))})}},{key:"getCarts",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(a.empty(o))n(null);else if(e){var u=Object.keys(o).map(function(t){return o[t].id});N(c.checkCarts(t.env,u.join(","))).then(function(e){Object.entries(e).forEach(function(t){var e=v(t,2),n=e[0];if(!e[1]){var r=Object.keys(o).find(function(t){return o[t].id===n});delete o[r]}}),t.storage.setCarts(i,o),Object.values(o).find(function(t){return t.active})?n(o):t.setActiveCart().then(n).catch(r)}).catch(r)}else n(o)}).catch(r)})}},{key:"setActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(n,r){t.getStoreId().then(function(i){t.getCarts(!1).then(function(o){var u=o;if(a.empty(u))n(null);else{if(a.currencyCode(e)){var s=e.toUpperCase(),c=Object.keys(u);if(!c.includes(s))return void r(new Error("No carts for "+s));c.forEach(function(t){u[t].active=t===s})}else{var l=a.objectId(e)?e:u[Object.keys(u)[0]].id;Object.keys(u).forEach(function(t){var e=u[t];e.active=e.id===l})}t.storage.setCarts(i,u),n(u)}})}).catch(r)})}},{key:"getActiveCart",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise(function(n,r){t.getStoreId().then(function(i){var o=t.storage.getCarts(i);if(Object.keys(o).length){var u=Object.values(o).find(function(t){return t.active});u?e?t.getCart(u.id).then(n).catch(r):n(u.id):n(null)}else n(null)}).catch(r)})}},{key:"addToCart",value:function(t,e){var n=this;return new Promise(function(r,i){a.objectId(t)?a.empty(e)?i(new Error("A valid product is required")):T(c.addToCart(n.env,t),e).then(function(t){var e=new O(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}).catch(i):i(new Error("A valid id is required"))})}},{key:"updateCartItemQuantity",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return new Promise(function(i,o){a.objectId(t)?a.empty(e)?o(new Error("A valid index is required")):T(c.updateCartItemQuantity(n.env,t),{index:e,quantity:r}).then(function(t){var e=new O(n,t,!0);n.setStore(e.store),n.setActiveCart(e.id).then(function(){i(e)}).catch(o)}).catch(o):o(new Error("A valid id is required"))})}},{key:"removeFromCart",value:function(t,e){var n=this;return new Promise(function(r,i){a.objectId(t)?a.empty(e)?i(new Error("A valid index is required")):T(c.removeFromCart(n.env,t),{index:e}).then(function(t){if(a.empty(t))n.getCarts().then(function(){return r(null)}).catch(i);else{var e=new O(n,t,!0);n.setActiveCart(e.id).then(function(){r(e)}).catch(i)}}).catch(i):i(new Error("A valid id is required"))})}}]),t}();t.Product=C,t.Cart=O,t.Store=E,t.default=F,Object.defineProperty(t,"__esModule",{value:!0})});

//# sourceMappingURL=client.js.map
