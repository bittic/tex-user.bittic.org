webpackJsonp([38],{DAbB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:()=>({helpData:[]}),created:function(){this.init(),this.getData()},computed:{lang(){return this.$store.state.lang},langPram(){return"简体中文"==this.$store.state.lang?"CN":"English"==this.$store.state.lang?"EN":"CN"}},methods:{init(){this.$store.commit("navigate","nav-uc")},getData(){let t={};t.lang=this.langPram,this.$http.post(this.host+"/uc/ancillary/more/help",t).then(t=>{200==t.status&&0==t.body.code?this.helpData=t.body.data:this.$Message.error(t.body.message)})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"help"},[s("img",{staticClass:"bannerimg",attrs:{src:a("g/SS")}}),t._v(" "),s("div",{staticClass:"help_container"},[s("h1",[t._v(t._s(t.$t("header.helpcenter")))]),t._v(" "),s("div",{staticClass:"main"},t._l(t.helpData,function(e){return s("div",{staticClass:"section"},["CN"==t.langPram?s("h3",[t._v(t._s(e.titleCN))]):t._e(),t._v(" "),"EN"==t.langPram?s("h3",[t._v(t._s(e.titleEN))]):t._e(),t._v(" "),s("div",{staticClass:"list-wrap"},[t._l(e.content,function(a,i){return"CN"==t.langPram?s("router-link",{key:i,staticClass:"item",attrs:{title:a.title,to:{path:"helpdetail",query:{cate:e.cate,id:a.id,cateTitle:e.titleCN}}}},[s("span",{staticClass:"text"},[t._v(t._s(a.title))])]):t._e()}),t._v(" "),t._l(e.content,function(a,i){return"EN"==t.langPram?s("router-link",{key:i,staticClass:"item",attrs:{title:a.title,to:{path:"helpdetail",query:{cate:e.cate,id:a.id,cateTitle:e.titleEN}}}},[s("span",{staticClass:"text"},[t._v(t._s(a.title))])]):t._e()})],2),t._v(" "),s("div",{staticClass:"route-wrap"},["CN"==t.langPram?s("router-link",{attrs:{to:{path:"helplist",query:{cate:e.cate,cateTitle:e.titleCN}}}},[t._v(t._s(t.$t("common.more"))+">>")]):t._e(),t._v(" "),"EN"==t.langPram?s("router-link",{attrs:{to:{path:"helplist",query:{cate:e.cate,cateTitle:e.titleEN}}}},[t._v(t._s(t.$t("common.more"))+">>")]):t._e()],1)])}),0)])])},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("c5oR")},"data-v-2523b96c",null);e.default=l.exports},c5oR:function(t,e){},"g/SS":function(t,e,a){t.exports=a.p+"assets/img/help_banner.695d9e3.jpg"}});