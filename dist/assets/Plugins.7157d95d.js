import{_ as o}from"./PluginTasksList.7fb292da.js";import{_}from"./ListPageTop.c38f02eb.js";import{i as m,n as u,c as a,p as i}from"./index.f0e6e38b.js";import{_ as c}from"./VDataTable.c59b74f8.js";import{_ as d,a as r,b as f,c as l}from"./VTabItem.1a56432a.js";import"./TooltipButton.58ec3842.js";import"./VTooltip.21cae413.js";import"./index.c35c0de2.js";import"./moment.9709ab41.js";import"./index.caea508b.js";import"./download-stager.85a6b476.js";import"./download-api.f7703f16.js";import"./ansi_up.ade7a473.js";import"./VSwitch.f8266b20.js";import"./VSelect.3d0e9241.js";import"./VExpansionPanelHeader.68b29095.js";import"./VItemGroup.258ecc12.js";import"./VBreadcrumbs.2e2663d0.js";const v={name:"PluginsList",components:{ListPageTop:_},props:{active:{type:Boolean,default:!1}},data(){return{breads:[{text:"Plugins",disabled:!0,href:"/plugins"},{text:"List",disabled:!0,href:"/plugins?tab=list-view"}],headers:[{text:"Name",value:"name"},{text:"Description",value:"description"}]}},computed:{...m({plugins:n=>n.plugin.plugins})},mounted(){this.getPlugins()},methods:{getPlugins(){this.$store.dispatch("plugin/getPlugins")}}};var g=function(){var t=this,e=t._self._c;return e("div",[t.active?e(_,{attrs:{breads:t.breads,"show-create":!1,"show-delete":!1,"show-refresh":!0},on:{refresh:t.getPlugins}}):t._e(),e(c,{attrs:{headers:t.headers,items:t.plugins,dense:""},scopedSlots:t._u([{key:"item.name",fn:function({item:s}){return[e("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"pluginEdit",params:{id:s.id}}}},[t._v(" "+t._s(s.name)+" ")])]}}])})],1)},h=[],b=u(v,g,h,!1,null,null,null,null);const p=b.exports;const x={name:"Plugins",components:{PluginsList:p,PluginTasksList:o},data(){return{breads:[{text:"Plugins",disabled:!0,href:"/plugins"}],headers:[{text:"Name",value:"name"},{text:"Description",value:"description"}]}},computed:{tab:{set(n){this.$router.replace({query:{...this.$route.query,tab:n}})},get(){return this.$route.query.tab||"list-view"}}}};var y=function(){var t=this,e=t._self._c;return e("div",[e("portal",{attrs:{to:"app-bar-extension"}},[e("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%"}},[e(d,{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[e(r,{key:"list-view",attrs:{href:"#list-view"}},[t._v(" List "),e(a,{staticClass:"ml-1",attrs:{"x-small":""}},[t._v(" fa-list ")])],1),e(r,{key:"tasks",attrs:{href:"#tasks"}},[t._v(" Tasks "),e(a,{staticClass:"ml-1",attrs:{"x-small":""}},[t._v(" fa-sticky-note ")])],1)],1)],1)]),e(f,{model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}},[e(l,{key:"list-view",attrs:{value:"list-view",transition:!1,"reverse-transition":!1}},[e(i,{attrs:{flat:""}},[e(p,{attrs:{active:t.tab==="list-view"}})],1)],1),e(l,{key:"tasks",attrs:{value:"tasks",transition:!1,"reverse-transition":!1}},[e(i,{attrs:{flat:""}},[e(o,{attrs:{active:t.tab==="tasks"}})],1)],1)],1)],1)},k=[],P=u(x,y,k,!1,null,null,null,null);const I=P.exports;export{I as default};
