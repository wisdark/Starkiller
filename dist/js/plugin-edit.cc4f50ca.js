(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugin-edit"],{"0393":function(t,e,n){"use strict";var i=n("5530"),a=(n("0481"),n("210b"),n("604c")),s=n("d9bd");e["a"]=a["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object(s["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(s["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(t,e){var n=this.getValue(t,e),i=this.getValue(t,e+1);t.isActive=this.toggleMethod(n),t.nextIsActive=this.toggleMethod(i)}}})},"1d82":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p4"},[n("edit-page-top",{attrs:{breads:t.breads,"show-submit":!0,"show-copy":!1,"show-delete":!1,"submit-loading":t.loading},on:{submit:t.submit}}),n("h4",{staticClass:"pl-4 pb-4"},[t._v(" Execute Plugin ")]),n("v-card",{staticStyle:{padding:"10px"}},[n("info-viewer",{staticClass:"info-viewer",attrs:{info:t.pluginInfo}}),n("technique-chips",{attrs:{techniques:t.plugin.TechniqueChips}}),t.reset?n("general-form",{ref:"generalform",attrs:{options:t.plugin.options},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}}):t._e()],1)],1)},a=[],s=n("1da1"),o=(n("96cf"),n("b0c0"),n("b64b"),n("a4d3"),n("e01a"),n("83b4")),r=n("384d"),c=n("56c2"),l=n("c6f8"),u=n("1dc0"),h={name:"PluginEdit",components:{InfoViewer:r["a"],GeneralForm:o["a"],TechniqueChips:l["a"],EditPageTop:u["a"]},data:function(){return{reset:!0,loading:!1,form:{},plugin:{}}},computed:{breads:function(){return[{text:"Plugins",disabled:!1,to:"/plugins",exact:!0},{text:this.breadcrumbName,disabled:!0,to:"/plugins/edit"}]},breadcrumbName:function(){return this.plugin.name?this.plugin.name:this.id?this.id:""},pluginInfo:function(){return Object.keys(this.plugin).length<1?{}:{authors:this.plugin.authors,description:this.plugin.description,comments:this.plugin.comments}},pluginOptions:function(){var t=this.plugin.options;return t||{}},id:function(){return this.$route.params.id}},mounted:function(){this.getPlugin(this.id)},methods:{submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.loading&&t.$refs.generalform.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:return t.loading=!0,e.prev=3,e.next=6,c["a"](t.plugin.name,t.form);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),t.$snack.error("Error: ".concat(e.t0));case 11:t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[3,8]])})))()},getPlugin:function(t){var e=this;c["b"](t).then((function(t){e.reset=!1,e.plugin=t,setTimeout((function(){e.reset=!0}),500)})).catch((function(){e.errorState=!0}))}}},p=h,d=n("2877"),f=n("6544"),v=n.n(f),m=n("b0af"),b=Object(d["a"])(p,i,a,!1,null,null,null);e["default"]=b.exports;v()(b,{VCard:m["a"]})},"1dc0":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("portal",{attrs:{to:"app-bar"}},[n("div",{staticClass:"v-toolbar__content",staticStyle:{width:"100%"}},[n("v-breadcrumbs",{attrs:{items:t.breads}}),n("v-spacer"),t._t("extra-stuff"),t.showDelete&&!t.smallDelete?n("v-btn",{staticClass:"mr-2",attrs:{color:"error",text:""},on:{click:function(e){return t.$emit("delete")}}},[t._v(" "+t._s(t.deleteText)+" "),n("v-icon",{attrs:{right:""}},[t._v(" fa-trash-alt ")])],1):t.showDelete&&t.smallDelete?n("tooltip-button",{attrs:{icon:"fa-trash-alt",color:"error",text:t.deleteText},on:{click:function(e){return t.$emit("delete")}}}):t._e(),t.showCopy&&Object.keys(t.copyLink).length>0&&!t.smallCopy?n("v-btn",{staticClass:"mr-2",attrs:{color:"primary",text:"",to:t.copyLink}},[t._v(" "+t._s(t.copyText)+" "),n("v-icon",{attrs:{right:""}},[t._v(" fa-copy ")])],1):t.showCopy&&Object.keys(t.copyLink).length>0&&t.smallCopy?n("tooltip-button",{attrs:{icon:"fa-copy",text:t.copyText,to:t.copyLink}}):t._e(),t.showSubmit?n("v-btn",{staticClass:"primary",attrs:{disabled:t.disableSubmit,type:"submit",loading:t.submitLoading},on:{click:function(e){return t.$emit("submit")}}},[t._v(" "+t._s(t.submitText)+" ")]):t._e()],2)])},a=[],s=n("9442"),o={name:"ListPageTop",components:{TooltipButton:s["a"]},props:{deleteText:{type:String,default:"Delete"},copyText:{type:String,default:"Copy"},submitText:{type:String,default:"Submit"},showDelete:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!1},showSubmit:{type:Boolean,default:!1},disableSubmit:{type:Boolean},submitLoading:{type:Boolean,default:!1},copyLink:{type:Object,default:function(){}},smallCopy:{type:Boolean,default:!1},smallDelete:{type:Boolean,default:!1},breads:{type:Array,default:function(){return[]}}}},r=o,c=n("2877"),l=n("6544"),u=n.n(l),h=n("2bc5"),p=n("8336"),d=n("132d"),f=n("2fa4"),v=Object(c["a"])(r,i,a,!1,null,null,null);e["a"]=v.exports;u()(v,{VBreadcrumbs:h["a"],VBtn:p["a"],VIcon:d["a"],VSpacer:f["a"]})},"210b":function(t,e,n){},"2e9b":function(t,e,n){},"384d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-expansion-panels",{staticClass:"collapse",attrs:{disabled:Object.keys(t.info).length<1}},[n("v-expansion-panel",[Object.keys(t.info).length>0?n("v-expansion-panel-header",[t._v(" "+t._s(t.info.description)+" ")]):t._e(),n("v-expansion-panel-content",[n("div",{staticStyle:{"text-align":"left"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("span",[n("b",{staticClass:"mr-2"},[t._v("Authors:")]),t._l(t.info.authors,(function(e,i){return[e.link?n("v-chip",{key:i,staticClass:"mr-1 mb-1",attrs:{medium:"",href:e.link}},[t._v(" "+t._s(t.formatDisplayName(e))+" ")]):n("v-chip",{key:i,staticClass:"mr-1 mb-1",attrs:{medium:"",target:"_blank"}},[t._v(" "+t._s(t.formatDisplayName(e))+" ")])]}))],2)]),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("span",[n("b",{staticClass:"mr-2"},[t._v("Comments:")]),n("ul",t._l(t.info.comments,(function(e,i){return n("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)])])]),t._l(t.info.extraDetails,(function(e){return n("div",{key:e.key,staticStyle:{"margin-bottom":"10px"}},[n("span",[n("b",[t._v(t._s(e.key)+":")]),t._v(" "+t._s(e.value)+" ")])])}))],2)],1)],1)],1)},a=[],s=(n("b0c0"),n("99af"),{props:{info:{type:Object,default:function(){}}},methods:{formatDisplayName:function(t){return t.name&&t.handle?"".concat(t.name," (").concat(t.handle,")"):t.name?t.name:t.handle?t.handle:""}}}),o=s,r=(n("ee2d"),n("2877")),c=n("6544"),l=n.n(c),u=n("cc20"),h=n("cd55"),p=n("49e2"),d=n("c865"),f=n("0393"),v=Object(r["a"])(o,i,a,!1,null,"1226be77",null);e["a"]=v.exports;l()(v,{VChip:u["a"],VExpansionPanel:h["a"],VExpansionPanelContent:p["a"],VExpansionPanelHeader:d["a"],VExpansionPanels:f["a"]})},"3a2f":function(t,e,n){"use strict";var i=n("ade3"),a=(n("a9e3"),n("9734"),n("4ad4")),s=n("a9ad"),o=n("16b7"),r=n("b848"),c=n("f573"),l=n("80d2"),u=n("d9bd"),h=n("58df");e["a"]=Object(h["a"])(s["a"],o["a"],r["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||i?s=a+e.width/2-n.width/2:(this.left||this.right)&&(s=a+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+e.height/2-n.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),!1===this.attach&&(a+=this.pageYOffset),"".concat(this.calcYOverflow(a),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(l["i"])(this.maxWidth),minWidth:Object(l["i"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(l["v"])(this,"activator",!0)&&Object(u["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=a["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===l["A"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(i["a"])(t,this.contentClass,!0),Object(i["a"])(t,"menuable__content__active",this.isActive),Object(i["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"49e2":function(t,e,n){"use strict";var i=n("0789"),a=n("9d65"),s=n("a9ad"),o=n("3206"),r=n("80d2"),c=n("58df"),l=Object(c["a"])(a["a"],s["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));e["a"]=l.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(t,e){var n=this;t&&(this.isBooted=!0),null==e?this.isActive=t:this.$nextTick((function(){return n.isActive=t}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(t){var e=this;return t(i["a"],this.showLazyContent((function(){return[t("div",e.setBackgroundColor(e.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:e.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(r["u"])(e))])]})))}})},9734:function(t,e,n){},c6f8:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.techniques.length>0?n("div",{staticClass:"flex flex-row flex-wrap mb-2"},[t.showTitle?n("span",{staticClass:"mr-2"},[t._v("Techniques:")]):t._e(),t._l(t.techniques.filter((function(t){return""!==t})),(function(e){return n("v-chip",{key:e,staticClass:"mr-1 mb-1",attrs:{small:"",href:"https://attack.mitre.org/techniques/"+e,target:"_blank",color:"green"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()},a=[],s={name:"TechniqueChips",props:{techniques:{type:Array,default:function(){return[]}},showTitle:{type:Boolean,default:!0}}},o=s,r=n("2877"),c=n("6544"),l=n.n(c),u=n("cc20"),h=Object(r["a"])(o,i,a,!1,null,null,null);e["a"]=h.exports;l()(h,{VChip:u["a"]})},c865:function(t,e,n){"use strict";var i=n("5530"),a=n("0789"),s=n("9d26"),o=n("a9ad"),r=n("3206"),c=n("5607"),l=n("80d2"),u=n("58df"),h=Object(u["a"])(o["a"],Object(r["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));e["a"]=h.extend().extend({name:"v-expansion-panel-header",directives:{ripple:c["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(t){this.$emit("click",t)},genIcon:function(){var t=Object(l["u"])(this,"actions")||[this.$createElement(s["a"],this.expandIcon)];return this.$createElement(a["d"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render:function(t){var e=this;return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return e.hasMousedown=!0},mouseup:function(){return e.hasMousedown=!1}})}),[Object(l["u"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(t,e,n){"use strict";var i=n("5530"),a=n("4e82"),s=n("3206"),o=n("80d2"),r=n("58df");e["a"]=Object(r["a"])(Object(a["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(s["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(t){this.content=t},unregisterContent:function(){this.content=null},registerHeader:function(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var t=this;this.$nextTick((function(){return t.$emit("change")}))}},render:function(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(o["u"])(this))}})},ee2d:function(t,e,n){"use strict";var i=n("2e9b"),a=n.n(i);a.a}}]);
//# sourceMappingURL=plugin-edit.cc4f50ca.js.map