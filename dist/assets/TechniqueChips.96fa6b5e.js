import{n as s}from"./index.81c4d563.js";import{b as l}from"./VSelect.0bed7eeb.js";const _={name:"TechniqueChips",props:{techniques:{type:Array,default:()=>[]},showTitle:{type:Boolean,default:!0}},methods:{getTechniqueUrl(r){if(r.includes(".")){const[e,n]=r.split(".");return`https://attack.mitre.org/techniques/${e}/${n}`}return`https://attack.mitre.org/techniques/${r}`}}};var i=function(){var e=this,n=e._self._c;return e.techniques.length>0?n("div",{staticClass:"flex flex-row flex-wrap mb-2"},[e.showTitle?n("span",{staticClass:"mr-2"},[e._v("Techniques:")]):e._e(),e._l(e.techniques.filter(t=>t!==""),function(t){return n(l,{key:t,staticClass:"mr-1 mb-1",attrs:{small:"",href:e.getTechniqueUrl(t),target:"_blank",rel:"noopener noreferrer",color:"green"}},[e._v(" "+e._s(t)+" ")])})],2):e._e()},o=[],a=s(_,i,o,!1,null,null,null,null);const p=a.exports;export{p as _};
