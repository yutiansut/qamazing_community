(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c934d"],{"57c8":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",[r("template",{slot:"header"},[r("el-alert",{attrs:{type:"success",closable:!1,title:"私有路由快照相当于私有路由存储一种快捷操作，\n        会将传入的 vue instance 携带的 $data 全部根据用户区分持久化，\n        下面的表单来自 Element 的表单示例，\n        在 D2Admin 的本页示例中你可以随意填写这个表单，\n        表单内容会自动实时持久化，\n        无论是切换标签页、重新打开标签页、刷新浏览器、重开浏览器、重开浏览器标签页等，\n        该页面数据都会自动恢复到上次填写的状态，\n        这些都只需要你使用 D2Admin 提供的两个方法，\n        总共只需要多写十几行代码"}})],1),r("el-form",{ref:"form",staticStyle:{"max-width":"600px",margin:"0px auto"},attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"活动名称"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"活动区域"}},[r("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[r("el-option",{attrs:{label:"区域一",value:"shanghai"}}),r("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),r("el-form-item",{attrs:{label:"活动时间"}},[r("el-col",{attrs:{span:11}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),r("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),r("el-col",{attrs:{span:11}},[r("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),r("el-form-item",{attrs:{label:"即时配送"}},[r("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),r("el-form-item",{attrs:{label:"活动性质"}},[r("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-checkbox",{attrs:{label:"线上活动",name:"type"}}),r("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),r("el-checkbox",{attrs:{label:"线下活动",name:"type"}}),r("el-checkbox",{attrs:{label:"品牌曝光",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"特殊资源"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"线上品牌商赞助"}}),r("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),r("el-form-item",{attrs:{label:"活动形式"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"}},[e._v("立即创建")]),r("el-button",[e._v("取消")])],1)],1),r("el-button",{attrs:{slot:"footer",type:"danger"},on:{click:e.handleClear},slot:"footer"},[r("d2-icon",{attrs:{name:"trash-o"}}),e._v(" 删除当前页面快照 ")],1)],2)},n=[],l=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("ade3")),o=(r("96cf"),r("5880"));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},created:function(){var e,t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(this.pageGet({instance:this,user:!0}));case 2:for(t in e=r.sent,e)e.hasOwnProperty(t)&&(this[t]=e[t]);case 4:case"end":return r.stop()}}),null,this)},watch:{$data:{handler:function(){this.pageSet({instance:this,user:!0})},deep:!0}},methods:c({},Object(o["mapActions"])("d2admin/db",["pageSet","pageGet","pageClear"]),{handleClear:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.pageClear({instance:this,user:!0}));case 2:this.$message.success("此页面快照已经删除，请重新进入该页面或者关闭选项卡重新打开");case 3:case"end":return e.stop()}}),null,this)}})},m=i,p=r("2877"),u=Object(p["a"])(m,a,n,!1,null,null,null);t["default"]=u.exports}}]);