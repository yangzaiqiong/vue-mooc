(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38ce4fe4"],{"19ba":function(t,e,n){},"1eea":function(t,e,n){},"43d0":function(t,e,n){},"4eb4":function(t,e,n){},"7c18":function(t,e,n){"use strict";var s=n("19ba"),a=n.n(s);a.a},"7c58":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},[t.title?n("h3",{staticClass:"recommend-title"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),n("ul",t._l(t.list,function(e,s){return n("li",{key:s,staticClass:"recommend-item"},[n("div",{staticClass:"img-box"},[n("img",{attrs:{src:e.url,alt:""}})]),n("div",{staticClass:"recommend-content"},[n("p",{staticClass:"name ellipsis"},[t._v("\n          "+t._s(e.title)+"\n        ")]),n("p",{staticClass:"desc"},[e.price?n("span",{staticClass:"price"},[t._v("¥"+t._s(e.price))]):t._e(),n("span",{staticClass:"rank"},[t._v(t._s(e.rank))]),n("span",{staticClass:"number"},[n("i",{staticClass:"iconfont"},[t._v("")]),t._v("\n            "+t._s(e.number)+"\n          ")])])])])}),0)])},a=[],c={props:{title:{type:String,default:""},list:{type:Array,default:function(){return[]}}}},i=c,r=(n("7c18"),n("2877")),o=Object(r["a"])(i,s,a,!1,null,"d8dc2b6a",null);e["a"]=o.exports},8897:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"b",function(){return c}),n.d(e,"a",function(){return i});var s=n("a27e");function a(){return s["a"].get("/mock/lesson/nav.json")}function c(){return s["a"].get("/mock/lesson/list.json")}function i(){return s["a"].get("/mock/lesson/detail.json")}},a149:function(t,e,n){"use strict";var s=n("43d0"),a=n.n(s);a.a},c4ec:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lesson-detail"},[t.detail.base?n("lesson-detail-header",{attrs:{base:t.detail.base}}):t._e(),Object.keys(t.detail).length?n("lesson-detail-content",{attrs:{data:t.detail}}):t._e()],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lesson-detail-header"},[n("div",{staticClass:"m-center"},[n("p",{staticClass:"bread-crumb"},[t._v("\n      实战 \\ "+t._s(t.base.title)+"\n    ")]),n("p",{staticClass:"name"},[t._v("\n      "+t._s(t.base.title)+"\n    ")])])])},i=[],r={props:{base:{type:Object}}},o=r,l=(n("d69d"),n("2877")),d=Object(l["a"])(o,c,i,!1,null,"95059bec",null),u=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lesson-detail-contnet m-center"},[n("ul",{staticClass:"nav-list"},t._l(t.navList,function(e,s){return n("li",{key:s,staticClass:"nav-item",class:{active:t.currentNavIndex==s},on:{click:function(e){t.currentNavIndex=s}}},[0==e.code?n("span",{staticClass:"iconfont"},[t._v("")]):t._e(),1==e.code?n("span",{staticClass:"iconfont"},[t._v("")]):t._e(),2==e.code?n("span",{staticClass:"iconfont"},[t._v("")]):t._e(),n("span",[t._v(t._s(e.title))])])}),0),n("div",{staticClass:"lesson-information"},[n("div",{staticClass:"info-left"},[n(t.componentName,{tag:"component",attrs:{list:t.componentList}})],1),t.showSideBar?n("div",{staticClass:"info-right"},[n("detail-score",{attrs:{score:t.data.base}}),n("detail-teacher",{attrs:{teacher:t.data.teacher}}),n("recommend",{attrs:{list:t.data.recommend.data,title:t.data.recommend.title}})],1):t._e()])])},m=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lesson-detail-score"},[n("h2",{staticClass:"title"},[t._v("\n    课程摘要\n  ")]),n("div",{staticClass:"score-content"},[n("p",{staticClass:"rate-name"},[t._v("\n      好评率\n    ")]),n("p",{staticClass:"rate"},[t._v("\n      "+t._s(t.score.praise)+"%\n    ")]),n("p",{staticClass:"comment-btn"},[t._v("\n      立即评价\n    ")]),n("p",{staticClass:"desc"},[t._v("\n      给老师来点鼓励，可获得10积分奖励，前10评价100%可获实战专享优惠券！\n    ")]),n("div",{staticClass:"bottom"},[n("dl",[n("dt",[t._v("难度")]),n("dd",[t._v(t._s(t.score.rank))])]),n("dl",[n("dt",[t._v("时长")]),n("dd",[t._v(t._s(t.score.duration))])]),n("dl",[n("dt",[t._v("人数")]),n("dd",[t._v(t._s(t.score.number))])])])])])},p=[],_={props:{score:{type:Object}}},h=_,b=(n("ce2f"),Object(l["a"])(h,f,p,!1,null,"938ef4b4",null)),C=b.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lesson-detail-teacher"},[n("img",{staticClass:"avatar",attrs:{src:t.teacher.avatar,alt:""}}),n("p",{staticClass:"name"},[t._v("\n    "+t._s(t.teacher.name)+"\n  ")]),n("p",{staticClass:"job"},[t._v("\n    "+t._s(t.teacher.job)+"\n  ")]),n("p",{staticClass:"introduce"},[t._v("\n    "+t._s(t.teacher.introduce)+"\n  ")])])},j=[],y={props:{teacher:{type:Object}}},x=y,g=(n("da32"),Object(l["a"])(x,k,j,!1,null,"dedce930",null)),w=g.exports,L=n("7c58"),N={props:{data:{type:Object}},data:function(){return{currentNavIndex:0,navList:[]}},created:function(){this.navList=[{title:"课程",code:0,componentName:"chapter",key:"chapter",show:!0},{title:"问答",code:1,componentName:"comment",key:"comment",show:!0},{title:"同学",code:2,componentName:"classmate",key:"classmate",show:!1}]},computed:{componentName:function(){return this.navList[this.currentNavIndex].componentName},componentList:function(){var t=this.navList[this.currentNavIndex].key;return this.data[t]},showSideBar:function(){return this.navList[this.currentNavIndex].show}},components:{DetailScore:C,DetailTeacher:w,Recommend:L["a"],Chapter:function(){return n.e("chunk-c0d9f9ec").then(n.bind(null,"6a97"))},Comment:function(){return n.e("chunk-48b4cc40").then(n.bind(null,"79f0"))},classmate:function(){return n.e("chunk-bc9a993a").then(n.bind(null,"66d5"))}}},O=N,D=(n("a149"),Object(l["a"])(O,v,m,!1,null,"adedbcae",null)),$=D.exports,E=n("8897"),I=n("da71"),S={data:function(){return{detail:{}}},mounted:function(){this.getLessonDetailData()},methods:{getLessonDetailData:function(){var t=this;Object(E["a"])(this.$route.query.id).then(function(e){var n=e.code,s=e.data;n===I["b"]&&(t.detail=s)})}},components:{LessonDetailHeader:u,LessonDetailContent:$}},B=S,J=Object(l["a"])(B,s,a,!1,null,null,null);e["default"]=J.exports},ce2f:function(t,e,n){"use strict";var s=n("ffcb"),a=n.n(s);a.a},d69d:function(t,e,n){"use strict";var s=n("4eb4"),a=n.n(s);a.a},da32:function(t,e,n){"use strict";var s=n("1eea"),a=n.n(s);a.a},ffcb:function(t,e,n){}}]);
//# sourceMappingURL=chunk-38ce4fe4.ac0b7b84.js.map