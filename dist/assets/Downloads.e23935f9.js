import{_ as u}from"./TooltipButton.58ec3842.js";import{_ as d}from"./ListPageTop.c38f02eb.js";import{g as _,b as p,c as m}from"./download-api.f7703f16.js";import{l as h,_ as g}from"./index.caea508b.js";import{h as f}from"./moment.9709ab41.js";import{n as v,j as b,p as l,aH as r,o as y,b as S,c as i,k as P,a as x,l as w,V as k}from"./index.f0e6e38b.js";import{_ as B,a as D,b as F,c as C}from"./VExpansionPanelHeader.68b29095.js";import{_ as A}from"./VDataTable.c59b74f8.js";import{_ as c}from"./VTooltip.21cae413.js";import{_ as M}from"./VSelect.3d0e9241.js";import"./VBreadcrumbs.2e2663d0.js";import"./VItemGroup.258ecc12.js";import"./index.c35c0de2.js";const Y={name:"Downloads",components:{ListPageTop:d,TooltipButton:u},data(){return{moment:f,items:[],currentPage:1,totalPages:1,totalItems:0,itemsPerPage:10,sortBy:"updated_at",sortDesc:!0,loading:!1,filter:"",breads:[{text:"Downloads",disabled:!0,href:"/downloads"}],headers:[{text:"Id",value:"id",sortable:!1},{text:"Filename",value:"filename",sortable:!0},{text:"Location",value:"location",sortable:!0},{text:"Size",value:"size",sortable:!0},{text:"Created At",value:"created_at",sortable:!0},{text:"Updated At",value:"updated_at",sortable:!0},{text:"Actions",value:"actions",sortable:!1}],isSelecting:!1,selectedFile:null,selectedSources:[],sources:[{label:"Upload",value:"upload"},{label:"Agent Task",value:"agent_task"},{label:"Agent File",value:"agent_file"},{label:"Stager",value:"stager"}],debouncedSearch:h(this.search,500)}},computed:{selectedAllSources:{set(s){s?this.selectedSources=this.sources.map(e=>e.value):this.selectedSources=[],this.search()},get(){return this.selectedSources.length===this.sources.length}}},watch:{filter(){this.debouncedSearch()}},async mounted(){this.selectedSources=this.sources.map(s=>s.value),this.search()},methods:{async search(){this.loading=!0;const s=await _({page:this.currentPage,limit:this.itemsPerPage,query:this.filter,sources:this.selectedSources,sortBy:this.sortBy,sortOrder:this.sortDesc?"desc":"asc"});this.items=s.records,this.currentPage=s.page,this.totalPages=s.total_pages,this.totalItems=s.total,this.loading=!1},downloadFile(s){p(s.id)},async refreshDownloads(){this.search()},handleFileImport(){this.isSelecting=!0,window.addEventListener("focus",()=>{this.isSelecting=!1},{once:!0}),this.$refs.uploader.click()},async onFileChanged(s){this.selectedFile=s.target.files[0];const e=new FormData;e.append("file",this.selectedFile),await m(e),this.$snack.success("Upload complete"),this.debouncedSearch()},handleFilterChange(){this.debouncedSearch()},handlePageChange(s){this.currentPage=s,this.debouncedSearch()},handleOptionsChange(s){this.currentPage=s.page,this.itemsPerPage=s.itemsPerPage,s.sortBy.length>0?(this.sortBy=s.sortBy[0],this.sortDesc=s.sortDesc[0]):(this.sortBy="updated_at",this.sortDesc=!0),this.debouncedSearch()},formatBytes(s,e){if(s===0)return"0 Bytes";const t=1024,a=e||2,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(s)/Math.log(t));return`${parseFloat((s/t**o).toFixed(a))} ${n[o]}`}}};var I=function(){var e=this,t=e._self._c;return t("div",[t(d,{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!0,"show-delete":!1},on:{refresh:e.refreshDownloads}},[t("template",{slot:"extra-stuff"},[t(b,{staticStyle:{"max-width":"500px","padding-top":"25px","padding-right":"20px"},attrs:{"append-icon":"mdi-magnify",outlined:"",dense:"",label:"Search"},model:{value:e.filter,callback:function(a){e.filter=a},expression:"filter"}}),t(u,{attrs:{icon:"fa-upload",text:"Upload"},on:{click:e.handleFileImport}}),t("input",{ref:"uploader",staticClass:"d-none",attrs:{type:"file","aria-label":"uploader"},on:{change:e.onFileChanged}})],1)],2),t("div",{staticStyle:{display:"flex","flix-direction":"row"}},[t(l,{staticClass:"mr-2 pa-2",staticStyle:{width:"300px"}},[t(B,{staticClass:"mb-6",attrs:{multiple:""}},[t(D,[t(F,{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(" Source ")]),t(C,[t(r,{attrs:{"x-small":"",dense:"",label:"Select All"},model:{value:e.selectedAllSources,callback:function(a){e.selectedAllSources=a},expression:"selectedAllSources"}}),t(y,{staticClass:"pb-4"}),e._l(e.sources,function(a){return t(r,{key:a.value,attrs:{value:a.value,"x-small":"",dense:"",label:a.label},on:{change:e.handleFilterChange},model:{value:e.selectedSources,callback:function(n){e.selectedSources=n},expression:"selectedSources"}})})],2)],1)],1)],1),t(l,{staticStyle:{"flex-grow":"1"}},[t(g,{attrs:{length:e.totalPages,"total-visible":10},on:{input:e.handlePageChange},model:{value:e.currentPage,callback:function(a){e.currentPage=a},expression:"currentPage"}}),t(A,{attrs:{headers:e.headers,items:e.items,"item-key":"id","sort-by":e.sortBy,"sort-desc":e.sortDesc,"server-items-length":e.totalItems,"footer-props":{"items-per-page-options":[10,25,50,100]},"items-per-page":e.itemsPerPage,loading:e.loading,page:e.currentPage},on:{"update:itemsPerPage":function(a){e.itemsPerPage=a},"update:items-per-page":function(a){e.itemsPerPage=a},"update:options":e.handleOptionsChange},scopedSlots:e._u([{key:"item.updated_at",fn:function({item:a}){return[t(c,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t("span",e._g({},n),[e._v(e._s(e.moment(a.updated_at).fromNow()))])]}}],null,!0)},[t("span",[e._v(e._s(e.moment(a.updated_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.created_at",fn:function({item:a}){return[t(c,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:n}){return[t("span",e._g({},n),[e._v(e._s(e.moment(a.created_at).fromNow()))])]}}],null,!0)},[t("span",[e._v(e._s(e.moment(a.created_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.size",fn:function({item:a}){return[t("span",[e._v(e._s(e.formatBytes(a.size)))])]}},{key:"item.actions",fn:function({item:a}){return[t(M,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:n,attrs:o}){return[t(S,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",o,!1),n),[t(i,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(P,{staticClass:"ml-2 mr-2"},[t(x),t(w,{attrs:{link:""},on:{click:function(n){return e.downloadFile(a)}}},[t(k,[t(i,[e._v("fa-download")]),e._v(" Download ")],1)],1)],1)],1)]}}])})],1)],1)],1)},$=[],z=v(Y,I,$,!1,null,null,null,null);const Z=z.exports;export{Z as default};
