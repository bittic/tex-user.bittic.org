webpackJsonp([12],{DPex:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{},data(){var t=this;return{showBorder:!1,showStripe:!1,showHeader:!0,showIndex:!1,showCheckbox:!1,fixedHeader:!1,loading:!0,dataCount:10,tableSize:"large",tabPage:"buy",advertiment:{ask:{rows:[],currentPage:1,totalPage:1,pageNumber:10,totalElement:0},bid:{rows:[],currentPage:1,totalPage:1,pageNumber:10,totalElement:0},columns:[{title:t.$t("otc.merchant"),key:"memberName",ellipsis:!0,render:function(e,i){var r=i.row.avatar,s=[];return s[0]=e("div",{attrs:{class:"user-face user-avatar-public"}},null!=r&&""!=r?[e("img",{attrs:{src:r,width:"45px",height:"45px"},style:{"border-radius":"50%"}})]:[e("span",{attrs:{class:"user-avatar-in"}},i.row.memberName.replace(/^\s+|\s+$/g,"").slice(0,1))]),s[1]=e("p",[e("a",{style:{marginRight:"8px",cursor:"pointer",paddingTop:"5px"},class:{},on:{click:function(){t.isLogin?t.$router.push("/checkuser?id="+i.row.memberName):t.$router.push("/login")}}},i.row.memberName),e("div",{class:{}},"")]),2==i.row.level&&(s[2]=e("div",{attrs:{class:"user-business-v"},style:{display:"inline-block","vertical-align":"text-top"}},[e("img",{attrs:{src:a("WfgG")}})])),e("div",s)}},{title:t.$t("otc.volume"),key:"transactions",width:100,align:"center"},{title:t.$t("otc.paymethod"),key:"payMode",align:"center"},{align:"center",title:t.$t("otc.amount"),key:"remainAmount"},{title:"限额",align:"center",render:(t,e)=>t("div",{},e.row.minLimit+"-"+e.row.maxLimit+"CNY")},{title:"单价",align:"center",render:(t,e)=>t("div",{},e.row.price+"CNY")},{title:t.$t("otc.operate"),key:"buyBtn",width:70,align:"center",render:function(e,a){return e("p",[e("a",{style:{color:0==a.row.advertiseType?"#f15057":"#00b275"},on:{click:()=>{t.isLogin?t.member.realName?t.$router.push("/otc/tradeInfo?tradeId="+a.row.advertiseId):(t.$Message.error(t.$t("otc.validate")),setTimeout(()=>{t.$router.push("/uc/safe")},2e3)):t.$router.push("/login")}}},0==a.row.advertiseType?t.$t("otc.sell"):t.$t("otc.buy"))])}}]}}},computed:{isLogin:function(){return this.$store.getters.isLogin},member:function(){return this.$store.getters.member},coin:function(){return this.$route.params[0]},lang:function(){return this.$store.state.lang}},watch:{coin:function(){this.reloadAd()},lang:function(){this.updateLangData()}},methods:{updateLangData(){this.advertiment.columns[0].title=this.$t("otc.merchant"),this.advertiment.columns[1].title=this.$t("otc.volume"),this.advertiment.columns[2].title=this.$t("otc.paymethod"),this.advertiment.columns[2].title=this.$t("otc.amount"),this.advertiment.columns[2].title=this.$t("otc.price_coin"),this.advertiment.columns[2].title=this.$t("otc.operate")},loadAd(t,e,a){let i={};a.rows=[],a.totalElement=0,a.currentPage=t,i.pageNo=t,i.pageSize=a.pageNumber,i.advertiseType=e,i.unit=this.coin,this.$http.post(this.host+this.api.otc.advertise,i).then(t=>{var e=t.body;0==e.code?e.data.context&&(a.rows=e.data.context,a.totalElement=e.data.totalElement):this.$Message.error(e.message),this.loading=!1})},changePage(t){"sell"==this.tabPage?this.loadAd(t,0,this.advertiment.bid):this.loadAd(t,1,this.advertiment.ask)},reloadAd(){this.loadAd(1,0,this.advertiment.bid),this.loadAd(1,1,this.advertiment.ask)},strpro(t){let e=t;var a=(t=t.slice(1)).replace(/[\D\d]*/g,function(t){for(var e="",a=0;a<t.length;a++)e+="*";return e});return e.slice(0,1)+a}},created(){this.reloadAd()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-right tradeCenter"},[a("section",{staticClass:"list-content"},[a("Tabs",{attrs:{value:t.tabPage},model:{value:t.tabPage,callback:function(e){t.tabPage=e},expression:"tabPage"}},[a("TabPane",{attrs:{label:t.$t("otc.buyin"),name:"buy"}},[a("div",{staticClass:"table-responsive list-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),border:t.showBorder,stripe:t.showStripe,"show-header":t.showHeader,height:t.fixedHeader?250:"",size:t.tableSize,data:t.advertiment.ask.rows,columns:t.advertiment.columns,loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticClass:"page_change"},[a("div",{staticStyle:{float:"right"}},[t.advertiment.ask.totalElement>0?a("Page",{attrs:{pageSize:t.advertiment.ask.pageNumber,total:t.advertiment.ask.totalElement,current:t.advertiment.ask.currentPage},on:{"on-change":t.changePage}}):t._e()],1)])],1)]),t._v(" "),a("TabPane",{attrs:{label:t.$t("otc.sellout"),name:"sell"}},[a("div",{staticClass:"table-responsive list-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),border:t.showBorder,stripe:t.showStripe,"show-header":t.showHeader,height:t.fixedHeader?250:"",size:t.tableSize,data:t.advertiment.bid.rows,columns:t.advertiment.columns,loading:t.loading,"disabled-hover":!0}}),t._v(" "),a("div",{staticClass:"page_change"},[a("div",{staticStyle:{float:"right"}},[t.advertiment.bid.totalElement>0?a("Page",{attrs:{pageSize:t.advertiment.bid.pageNumber,total:t.advertiment.bid.totalElement,current:t.advertiment.bid.currentPage},on:{"on-change":t.changePage}}):t._e()],1)])],1)])],1)],1)])},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(t){a("a8pA"),a("M76Q")},"data-v-dcde991e",null);e.default=s.exports},M76Q:function(t,e){},WfgG:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1ODA2MEU4ODJEMTFFOEJCOTNCQ0I4M0VGODkyN0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1ODA2MEY4ODJEMTFFOEJCOTNCQ0I4M0VGODkyN0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNzU4MDYwQzg4MkQxMUU4QkI5M0JDQjgzRUY4OTI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNzU4MDYwRDg4MkQxMUU4QkI5M0JDQjgzRUY4OTI3RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph+TzMMAAAMiSURBVHjabFPfaxRnFD13vpnZ3dmJmkRF8GclMe2DSUG0lYrY9EEpCqKC+tCXIj74D/jio39GoS8iYhSkan+IKJEq2j6EglBQI7ZoYsSu2exu5sfOfNczE21jyYXdD+Z+59xzz72f6JV1gK0AjuXpAYhXA9l3wIrdKpqKIwoIoGpUrUjuGKB1npfPwtamkGfEEmYs5D8yYpJko7qVm7L60wFkz4E8LnlQ4LsEqQvN+SElMIteIE/2wOLJe7LiWAjNQ9j0soycHsBHR0jSBKotwEuZI6kpBM5DHJL6BurX1kL8y1Sy7D2FW1ZW7dO48SNGzmyT3k+gf5yiKn6vfQXpHWLeQlvzVP4PMDtOSAfqBNBKMCyJ3oRN9vF2wyl0a6aXsOHIZ+KS4eEppHfmkFyLkF6fgHoj/A0j/eUWkos/IG8MUgLbFio2VOj1bId4Y6xoHO36Y/DCL8vk9FUWmEUabiplZw69VLaKCN3KMgIDdDd9Daw7tuClTUvz1fSMIqtecSSvDsI4kMZvNLnBqv3wtg7zggfTesV2cxb24doYtt6L2patvNODd2wLPymsdz7mf3YYWfwKJqDZIcGKSvArbLXGVAr79CH97wAzfwHrSTT7AHhxvjCaeJ8HKVrZLG086KLjPREXnyPRe3BkDQLORGl2EIEXkE3chWk2OCPW2twP/M0VzIv26lyRosfmG9kz/QVBf4reXksjy4nuwNzycfhhFYEievoamCgWkbmwD5nro74zhhTeCieZERTHqbiPR3Egvlt4LEXFf+N1ZTvuD9xmn3U1Odq3ZuC1OTFOzW6uoT7AabshtEuPmzGlPxrFquQ+dhHrY9HSFtGf/I7JyUOYi2ivC3doOZIgRxJGqG6g4U4PFfHMydN8fBgdEi0K9wMyLjrexDfQN7kXtcGfq2tCERrt1g2M73Mlme90IfbZfnjxT+VAF8WHyuQdvRvdQPvRUbQjVFYGMFW+SVu8T3oWPT/ON3z9f8glyBaTpvGYNKe+QZawrdJsoD31LRf4Aoy7JGxpspKweDKdczI/fUKS5KVkMyc5ye8XRr90vBVgANq5T+XCcmPRAAAAAElFTkSuQmCC"},a8pA:function(t,e){}});