(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c637806c"],{"0aba":function(t,e,s){},"0d89":function(t,e,s){"use strict";var a=s("0aba"),i=s.n(a);i.a},"1de2":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-center m-center"},[s("div",{staticClass:"user-center-container"},[s("div",{staticClass:"user-left-nav"},[s("div",{staticClass:"user-avatar"},[s("img",{attrs:{src:t.userInfo.avatar,alt:""}})]),s("p",{staticClass:"user-name ellipsis"},[t._v("\n        "+t._s(t.userInfo.name)+"\n      ")]),s("p",{staticClass:"user-id"},[t._v("\n        ID: "+t._s(t.userInfo.ID)+"\n      ")]),s("p",{staticClass:"user-auth"},[s("i",{staticClass:"iconfont",class:{red:t.mainBind.authenticate},attrs:{title:t.mainBind.authenticate?"已实名认证":"未实名认证"}},[t._v("")]),s("i",{staticClass:"iconfont",class:{red:t.mainBind.certificate},attrs:{title:t.mainBind.certificate?"已学籍认证":"未学籍认证"}},[t._v("")]),s("i",{staticClass:"iconfont",class:{red:t.mainBind.phone},attrs:{title:t.mainBind.phone?"已绑定手机":"未绑定手机"}},[t._v("")]),s("i",{staticClass:"iconfont",class:{red:t.mainBind.email},attrs:{title:t.mainBind.email?"已绑定邮箱":"未绑定邮箱"}},[t._v("")])]),s("dl",{staticClass:"user-nav"},[s("dt",{staticClass:"nav-title"},[t._v("\n          账户管理\n        ")]),t._l(t.navList,function(e,a){return s("dt",{key:a,staticClass:"nav-item",class:{active:t.currentNavIndex===a},on:{click:function(s){return t.handleNavClick(e,a)}}},[t._v("\n          "+t._s(e.title)+"\n          "),s("i",{staticClass:"iconfont"},[t._v("")])])})],2)]),Object.keys(t.userInfo).length>0?s(t.componentName,{tag:"component",staticClass:"user-right-content",attrs:{userinfo:t.userInfo},on:{componentClick:t.handleComponentClick}}):t._e()],1)])},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-bind"},[s("p",{ref:"loginRecord",staticClass:"last-login-record"},[t._v("\n    上次登录时间："+t._s(t.userinfo.lastLoginTime)+"  地点："),s("span",{on:{click:t.handleRecordClick}},[t._v("查看最近操作记录")]),s("i",{staticClass:"iconfont",on:{click:t.handleCloseRecord}},[t._v("")])]),s("dl",[t._m(0),t._l(t.userinfo.binds,function(e,a){return s("dd",{key:a,staticClass:"bind-item"},["email"==e.icon?s("i",{staticClass:"iconfont"},[t._v("")]):t._e(),"phone"==e.icon?s("i",{staticClass:"iconfont"},[t._v("")]):t._e(),"password"==e.icon?s("i",{staticClass:"iconfont"},[t._v("")]):t._e(),"social"==e.icon?s("i",{staticClass:"iconfont"},[t._v("")]):t._e(),s("div",{staticClass:"bind-introduction"},[s("p",{staticClass:"bind-title"},[s("span",{staticClass:"bind-type"},[t._v(t._s(e.type))]),t._v("\n          "+t._s(t.getBindValue(e))+"\n        ")]),s("p",{staticClass:"bind-subtitle"},[t._v("\n          "+t._s(e.desc)+"\n        ")]),"social"==e.icon?s("ul",{staticClass:"social-list"},t._l(e.account,function(e,a){return s("li",{key:a,staticClass:"social-item"},["weibo"==e.type?s("i",{staticClass:"iconfont",class:{yellow:e.value}},[t._v("")]):t._e(),"qq"==e.type?s("i",{staticClass:"iconfont",class:{blue:e.value}},[t._v("")]):t._e(),"wechat"==e.type?s("i",{staticClass:"iconfont",class:{green:e.value}},[t._v("")]):t._e(),s("div",{staticClass:"social-content"},[s("p",{staticClass:"social-type"},[t._v("\n                "+t._s(e.title)+"\n              ")]),s("p",{staticClass:"social-bind-type",class:{green:e.value}},[t._v("\n                "+t._s(e.value?"已绑定":"未绑定")+"\n              ")]),s("span",{staticClass:"social-bind-btn"},[t._v(t._s(e.value?"添加绑定":"解除绑定"))])])])}),0):t._e()])])})],2)])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dt",{staticClass:"bind-title"},[t._v("\n      账号绑定\n      "),s("span",{staticClass:"bind-rate"},[t._v("完成 "),s("strong",[t._v("4/4")])])])}],l={props:{userinfo:{type:Object}},methods:{handleCloseRecord:function(){var t=this.$refs.loginRecord;t.style.height=0,t.style.opacity=0},handleRecordClick:function(){this.$emit("componentClick","record")},getBindValue:function(t){return"password"!==t.icon&&"social"!==t.icon?t.value?"".concat(t.value," 已绑定"):"未绑定":t.value?"已设置":""}}},o=l,r=(s("a34c"),s("2877")),d=Object(r["a"])(o,n,c,!1,null,"7c5d8a40",null),u=d.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-information"},[s("dl",[s("dt",{staticClass:"info-title"},[t._v("\n      个人信息\n    ")]),t._l(t.information,function(e,a){return s("dd",{key:a,staticClass:"info-item"},[s("div",{staticClass:"info-type"},[t._v("\n        "+t._s(e.type)+"\n      ")]),s("div",{staticClass:"info-content"},[t._v("\n        "+t._s(e.value?e.value:"未设置")+"\n      ")])])})],2)])},m=[],p=(s("7f7f"),{props:{userinfo:{type:Object}},data:function(){return{information:[]}},created:function(){this.information=[{id:1,type:"昵称",value:this.userinfo.name},{id:2,type:"职位",value:this.userinfo.job},{id:3,type:"城市",value:this.userinfo.city},{id:4,type:"性别",value:this.userinfo.sex},{id:5,type:"个性签名",value:this.userinfo.signature}]}}),v=p,_=(s("d364"),Object(r["a"])(v,f,m,!1,null,"3dd1a95f",null)),h=_.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"operate-log"},[t._m(0),s("div",{staticClass:"log-list"},[s("el-table",{attrs:{data:t.userinfo.logs}},[s("el-table-column",{attrs:{label:"类型",prop:"type",align:"center",width:"120"}}),s("el-table-column",{attrs:{label:"登陆时间",prop:"time",align:"center",width:"180"}}),s("el-table-column",{attrs:{label:"城市",prop:"city",align:"center",width:"390"}}),s("el-table-column",{attrs:{label:"IP",prop:"IP",align:"center",width:"120"}}),s("el-table-column",{attrs:{label:"设备",prop:"device",align:"center",width:"90"}})],1),s("pagination",{attrs:{total:t.total,page:t.page},on:{"update:page":function(e){t.page=e}}})],1)])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"operate-title"},[s("span",{staticClass:"type"},[t._v("操作类型")]),s("span",{staticClass:"desc"},[t._v("通过查看操作类型、登录时间、登录地点和设备可以判断账号是否正常")])])}],g=s("57fc"),k={props:{userinfo:{type:Object}},data:function(){return{page:1,total:100}},components:{Pagination:g["a"]}},y=k,x=(s("db31"),Object(r["a"])(y,C,b,!1,null,"5481d04a",null)),j=x.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"authenticate"},[s("h2",{staticClass:"auth-title"},[t._v("\n    实名认证\n  ")]),s("div",{staticClass:"auth-btn-box"},[s("span",{staticClass:"auth-btn"},[t._v("开始认证")])]),s("dl",{staticClass:"auth-message"},[s("dt",{staticClass:"auth-message-title"},[t._v("\n      认证须知\n    ")]),s("dd",{staticClass:"auth-message-item"},[t._v("\n      1、实名认证可以提升你在慕课网的个人信息及虚拟财产的安全等级，同时也能够更好的体验慕课网的各项虚拟服务；\n    ")]),s("dd",{staticClass:"auth-message-item"},[t._v("\n      2、我们将在你提交身份证信息后的5个工作日（不包含节假日）内完成审核，审核结果将会以短信和系统通知的形式发送给你；\n    ")]),s("dd",{staticClass:"auth-message-item"},[t._v("\n      3、如若账号还未绑定手机，建议你提前绑定手机；\n    ")]),s("dd",{staticClass:"auth-message-item"},[t._v("\n      4、实名认证审核完成后，将无法修改和删除，请谨慎填写；\n    ")]),s("dd",{staticClass:"auth-message-item"},[t._v("\n      5、实名认证审核完成后，系统将自动发放10个积分作为奖励；查看积分\n    ")]),s("dd",{staticClass:"auth-message-item"},[t._v("\n      6、你需要准备身份证照片（需正反两面），请确保证件照片清晰可见，严禁PS，具体可参考实名认证常见问题；\n    ")]),s("dd",{staticClass:"auth-message-item"},[t._v("\n      7、我们会确保你所提供的信息均处于严格的保密状态，不会泄露；\n    ")]),s("dd",{staticClass:"auth-message-item bold"},[t._v("\n      8、如存在恶意乱填写姓名，身份证号码，及上传与身份证证件无关图片者，一经发现将冻结慕课网账号。\n    ")])])])}],w=(s("be41"),{}),O=Object(r["a"])(w,F,$,!1,null,"2bafdb61",null),I=O.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"certificate"},[s("h2",{staticClass:"certificate-title"},[t._v("\n    学籍认证\n  ")]),s("div",{staticClass:"certificate-wrapper"},[s("div",{staticClass:"status"},[s("i",{staticClass:"iconfont"},[t._v("")]),s("p",{staticClass:"status-text"},[t._v("\n        学籍认证成功\n      ")]),s("p",{staticClass:"cert-time"},[t._v("\n        学籍时间("+t._s(t.userinfo.certificate.stime)+"-"+t._s(t.userinfo.certificate.etime)+")\n      ")]),s("dl",{staticClass:"cert-list"},[s("dd",{staticClass:"cert-item"},[s("span",{staticClass:"item-title"},[t._v("姓名：")]),s("span",[t._v(t._s(t.userinfo.certificate.name))])]),s("dd",{staticClass:"cert-item"},[s("span",{staticClass:"item-title"},[t._v("院校名称：")]),s("span",[t._v(t._s(t.userinfo.certificate.school))])]),s("dd",{staticClass:"cert-item"},[s("span",{staticClass:"item-title"},[t._v("入学时间：")]),s("span",[t._v(t._s(t.userinfo.certificate.stime))])]),s("dd",{staticClass:"cert-item"},[s("span",{staticClass:"item-title"},[t._v("学历层次：")]),s("span",[t._v(t._s(t.userinfo.certificate.grade))])])])]),t._m(0)])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[s("dl",[s("dt",[t._v("认证须知")]),s("dd",[t._v("1、你提交学籍证明后的5个工作日（不包含节假日）内完成审核，审核结果将会以系统通知的形式发送给你；")]),s("dd",[t._v("2、学籍证明中的身份证号码必须与实名认证中身份证信息保持一致。如有误，将无法通过审核。")]),s("dd",[t._v("3、学籍认证审核完成后，将无法修改和删除，请谨慎填写。同时系统将自动发放10个积分作为奖励；查看积分；")]),s("dd",[t._v("4、上传学籍证明文件格式为PDF或JPG格式。请确保学籍文件清晰可见，具体可参考实名认证 常见问题；")]),s("dd",[t._v("5、如存在恶意乱填写姓名，上传假信息，改动学籍证明内容或上传无关图片者，一经发现将冻结慕课网账号。")]),s("dd",[t._v("6、我们会确保你所提供的信息均处于严格的保密状态，不会泄露；")])])])}],D={props:{userinfo:{type:Object}}},E=D,L=(s("0d89"),Object(r["a"])(E,N,B,!1,null,"3d7ce76b",null)),A=L.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address-container"},[s("h2",{staticClass:"address-title"},[t._v("\n    收货地址\n  ")]),s("dl",{staticClass:"address-list"},[s("dd",{staticClass:"address-item"},[s("div",{staticClass:"add-address",on:{click:t.handleAddClick}},[s("i",{staticClass:"iconfont"},[t._v("")]),s("p",{staticClass:"add-text"},[t._v("\n          添加新地址\n        ")])])]),t._l(t.addressList,function(e,a){return s("dd",{key:a,staticClass:"address-item"},[s("p",{staticClass:"name"},[t._v("\n        "+t._s(e.name)+"\n      ")]),s("p",[t._v("电话："+t._s(e.phhone))]),s("p",[t._v("地区："+t._s(e.area))]),s("p",[t._v("地址："+t._s(e.address))]),s("p",[t._v("邮编："+t._s(e.postcode))]),s("div",{staticClass:"address-btn"},[e.isDefault?t._e():s("span",{staticClass:"default",on:{click:function(s){return t.handleSetDefault(e)}}},[t._v("设为默认地址")]),s("span",{on:{click:function(s){return t.handleEditClick(e)}}},[t._v("修改")]),s("span",{on:{click:function(e){return t.handleDeleteClick(a)}}},[t._v("删除")])]),e.isDefault?s("div",{staticClass:"default-icon"},[t._v("\n        默认\n      ")]):t._e()])})],2),s("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("el-form",{attrs:{model:t.editForm,"label-width":"80px","label-position":"right"}},[s("el-form-item",{attrs:{label:"姓名"}},[s("el-input",{attrs:{placeholder:"请输入收件名称",clearable:""},model:{value:t.editForm.name,callback:function(e){t.$set(t.editForm,"name",e)},expression:"editForm.name"}})],1),s("el-form-item",{attrs:{label:"电话"}},[s("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:t.editForm.phone,callback:function(e){t.$set(t.editForm,"phone",e)},expression:"editForm.phone"}})],1),s("el-form-item",{attrs:{label:"区域"}},[s("el-input",{attrs:{placeholder:"请输入区域",clearable:""},model:{value:t.editForm.area,callback:function(e){t.$set(t.editForm,"area",e)},expression:"editForm.area"}})],1),s("el-form-item",{attrs:{label:"详细地址"}},[s("el-input",{attrs:{placeholder:"请输入详细收货地址",clearable:""},model:{value:t.editForm.address,callback:function(e){t.$set(t.editForm,"address",e)},expression:"editForm.address"}})],1),s("el-form-item",{attrs:{label:"邮政编码"}},[s("el-input",{attrs:{placeholder:"请输入邮政编码",clearable:""},model:{value:t.editForm.postcode,callback:function(e){t.$set(t.editForm,"postcode",e)},expression:"editForm.postcode"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("mooc-button",{attrs:{size:"small"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n        取消\n      ")]),s("mooc-button",{attrs:{type:"primary",size:"small"},on:{click:t.handleSubmitClick}},[t._v("\n        确定\n      ")])],1)],1)],1)},V=[],S=(s("ac6a"),s("f751"),s("6b43")),R={data:function(){return{isAdd:!1,dialogVisible:!1,addressList:[],editForm:{name:"",phone:"",area:"",address:"",postcode:"",isDefault:!1}}},created:function(){this.getAddress()},methods:{handleAddClick:function(){this.isAdd=!0,this.dialogVisible=!0,this.editForm={name:"",phone:"",area:"",address:"",postcode:"",isDefault:!1}},handleEditClick:function(t){this.isAdd=!1,this.dialogVisible=!0,this.editForm=Object.assign({},t)},handleDeleteClick:function(t){var e=this;this.$confirm("此操作将删除该收件地址，是否确定？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var s=e.addressList.slice();s.splice(t,1),e.addressList=s,Object(S["c"])(s)})},handleSubmitClick:function(){var t=this,e=this.addressList.slice();this.isAdd?e.push(this.editForm):e.forEach(function(s,a){s.name===t.editForm.name&&(e[a]=t.editForm)}),1===e.length&&(e[0].isDefault=!0),this.addressList=e,Object(S["c"])(e),this.dialogVisible=!1,this.editForm={name:"",phone:"",area:"",address:"",postcode:"",isDefault:!1}},handleSetDefault:function(t){var e=this;this.addressList.forEach(function(s,a){e.addressList[a].isDefault=s.name===t.name}),Object(S["c"])(this.addressList)},getAddress:function(){this.addressList=Object(S["a"])()}},computed:{title:function(){return this.isAdd?"新增收件地址":"编辑收件地址"}}},z=R,J=(s("9feb"),Object(r["a"])(z,P,V,!1,null,"5164ca80",null)),T=J.exports,q=s("c24f"),U=s("da71"),G={data:function(){return{componentName:"account-bind",currentNavIndex:0,navList:[],userInfo:{}}},created:function(){this.navList=[{id:1,title:"账号绑定",componentName:"account-bind"},{id:2,title:"个人信息",componentName:"information"},{id:3,title:"操作记录",componentName:"operate-log"},{id:4,title:"实名认证",componentName:"authenticate"},{id:5,title:"学籍认证",componentName:"certificate"},{id:6,title:"收件地址",componentName:"m-address"}]},mounted:function(){this.getUserDetailInfo()},methods:{handleNavClick:function(t,e){this.currentNavIndex=e,this.componentName=t.componentName},handleComponentClick:function(t){switch(t){case"record":this.componentName="operate-log",this.currentNavIndex=2;break}},getUserDetailInfo:function(){var t=this;Object(q["b"])().then(function(e){var s=e.code,a=e.data;s===U["b"]&&(t.userInfo=a)})}},computed:{mainBind:function(){return this.userInfo.mainBind||{}}},components:{AccountBind:u,Information:h,OperateLog:j,Authenticate:I,Certificate:A,MAddress:T}},M=G,H=(s("8e97"),Object(r["a"])(M,a,i,!1,null,"6142478a",null));e["default"]=H.exports},4759:function(t,e,s){},"57fc":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination-container"},[s("el-pagination",{attrs:{total:t.total,layout:t.layout,background:t.background,"current-page":t.currentPage,"page-size":t.pageSize},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.handleCurrentChange}})],1)},i=[],n=(s("c5f6"),{props:{total:{type:Number,default:0},layout:{type:String,default:"total, prev, pager, next"},page:{type:Number,default:1},background:{type:Boolean,default:!0}},data:function(){return{pageSize:10}},computed:{currentPage:{set:function(t){this.$emit("update:page",t)},get:function(){return this.page}}},methods:{handleCurrentChange:function(){this.$emit("change",this.currentPage)}}}),c=n,l=(s("f44c"),s("2877")),o=Object(l["a"])(c,a,i,!1,null,"6f22950f",null);e["a"]=o.exports},"5d73":function(t,e,s){},"642a":function(t,e,s){},8648:function(t,e,s){},"873c":function(t,e,s){},"8e97":function(t,e,s){"use strict";var a=s("958a"),i=s.n(a);i.a},"958a":function(t,e,s){},"9feb":function(t,e,s){"use strict";var a=s("5d73"),i=s.n(a);i.a},a34c:function(t,e,s){"use strict";var a=s("4759"),i=s.n(a);i.a},be41:function(t,e,s){"use strict";var a=s("642a"),i=s.n(a);i.a},c24f:function(t,e,s){"use strict";s.d(e,"c",function(){return i}),s.d(e,"d",function(){return n}),s.d(e,"b",function(){return c}),s.d(e,"a",function(){return l});var a=s("a27e");function i(){return a["a"].get("/mock/user/login.json")}function n(){return a["a"].get("/mock/user/register.json")}function c(){return a["a"].get("/mock/user/userinfo.json")}function l(){return a["a"].get("/mock/user/course.json")}},cae5:function(t,e,s){},d364:function(t,e,s){"use strict";var a=s("cae5"),i=s.n(a);i.a},db31:function(t,e,s){"use strict";var a=s("873c"),i=s.n(a);i.a},f44c:function(t,e,s){"use strict";var a=s("8648"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-c637806c.f4bc1e2d.js.map