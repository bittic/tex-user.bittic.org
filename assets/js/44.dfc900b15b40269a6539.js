webpackJsonp([44],{NYFN:function(t,e){},i6oN:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={components:{},data(){let t=this;return{startTime:"",endTime:"",ordKeyword:"",rangeDate:"",startDate:"",endDate:"",recordValue:"",tableColumnsRecord:[{title:t.$t("uc.finance.trade.transactionTime"),key:"transactionTime"},{title:t.$t("uc.finance.inviting.refereename"),key:"inviterName"},{title:t.$t("uc.finance.inviting.referetel"),key:"inviterMobile"},{title:t.$t("uc.finance.inviting.invitingawards"),key:"mineAmount"},{title:t.$t("uc.finance.trade.account_date"),key:"transactionTime",width:160,render:function(e,a){var i=a.row.transactionTime,n=i.split(" ")[0].replace(/-/g,"/"),r=i.split(" ")[1],s=new Date(n).getTime()+864e5;return e("div",(s=t.dateform(s)).split(" ")[0]+" "+r,"")}}],accumulative_return:"1000",accumulat_return:"1000",pageSize:10,value:"",page:0,total:0,tableRecord:[]}},created:function(){this.init(1)},methods:{init(t){let e=0;!this.$store.getters.isLogin&&this.$router.push("/login"),this.$store.getters.isLogin&&(e=this.$store.getters.member.id);let a="",i="",n=this.api.uc.mylist;this.startTime&&(a=this.startTime),this.endTime&&(i=this.endTime);let r={memberId:e,page:t,limit:10,inviterState:1,startTime:a,endTime:i};this.$http.post(this.host+n,r).then(t=>{if(0==t.body.code){let e=t.body.data;this.accumulative_return=e.backAmount,this.accumulat_return=e.preAmount,this.total=e.exchangeOrders.totalElements,this.tableRecord=e.exchangeOrders.content}else this.$Message.error(t.body.message)})},dateform(t){var e=new Date(t),a=e.getFullYear(),i=e.getMonth()+1;i=i<10?"0"+i:i;var n=e.getDate();n=n<10?"0"+n:n;var r=e.getHours();r=r<10?"0"+r:r;var s=e.getMinutes(),c=e.getSeconds();return a+"-"+i+"-"+n+" "+r+":"+(s=s<10?"0"+s:s)+":"+(c=c<10?"0"+c:c)},changePage(t){this.init(t)},queryOrder(){let t="";if(0==this.rangeDate.length)return void this.$Message.error("请选择搜索日期范围");try{t+=this.rangeDate[0].getFullYear()+"-"+(this.rangeDate[0].getMonth()+1)+"-"+this.rangeDate[0].getDate(),t+="~",t+=this.rangeDate[1].getFullYear()+"-"+(this.rangeDate[1].getMonth()+1)+"-"+this.rangeDate[1].getDate()}catch(t){return void this.$Message.error("请选择搜索日期范围")}let e=[];t&&(e=t.split("~"));let a=0;!this.$store.getters.isLogin&&this.$router.push("/login"),this.$store.getters.isLogin&&(a=this.$store.getters.member.id);let i=this.api.uc.mylist,n=new Date(e[0]).getTime(),r=new Date(e[1]).getTime(),s={startTime:n,endTime:r,memberId:a,page:1,limit:10,inviterState:1};this.startTime=n,this.endTime=r,this.$http.post(this.host+i,s).then(t=>{if(0==t.body.code){let e=t.body.data;this.total=e.exchangeOrders.totalElements,this.tableRecord=e.exchangeOrders.content}else this.$Message.error(t.body.message)})},getList(t){let e={};e.pageNo=t,e.pageSize=this.pageSize,this.$http.post(this.host+"/uc/asset/transaction/all",e).then(t=>{var e=t.body;e.content?(this.tableRecord=e.content,this.total=e.totalElements,this.loading=!1,this.page=e.number):this.$Message.error(e.message)})},updateLangData(){this.tableColumnsRecord[0].title=this.$t("uc.finance.trade.transactionTime"),this.tableColumnsRecord[1].title=this.$t("uc.finance.inviting.refereename"),this.tableColumnsRecord[2].title=this.$t("uc.finance.inviting.referetel"),this.tableColumnsRecord[3].title=this.$t("uc.finance.inviting.invitingawards"),this.tableColumnsRecord[4].title=this.$t("uc.finance.trade.account_date")}},computed:{lang:function(){return this.$store.state.lang}},watch:{lang:function(){this.updateLangData()}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-rights"},[a("div",{staticClass:"nav-right col-xs-12 col-md-10 padding-right-clear"},[a("div",{staticClass:"bill_box rightarea padding-right-clear record"},[a("div",{staticClass:"col-xs-12 rightarea-con"},[a("div",{staticClass:"trade_accumulative"},[a("div",{staticClass:"trade_accumulative_return"},[t._v(t._s(t.$t("uc.finance.inviting.accumulative_return"))+"  "+t._s(t.accumulative_return))]),t._v(" "),a("div",{staticClass:"trade_accumulat_return"},[t._v(t._s(t.$t("uc.finance.inviting.accumulat_return"))+"  "+t._s(t.accumulat_return))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("span",[t._v("\n                        "+t._s(t.$t("uc.finance.inviting.start_end"))+" ：\n                    ")]),t._v(" "),a("DatePicker",{staticStyle:{width:"200px","margin-right":"35px"},attrs:{type:"daterange"},model:{value:t.rangeDate,callback:function(e){t.rangeDate=e},expression:"rangeDate"}}),t._v(" "),a("Button",{staticStyle:{padding:"6px 50px","margin-left":"10px","background-color":"#f0a70a","border-color":"#f0a70a"},attrs:{type:"primary"},on:{click:t.queryOrder}},[t._v(t._s(t.$t("uc.finance.record.search")))])],1),t._v(" "),a("div",{staticClass:"datedaitl"},[a("span",{staticStyle:{color:"#eb6f6c"}},[t._v(t._s(t.$t("uc.finance.inviting.start_end"))+" ：")]),t._v("  "),a("span",[t._v(t._s(t.$t("uc.finance.inviting.chargetime")))])]),t._v(" "),a("div",{staticClass:"order-table"},[a("Table",{attrs:{"no-data-text":t.$t("common.nodata"),columns:t.tableColumnsRecord,data:t.tableRecord}}),t._v(" "),a("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[a("div",{staticStyle:{float:"right"}},[a("Page",{attrs:{total:t.total,pageSize:t.pageSize,"show-total":"",current:t.page+1,id:"record_pages"},on:{"on-change":t.changePage}})],1)])],1)])])])])},staticRenderFns:[]};var r=a("VU/8")(i,n,!1,function(t){a("NYFN")},"data-v-6bd60110",null);e.default=r.exports}});