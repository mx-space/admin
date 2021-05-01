(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13788426"],{"08fd":function(t,e,n){"use strict";n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0});const r=n("9ab4"),i=n("1b40"),o=r.__importDefault(n("45eb")),s=r.__importDefault(n("71ac")),a=n("8607");let u=class extends i.Vue{constructor(){super(...arguments),this.tokens=[],this.model={name:"",expired:!1,expiredTime:new Date},this.dialogVisible=!1}created(){return r.__awaiter(this,void 0,void 0,(function*(){yield this.fetchTokens()}))}fetchTokens(){return r.__awaiter(this,void 0,void 0,(function*(){const{data:t}=yield this.$api("Auth").get("token");this.tokens=t.map(t=>Object.assign(Object.assign({},t),{token:"*".repeat(40)}))}))}handleAdd(){return r.__awaiter(this,void 0,void 0,(function*(){const t={name:this.model.name,expired:this.model.expired?this.model.expiredTime.toISOString():void 0};yield this.$api("Auth","token").post(t),this.dialogVisible=!1,this.model={name:"",expired:!1,expiredTime:new Date},yield this.fetchTokens(),this.$message.success("生成成功")}))}get parseTime(){return t=>a.parseDate(t,"YYYY年M月D日 HH:mm:ss")}handleShowToken(t){return r.__awaiter(this,void 0,void 0,(function*(){const{token:e}=yield this.$api("Auth").get("token",{params:{id:t}});this.tokens=this.tokens.map(n=>(n.id===t&&(n.token=e),n))}))}handleDelete(t){return r.__awaiter(this,void 0,void 0,(function*(){yield this.$api("Auth").del("token",{params:{id:t}}),yield this.fetchTokens(),this.$message.success("删除成功")}))}handleCopy(t){return r.__awaiter(this,void 0,void 0,(function*(){const e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$message.success("已复制令牌: "+t)}))}};u=r.__decorate([i.Component({components:{PageLayout:o.default,LayoutButton:s.default}})],u),e.default=u},"23ad":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(e,n,r){var i=n.prototype,o=i.format;r.en.formats=t,i.format=function(e){void 0===e&&(e="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,r=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,i){var o=i&&i.toUpperCase();return r||n[i]||t[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(e,void 0===n?{}:n);return o.call(this,r)}}}))},"2e41":function(t,e,n){"use strict";n.r(e);var r=n("91fe"),i=n("f57b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s=n("2877"),a=Object(s["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},4208:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function o(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,o,s,a){for(var u,d,c,l=o.$locale().relativeTime||i,f=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=f.length,m=0;m<h;m+=1){var p=f[m];p.d&&(u=s?n(e).diff(o,p.d,!0):o.diff(e,p.d,!0));var v=(t.rounding||Math.round)(Math.abs(u));if(c=u>0,v<=p.r||!p.r){v<=1&&m>0&&(p=f[m-1]);var M=l[p.l];a&&(v=a(""+v)),d="string"==typeof M?M.replace("%d",v):M(v,r,p.l,c);break}}if(r)return d;var _=c?l.future:l.past;return"function"==typeof _?_(d):_.replace("%s",d)},r.to=function(t,e){return o(t,e,this,!0)},r.from=function(t,e){return o(t,e,this)};var s=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}}}))},"45eb":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"layout"},[n("div",{staticClass:"toggle",class:{active:t.sidebar},on:{click:t.toggleSidebarStatus}},[n("icon",{attrs:{icon:["fas","sliders-h"]}})],1),n("header",{style:t.options.noPadding?"padding: 0.5rem 0;":""},[n("span",{staticClass:"title"},[t._v(t._s(t.options.title?t.options.title:t.$route.meta.title))]),t.$slots.header?n("div",{staticClass:"btn-container"},[t._t("header")],2):t._e()]),n("main",{on:{click:function(e){return t.setSidebarStatus(!1)}}},[t._t("default"),n("div",{staticClass:"end-center"},[t._t("end")],2)],2),n("footer",[n("div",{staticClass:"float-btns"},[t._t("footer")],2)])])},i=[],o=n("2f62"),s={computed:{...Object(o["mapGetters"])(["sidebar"])},methods:{...Object(o["mapActions"])("app",["toggleSidebarStatus","setSidebarStatus"])},props:{options:{type:Object,default(){return{}}}},provide(){return{toTop:()=>{this.$refs.root.scrollTo({left:0,top:0,behavior:"smooth"})}}}},a=s,u=(n("5985"),n("2877")),d=Object(u["a"])(a,r,i,!1,null,"d1e13472",null);e["default"]=d.exports},"528f":function(t,e,n){"use strict";var r=n("7a5d"),i=n.n(r);i.a},5985:function(t,e,n){"use strict";var r=n("72ce"),i=n.n(r);i.a},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",o="week",s="month",a="quarter",u="year",d="date",c=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),o=n-i<0,a=e.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:s,y:u,w:o,d:i,D:d,h:r,m:n,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",v={};v[p]=f;var M=function(t){return t instanceof $},_=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(p=r),r||!n&&p},y=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},Y=m;Y.l=_,Y.i=M,Y.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $=function(){function f(t){this.$L=_(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(Y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return Y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return y(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<y(t)},h.$g=function(t,e,n){return Y.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,a){var c=this,l=!!Y.u(a)||a,f=Y.p(t),h=function(t,e){var n=Y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf(i)},m=function(t,e){return Y.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,v=this.$M,M=this.$D,_="set"+(this.$u?"UTC":"");switch(f){case u:return l?h(1,0):h(31,11);case s:return l?h(1,v):h(0,v+1);case o:var y=this.$locale().weekStart||0,$=(p<y?p+7:p)-y;return h(l?M-$:M+(6-$),v);case i:case d:return m(_+"Hours",0);case r:return m(_+"Minutes",1);case n:return m(_+"Seconds",2);case e:return m(_+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(o,a){var c,l=Y.p(o),f="set"+(this.$u?"UTC":""),h=(c={},c[i]=f+"Date",c[d]=f+"Date",c[s]=f+"Month",c[u]=f+"FullYear",c[r]=f+"Hours",c[n]=f+"Minutes",c[e]=f+"Seconds",c[t]=f+"Milliseconds",c)[l],m=l===i?this.$D+(a-this.$W):a;if(l===s||l===u){var p=this.clone().set(d,1);p.$d[h](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[Y.p(t)]()},h.add=function(t,a){var d,c=this;t=Number(t);var l=Y.p(a),f=function(e){var n=y(c);return Y.w(n.date(n.date()+Math.round(e*t)),c)};if(l===s)return this.set(s,this.$M+t);if(l===u)return this.set(u,this.$y+t);if(l===i)return f(1);if(l===o)return f(7);var h=(d={},d[n]=6e4,d[r]=36e5,d[e]=1e3,d)[l]||1,m=this.$d.getTime()+t*h;return Y.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=Y.z(this),i=this.$locale(),o=this.$H,s=this.$m,a=this.$M,u=i.weekdays,d=i.months,c=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].substr(0,o)},f=function(t){return Y.s(o%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:Y.s(a+1,2,"0"),MMM:c(i.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:Y.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,u,2),ddd:c(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:Y.s(o,2,"0"),h:f(1),hh:f(2),a:h(o,s,!0),A:h(o,s,!1),m:String(s),mm:Y.s(s,2,"0"),s:String(this.$s),ss:Y.s(this.$s,2,"0"),SSS:Y.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||m[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,d,c){var l,f=Y.p(d),h=y(t),m=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,v=Y.m(this,h);return v=(l={},l[u]=v/12,l[s]=v,l[a]=v/3,l[o]=(p-m)/6048e5,l[i]=(p-m)/864e5,l[r]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[f]||p,c?v:Y.a(v)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return v[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=_(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return Y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),D=$.prototype;return y.prototype=D,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",s],["$y",u],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,$,y),t.$i=!0),y},y.locale=_,y.isDayjs=M,y.unix=function(t){return y(1e3*t)},y.en=v[p],y.Ls=v,y.p={},y}))},"71ac":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},["mobile"!==t.device?n("div",{staticClass:"btn",style:{background:t.backcolor,color:t.forecolor}},[n("div",{staticClass:"name"},[n("div",{},[t._v(t._s(t.name))])]),n("div",{staticClass:"icon",style:{background:t.backcolor}},[n("icon",{attrs:{icon:t.icon}})],1)]):n("div",[n("button",{style:{background:t.backcolor,color:t.forecolor}},[n("icon",{attrs:{icon:t.icon}})],1)])])},i=[],o=n("2f62"),s={props:{icon:{type:Array,required:!0},name:{type:String,required:!0},backcolor:{type:String,default:"#1188e8"},forecolor:String},computed:{...Object(o["mapGetters"])(["device"])}},a=s,u=(n("528f"),n("2877")),d=Object(u["a"])(a,r,i,!1,null,"8b036e9c",null);e["default"]=d.exports},"72ce":function(t,e,n){},"7a5d":function(t,e,n){},8607:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getDayOfYear=e.relativeTimeFromNow=e.parseDate=e.DateFormat=void 0;const r=n("9ab4"),i=r.__importDefault(n("5a0c"));n("a471");const o=r.__importDefault(n("f906")),s=r.__importDefault(n("23ad")),a=r.__importDefault(n("4208"));i.default.extend(o.default),i.default.extend(a.default),i.default.extend(s.default),i.default.locale("zh-cn"),function(t){t[t["YYYY年M月D日"]=0]="YYYY年M月D日",t[t["YYYY年M月D日 HH:mm:ss"]=1]="YYYY年M月D日 HH:mm:ss",t[t["HH:mm"]=2]="HH:mm",t[t["LLLL"]=3]="LLLL",t[t["H:mm:ss A"]=4]="H:mm:ss A"}(e.DateFormat||(e.DateFormat={}));const u=(t,e)=>i.default(t).format(e);e.parseDate=u;const d=t=>i.default(new Date(t)).fromNow();e.relativeTimeFromNow=d;const c=(t=new Date)=>{const e=t,n=new Date(e.getFullYear(),0,0),r=e.getTime()-n.getTime(),i=864e5,o=Math.floor(r/i);return o};e.getDayOfYear=c,e.default={parseDate:e.parseDate,relativeTimeFromNow:e.relativeTimeFromNow}},"91fe":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[n("layout-button",{attrs:{name:"新增",icon:["fas","plus"]},nativeOn:{click:function(e){t.dialogVisible=!0}}})]},proxy:!0}])},[n("h5",[t._v("生成访问令牌以便使用开放接口")]),n("el-table",{attrs:{data:t.tokens}},[n("el-table-column",{attrs:{label:"名称",prop:"name"}}),n("el-table-column",{attrs:{label:"令牌",prop:"token"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){e.row.token.startsWith("**")?t.handleShowToken(e.row.id):t.handleCopy(e.row.token)}}},[t._v(" "+t._s(e.row.token)+" ")])]}}])}),n("el-table-column",{attrs:{label:"过期时间",prop:"expired"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.expired?t.parseTime(e.row.expired):"永久")+" ")]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{onConfirm:function(n){return t.handleDelete(e.row.id)}}},[n("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v(" 移除 ")])],1)]}}])})],1),n("el-dialog",{attrs:{title:"生成 Token",visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"名称",required:""}},[n("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),n("el-form-item",{attrs:{label:"是否过期"}},[n("el-switch",{model:{value:t.model.expired,callback:function(e){t.$set(t.model,"expired",e)},expression:"model.expired"}})],1),n("el-form-item",{attrs:{label:"过期时间"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"datetime",disabled:!t.model.expired},model:{value:t.model.expiredTime,callback:function(e){t.$set(t.model,"expiredTime",e)},expression:"model.expiredTime"}})],1)],1),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("确 定")])],1)],1)],1)},i=[]},a471:function(t,e,n){!function(e,r){t.exports=r(n("5a0c"))}(0,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return t.locale(e,null,!0),e}))},f57b:function(t,e,n){"use strict";n.r(e);var r=n("08fd"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},f906:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=function(e,n){return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,i){var o=i&&i.toUpperCase();return r||n[i]||t[i]||n[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))},n=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,i=/\d\d?/,o=/\d*[^\s\d-_:/()]+/,s={},a=function(t){return function(e){this[t]=+e}},u=[/[+-]\d\d:?(\d\d)?/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],d=function(t){var e=s[t];return e&&(e.indexOf?e:e.s.concat(e.f))},c=function(t,e){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},l={A:[o,function(t){this.afternoon=c(t,!1)}],a:[o,function(t){this.afternoon=c(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,a("seconds")],ss:[i,a("seconds")],m:[i,a("minutes")],mm:[i,a("minutes")],H:[i,a("hours")],h:[i,a("hours")],HH:[i,a("hours")],hh:[i,a("hours")],D:[i,a("day")],DD:[r,a("day")],Do:[o,function(t){var e=s.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[i,a("month")],MM:[r,a("month")],MMM:[o,function(t){var e=d("months"),n=(d("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(t){var e=d("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,a("year")],YY:[r,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,a("year")],Z:u,ZZ:u},f=function(t,r,i){try{var o=function(t){for(var r=(t=e(t,s&&s.formats)).match(n),i=r.length,o=0;o<i;o+=1){var a=r[o],u=l[a],d=u&&u[0],c=u&&u[1];r[o]=c?{regex:d,parser:c}:a.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,o=0;n<i;n+=1){var s=r[n];if("string"==typeof s)o+=s.length;else{var a=s.regex,u=s.parser,d=t.substr(o),c=a.exec(d)[0];u.call(e,c),t=t.replace(c,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}(r)(t),a=o.year,u=o.month,d=o.day,c=o.hours,f=o.minutes,h=o.seconds,m=o.milliseconds,p=o.zone,v=new Date,M=d||(a||u?1:v.getDate()),_=a||v.getFullYear(),y=0;a&&!u||(y=u>0?u-1:v.getMonth());var Y=c||0,$=f||0,D=h||0,g=m||0;return p?new Date(Date.UTC(_,y,M,Y,$,D,g+60*p.offset*1e3)):i?new Date(Date.UTC(_,y,M,Y,$,D,g)):new Date(_,y,M,Y,$,D,g)}catch(t){return new Date("")}};return function(t,e,n){n.p.customParseFormat=!0;var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var a=o[1];if("string"==typeof a){var u=!0===o[2],d=!0===o[3],c=u||d,l=o[2];d&&(l=o[2]),s=this.$locale(),!u&&l&&(s=n.Ls[l]),this.$d=f(e,a,r),this.init(),l&&!0!==l&&(this.$L=this.locale(l).$L),c&&e!==this.format(a)&&(this.$d=new Date("")),s={}}else if(a instanceof Array)for(var h=a.length,m=1;m<=h;m+=1){o[1]=a[m-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===h&&(this.$d=new Date(""))}else i.call(this,t)}}}))}}]);