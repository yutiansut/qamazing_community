(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2688eb8a"],{"7eeb":function(t,e,a){"use strict";a("f6a9")},"810b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("div",{ref:"analysis",staticClass:"analysis"},[a("div",{staticClass:"left"},[a("div",{staticClass:"left-top card"},[a("qifi-accountlist",{attrs:{height:t.height,title:"账户概览",data:t.accountData},on:{accountInfo:t.selectAccountInfo}})],1),a("div",{staticClass:"left-bottom card"},[a("qifi-accountinfo",{attrs:{data:t.accountInfo}})],1)]),a("div",{staticClass:"center card"},[a("qifi-trendchart",{ref:"trendChart",attrs:{width:t.hqWidth,height:t.hqHeight,symbol:t.symbol,wsData:t.quotation,historyData:t.trendChartData,dotData:t.dot}})],1),a("div",{staticClass:"right"},[a("div",{staticClass:"card acc-profit"},[a("span",[t._v(t._s(t.accountInfo.user_id))]),a("span",{class:t.accountInfo.profit>0?"profit":0===t.accountInfo.profit?"":"loss"},[t._v(t._s(t._f("toFixed")(t.accountInfo.profit)))])]),a("div",{staticClass:"right-top card"},[a("qifi-trades",{attrs:{width:t.width,height:t.tableHeight,data:t.trades,searchFlag:!0},on:{"order-info":t.orderInfo}})],1),a("div",{staticClass:"right-bottom card"},[a("qifi-positions",{attrs:{width:t.width,height:t.tableHeight,data:t.positions},on:{"order-info":t.orderInfo}})],1)]),a("div",{staticClass:"fixBtn"},[a("el-button",{attrs:{type:"danger",icon:"el-icon-star-off",circle:""},on:{click:function(e){t.singleBoardFlag=!0}}})],1),a("vxe-modal",{attrs:{resize:"",remember:"",title:"下单板",width:"380",height:"520","lock-view":!1,mask:!1},scopedSlots:t._u([{key:"default",fn:function(){return[a("qifi-singleboard",{attrs:{form:t.orderForm},on:{placeOrder:t.placeOrder}})]},proxy:!0}]),model:{value:t.singleBoardFlag,callback:function(e){t.singleBoardFlag=e},expression:"singleBoardFlag"}})],1)])},i=[],o=(a("1d7a"),a("d0bf"),a("cb60"),a("7478"),a("6a61"),a("2e91")),c=a("d211"),s=a("be8a"),r=a("5a33"),u=a("5880"),d={name:"analysis",data:function(){return{accURL:"",tableHeight:300,height:300,width:590,hqWidth:800,hqHeight:600,accountData:[],symbol:"",trendChartData:{},unSubName:"",unSubQuotationCode:"",flag:!0,queryId:"",singleBoardFlag:!1,orderForm:{}}},filters:{toFixed:function(t){return"number"===typeof t?Number.isInteger(t)?t:t.toFixed(2):t}},computed:Object(c["a"])({},Object(u["mapState"])("d2admin/qifi",["accountInfo","trades","positions","quotation","dot","account"])),watch:{positions:{handler:function(t){if(this.flag){if(!t[0]||t[0].instrument_id.length>6)return;this.unSubQuotationCode&&Object(r["e"])(this.unSubQuotationCode),this.getChartData(t[0].instrument_id),this.unSubQuotationCode=t[0].instrument_id,Object(r["c"])(t[0].instrument_id),this.setCode(t[0].instrument_id),this.flag=!1}},deep:!0}},mounted:function(){this.accURL="http://192.168.2.242:5000",this.getQuery(),this.monitor(),this.getAccountList()},methods:Object(c["a"])(Object(c["a"])({},Object(u["mapMutations"])("d2admin/qifi",["setAccount","setCode"])),{},{monitor:function(){var t=this;this.$erd.listenTo(this.$refs.analysis,(function(e){var a=e.offsetHeight,n=e.offsetWidth;t.height=(a-10)/2,t.tableHeight=(a-80)/2,t.hqWidth=n-910,t.hqHeight=a-10}))},getAccountList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,i,o,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getAccount();case 2:for(i in a=e.sent,n=a.data,t.accountData=[],n)o={},o.name=n[i],t.accountData.push(o);if(c="",t.queryId)for(s in t.accountData)t.accountData[s].name===t.queryId&&(c=t.accountData[s].name),t.accountData[s].name===t.account&&Object(r["d"])(t.accountData[s].name);else c=t.accountData[0].name;t.account&&Object(r["d"])(t.account),Object(r["b"])(c),t.unSubName=c,t.setAccount(c);case 12:case"end":return e.stop()}}),e)})))()},selectAccountInfo:function(t){this.flag=!0,this.symbol="",this.unSubName&&Object(r["d"])(this.unSubName),this.unSubName=t.name,Object(r["b"])(this.unSubName),this.setAccount(this.unSubName)},orderInfo:function(t){this.orderForm=t,t.code.length>6||(this.unSubQuotationCode&&Object(r["e"])(this.unSubQuotationCode),this.unSubQuotationCode=t.code,Object(r["c"])(t.code),this.setCode(t.code),this.getChartData(t.code))},getChartData:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i,o,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=new s["b"](t).distinguish(),i=new s["a"](n.code).distinguish(),a.next=4,e.$api.getRealtime({code:i,market:n.type});case 4:o=a.sent,c=o.data,e.trendChartData=c||{},e.symbol=t;case 8:case"end":return a.stop()}}),a)})))()},getQuery:function(){this.queryId=this.$route.params.id},placeOrder:function(t){console.log(t)}})},h=d,f=(a("7eeb"),a("5d22")),l=Object(f["a"])(h,n,i,!1,null,"79afec14",null);e["default"]=l.exports},f6a9:function(t,e,a){}}]);