(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66dd6fa6","chunk-91ebf642"],{1147:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("div",{ref:"realtime",staticClass:"realtime"},[a("div",{staticClass:"left"},[a("div",{staticClass:"left-top card",style:{width:t.boxWidth}},[a("chart",{ref:"chart"})],1),a("div",{staticClass:"left-bottom card",style:{width:t.boxWidth}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),a("div",{staticClass:"right"},[a("div",{staticClass:"right-top card",style:{width:t.boxWidth}},[a("el-table",{style:{width:t.tableWidth},attrs:{data:t.tableData,height:t.tableHeight,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),a("div",{staticClass:"right-center card",style:{width:t.boxWidth}},[a("el-table",{style:{width:t.tableWidth},attrs:{data:t.tableData,height:t.tableHeight,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),a("div",{staticClass:"right-bottom card",style:{width:t.boxWidth}},[a("el-table",{style:{width:t.tableWidth},attrs:{data:t.tableData,height:t.tableHeight,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)])])])},r=[],l=a("9d71"),n={data:function(){return{boxWidth:0,tableHeight:0,centerTableHeight:0,tableWidth:0,tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},components:{chart:l["default"]},mounted:function(){this.monitor()},methods:{monitor:function(){var t=this;this.$erd.listenTo(this.$refs.realtime,(function(e){var a=e.offsetWidth,i=e.offsetHeight;t.$refs.chart.OnSize(a/2-15,i/2),t.tableHeight=i/3-20,t.centerTableHeight=i/3-52,t.tableWidth=a/2-20+"px",t.boxWidth=a/2-2+"px"}))}}},o=n,s=(a("b44a"),a("42e8"),a("2877")),d=Object(s["a"])(o,i,r,!1,null,"0a6ca250",null);e["default"]=d.exports},3702:function(t,e,a){"use strict";var i=a("c31b"),r=a.n(i);r.a},"42e8":function(t,e,a){"use strict";var i=a("78df"),r=a.n(i);r.a},"78df":function(t,e,a){},"9d71":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"kline",attrs:{id:"kline"}})},r=[],l=a("7510"),n=a.n(l),o=(a("9f63"),a("cebe")),s=a.n(o),d={data:function(){return{Symbol:"600000.sh",KLine:{JSChart:null,Option:{Type:"历史K线图",Windows:[{Index:"MA",Modify:!1,Change:!1},{Index:"VOL",Modify:!1,Change:!1}],IsShowCorssCursorInfo:!0,Border:{Left:1,Right:1,Top:25,Bottom:25},KLine:{Right:1,Period:0,PageSize:70,IsShowTooltip:!0},NetworkFilter:this.networkFilter}}}},mounted:function(){var t=this;this.OnSize(),window.onresize=function(){t.OnSize()},this.CreateKLineChart()},methods:{OnSize:function(t,e){var a=this.$refs.kline;a.style.width=t+"px",a.style.height=e+"px",this.KLine.JSChart&&this.KLine.JSChart.OnSize()},customKlineColor:function(t){t.UpBarColor="rgb(239,83,80)",t.DownBarColor="rgb(38,166,154)",t.FrameTitleBGColor="rgba(0,0,0,0)",t.TitleFont="12px 微软雅黑",t.FrameSplitTextFont="12px 微软雅黑",t.DefaultTextColor="rgb(112,115,124)",t.FrameSplitTextColor="rgb(112,115,124)",t.FrameBorderPen="rgb(240, 243, 250)",t.FrameSplitPen="rgb(240, 243, 250)"},CreateKLineChart:function(){if(!this.KLine.JSChart){this.KLine.Option.Symbol=this.Symbol;var t=n.a.Chart.JSChart.GetResource();this.customKlineColor(t);var e=n.a.Chart.JSChart.Init(this.$refs.kline);e.SetOption(this.KLine.Option),this.KLine.JSChart=e}},networkFilter:function(t,e){t.PreventDefault=!0,s.a.get("https://www.fastmock.site/mock/7a6e5e95b3f9e410fc4c9703f62e6d9f/chart/kline").then((function(t){e(t.data)}))}}},h=d,c=(a("3702"),a("2877")),b=Object(c["a"])(h,i,r,!1,null,"1c521187",null);e["default"]=b.exports},b44a:function(t,e,a){"use strict";var i=a("d8c1"),r=a.n(i);r.a},c31b:function(t,e,a){},d8c1:function(t,e,a){}}]);