(function(e){function n(n){for(var i,r,c=n[0],u=n[1],s=n[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);d&&d(n);while(f.length)f.shift()();return t.push.apply(t,s||[]),o()}function o(){for(var e,n=0;n<t.length;n++){for(var o=t[n],i=!0,c=1;c<o.length;c++){var u=o[c];0!==a[u]&&(i=!1)}i&&(t.splice(n--,1),e=r(r.s=o[0]))}return e}var i={},a={index:0},t=[];function r(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var n=[],o=a[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,i){o=a[e]=[n,i]}));n.push(o[2]=i);var t,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+"static/js/"+({"pages-claim-claim":"pages-claim-claim","pages-index-index~pages-my-my":"pages-index-index~pages-my-my","pages-index-index":"pages-index-index","pages-my-my":"pages-my-my","pages-releaseRecord-releaseRecord":"pages-releaseRecord-releaseRecord","pages-rewardRecord-index":"pages-rewardRecord-index"}[e]||e)+"."+{"pages-claim-claim":"9cc54050","pages-index-index~pages-my-my":"c9327f49","pages-index-index":"ae31e9c8","pages-my-my":"2ef1643f","pages-releaseRecord-releaseRecord":"c9c9d9fd","pages-rewardRecord-index":"2f06252f"}[e]+".js"}(e);var u=new Error;t=function(n){c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(0!==o){if(o){var i=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+t+")",u.name="ChunkLoadError",u.type=i,u.request=t,o[1](u)}a[e]=void 0}};var s=setTimeout((function(){t({type:"timeout",target:c})}),12e4);c.onerror=c.onload=t,document.head.appendChild(c)}return Promise.all(n)},r.m=e,r.c=i,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(o,i,function(n){return e[n]}.bind(null,i));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var d=u;t.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("f323")},"004e":function(e,n,o){"use strict";o.r(n);var i=o("ad3b"),a=o.n(i);for(var t in i)["default"].indexOf(t)<0&&function(e){o.d(n,e,(function(){return i[e]}))}(t);n["default"]=a.a},"0bdb":function(e,n,o){var i=o("1227");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=o("967d").default;a("18f7b806",i,!0,{sourceMap:!1,shadowMode:!1})},1227:function(e,n,o){var i=o("c86c");n=i(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},"2eb2":function(e,n,o){"use strict";o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){}));var i=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},a=[]},"4e0a":function(e,n,o){"use strict";var i=o("0bdb"),a=o.n(i);a.a},"83f3":function(e,n,o){"use strict";o.r(n);var i=o("2eb2"),a=o("004e");for(var t in a)["default"].indexOf(t)<0&&function(e){o.d(n,e,(function(){return a[e]}))}(t);o("4e0a");var r=o("828b"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=c.exports},ad3b:function(e,n,o){"use strict";o("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=i},b343:function(e,n,o){var i=o("bdbb").default;o("bf0f"),uni.addInterceptor({returnValue:function(e){return!e||"object"!==i(e)&&"function"!==typeof e||"function"!==typeof e.then?e:new Promise((function(n,o){e.then((function(e){return e?e[0]?o(e[0]):n(e[1]):n(e)}))}))}})},b741:function(e,n,o){"use strict";(function(e){var n=o("f5bd").default;o("473f"),o("bf0f"),o("de6c"),o("5c47"),o("a1c1");var i=n(o("9b8e")),a={keys:function(){return[]}};e["____7410FA7____"]=!0,delete e["____7410FA7____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"cxc",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},uniIdRouter:{}},e.__uniConfig.compilerVersion="4.45",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__7410FA7",e.__uniConfig.appName="cxc.admin",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=a.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),i=a(n);return Object.assign(e[o]||(e[o]={}),i.common||i),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,i.default.component("pages-index-index",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-my-my"),o.e("pages-index-index")]).then(function(){return e(o("2006"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-my-my",(function(e){var n={component:Promise.all([o.e("pages-index-index~pages-my-my"),o.e("pages-my-my")]).then(function(){return e(o("62f5"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-rewardRecord-index",(function(e){var n={component:o.e("pages-rewardRecord-index").then(function(){return e(o("7298"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-releaseRecord-releaseRecord",(function(e){var n={component:o.e("pages-releaseRecord-releaseRecord").then(function(){return e(o("ea9f"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-claim-claim",(function(e){var n={component:o.e("pages-claim-claim").then(function(){return e(o("77b7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"cxc",navigationStyle:"custom"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/my/my",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"cxc",navigationStyle:"custom"})},[e("pages-my-my",{slot:"page"})])}},meta:{name:"pages-my-my",isNVue:!1,maxWidth:0,pagePath:"pages/my/my",windowTop:0}},{path:"/pages/rewardRecord/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"奖励纪录",navigationStyle:"custom"})},[e("pages-rewardRecord-index",{slot:"page"})])}},meta:{name:"pages-rewardRecord-index",isNVue:!1,maxWidth:0,pagePath:"pages/rewardRecord/index",windowTop:0}},{path:"/pages/releaseRecord/releaseRecord",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"释放纪录",navigationStyle:"custom"})},[e("pages-releaseRecord-releaseRecord",{slot:"page"})])}},meta:{name:"pages-releaseRecord-releaseRecord",isNVue:!1,maxWidth:0,pagePath:"pages/releaseRecord/releaseRecord",windowTop:0}},{path:"/pages/claim/claim",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Claim",navigationStyle:"custom"})},[e("pages-claim-claim",{slot:"page"})])}},meta:{name:"pages-claim-claim",isNVue:!1,maxWidth:0,pagePath:"pages/claim/claim",windowTop:0}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("0ee4"))},f323:function(e,n,o){"use strict";var i=o("f5bd").default,a=i(o("9b1b"));o("3dde"),o("a8b2"),o("1480"),o("6e4a"),o("b741"),o("9337");var t=i(o("83f3")),r=i(o("9b8e"));o("b343"),r.default.config.productionTip=!1,t.default.mpType="app";var c=new r.default((0,a.default)({},t.default));c.$mount()}});