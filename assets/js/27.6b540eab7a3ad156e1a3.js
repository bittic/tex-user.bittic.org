webpackJsonp([27],{WYfB:function(t,e){},Yb3q:function(t,e){},p7kG:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{},data:()=>({activename:"1-1",opennames:["1"],routeArr:{"/uc/safe":"1-1","/uc/account":"1-2","/uc/money":"2-1","/uc/record":"2-2","/uc/recharge":"2-3","/uc/withdraw":"2-4","/uc/trade":"2-5","/uc/paydividends":"2-6","/uc/blc":"2-7","/uc/bjc":"2-8","/uc/entrust/current":"3-1","/uc/entrust/history":"3-2","/uc/ad":"4-1","/uc/order":"4-2","/uc/withdraw/address":"2-4","/uc/ad/create":"4-3","/uc/ad/update":"4-4","/uc/promotion/mypromotion":"5-1","/uc/promotion/mycards":"5-2","/uc/innovation/myorders":"6-1","/uc/innovation/myminings":"6-2"},ucNavDrawerModal:!1}),created:function(){this.init();const t=this.$route.path;this.heightLightMenu(t)},methods:{init(){this.$store.commit("navigate","nav-other"),this.$store.state.HeaderActiveName="0",this.$store.state.HeaderActiveName="1-6",localStorage.TOKEN&&localStorage.MEMBER||(this.$Message.success(this.$t("common.logintip")),this.$router.push("/login"))},toggleMemu(){this.ucNavDrawerModal=!this.ucNavDrawerModal},sss(t){let e=1;t.length>=1&&(e=t[t.length-1],this.opennames=[e],this.activename=e+"-1",this.link(this.activename))},link(t){switch(t){case"1-1":this.$router.push("/uc/safe");break;case"2-1":this.$router.push("/uc/money");break;case"3-1":this.$router.push("/uc/entrust/current");break;case"4-1":this.$router.push("/uc/ad");break;case"5-1":this.$router.push("/uc/promotion/mypromotion");break;case"5-2":this.$router.push("/uc/promotion/mycards");break;case"6-1":this.$router.push("/uc/innovation/myorders");break;case"6-2":this.$router.push("/uc/innovation/myminings");break;default:this.$router.push("/uc/safe")}},heightLightMenu(t){let e=this.routeArr[t]||"1-1",s=e.split("-")[0];this.opennames=[s],this.activename=e,this.$nextTick(function(){this.$refs.test.updateOpened(),this.$refs.test.updateActiveName()})}},watch:{$route(t,e){console.log(t.path),this.heightLightMenu(t.path)}},mounted:function(){this.$nextTick(function(){this.$refs.test.updateOpened(),this.$refs.test.updateActiveName()})}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mymsg_wrapper"},[s("div",{staticClass:"wrapper"},[s("Row",{staticStyle:{"min-height":"600px","padding-top":"10px"},attrs:{gutter:20}},[s("Col",{attrs:{xs:24,sm:24,md:4,lg:4}},[s("div",{staticClass:"header_nav_mobile_triggle",on:{click:function(e){return t.toggleMemu()}}},[s("Icon",{staticStyle:{"font-size":"26px",color:"#cccccc"},attrs:{type:"md-menu"}}),t._v(" 个人中心\n        ")],1),t._v(" "),s("Menu",{ref:"test",staticClass:"pc_menu",staticStyle:{width:"100%"},attrs:{"active-name":t.activename,"open-names":t.opennames,accordion:!0},on:{"on-open-change":t.sss}},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("uc.member.usercenter")))]),t._v(" "),s("Submenu",{attrs:{name:"1"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.account")))])]),t._v(" "),s("MenuItem",{attrs:{name:"1-1"}},[s("router-link",{attrs:{to:"/uc/safe"}},[t._v(t._s(t.$t("uc.member.securitysetting")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"1-2"}},[s("router-link",{attrs:{to:"/uc/account"}},[t._v(t._s(t.$t("uc.member.accountsetting")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"2"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.assets")))])]),t._v(" "),s("MenuItem",{attrs:{name:"2-1"}},[s("router-link",{attrs:{to:"/uc/money"}},[t._v(t._s(t.$t("uc.finance.personalassets")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"2-2"}},[s("router-link",{attrs:{to:"/uc/record"}},[t._v(t._s(t.$t("uc.finance.billdetail")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"2-3"}},[s("router-link",{attrs:{to:"/uc/recharge"}},[t._v(t._s(t.$t("uc.finance.charge")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"2-4"}},[s("router-link",{attrs:{to:"/uc/withdraw"}},[t._v(t._s(t.$t("uc.finance.pickup")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"3"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.exchange")))])]),t._v(" "),s("MenuItem",{attrs:{name:"3-1"}},[s("router-link",{attrs:{to:"/uc/entrust/current"}},[t._v(t._s(t.$t("uc.member.curdelegate")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"3-2"}},[s("router-link",{attrs:{to:"/uc/entrust/history"}},[t._v(t._s(t.$t("uc.member.hisdelegate")))])],1)],2),t._v(" "),s("Submenu",{staticStyle:{display:"none"},attrs:{name:"4"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.otc")))])]),t._v(" "),s("MenuItem",{attrs:{name:"4-1"}},[s("router-link",{attrs:{to:"/uc/ad"}},[t._v(t._s(t.$t("otc.myad.title")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"4-2"}},[s("router-link",{attrs:{to:"/uc/order"}},[t._v(t._s(t.$t("otc.myorder")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"5"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.promotion.title")))])]),t._v(" "),s("MenuItem",{attrs:{name:"5-1"}},[s("router-link",{attrs:{to:"/uc/promotion/mypromotion"}},[t._v(t._s(t.$t("uc.promotion.subtitle3")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"5-2"}},[s("router-link",{attrs:{to:"/uc/promotion/mycards"}},[t._v(t._s(t.$t("uc.promotion.subtitle1")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"6"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.activity.navTitle")))])]),t._v(" "),s("MenuItem",{attrs:{name:"6-1"}},[s("router-link",{attrs:{to:"/uc/innovation/myorders"}},[t._v(t._s(t.$t("uc.activity.subNavTitle1")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"6-2"}},[s("router-link",{attrs:{to:"/uc/innovation/myminings"}},[t._v(t._s(t.$t("uc.activity.subNavTitle2")))])],1)],2)],1)],1),t._v(" "),s("Col",{attrs:{xs:24,sm:24,md:20,lg:20}},[s("router-view")],1)],1)],1),t._v(" "),s("Drawer",{staticClass:"header_nav_mobile uc_header_nav",attrs:{closable:!0,width:"40"},model:{value:t.ucNavDrawerModal,callback:function(e){t.ucNavDrawerModal=e},expression:"ucNavDrawerModal"}},[s("Menu",{ref:"test",attrs:{"active-name":t.activename,"open-names":t.opennames,accordion:!0,placement:"left",width:"auto"},on:{"on-open-change":t.sss}},[s("Submenu",{attrs:{name:"1"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.account")))])]),t._v(" "),s("MenuItem",{attrs:{name:"1-1"}},[s("router-link",{attrs:{to:"/uc/safe"}},[t._v(t._s(t.$t("uc.member.securitysetting")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"1-2"}},[s("router-link",{attrs:{to:"/uc/account"}},[t._v(t._s(t.$t("uc.member.accountsetting")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"2"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.assets")))])]),t._v(" "),s("MenuItem",{attrs:{name:"2-1"}},[s("router-link",{attrs:{to:"/uc/money"}},[t._v(t._s(t.$t("uc.finance.personalassets")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"2-2"}},[s("router-link",{attrs:{to:"/uc/record"}},[t._v(t._s(t.$t("uc.finance.billdetail")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"2-3"}},[s("router-link",{attrs:{to:"/uc/recharge"}},[t._v(t._s(t.$t("uc.finance.charge")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"2-4"}},[s("router-link",{attrs:{to:"/uc/withdraw"}},[t._v(t._s(t.$t("uc.finance.pickup")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"3"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.exchange")))])]),t._v(" "),s("MenuItem",{attrs:{name:"3-1"}},[s("router-link",{attrs:{to:"/uc/entrust/current"}},[t._v(t._s(t.$t("uc.member.curdelegate")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"3-2"}},[s("router-link",{attrs:{to:"/uc/entrust/history"}},[t._v(t._s(t.$t("uc.member.hisdelegate")))])],1)],2),t._v(" "),s("Submenu",{staticStyle:{display:"none"},attrs:{name:"4"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.member.otc")))])]),t._v(" "),s("MenuItem",{attrs:{name:"4-1"}},[s("router-link",{attrs:{to:"/uc/ad"}},[t._v(t._s(t.$t("otc.myad.title")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"4-2"}},[s("router-link",{attrs:{to:"/uc/order"}},[t._v(t._s(t.$t("otc.myorder")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"5"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.promotion.title")))])]),t._v(" "),s("MenuItem",{attrs:{name:"5-1"}},[s("router-link",{attrs:{to:"/uc/promotion/mypromotion"}},[t._v(t._s(t.$t("uc.promotion.subtitle3")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"5-2"}},[s("router-link",{attrs:{to:"/uc/promotion/mycards"}},[t._v(t._s(t.$t("uc.promotion.subtitle1")))])],1)],2),t._v(" "),s("Submenu",{attrs:{name:"6"}},[s("template",{slot:"title"},[s("span",{staticClass:"isclick"}),t._v(" "),s("span",{staticClass:"content"},[t._v(t._s(t.$t("uc.activity.navTitle")))])]),t._v(" "),s("MenuItem",{attrs:{name:"6-1"}},[s("router-link",{attrs:{to:"/uc/innovation/myorders"}},[t._v(t._s(t.$t("uc.activity.subNavTitle1")))])],1),t._v(" "),s("MenuItem",{attrs:{name:"6-2"}},[s("router-link",{attrs:{to:"/uc/innovation/myminings"}},[t._v(t._s(t.$t("uc.activity.subNavTitle2")))])],1)],2)],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(a,n,!1,function(t){s("Yb3q"),s("WYfB")},"data-v-5935c7d9",null);e.default=r.exports}});