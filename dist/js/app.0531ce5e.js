(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1a6a":function(e,t,r){"use strict";var n=r("c5b7"),a=r.n(n);a.a},"2c88":function(e,t,r){"use strict";var n=r("7f0b"),a=r.n(n);a.a},3402:function(e,t,r){e.exports=r.p+"img/shoplogo.fdb5c5db.png"},"3dd8":function(e,t,r){"use strict";var n=r("5cac"),a=r.n(n);a.a},4336:function(e,t,r){},5328:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={name:"app"},i=o,l=r("2877"),c=Object(l["a"])(i,a,s,!1,null,null,null),u=c.exports,m=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"carousel-form",attrs:{inline:!0}},[r("img",{staticClass:"rightulliimg",attrs:{src:e.imgurl}})]),r("div",{staticClass:"login-form"},[e._m(0),r("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:e.loginForm,rules:e.loginFormRules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"用户名","prefix-icon":"el-icon-user"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"密码","prefix-icon":"el-icon-lock",type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),r("el-form-item",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.login()}}},[e._v("登录")]),r("el-button",{attrs:{type:"info"},on:{click:function(t){return e.resetLoginForm()}}},[e._v("重置")])],1),r("div",[r("el-link",{attrs:{type:"info"},on:{click:e.changeType}},[e._v("新用户点击注册")])],1)],1)],1)])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title-container"},[r("h3",{staticClass:"title"},[e._v("欢迎使用音频降噪系统")])])}],f=(r("96cf"),r("1da1")),g={data:function(){return{imgurl:r("9273"),loginForm:{username:"zym",password:"123456"},loginFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.axios.post("/login",e.loginForm);case 4:if(n=t.sent,a=n.data,console.log(a),"1"===a.status){t.next=9;break}return t.abrupt("return",e.$message.error(a.message));case 9:e.$message.success(a.message),window.sessionStorage.setItem("username",e.loginForm.username),e.$router.push("/home");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},changeType:function(){this.$router.push("/register")}}},h=g,v=(r("1a6a"),Object(l["a"])(h,d,p,!1,null,"06b4a338",null)),b=v.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"home-container"},[n("el-header",[n("div",[n("img",{staticClass:"shoplogo",attrs:{src:r("3402"),alt:""}}),n("span",[e._v(" 音频降噪系统")])]),n("el-menu",{staticClass:"el-menu-demo",attrs:{router:"","default-active":e.activePath,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","unique-opened":"","collapse-transition":!1},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"/home"},on:{click:function(t){return e.saveNavState("/home")}}},[e._v("首页 "),n("i",{staticClass:"el-icon-s-home"})]),n("el-menu-item",{attrs:{index:"/rnn"},on:{click:function(t){return e.saveNavState("/rnn")}}},[e._v("音频降噪 "),n("i",{staticClass:"el-icon-setting"})]),n("el-menu-item",{attrs:{index:"/myaudio"},on:{click:function(t){return e.saveNavState("/myaudio")}}},[e._v("我的音频 "),n("i",{staticClass:"el-icon-document"})]),n("el-menu-item",{attrs:{index:"/star"},on:{click:function(t){return e.saveNavState("/star")}}},[e._v("收藏夹 "),n("i",{staticClass:"el-icon-star-off"})]),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[e._v("语言")]),n("el-menu-item",{attrs:{index:"/chinese"},on:{click:function(t){return e.saveNavState("/chinese")}}},[e._v("中文")]),n("el-menu-item",{attrs:{index:"/english"},on:{click:function(t){return e.saveNavState("/english")}}},[e._v("English")])],2)],1),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.username)+" "),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("a",[n("el-dropdown-item",{attrs:{divided:"",command:"person"}},[e._v("个人中心")])],1),n("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[e._v("退出登录")])],1)],1)],1),n("el-main",[n("router-view")],1)],1)},y=[],x={data:function(){return{activePath:"/home"}},created:function(){this.activePath=window.sessionStorage.getItem("activePath"),this.username=window.sessionStorage.getItem("username")},methods:{saveNavState:function(e){window.sessionStorage.setItem("activePath",e),this.activePath=e},handleCommand:function(e){"logout"===e&&(window.sessionStorage.clear(),this.$router.push("/login")),"person"===e&&this.$router.push("/person")}}},_=x,F=(r("6f0b"),Object(l["a"])(_,w,y,!1,null,"72df13e7",null)),k=F.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"carousel-form",attrs:{inline:!0}},[r("img",{staticClass:"rightulliimg",attrs:{src:e.imgurl}})]),r("div",{staticClass:"login-form"},[e._m(0),r("el-form",{ref:"registerFormRef",staticClass:"register_form",attrs:{model:e.registerForm,rules:e.registerFormRules,"label-width":"0px"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"用户名","prefix-icon":"el-icon-user"},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"密码","prefix-icon":"el-icon-lock"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),r("el-form-item",{attrs:{prop:"repassword"}},[r("el-input",{attrs:{placeholder:"确认密码","prefix-icon":"el-icon-lock"},model:{value:e.registerForm.repassword,callback:function(t){e.$set(e.registerForm,"repassword",t)},expression:"registerForm.repassword"}})],1),r("el-form-item",{staticClass:"btns"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.register()}}},[e._v("注册")]),r("el-button",{attrs:{type:"info"},on:{click:function(t){return e.resetRegisterForm()}}},[e._v("重置")])],1),r("div",{staticClass:"link"},[r("el-link",{attrs:{type:"info"},on:{click:function(t){return e.changeType()}}},[e._v("已有账号请点击登录")])],1)],1)],1)])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title-container"},[r("h3",{staticClass:"title"},[e._v("欢迎使用音频降噪系统")])])}],$={data:function(){return{imgurl:r("9273"),registerForm:{username:"",password:"",repassword:""},isLogin:!0,registerFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],repassword:[{required:!0,message:"请确认密码",trigger:"blur"}]}}},methods:{resetRegisterForm:function(){console.log(this.$refs),this.$refs.registerFormRef.resetFields()},changeType:function(){this.$router.push("/login")},register:function(){var e=this;this.$refs.registerFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.axios.post("/register",{username:e.registerForm.username,password:e.registerForm.password});case 4:if(n=t.sent,a=n.data,console.log(a),"1"===a.status){t.next=9;break}return t.abrupt("return",e.$message.error(a.message));case 9:e.$message.success(a.message),e.$router.push("/login");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},j=$,I=(r("7fd2"),Object(l["a"])(j,C,S,!1,null,"ea40e1d8",null)),O=I.exports,R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("个人中心")])],1),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("个人信息")]),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:e.changeType}},[e._v("修改")])],1),r("el-form",{ref:"personFormRef",attrs:{model:e.personForm,rules:e.personFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户名称",prop:"username"}},[r("el-input",{attrs:{disabled:e.isdisabled},model:{value:e.personForm.username,callback:function(t){e.$set(e.personForm,"username",t)},expression:"personForm.username"}})],1),r("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[r("el-input",{attrs:{disabled:e.isdisabled},model:{value:e.personForm.nickname,callback:function(t){e.$set(e.personForm,"nickname",t)},expression:"personForm.nickname"}})],1),r("el-form-item",{attrs:{label:"性别",prop:"gender"}},[r("el-input",{attrs:{disabled:e.isdisabled},model:{value:e.personForm.gender,callback:function(t){e.$set(e.personForm,"gender",t)},expression:"personForm.gender"}})],1),r("el-form-item",{attrs:{label:"年龄",prop:"age"}},[r("el-input",{attrs:{disabled:e.isdisabled},model:{value:e.personForm.age,callback:function(t){e.$set(e.personForm,"age",t)},expression:"personForm.age"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{disabled:""},model:{value:e.personForm.email,callback:function(t){e.$set(e.personForm,"email",t)},expression:"personForm.email"}})],1),r("el-form-item",{attrs:{label:"国家",prop:"country"}},[r("el-input",{attrs:{disabled:e.isdisabled},model:{value:e.personForm.country,callback:function(t){e.$set(e.personForm,"country",t)},expression:"personForm.country"}})],1),r("el-form-item",{attrs:{label:"地区",prop:"location"}},[r("el-input",{attrs:{disabled:e.isdisabled},model:{value:e.personForm.location,callback:function(t){e.$set(e.personForm,"location",t)},expression:"personForm.location"}})],1)],1),r("span",{staticClass:"bottombtn",attrs:{hidden:e.isdisabled}},[r("el-button",{attrs:{type:"info"},on:{click:function(t){return e.changeType()}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.editperson()}}},[e._v("保 存")])],1)],1)],1)},D=[],M={data:function(){return{isdisabled:!0,personForm:{username:"",nickname:"",gender:"",age:"",email:"",country:"",location:""},personFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],gender:[{required:!0,message:"请输入性别",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"}]}}},created:function(){this.getpersonInfo()},methods:{getpersonInfo:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post("/selectUserDetail",{email:window.sessionStorage.getItem("email")});case 2:if(r=t.sent,n=r.data,console.log(n),"1"===n.status){t.next=7;break}return t.abrupt("return",e.$message.error("获取用户信息失败"));case 7:e.$message.success("获取用户信息成功"),e.personForm=n.data[0],console.log(n);case 10:case"end":return t.stop()}}),t)})))()},changeType:function(){this.isdisabled=!this.isdisabled},editperson:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post("/modifyUserDetail",{email:e.personForm.email,username:e.personForm.username,nickname:e.personForm.nickname,gender:e.personForm.gender,age:e.personForm.age,country:e.personForm.country,location:e.personForm.location});case 2:r=t.sent,n=r.data,console.log(n),"1"!==n.status&&(e.$message.error("修改个人信息失败"),e.isdisabled=!e.isdisabled,e.getpersonInfo()),e.$message.success("修改个人信息成功"),e.isdisabled=!e.isdisabled,e.getpersonInfo();case 9:case"end":return t.stop()}}),t)})))()}}},T=M,P=(r("ac1a"),Object(l["a"])(T,R,D,!1,null,"90c46c5a",null)),E=P.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"recommend-music"},[r("h2",{staticClass:"title"},[e._v("推荐新歌曲")]),r("song-list",{attrs:{songList:e.songs}})],1)},N=[],Y=(r("a15b"),r("d81d"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"list"},e._l(e.songList,(function(t,n){return r("div",{key:t.id,staticClass:"item",class:n==e.currentIndex&&e.currentSong.id==t.id&&e.playing?"playing":""},[r("div",{staticClass:"wrapper flex-center shadow"},[r("div",{staticClass:"index-container flex-center"},[r("span",{staticClass:"num"},[e._v(e._s(e.utils.formatZero(n+1,2)))]),e._m(0,!0),r("i",{staticClass:"iconfont nicebofang2 play-btn",on:{click:function(r){return e.playSong(t,n)}}}),r("i",{staticClass:"iconfont nicezanting1 pause-btn",on:{click:function(r){return e.pauseSong(t,n)}}})]),r("div",{staticClass:"avatar"},[r("el-image",{key:t.image+"?param=150y150",attrs:{src:t.image+"?param=150y150",lazy:""}},[r("div",{staticClass:"image-slot flex-center flex-column",attrs:{slot:"placeholder"},slot:"placeholder"},[r("i",{staticClass:"iconfont niceicon-3"}),r("p",[e._v("加载中"),r("span",{staticClass:"dot"},[e._v("...")])])]),r("div",{staticClass:"image-slot flex-center",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])]),e._m(1,!0)],1),r("div",{staticClass:"info"},[r("p",{staticClass:"name ellipsis"},[e._v(e._s(t.name))]),r("p",{staticClass:"flex-row ellipsis"},[r("span",[e._v(e._s(t.singer))])])]),r("p",{staticClass:"album"},[e._v("《"+e._s(t.album)+"》")]),r("p",{staticClass:"duration transition"},[e._v(" "+e._s(e.utils.formatSecondTime(t.duration))+" ")])])])})),0)}),Z=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"play-icon"},[r("div",{staticClass:"line",staticStyle:{"animation-delay":"-1.2s"}}),r("div",{staticClass:"line"}),r("div",{staticClass:"line",staticStyle:{"animation-delay":"-1.5s"}}),r("div",{staticClass:"line",staticStyle:{"animation-delay":"-0.9s"}}),r("div",{staticClass:"line",staticStyle:{"animation-delay":"-0.6s"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layer flex-center"},[r("i",{staticClass:"iconfont niceicon-9"})])}],q=r("5530"),z=r("2f62"),A={data:function(){return{}},props:{songList:{type:Array}},components:{},computed:Object(q["a"])({},Object(z["b"])(["currentIndex","playing","currentSong"])),watch:{},methods:Object(q["a"])({playSong:function(e,t){this.selectPlay({list:this.songList,index:t})},pauseSong:function(){this.pausePlay()}},Object(z["a"])(["selectPlay","playAll","pausePlay"])),created:function(){},mounted:function(){}},U=A,H=(r("2c88"),Object(l["a"])(U,Y,Z,!1,null,"609a4f9a",null)),J=H.exports,Q=(r("b0c0"),r("d4ec")),K=(r("99af"),r("fb6a"),r("a9e3"),r("d3b7"),r("ac1f"),r("25f0"),r("1276"),{formatZero:function(e,t){return String(e).length>t?e:(Array(t).join(0)+e).slice(-t)},setStore:function(e,t){var r=t;e&&("string"!==typeof t&&(r=JSON.stringify(r)),window.localStorage.setItem(e,r))},getStore:function(e){return e?window.localStorage.getItem(e):null},removeStore:function(e){e&&window.localStorage.removeItem(e)},dateFormat:function(e,t){var r=new Date(e),n=r.getFullYear(),a=this.formatZero(r.getMonth()+1,2),s=this.formatZero(r.getDate(),2),o=this.formatZero(r.getHours(),2),i=this.formatZero(r.getMinutes(),2),l=this.formatZero(r.getSeconds(),2);return"YYYY-MM-DD"===t?"".concat(n,"-").concat(a,"-").concat(s):"YYYY-MM-DD HH:MM:SS"===t?"".concat(n,"-").concat(a,"-").concat(s," ").concat(o,":").concat(i,":").concat(l):"MM/DD  HH:MM:SS"===t?"".concat(a,"/").concat(s," ").concat(o,":").concat(i,":").concat(l):void 0},getDateBefore:function(e){var t=new Date;t.setDate(t.getDate()+e);var r=t.getFullYear(),n=this.formatZero(t.getMonth()+1,2),a=this.formatZero(t.getDate(),2);return"".concat(r,"-").concat(n,"-").concat(a)},tranNumber:function(e,t){var r=e.toString();if(r.length<6)return r;if(r.length>8){var n=r.substring(r.length-8,r.length-8+t);return parseFloat(parseInt(e/1e8)+"."+n)+"亿"}if(r.length>5){var a=r.substring(r.length-4,r.length-4+t);return parseFloat(parseInt(e/1e4)+"."+a)+"万"}},formatTime:function(e){var t;if(e=~~e,e<10)t="00:0"+e;else if(e<60)t="00:"+e;else{var r=~~parseInt(e%36e5/6e4);r<10&&(r="0"+r);var n=~~parseInt(e%6e4/1e3);n<10&&(n="0"+n),t=r+":"+n}return t},formatSecond:function(e){var t;if(e=~~e,e<10)t="00:0"+e;else if(e<60)t="00:"+e;else{var r=~~parseInt(e%36e5/6e4),n=~~parseInt(e%6e4/1e3);t=Number(60*r+n)}return t},formatSecondTime:function(e){e|=0;var t=e/60|0,r=e%60;return"".concat(this.formatZero(t,2),":").concat(this.formatZero(r,2))},formatMsgTime:function(e){var t="",r=6e4,n=60*r,a=24*n,s=30*a,o=(new Date).getTime(),i=o-e;if(!(i<0)){var l=i/s,c=i/(7*a),u=i/a,m=i/n,d=i/r;return t=l>=1?parseInt(l)+"月前":c>=1?parseInt(c)+"周前":u>=1?parseInt(u)+"天前":m>=1?parseInt(m)+"小时前":d>=1?parseInt(d)+"分钟前":"刚刚",t}},getAstro:function(e){var t=new Date;t.setTime(e);var r=t.toLocaleDateString(e),n=r.split("/"),a=n[0].substring(n[0].length-2)+"后",s=n[1],o=n[2];return a+" - "+"魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2*s-2*(o<"102223444433".charAt(s-1)- -19),2)+"座"},shuffle:function(e){for(var t=e.slice(),r=0;r<t.length;r++){var n=this.getRandomInt(0,r),a=t[r];t[r]=t[n],t[n]=a}return t},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}),G=function e(t){var r=t.id,n=t.singer,a=t.name,s=t.album,o=t.duration,i=t.image,l=t.url,c=t.playCount,u=t.score;Object(Q["a"])(this,e),this.id=r,this.singer=n,this.name=a,this.album=s,this.duration=o,this.image=i,this.url=l,this.playCount=c,this.score=u};function B(e){return new G({id:e.id,singer:V(e.ar||e.artists),name:e.name,album:e.al?e.al.name:e.album.name,duration:K.formatSecond(e.dt||e.duration),image:e.al?e.al.picUrl:e.album.artist.img1v1Url,url:"https://music.163.com/song/media/outer/url?id=".concat(e.id,".mp3"),playCount:e.playCount||"",score:e.score||""})}function V(e){var t=[];return e?(e.map((function(e){t.push(e.name)})),t.join(" / ")):""}var W={data:function(){return{songs:[]}},components:{songList:J},computed:{},watch:{},methods:{getNewSongs:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post("/getaudio",{username:window.sessionStorage.getItem("username")});case 3:r=t.sent,n=[],"1"===r.status&&(r.result.map((function(e){n.push(e.id)})),e.getSongDetail(n)),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getSongDetail:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=(new Date).valueOf(),e=e.join(","),r.prev=2,r.next=5,t.$api.getSongDetail(e,n);case 5:a=r.sent,t.songs=t._normalizeSongs(a.songs),console.log(t.songs),r.next=12;break;case 10:r.prev=10,r.t0=r["catch"](2);case 12:case"end":return r.stop()}}),r,null,[[2,10]])})))()},_normalizeSongs:function(e){var t=[];return e.map((function(e){e.id&&t.push(B(e))})),t}},created:function(){},mounted:function(){this.getNewSongs()}},X=W,ee=(r("3dd8"),Object(l["a"])(X,L,N,!1,null,"202dd60c",null)),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticStyle:{padding:"10px 0"}},[r("aplayer",{attrs:{autoplay:"",music:{title:"剑心",artist:"张杰",src:"../src/assets/yan.mp3",pic:"https://p2.music.126.net/ixIs5kkukgNYMmeDsc35_g==/29686813955450.jpg"},list:e.musicList}})],1)])},ne=[],ae=r("0f7d"),se=r.n(ae),oe={name:"Aplayer",components:{aplayer:se.a},data:function(){return{musicList:[{title:"白羊",artist:"徐秉龙",src:"../src/assets/yan.mp3",pic:"https://p1.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg"},{title:"说谎",artist:"林宥嘉",src:"../src/assets/yan.mp3",pic:"https://p2.music.126.net/mMZNB-jhYsw29K61QtopJA==/109951163187404137.jpg"},{title:"成都",artist:"赵雷",src:"../src/assets/yan.mp3",pic:"https://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg"},{title:"陪你到底",artist:"许华升",src:"../src/assets/yan.mp3",pic:"https://p1.music.126.net/a7QkLGexMQGT2lF3mqcUdw==/109951163693319625.jpg"}]}},computed:{}},ie=oe,le=Object(l["a"])(ie,re,ne,!1,null,"7ffc4d5d",null),ce=le.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),r("em",[e._v("点击上传")])]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传wav/mp3格式文件")])])],1)},me=[],de={},pe=Object(l["a"])(de,ue,me,!1,null,null,null),fe=pe.exports;n["default"].use(m["a"]);var ge=[{path:"/login",component:b},{path:"/register",component:O},{path:"/",redirect:"/login"},{path:"/home",component:k,children:[{path:"/myaudio",component:te},{path:"/rnn",component:fe},{path:"/star",component:ce},{path:"/person",component:E}]}],he=new m["a"]({routes:ge});he.beforeEach((function(e,t,r){if("/login"===e.path||"/register"===e.path||"/registertwo"===e.path)return r();var n=window.sessionStorage.getItem("username");if(!n)return r("/login");r()}));var ve=he,be=(r("9e1f"),r("450d"),r("6ed5")),we=r.n(be),ye=(r("0fb7"),r("f529")),xe=r.n(ye),_e=(r("186a"),r("301f")),Fe=r.n(_e),ke=(r("96dc"),r("9cea")),Ce=r.n(ke),Se=(r("1760"),r("9883")),$e=r.n(Se),je=(r("acb6"),r("c673")),Ie=r.n(je),Oe=(r("6611"),r("e772")),Re=r.n(Oe),De=(r("1f1a"),r("4e4b")),Me=r.n(De),Te=(r("6b30"),r("c284")),Pe=r.n(Te),Ee=(r("f225"),r("89a9")),Le=r.n(Ee),Ne=(r("826b"),r("c263")),Ye=r.n(Ne),Ze=(r("960d"),r("defb")),qe=r.n(Ze),ze=(r("bd49"),r("18ff")),Ae=r.n(ze),Ue=(r("cb70"),r("b370")),He=r.n(Ue),Je=(r("fd71"),r("a447")),Qe=r.n(Je),Ke=(r("a7cc"),r("df33")),Ge=r.n(Ke),Be=(r("672e"),r("101e")),Ve=r.n(Be),We=(r("0c67"),r("299c")),Xe=r.n(We),et=(r("e960"),r("b35b")),tt=r.n(et),rt=(r("5466"),r("ecdf")),nt=r.n(rt),at=(r("38a0"),r("ad41")),st=r.n(at),ot=(r("f4f9"),r("c2cc")),it=r.n(ot),lt=(r("7a0f"),r("0f6c")),ct=r.n(lt),ut=(r("b8e0"),r("a4c4")),mt=r.n(ut),dt=(r("b84d"),r("c216")),pt=r.n(dt),ft=(r("8f24"),r("76b9")),gt=r.n(ft),ht=(r("8bd8"),r("4cb2")),vt=r.n(ht),bt=(r("ce18"),r("f58e")),wt=r.n(bt),yt=(r("4ca3"),r("443e")),xt=r.n(yt),_t=(r("de31"),r("c69e")),Ft=r.n(_t),kt=(r("a769"),r("5cc3")),Ct=r.n(kt),St=(r("a673"),r("7b31")),$t=r.n(St),jt=(r("adec"),r("3d2d")),It=r.n(jt),Ot=(r("10cb"),r("f3ad")),Rt=r.n(Ot),Dt=(r("eca7"),r("3787")),Mt=r.n(Dt),Tt=(r("425f"),r("4105")),Pt=r.n(Tt),Et=(r("1951"),r("eedf")),Lt=r.n(Et);n["default"].use(Lt.a),n["default"].use(Pt.a),n["default"].use(Mt.a),n["default"].use(Rt.a),n["default"].use(It.a),n["default"].use($t.a),n["default"].use(Ct.a),n["default"].use(Ft.a),n["default"].use(xt.a),n["default"].use(wt.a),n["default"].use(vt.a),n["default"].use(gt.a),n["default"].use(pt.a),n["default"].use(mt.a),n["default"].use(ct.a),n["default"].use(it.a),n["default"].use(st.a),n["default"].use(nt.a),n["default"].use(tt.a),n["default"].use(Xe.a),n["default"].use(Ve.a),n["default"].use(Ge.a),n["default"].use(Qe.a),n["default"].use(He.a),n["default"].use(Ae.a),n["default"].use(qe.a),n["default"].use(Ye.a),n["default"].use(Le.a),n["default"].use(Pe.a),n["default"].use(Me.a),n["default"].use(Re.a),n["default"].use(Ie.a),n["default"].use($e.a),n["default"].use(Ce.a),n["default"].use(Fe.a),n["default"].prototype.$message=xe.a,n["default"].prototype.$confirm=we.a.confirm;r("aede");var Nt=r("bc3a"),Yt=r.n(Nt),Zt=r("a7fe"),qt=r.n(Zt),zt=r("c8fc"),At=r.n(zt);Yt.a.defaults.baseURL="/api",Yt.a.interceptors.request.use((function(e){return console.log(e),e.headers.Authorization=window.sessionStorage.getItem("username"),e})),n["default"].use(qt.a,Yt.a),n["default"].config.productionTip=!1,n["default"].use(At.a),new n["default"]({router:ve,render:function(e){return e(u)}}).$mount("#app")},"5cac":function(e,t,r){},"6f0b":function(e,t,r){"use strict";var n=r("5328"),a=r.n(n);a.a},"7f0b":function(e,t,r){},"7fd2":function(e,t,r){"use strict";var n=r("c0e9"),a=r.n(n);a.a},9273:function(e,t,r){e.exports=r.p+"img/erji1.a82ad1c0.jpg"},ac1a:function(e,t,r){"use strict";var n=r("4336"),a=r.n(n);a.a},aede:function(e,t,r){},c0e9:function(e,t,r){},c5b7:function(e,t,r){}});
//# sourceMappingURL=app.0531ce5e.js.map