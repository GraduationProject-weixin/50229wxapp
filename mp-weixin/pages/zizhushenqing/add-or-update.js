(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zizhushenqing/add-or-update"],{"499a":function(n,e,r){"use strict";var i;r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return t})),r.d(e,"a",(function(){return i}));var a=function(){var n=this,e=n.$createElement;n._self._c},t=[]},a984:function(n,e,r){"use strict";r.r(e);var i=r("b370"),a=r.n(i);for(var t in i)"default"!==t&&function(n){r.d(e,n,(function(){return i[n]}))}(t);e["default"]=a.a},b370:function(n,e,r){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(r("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function t(n,e,r,i,a,t,u){try{var o=n[t](u),s=o.value}catch(g){return void r(g)}o.done?e(s):Promise.resolve(s).then(i,a)}function u(n){return function(){var e=this,r=arguments;return new Promise((function(i,a){var u=n.apply(e,r);function o(n){t(u,i,a,o,s,"next",n)}function s(n){t(u,i,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("698b"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{shenqingbiaoti:"",shenqingshijian:"",shenqingtupian:"",jiazhangzhanghao:"",jiazhangxingming:"",jiazhangshouji:"",banzhurengonghao:"",xuexiaobanji:"",xueshengxingming:"",pinkundengji:"",shenqingliyou:"",sfsh:"",shhf:""},pinkundengjiOptions:[],pinkundengjiIndex:0,user:{},ro:{shenqingbiaoti:!1,shenqingshijian:!1,shenqingtupian:!1,jiazhangzhanghao:!1,jiazhangxingming:!1,jiazhangshouji:!1,banzhurengonghao:!1,xuexiaobanji:!1,xueshengxingming:!1,pinkundengji:!1,shenqingliyou:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var r=this;return u(i.default.mark((function a(){var t,u,o,s;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r.ruleForm.shenqingshijian=r.$utils.getCurDate(),t=n.getStorageSync("nowTable"),a.next=4,r.$api.session(t);case 4:if(u=a.sent,r.user=u.data,r.ruleForm.jiazhangzhanghao=r.user.jiazhangzhanghao,r.ro.jiazhangzhanghao=!0,r.ruleForm.jiazhangxingming=r.user.jiazhangxingming,r.ro.jiazhangxingming=!0,r.ruleForm.jiazhangshouji=r.user.jiazhangshouji,r.ro.jiazhangshouji=!0,r.ruleForm.banzhurengonghao=r.user.banzhurengonghao,r.ro.banzhurengonghao=!0,r.pinkundengjiOptions="困难,特困".split(","),r.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(r.ruleForm.refid=e.refid,r.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){a.next=23;break}return r.ruleForm.id=e.id,a.next=21,r.$api.info("zizhushenqing",r.ruleForm.id);case 21:u=a.sent,r.ruleForm=u.data;case 23:if(r.cross=e.cross,!e.cross){a.next=75;break}o=n.getStorageSync("crossObj"),a.t0=i.default.keys(o);case 27:if((a.t1=a.t0()).done){a.next=75;break}if(s=a.t1.value,"shenqingbiaoti"!=s){a.next=33;break}return r.ruleForm.shenqingbiaoti=o[s],r.ro.shenqingbiaoti=!0,a.abrupt("continue",27);case 33:if("shenqingshijian"!=s){a.next=37;break}return r.ruleForm.shenqingshijian=o[s],r.ro.shenqingshijian=!0,a.abrupt("continue",27);case 37:if("shenqingtupian"!=s){a.next=41;break}return r.ruleForm.shenqingtupian=o[s],r.ro.shenqingtupian=!0,a.abrupt("continue",27);case 41:if("jiazhangzhanghao"!=s){a.next=45;break}return r.ruleForm.jiazhangzhanghao=o[s],r.ro.jiazhangzhanghao=!0,a.abrupt("continue",27);case 45:if("jiazhangxingming"!=s){a.next=49;break}return r.ruleForm.jiazhangxingming=o[s],r.ro.jiazhangxingming=!0,a.abrupt("continue",27);case 49:if("jiazhangshouji"!=s){a.next=53;break}return r.ruleForm.jiazhangshouji=o[s],r.ro.jiazhangshouji=!0,a.abrupt("continue",27);case 53:if("banzhurengonghao"!=s){a.next=57;break}return r.ruleForm.banzhurengonghao=o[s],r.ro.banzhurengonghao=!0,a.abrupt("continue",27);case 57:if("xuexiaobanji"!=s){a.next=61;break}return r.ruleForm.xuexiaobanji=o[s],r.ro.xuexiaobanji=!0,a.abrupt("continue",27);case 61:if("xueshengxingming"!=s){a.next=65;break}return r.ruleForm.xueshengxingming=o[s],r.ro.xueshengxingming=!0,a.abrupt("continue",27);case 65:if("pinkundengji"!=s){a.next=69;break}return r.ruleForm.pinkundengji=o[s],r.ro.pinkundengji=!0,a.abrupt("continue",27);case 69:if("shenqingliyou"!=s){a.next=73;break}return r.ruleForm.shenqingliyou=o[s],r.ro.shenqingliyou=!0,a.abrupt("continue",27);case 73:a.next=27;break;case 75:r.styleChange();case 76:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shenqingshijianChange:function(n){this.ruleForm.shenqingshijian=n.target.value,this.$forceUpdate()},pinkundengjiChange:function(n){this.pinkundengjiIndex=n.target.value,this.ruleForm.pinkundengji=this.pinkundengjiOptions[this.pinkundengjiIndex]},shenqingtupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.shenqingtupian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(i.default.mark((function r(){var a,t,u,o,s,g,c,h,l,f;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.ruleForm.shenqingbiaoti){r.next=3;break}return e.$utils.msg("申请标题不能为空"),r.abrupt("return");case 3:if(e.ruleForm.shenqingtupian){r.next=6;break}return e.$utils.msg("申请图片不能为空"),r.abrupt("return");case 6:if(e.ruleForm.xuexiaobanji){r.next=9;break}return e.$utils.msg("学校班级不能为空"),r.abrupt("return");case 9:if(e.ruleForm.xueshengxingming){r.next=12;break}return e.$utils.msg("学生姓名不能为空"),r.abrupt("return");case 12:if(e.ruleForm.pinkundengji){r.next=15;break}return e.$utils.msg("贫困等级不能为空"),r.abrupt("return");case 15:if(e.ruleForm.shenqingliyou){r.next=18;break}return e.$utils.msg("申请理由不能为空"),r.abrupt("return");case 18:if(!e.cross){r.next=34;break}if(o=n.getStorageSync("statusColumnName"),s=n.getStorageSync("statusColumnValue"),""==o){r.next=34;break}if(g=n.getStorageSync("crossObj"),o.startsWith("[")){r.next=30;break}for(c in g)c==o&&(g[c]=s);return h=n.getStorageSync("crossTable"),r.next=28,e.$api.update("".concat(h),g);case 28:r.next=34;break;case 30:a=Number(n.getStorageSync("userid")),t=g["id"],u=n.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 34:if(!t||!a){r.next=56;break}return e.ruleForm.crossuserid=a,e.ruleForm.crossrefid=t,l={page:1,limit:10,crossuserid:a,crossrefid:t},r.next=40,e.$api.list("zizhushenqing",l);case 40:if(f=r.sent,!(f.data.total>=u)){r.next=46;break}return e.$utils.msg(n.getStorageSync("tips")),r.abrupt("return",!1);case 46:if(!e.ruleForm.id){r.next=51;break}return r.next=49,e.$api.update("zizhushenqing",e.ruleForm);case 49:r.next=53;break;case 51:return r.next=53,e.$api.add("zizhushenqing",e.ruleForm);case 53:e.$utils.msgBack("提交成功");case 54:r.next=64;break;case 56:if(!e.ruleForm.id){r.next=61;break}return r.next=59,e.$api.update("zizhushenqing",e.ruleForm);case 59:r.next=63;break;case 61:return r.next=63,e.$api.add("zizhushenqing",e.ruleForm);case 63:e.$utils.msgBack("提交成功");case 64:case"end":return r.stop()}}),r)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?r-=60:"end"===n&&(r+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(r,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,r("543d")["default"])},f155:function(n,e,r){"use strict";(function(n){r("1558");i(r("66fd"));var e=i(r("f224"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,r("543d")["createPage"])},f224:function(n,e,r){"use strict";r.r(e);var i=r("499a"),a=r("a984");for(var t in a)"default"!==t&&function(n){r.d(e,n,(function(){return a[n]}))}(t);r("feda");var u,o=r("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"69ff442e",null,!1,i["a"],u);e["default"]=s.exports},fa6c:function(n,e,r){},feda:function(n,e,r){"use strict";var i=r("fa6c"),a=r.n(i);a.a}},[["f155","common/runtime","common/vendor"]]]);