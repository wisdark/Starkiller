import{n as o,b as l,c as _}from"./index.81c4d563.js";import{_ as a}from"./VTooltip.97c87792.js";const r={name:"TooltipButton",props:{icon:{type:String,required:!0},text:{type:String,required:!0},padLeft:{type:Number,default:0},color:{type:String,default:""},flat:{type:Boolean,default:!1},to:{type:Object,default:null},xSmall:{type:Boolean,default:!1}}};var s=function(){var t=this,e=t._self._c;return e(a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:n}){return[e(l,t._g({staticClass:"mr-5",attrs:{color:t.flat?"":t.color,to:t.to,icon:"",small:!t.xSmall,"x-small":t.xSmall},on:{click:function(i){return t.$emit("click")}}},n),[e(_,{style:t.padLeft!==0?`padding-left: ${t.padLeft}px`:""},[t._v(" "+t._s(t.icon)+" ")])],1)]}}])},[e("span",[t._v(t._s(t.text))])])},u=[],p=o(r,s,u,!1,null,null,null,null);const d=p.exports;export{d as _};
