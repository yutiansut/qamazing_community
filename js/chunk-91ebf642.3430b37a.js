(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91ebf642"],{3702:function(t,e,n){"use strict";var i=n("c31b"),r=n.n(i);r.a},"9d71":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"kline",attrs:{id:"kline"}})},r=[],o=n("7510"),a=n.n(o),s=(n("9f63"),n("cebe")),h=n.n(s),l={data:function(){return{Symbol:"600000.sh",KLine:{JSChart:null,Option:{Type:"历史K线图",Windows:[{Index:"MA",Modify:!1,Change:!1},{Index:"VOL",Modify:!1,Change:!1}],IsShowCorssCursorInfo:!0,Border:{Left:1,Right:1,Top:25,Bottom:25},KLine:{Right:1,Period:0,PageSize:70,IsShowTooltip:!0},NetworkFilter:this.networkFilter}}}},mounted:function(){var t=this;this.OnSize(),window.onresize=function(){t.OnSize()},this.CreateKLineChart()},methods:{OnSize:function(t,e){var n=this.$refs.kline;n.style.width=t+"px",n.style.height=e+"px",this.KLine.JSChart&&this.KLine.JSChart.OnSize()},customKlineColor:function(t){t.UpBarColor="rgb(239,83,80)",t.DownBarColor="rgb(38,166,154)",t.FrameTitleBGColor="rgba(0,0,0,0)",t.TitleFont="12px 微软雅黑",t.FrameSplitTextFont="12px 微软雅黑",t.DefaultTextColor="rgb(112,115,124)",t.FrameSplitTextColor="rgb(112,115,124)",t.FrameBorderPen="rgb(240, 243, 250)",t.FrameSplitPen="rgb(240, 243, 250)"},CreateKLineChart:function(){if(!this.KLine.JSChart){this.KLine.Option.Symbol=this.Symbol;var t=a.a.Chart.JSChart.GetResource();this.customKlineColor(t);var e=a.a.Chart.JSChart.Init(this.$refs.kline);e.SetOption(this.KLine.Option),this.KLine.JSChart=e}},networkFilter:function(t,e){t.PreventDefault=!0,h.a.get("https://www.fastmock.site/mock/7a6e5e95b3f9e410fc4c9703f62e6d9f/chart/kline").then((function(t){e(t.data)}))}}},c=l,f=(n("3702"),n("2877")),u=Object(f["a"])(c,i,r,!1,null,"1c521187",null);e["default"]=u.exports},c31b:function(t,e,n){}}]);