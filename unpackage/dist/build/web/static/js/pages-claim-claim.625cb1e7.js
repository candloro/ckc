(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-claim-claim"],{"277d":function(t,e,a){"use strict";var n=a("cc00"),i=a.n(n);i.a},"77b7":function(t,e,a){"use strict";a.r(e);var n=a("cb88"),i=a("9db2");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("277d");var s=a("828b"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0d9bcb9a",null,!1,n["a"],void 0);e["default"]=o.exports},"9db2":function(t,e,a){"use strict";a.r(e);var n=a("bf44"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},bf44:function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2634")),r=n(a("9b1b")),s=n(a("2fdc"));a("f7a5"),a("c223");var o=a("62a3"),d={data:function(){return{progress:10,model:{address:"",role:"",totalHolderReward:"0",perSecondReward:"0",earnedRewards:"0",pendingRewards:"0",rank:"0"}}},methods:{formatPublicKey:function(t){if(!t)return"";var e=t.slice(0,4),a=t.slice(-4);return"".concat(e,"**").concat(a)},getUserInfoApi:function(){var t=this;return(0,s.default)((0,i.default)().mark((function e(){var a,n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=uni.getStorageSync("address"),e.next=3,(0,o.getUserInfo)(a);case 3:n=e.sent,t.model=(0,r.default)((0,r.default)({},t.model),n);case 5:case"end":return e.stop()}}),e)})))()},getHoldersRewardsApi:function(){var t=this;return(0,s.default)((0,i.default)().mark((function e(){var a,n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=uni.getStorageSync("address"),e.next=3,(0,o.getHoldersRewards)(a);case 3:n=e.sent,t.model=(0,r.default)((0,r.default)({},t.model),n);case 5:case"end":return e.stop()}}),e)})))()},getBtn:function(){console.log("领取")},goBack:function(){uni.navigateTo({url:"/pages/index/index"})},updateProgress:function(t){this.progress=t}},onLoad:function(){},onShow:function(){var t=this;return(0,s.default)((0,i.default)().mark((function e(){return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getUserInfoApi();case 2:return e.next=4,t.getHoldersRewardsApi();case 4:case"end":return e.stop()}}),e)})))()}};e.default=d},cb88:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"claimBox"},[a("img",{staticClass:"claim1",attrs:{src:"/static/home/right.png",alt:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"claim2"},[t._v("Claim")])],1),a("v-uni-view",{staticClass:"addressOne"},[t.model.address?a("img",{staticClass:"tp",attrs:{src:"/static/home/TP.png",alt:""}}):t._e(),t.model.address?t._e():a("v-uni-view",{staticClass:"wallet-avatar-gap"}),a("v-uni-view",{staticClass:"address"},[t._v(t._s(t.model.address?t.formatPublicKey(t.model.address):"连接钱包"))]),a("img",{staticClass:"down",attrs:{src:"/static/home/seven.png",alt:""}}),a("v-uni-view",{staticStyle:{"margin-left":"60rpx",color:"white","font-size":"15px"}},[0==t.model.role?a("v-uni-text",[t._v("默认")]):t._e(),1==t.model.role?a("v-uni-text",[t._v("合约人")]):t._e(),2==t.model.role?a("v-uni-text",[t._v("创世节点")]):t._e()],1)],1),a("v-uni-view",{staticClass:"picBox"},[a("v-uni-view",{staticClass:"picOne"},[a("img",{staticClass:"pic1",attrs:{src:"/static/home/eight.png",alt:""}}),a("v-uni-view",{staticClass:"num1"},[t._v("总收益")]),a("v-uni-view",{staticClass:"num2"},[t._v(t._s(t.model.totalHolderReward?Number(t.model.totalHolderReward).toFixed(2):"00:00"))]),a("img",{staticClass:"pic2",attrs:{src:"/static/home/eye1.png",alt:""}})],1),a("v-uni-view",{staticClass:"drawDownBox"},[a("v-uni-view",{staticClass:"drawOne"},[a("v-uni-view",{staticClass:"one"},[t._v(t._s(t.model.perSecondReward))]),a("v-uni-view",{staticClass:"one1"},[t._v("待解锁")])],1),a("v-uni-view",{staticClass:"drawTwo"},[a("v-uni-view",{staticClass:"two"},[t._v(t._s(t.model.pendingRewards))]),a("v-uni-view",{staticClass:"two2"},[t._v("待领取")])],1),a("v-uni-view",{staticClass:"drawThree"},[a("v-uni-view",{staticClass:"three"},[t._v(t._s(t.model.earnedRewards))]),a("v-uni-view",{staticClass:"three3"},[t._v("已领取")])],1)],1),a("v-uni-view",{staticClass:"progress-container"},[a("v-uni-view",{staticClass:"progress-bar",style:{width:t.progress+"%"}}),a("v-uni-text",{staticClass:"percentage"},[t._v(t._s(t.progress)+"%")])],1)],1),a("v-uni-view",{staticClass:"submitBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getBtn.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"submit"},[t._v("领取")])],1)],1)},i=[]},cc00:function(t,e,a){var n=a("e67e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("41987db8",n,!0,{sourceMap:!1,shadowMode:!1})},e67e:function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wallet-avatar-gap[data-v-0d9bcb9a]{border-radius:%?40?%;background-color:#4a90e2;width:%?80?%;height:%?80?%;margin-right:%?31?%}.content[data-v-0d9bcb9a]{width:100%;min-height:100vh;background-color:#1f2630}.claimBox[data-v-0d9bcb9a]{display:flex;align-items:center;padding-top:%?50?%}.claimBox .claim1[data-v-0d9bcb9a]{width:%?22?%;height:%?38?%;margin-left:%?28?%}.claimBox .claim2[data-v-0d9bcb9a]{font-weight:500;font-size:%?36?%;color:#fff;margin-left:%?275?%}.addressOne[data-v-0d9bcb9a]{display:flex;align-items:center;margin-top:%?59?%;margin-left:%?30?%}.addressOne .tp[data-v-0d9bcb9a]{width:%?100?%;height:%?100?%}.addressOne .address[data-v-0d9bcb9a]{font-weight:300;font-size:%?36?%;color:#fff;margin-left:%?21?%}.addressOne .down[data-v-0d9bcb9a]{width:%?25?%;height:%?14?%;margin-left:%?20?%}.picBox[data-v-0d9bcb9a]{width:%?690?%;height:%?420?%;background-size:100%;background-image:url(/static/home/nine.png);margin-left:%?30?%;margin-top:%?30?%}.picBox .picOne[data-v-0d9bcb9a]{display:flex;align-items:center;padding-top:%?30?%}.picBox .picOne .pic1[data-v-0d9bcb9a]{width:%?44?%;height:%?48?%;margin-left:%?22?%}.picBox .picOne .num1[data-v-0d9bcb9a]{font-size:%?30?%;color:#fff;margin-left:%?11?%}.picBox .picOne .num2[data-v-0d9bcb9a]{font-size:%?48?%;color:#fff;margin-left:%?45?%}.picBox .picOne .pic2[data-v-0d9bcb9a]{width:%?35?%;height:%?23?%;margin-left:%?20?%}.picBox .drawDownBox[data-v-0d9bcb9a]{display:flex;align-items:center;margin-top:%?63?%}.picBox .drawDownBox .drawOne[data-v-0d9bcb9a]{margin-left:%?46?%;text-align:center}.picBox .drawDownBox .drawOne .one[data-v-0d9bcb9a]{font-size:%?36?%;color:#fff}.picBox .drawDownBox .drawOne .one1[data-v-0d9bcb9a]{font-size:%?24?%;color:#8e8e8f}.picBox .drawDownBox .drawTwo[data-v-0d9bcb9a]{margin-left:%?125?%;text-align:center}.picBox .drawDownBox .drawTwo .two[data-v-0d9bcb9a]{font-size:%?36?%;color:#fff}.picBox .drawDownBox .drawTwo .two2[data-v-0d9bcb9a]{font-size:%?24?%;color:#8e8e8f}.picBox .drawDownBox .drawThree[data-v-0d9bcb9a]{margin-left:%?134?%;text-align:center}.picBox .drawDownBox .drawThree .three[data-v-0d9bcb9a]{font-size:%?36?%;color:#fff}.picBox .drawDownBox .drawThree .three3[data-v-0d9bcb9a]{font-size:%?24?%;color:#8e8e8f}.progress-container[data-v-0d9bcb9a]{width:%?600?%;display:flex;align-items:center;background-color:#333;border-radius:10px;overflow:hidden;margin-left:%?45?%;margin-top:%?60?%}.progress-bar[data-v-0d9bcb9a]{height:%?20?%;background-color:#fc0;\r\n  /* 黄色 */transition:width .5s ease-in-out}.percentage[data-v-0d9bcb9a]{position:absolute;top:37%;left:40%;right:10px;font-size:%?72?%;color:#fcd434}.submitBox[data-v-0d9bcb9a]{width:%?690?%;height:%?88?%;background:#fcd434;border-radius:%?44?%;margin-top:%?60?%;margin-left:%?30?%}.submitBox .submit[data-v-0d9bcb9a]{font-weight:500;font-size:%?36?%;color:#0d081a;line-height:%?80?%;text-align:center}',""]),t.exports=e}}]);