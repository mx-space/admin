(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ef81f4"],{"0de2":function(e,t,a){},"0f34":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("PageLayout",{scopedSlots:e._u([{key:"header",fn:function(){return[a("layout-button",{attrs:{icon:["fab","telegram-plane"],name:e.$route.query.id?"更新":"发布"},nativeOn:{click:function(t){return e.handleSubmit(t)}}})]},proxy:!0}])},[a("el-form",{ref:"form",attrs:{model:e.model,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"项目名称",prop:"name",required:""}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"文档地址",prop:"docUrl"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.model.docUrl,callback:function(t){e.$set(e.model,"docUrl",t)},expression:"model.docUrl"}})],1),a("el-form-item",{attrs:{label:"项目地址"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.model.projectUrl,callback:function(t){e.$set(e.model,"projectUrl",t)},expression:"model.projectUrl"}})],1),a("el-form-item",{attrs:{label:"预览地址"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.model.previewUrl,callback:function(t){e.$set(e.model,"previewUrl",t)},expression:"model.previewUrl"}})],1),a("el-form-item",{attrs:{label:"项目描述",prop:"description",required:""}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),a("el-form-item",{attrs:{label:"项目图标",prop:"avatar"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.model.avatar,callback:function(t){e.$set(e.model,"avatar",t)},expression:"model.avatar"}})],1),a("el-form-item",{attrs:{label:"预览图片",prop:"images"}},[e._l(e.model.images,(function(t){return a("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(t){return e.handleClose(e.tag)}}},[e._v(" "+e._s(t)+" ")])})),e.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v("+ New ")])],2),a("el-form-item",{attrs:{label:"正文",prop:"text",required:""}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"在这里介绍一下你的项目吧"},model:{value:e.model.text,callback:function(t){e.$set(e.model,"text",t)},expression:"model.text"}})],1)],1)],1)},i=[],s=(a("ddb0"),a("9ab4")),l=a("2b0e"),r=a("2fe1"),n=a("45eb"),c=a("71ac");let u=class extends l["default"]{constructor(){super(...arguments),this.model={name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:""},this.inputVisible=!1,this.inputValue="",this.rules={name:[{required:!0,message:"请输入项目名称",trigger:"blur"}],description:[{required:!0,message:"请输入描述信息",trigger:"blur"}],text:[{required:!0,message:"请输入正文",trigger:"blur"}]}}async created(){if(!this.id)return;const{data:e}=await this.$api("Project").get(this.$route.query.id);this.model=e}async handleSubmit(){this.$refs["form"].validate(async e=>{e&&(this.id?(await this.$api("Project").update(this.id,this.model),this.$message.success("修改成功~")):(await this.$api("Project").post(this.model),this.$message.success("发送成功~")),this.$router.push({name:"project-list"}))})}get id(){return this.$route.query.id}handleClose(e){this.model.images.splice(this.model.images.indexOf(e),1)}showInput(){this.inputVisible=!0,this.$nextTick(()=>{this.$refs.saveTagInput.$refs.input.focus()})}handleInputConfirm(){const e=this.inputValue;e&&(this.model.images?this.model.images.push(e):this.model.images=[e]),this.inputVisible=!1,this.inputValue=""}};u=Object(s["__decorate"])([Object(r["b"])({components:{PageLayout:n["a"],LayoutButton:c["a"]}})],u);var d=u,p=d,m=(a("e914"),a("2877")),f=Object(m["a"])(p,o,i,!1,null,"0e77d0eb",null);t["default"]=f.exports},"45eb":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"root",staticClass:"layout"},[a("div",{staticClass:"toggle",class:{active:e.sidebar},on:{click:e.toggleSidebarStatus}},[a("icon",{attrs:{icon:["fas","sliders-h"]}})],1),a("header",{style:e.options.noPadding?"padding: 0.5rem 0;":""},[a("span",{staticClass:"title"},[e._v(e._s(e.options.title?e.options.title:e.$route.meta.title))]),e.$slots.header?a("div",{staticClass:"btn-container"},[e._t("header")],2):e._e()]),a("main",{on:{click:function(t){return e.setSidebarStatus(!1)}}},[e._t("default"),a("div",{staticClass:"end-center"},[e._t("end")],2)],2),a("footer",[a("div",{staticClass:"float-btns"},[e._t("footer")],2)])])},i=[],s=a("2f62"),l={computed:{...Object(s["c"])(["sidebar"])},methods:{...Object(s["b"])("app",["toggleSidebarStatus","setSidebarStatus"])},props:{options:{type:Object,default(){return{}}}},provide(){return{toTop:()=>{this.$refs.root.scrollTo({left:0,top:0,behavior:"smooth"})}}}},r=l,n=(a("f2df"),a("2877")),c=Object(n["a"])(r,o,i,!1,null,"3ab10d56",null);t["a"]=c.exports},"528f":function(e,t,a){"use strict";var o=a("7a5d"),i=a.n(o);i.a},"71ac":function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},["mobile"!==e.device?a("div",{staticClass:"btn",style:{background:e.backcolor,color:e.forecolor}},[a("div",{staticClass:"name"},[a("div",{},[e._v(e._s(e.name))])]),a("div",{staticClass:"icon",style:{background:e.backcolor}},[a("icon",{attrs:{icon:e.icon}})],1)]):a("div",[a("button",{style:{background:e.backcolor,color:e.forecolor}},[a("icon",{attrs:{icon:e.icon}})],1)])])},i=[],s=a("2f62"),l={props:{icon:{type:Array,required:!0},name:{type:String,required:!0},backcolor:{type:String,default:"#1188e8"},forecolor:String},computed:{...Object(s["c"])(["device"])}},r=l,n=(a("528f"),a("2877")),c=Object(n["a"])(r,o,i,!1,null,"8b036e9c",null);t["a"]=c.exports},"7a5d":function(e,t,a){},a1e9:function(e,t,a){},e914:function(e,t,a){"use strict";var o=a("0de2"),i=a.n(o);i.a},f2df:function(e,t,a){"use strict";var o=a("a1e9"),i=a.n(o);i.a}}]);