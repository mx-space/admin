(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aa6f8fe"],{"23ad":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){var r=e.prototype,i=r.format,s={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};n.en.formats=s,r.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var e=this.$locale().formats,n=void 0===e?{}:e,r=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,e,r){var i=r&&r.toUpperCase();return e||n[r]||s[r]||n[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}));return i.call(this,r)}}}))},4208:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=i;var s=function(e,r,s,a){for(var o,u,c,d=s.$locale().relativeTime||i,l=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=l.length,h=0;h<f;h+=1){var m=l[h];m.d&&(o=a?n(e).diff(s,m.d,!0):s.diff(e,m.d,!0));var p=(t.rounding||Math.round)(Math.abs(o));if(c=o>0,p<=m.r||!m.r){p<=1&&h>0&&(m=l[h-1]);var v=d[m.l];u="string"==typeof v?v.replace("%d",p):v(p,r,m.l,c);break}}return r?u:(c?d.future:d.past).replace("%s",u)};r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}))},"45eb":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"root",staticClass:"layout"},[n("div",{staticClass:"toggle",class:{active:t.sidebar},on:{click:t.toggleSidebarStatus}},[n("icon",{attrs:{icon:["fas","sliders-h"]}})],1),n("header",{style:t.options.noPadding?"padding: 0.5rem 0;":""},[n("span",{staticClass:"title"},[t._v(t._s(t.options.title?t.options.title:t.$route.meta.title))]),t.$slots.header?n("div",{staticClass:"btn-container"},[t._t("header")],2):t._e()]),n("main",{on:{click:function(e){return t.setSidebarStatus(!1)}}},[t._t("default"),n("div",{staticClass:"end-center"},[t._t("end")],2)],2),n("footer",[n("div",{staticClass:"float-btns"},[t._t("footer")],2)])])},i=[],s=n("2f62"),a={computed:{...Object(s["c"])(["sidebar"])},methods:{...Object(s["b"])("app",["toggleSidebarStatus","setSidebarStatus"])},props:{options:{type:Object,default(){return{}}}},provide(){return{toTop:()=>{this.$refs.root.scrollTo({left:0,top:0,behavior:"smooth"})}}}},o=a,u=(n("f2df"),n("2877")),c=Object(u["a"])(o,r,i,!1,null,"3ab10d56",null);e["a"]=c.exports},"528f":function(t,e,n){"use strict";var r=n("7a5d"),i=n.n(r);i.a},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",o="quarter",u="year",c=/^(\d{4})-?(\d{1,2})?-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,a),i=e-r<0,s=t.clone().add(n+(i?-1:1),a);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:a,y:u,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",p={};p[m]=h;var v=function(t){return t instanceof g},$=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var i=t.name;p[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},M=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},y=f;y.l=$,y.i=v,y.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var g=function(){function l(t){this.$L=this.$L||$(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r){var i=r[2]-1||0;return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return M(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<M(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",u)},f.month=function(t){return this.$g(t,"$M",a)},f.day=function(t){return this.$g(t,"$W",i)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",r)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var c=this,d=!!y.u(o)||o,l=y.p(t),f=function(t,e){var n=y.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return d?n:n.endOf(i)},h=function(t,e){return y.w(c.toDate()[t].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,p=this.$M,v=this.$D,$="set"+(this.$u?"UTC":"");switch(l){case u:return d?f(1,0):f(31,11);case a:return d?f(1,p):f(0,p+1);case s:var M=this.$locale().weekStart||0,g=(m<M?m+7:m)-M;return f(d?v-g:v+(6-g),p);case i:case"date":return h($+"Hours",0);case r:return h($+"Minutes",1);case n:return h($+"Seconds",2);case e:return h($+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var c,d=y.p(s),l="set"+(this.$u?"UTC":""),f=(c={},c[i]=l+"Date",c.date=l+"Date",c[a]=l+"Month",c[u]=l+"FullYear",c[r]=l+"Hours",c[n]=l+"Minutes",c[e]=l+"Seconds",c[t]=l+"Milliseconds",c)[d],h=d===i?this.$D+(o-this.$W):o;if(d===a||d===u){var m=this.clone().set("date",1);m.$d[f](h),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,o){var c,d=this;t=Number(t);var l=y.p(o),f=function(e){var n=M(d);return y.w(n.date(n.date()+Math.round(e*t)),d)};if(l===a)return this.set(a,this.$M+t);if(l===u)return this.set(u,this.$y+t);if(l===i)return f(1);if(l===s)return f(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[l]||1,m=this.$d.getTime()+t*h;return y.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=i.weekdays,c=i.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},f=function(t){return y.s(s%12||12,t,"0")},h=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:l(i.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,u,2),ddd:l(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:y.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,d){var l,f=y.p(c),h=M(t),m=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,v=y.m(this,h);return v=(l={},l[u]=v/12,l[a]=v,l[o]=v/3,l[s]=(p-m)/6048e5,l[i]=(p-m)/864e5,l[r]=p/36e5,l[n]=p/6e4,l[e]=p/1e3,l)[f]||p,d?v:y.a(v)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}();return M.prototype=g.prototype,M.extend=function(t,e){return t(e,g,M),M},M.locale=$,M.isDayjs=v,M.unix=function(t){return M(1e3*t)},M.en=p[m],M.Ls=p,M}))},"71ac":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},["mobile"!==t.device?n("div",{staticClass:"btn",style:{background:t.backcolor,color:t.forecolor}},[n("div",{staticClass:"name"},[n("div",{},[t._v(t._s(t.name))])]),n("div",{staticClass:"icon",style:{background:t.backcolor}},[n("icon",{attrs:{icon:t.icon}})],1)]):n("div",[n("button",{style:{background:t.backcolor,color:t.forecolor}},[n("icon",{attrs:{icon:t.icon}})],1)])])},i=[],s=n("2f62"),a={props:{icon:{type:Array,required:!0},name:{type:String,required:!0},backcolor:{type:String,default:"#1188e8"},forecolor:String},computed:{...Object(s["c"])(["device"])}},o=a,u=(n("528f"),n("2877")),c=Object(u["a"])(o,r,i,!1,null,"8b036e9c",null);e["a"]=c.exports},"7a5d":function(t,e,n){},8607:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return h}));var r,i=n("5a0c"),s=n.n(i),a=(n("a471"),n("f906")),o=n.n(a),u=n("23ad"),c=n.n(u),d=n("4208"),l=n.n(d);s.a.extend(o.a),s.a.extend(l.a),s.a.extend(c.a),s.a.locale("zh-cn"),function(t){t[t["YYYY年M月D日"]=0]="YYYY年M月D日",t[t["YYYY年M月D日 HH:mm:ss"]=1]="YYYY年M月D日 HH:mm:ss",t[t["HH:mm"]=2]="HH:mm",t[t["LLLL"]=3]="LLLL",t[t["H:mm:ss A"]=4]="H:mm:ss A"}(r||(r={}));const f=(t,e)=>s()(t).format(e),h=t=>s()(new Date(t)).fromNow()},a1e9:function(t,e,n){},a471:function(t,e,n){!function(e,r){t.exports=r(n("5a0c"))}(0,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){switch(e){case"W":return t+"周";default:return t+"日"}},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1130?"上午":n<1230?"中午":n<1800?"下午":"晚上"}};return t.locale(e,null,!0),e}))},afe7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PageLayout",{scopedSlots:t._u([{key:"header",fn:function(){return[n("layout-button",{attrs:{icon:["fas","plus"],name:"新增"},nativeOn:{click:function(e){return t.$router.push({name:"page-edit"})}}})]},proxy:!0}])},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,"max-height":"650",stripe:""}},[n("el-table-column",{attrs:{prop:"title",label:"标题",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(n){return n.preventDefault(),t.$router.push("/extra/page/edit?id="+t.data[e.$index]._id)}}},[t._v(" "+t._s(e.row.title)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"subtitle",label:"子标题"}}),n("el-table-column",{attrs:{prop:"created",label:"创建于",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.parseDate(e.row.created)))]}}])}),n("el-table-column",{attrs:{prop:"modified",label:"修改于",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.getRelativeTime(e.row.modified)))]}}])}),n("el-table-column",{attrs:{prop:"order",label:"顺序",width:"50"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{onConfirm:function(n){return t.handleDelete(e.$index)}}},[n("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v(" 移除 ")])],1)]}}])})],1)],1)},i=[],s=(n("ddb0"),n("9ab4")),a=n("2b0e"),o=n("2fe1"),u=n("45eb"),c=n("71ac"),d=n("8607");let l=class extends a["default"]{constructor(){super(...arguments),this.data=[],this.loading=!0}async created(){await this.fetchData()}async fetchData(){this.loading=!0;const t=await this.$api("Page").get();this.data=t.data,this.loading=!1}async handleDelete(t){const e=this.data[t]._id;await this.$api("Page").delete(e),this.$notice.success("删除成功"),this.fetchData()}getRelativeTime(t){return Object(d["b"])(t)}get parseDate(){return t=>Object(d["a"])(t,"LLLL")}};l=Object(s["__decorate"])([Object(o["b"])({components:{PageLayout:u["a"],LayoutButton:c["a"]}})],l);var f=l,h=f,m=n("2877"),p=Object(m["a"])(h,r,i,!1,null,null,null);e["default"]=p.exports},f2df:function(t,e,n){"use strict";var r=n("a1e9"),i=n.n(r);i.a},f906:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t,e=/(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^\s\d-:/()]+/,s=function(t){return function(e){this[t]=+e}},a=[/[+-]\d\d:?\d\d/,function(t){var e,n;(this.zone||(this.zone={})).offset=(e=t.match(/([+-]|\d\d)/g),0===(n=60*e[1]+ +e[2])?0:"+"===e[0]?-n:n)}],o=function(e){var n=t[e];return n&&(n.indexOf?n:n.s.concat(n.f))},u={A:[/[AP]M/,function(t){this.afternoon="PM"===t}],a:[/[ap]m/,function(t){this.afternoon="pm"===t}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var n=t.ordinal,r=e.match(/\d+/);if(this.day=r[0],n)for(var i=1;i<=31;i+=1)n(i).replace(/\[|\]/g,"")===e&&(this.day=i)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=o("months"),n=(o("monthsShort")||e.map((function(t){return t.substr(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=o("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){t=+t,this.year=t+(t>68?1900:2e3)}],YYYY:[/\d{4}/,s("year")],Z:a,ZZ:a},c=function(t,n,r){try{var i=function(t){for(var n=t.match(e),r=n.length,i=0;i<r;i+=1){var s=n[i],a=u[s],o=a&&a[0],c=a&&a[1];n[i]=c?{regex:o,parser:c}:s.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,s=0;i<r;i+=1){var a=n[i];if("string"==typeof a)s+=a.length;else{var o=a.regex,u=a.parser,c=t.substr(s),d=o.exec(c)[0];u.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}(n)(t),s=i.year,a=i.month,o=i.day,c=i.hours,d=i.minutes,l=i.seconds,f=i.milliseconds,h=i.zone,m=new Date,p=o||(s||a?1:m.getDate()),v=s||m.getFullYear(),$=0;s&&!a||($=a>0?a-1:m.getMonth());var M=c||0,y=d||0,g=l||0,Y=f||0;return h?new Date(Date.UTC(v,$,p,M,y,g,Y+60*h.offset*1e3)):r?new Date(Date.UTC(v,$,p,M,y,g,Y)):new Date(v,$,p,M,y,g,Y)}catch(t){return new Date("")}};return function(e,n,r){var i=n.prototype,s=i.parse;i.parse=function(e){var n=e.date,i=e.utc,a=e.args;this.$u=i;var o=a[1];if("string"==typeof o){var u=!0===a[2],d=!0===a[3],l=u||d,f=a[2];d&&(f=a[2]),u||(t=f?r.Ls[f]:this.$locale()),this.$d=c(n,o,i),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),l&&n!==this.format(o)&&(this.$d=new Date(""))}else if(o instanceof Array)for(var h=o.length,m=1;m<=h;m+=1){a[1]=o[m-1];var p=r.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===h&&(this.$d=new Date(""))}else s.call(this,e)}}}))}}]);