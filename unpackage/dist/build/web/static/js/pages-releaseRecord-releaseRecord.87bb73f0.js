(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-releaseRecord-releaseRecord"],{"132e":function(e,t,n){"use strict";n("6a54");var r=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("2634")),i=r(n("2fdc")),s=n("62a3"),d={data:function(){return{list:[],type:0}},methods:{getTransactionsListApi:function(){var e=this;return(0,i.default)((0,a.default)().mark((function t(){var n,r,i,d;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=uni.getStorageSync("address"),r=e.type,console.log(r,"type"),i={address:n,type:r},t.next=6,(0,s.getTransactionsList)(i);case 6:d=t.sent,console.log(d,"getTransactionsList"),d.data&&(e.list=d.data.transactions);case 9:case"end":return t.stop()}}),t)})))()},goBackTwo:function(){uni.navigateTo({url:"/pages/index/index"})}},onLoad:function(e){e.type&&(this.type=e.type)},onShow:function(){this.getTransactionsListApi()}};t.default=d},"1dfb":function(e,t,n){var r=n("c616");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("967d").default;a("507c8fc6",r,!0,{sourceMap:!1,shadowMode:!1})},5880:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"recordBox"},[n("img",{staticClass:"left",attrs:{src:"/static/home/right.png",alt:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBackTwo.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"record"},[e._v("释放纪录")])],1),n("v-uni-view",{staticClass:"recordOne"},[n("v-uni-view",{staticClass:"numberOne"},[n("v-uni-view",{staticClass:"number1"},[e._v("数量")]),n("v-uni-view",{staticClass:"address1"},[e._v("地址")]),n("v-uni-view",{staticClass:"time1"},[e._v("时间")])],1),e._l(7,(function(t,r){return n("v-uni-view",{staticClass:"addressOne"},[n("v-uni-view",{staticClass:"number2"},[e._v("1000CXC")]),n("v-uni-view",{staticClass:"address2"},[e._v("Oxc7f***fD2l")]),n("v-uni-view",{staticClass:"time2"},[e._v("2025 03-03 10:20")])],1)}))],2)],1)},a=[]},"5f32":function(e,t,n){"use strict";n.r(t);var r=n("132e"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},c616:function(e,t,n){var r=n("c86c");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recordBox[data-v-5983dbe5]{width:100%;height:%?130?%;background:#1f2630;display:flex;align-items:center}.recordBox .left[data-v-5983dbe5]{width:%?22?%;height:%?38?%;margin-left:%?28?%}.recordBox .record[data-v-5983dbe5]{font-weight:500;font-size:%?36?%;color:#fff;margin-left:%?250?%}.recordOne[data-v-5983dbe5]{width:100%;height:calc(100vh - %?100?%);background:#29313c;padding-top:%?31?%}.recordOne .numberOne[data-v-5983dbe5]{display:flex;align-items:center;font-weight:300;font-size:%?24?%;color:#999}.recordOne .numberOne .number1[data-v-5983dbe5]{margin-left:%?48?%}.recordOne .numberOne .address1[data-v-5983dbe5]{margin-left:%?229?%}.recordOne .numberOne .time1[data-v-5983dbe5]{margin-left:%?229?%}.recordOne .addressOne[data-v-5983dbe5]{display:flex;align-items:center;margin-top:%?38?%}.recordOne .addressOne .number2[data-v-5983dbe5]{font-weight:300;font-size:%?36?%;color:#fff;margin-left:%?48?%}.recordOne .addressOne .address2[data-v-5983dbe5]{font-weight:300;font-size:%?36?%;color:#fff;margin-left:%?65?%}.recordOne .addressOne .time2[data-v-5983dbe5]{font-weight:300;font-size:%?24?%;color:#fff;margin-left:%?85?%}',""]),e.exports=t},e01d:function(e,t,n){"use strict";var r=n("1dfb"),a=n.n(r);a.a},ea9f:function(e,t,n){"use strict";n.r(t);var r=n("5880"),a=n("5f32");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("e01d");var s=n("828b"),d=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"5983dbe5",null,!1,r["a"],void 0);t["default"]=d.exports}}]);