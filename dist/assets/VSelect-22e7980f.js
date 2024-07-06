import{J as d,bF as y,aY as k,T as p,b4 as m,bG as S,K as c,aQ as _,b as g,bH as T,I as C,b7 as v,aI as I,S as V,e as f,h as D,i as A,V as M,f as w,aG as h,d as B,ba as L,j as r,aK as E,b9 as O,X as b,k as P,aH as l,bI as F,bJ as H}from"./index-e409ba63.js";const K=d(c,S,m,p,k("chipGroup"),y("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...m.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return!!this.close},isClickable(){return!!(m.options.computed.isClickable.call(this)||this.chipGroup)}},created(){[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach(([t,s])=>{this.$attrs.hasOwnProperty(t)&&_(t,s,this)})},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(g,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(T,e)},genClose(){return this.$createElement(g,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:s,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const n=this.textColor||this.outlined&&this.color;return e(s,this.setTextColor(n,i),t)}});const j=C.extend({name:"v-simple-checkbox",functional:!0,directives:{Ripple:v},props:{...c.options.props,...p.options.props,disabled:Boolean,ripple:{type:Boolean,default:!0},value:Boolean,indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},onIcon:{type:String,default:"$checkboxOn"},offIcon:{type:String,default:"$checkboxOff"}},render(e,{props:t,data:s,listeners:i}){const n=[];let o=t.offIcon;if(t.indeterminate?o=t.indeterminateIcon:t.value&&(o=t.onIcon),n.push(e(g,c.options.methods.setTextColor(t.value&&t.color,{props:{disabled:t.disabled,dark:t.dark,light:t.light}}),o)),t.ripple&&!t.disabled){const a=e("div",c.options.methods.setTextColor(t.color,{staticClass:"v-input--selection-controls__ripple",directives:[{def:v,name:"ripple",value:{center:!0}}]}));n.push(a)}return e("div",I(s,{class:{"v-simple-checkbox":!0,"v-simple-checkbox--disabled":t.disabled},on:{click:a=>{a.stopPropagation(),s.on&&s.on.input&&!t.disabled&&V(s.on.input).forEach(u=>u(!t.value))}}}),[e("div",{staticClass:"v-input--selection-controls__input"},n)])}});const G=d(p).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),$=d(c,p).extend({name:"v-select-list",directives:{ripple:v},props:{action:Boolean,dense:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},noDataText:String,noFilter:Boolean,searchInput:null,selectedItems:{type:Array,default:()=>[]}},computed:{parsedItems(){return this.selectedItems.map(e=>this.getValue(e))},tileActiveClass(){return Object.keys(this.setTextColor(this.color).class||{}).join(" ")},staticNoDataTile(){const e={attrs:{role:void 0},on:{mousedown:t=>t.preventDefault()}};return this.$createElement(f,e,[this.genTileContent(this.noDataText)])}},methods:{genAction(e,t){return this.$createElement(D,[this.$createElement(j,{props:{color:this.color,value:t,ripple:!1},on:{input:()=>this.$emit("select",e)}})])},genDivider(e){return this.$createElement(A,{props:e})},genFilteredText(e){if(e=e||"",!this.searchInput||this.noFilter)return e;const{start:t,middle:s,end:i}=this.getMaskedCharacters(e);return[t,this.genHighlight(s),i]},genHeader(e){return this.$createElement(G,{props:e},e.header)},genHighlight(e){return this.$createElement("span",{staticClass:"v-list-item__mask"},e)},getMaskedCharacters(e){const t=(this.searchInput||"").toString().toLocaleLowerCase(),s=e.toLocaleLowerCase().indexOf(t);if(s<0)return{start:e,middle:"",end:""};const i=e.slice(0,s),n=e.slice(s,s+t.length),o=e.slice(s+t.length);return{start:i,middle:n,end:o}},genTile({item:e,index:t,disabled:s=null,value:i=!1}){i||(i=this.hasItem(e)),e===Object(e)&&(s=s!==null?s:this.getDisabled(e));const n={attrs:{"aria-selected":String(i),id:`list-item-${this._uid}-${t}`,role:"option"},on:{mousedown:u=>{u.preventDefault()},click:()=>s||this.$emit("select",e)},props:{activeClass:this.tileActiveClass,disabled:s,ripple:!0,inputValue:i}};if(!this.$scopedSlots.item)return this.$createElement(f,n,[this.action&&!this.hideSelected&&this.items.length>0?this.genAction(e,i):null,this.genTileContent(e,t)]);const o=this,a=this.$scopedSlots.item({parent:o,item:e,attrs:{...n.attrs,...n.props},on:n.on});return this.needsTile(a)?this.$createElement(f,n,a):a},genTileContent(e,t=0){return this.$createElement(M,[this.$createElement(w,[this.genFilteredText(this.getText(e))])])},hasItem(e){return this.parsedItems.indexOf(this.getValue(e))>-1},needsTile(e){return e.length!==1||e[0].componentOptions==null||e[0].componentOptions.Ctor.options.name!=="v-list-item"},getDisabled(e){return!!h(e,this.itemDisabled,!1)},getText(e){return String(h(e,this.itemText,e))},getValue(e){return h(e,this.itemValue,this.getText(e))}},render(){const e=[],t=this.items.length;for(let s=0;s<t;s++){const i=this.items[s];this.hideSelected&&this.hasItem(i)||(i==null?e.push(this.genTile({item:i,index:s})):i.header?e.push(this.genHeader(i)):i.divider?e.push(this.genDivider(i)):e.push(this.genTile({item:i,index:s})))}return e.length||e.push(this.$slots["no-data"]||this.staticNoDataTile),this.$slots["prepend-item"]&&e.unshift(this.$slots["prepend-item"]),this.$slots["append-item"]&&e.push(this.$slots["append-item"]),this.$createElement(B,{staticClass:"v-select-list",class:this.themeClasses,attrs:{role:"listbox",tabindex:-1},props:{dense:this.dense}},e)}}),z=C.extend({name:"filterable",props:{noDataText:{type:String,default:"$vuetify.noDataText"}}}),x={closeOnClick:!1,closeOnContentClick:!1,disableKeys:!0,openOnClick:!1,maxHeight:304},R=d(r,H,F,z),J=R.extend().extend({name:"v-select",directives:{ClickOutside:L},props:{appendIcon:{type:String,default:"$dropdown"},attach:{type:null,default:!1},cacheItems:Boolean,chips:Boolean,clearable:Boolean,deletableChips:Boolean,disableLookup:Boolean,eager:Boolean,hideSelected:Boolean,items:{type:Array,default:()=>[]},itemColor:{type:String,default:"primary"},itemDisabled:{type:[String,Array,Function],default:"disabled"},itemText:{type:[String,Array,Function],default:"text"},itemValue:{type:[String,Array,Function],default:"value"},menuProps:{type:[String,Array,Object],default:()=>x},multiple:Boolean,openOnClear:Boolean,returnObject:Boolean,smallChips:Boolean},data(){return{cachedItems:this.cacheItems?this.items:[],menuIsBooted:!1,isMenuActive:!1,lastItem:20,lazyValue:this.value!==void 0?this.value:this.multiple?[]:void 0,selectedIndex:-1,selectedItems:[],keyboardLookupPrefix:"",keyboardLookupLastTime:0}},computed:{allItems(){return this.filterDuplicates(this.cachedItems.concat(this.items))},classes(){return{...r.options.computed.classes.call(this),"v-select":!0,"v-select--chips":this.hasChips,"v-select--chips--small":this.smallChips,"v-select--is-menu-active":this.isMenuActive,"v-select--is-multi":this.multiple}},computedItems(){return this.allItems},computedOwns(){return`list-${this._uid}`},computedCounterValue(){var e;const t=this.multiple?this.selectedItems:((e=this.getText(this.selectedItems[0]))!==null&&e!==void 0?e:"").toString();return typeof this.counterValue=="function"?this.counterValue(t):t.length},directives(){return this.isFocused?[{name:"click-outside",value:{handler:this.blur,closeConditional:this.closeConditional,include:()=>this.getOpenDependentElements()}}]:void 0},dynamicHeight(){return"auto"},hasChips(){return this.chips||this.smallChips},hasSlot(){return!!(this.hasChips||this.$scopedSlots.selection)},isDirty(){return this.selectedItems.length>0},listData(){const e=this.$vnode&&this.$vnode.context.$options._scopeId;return{attrs:{...e?{[e]:!0}:{},id:this.computedOwns},props:{action:this.multiple,color:this.itemColor,dense:this.dense,hideSelected:this.hideSelected,items:this.virtualizedItems,itemDisabled:this.itemDisabled,itemText:this.itemText,itemValue:this.itemValue,noDataText:this.$vuetify.lang.t(this.noDataText),selectedItems:this.selectedItems},on:{select:this.selectItem},scopedSlots:{item:this.$scopedSlots.item}}},staticList(){return(this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"])&&E("assert: staticList should not be called if slots are used"),this.$createElement($,this.listData)},virtualizedItems(){return this.$_menuProps.auto?this.computedItems:this.computedItems.slice(0,this.lastItem)},menuCanShow:()=>!0,$_menuProps(){let e=typeof this.menuProps=="string"?this.menuProps.split(","):this.menuProps;return Array.isArray(e)&&(e=e.reduce((t,s)=>(t[s.trim()]=!0,t),{})),{...x,eager:this.eager,value:this.menuCanShow&&this.isMenuActive,nudgeBottom:e.offsetY?1:0,...e}}},watch:{internalValue(e){this.initialValue=e,this.setSelectedItems(),this.multiple&&this.$nextTick(()=>{var t;(t=this.$refs.menu)===null||t===void 0||t.updateDimensions()})},isMenuActive(e){window.setTimeout(()=>this.onMenuActiveChange(e))},items:{immediate:!0,handler(e){this.cacheItems&&this.$nextTick(()=>{this.cachedItems=this.filterDuplicates(this.cachedItems.concat(e))}),this.setSelectedItems()}}},methods:{blur(e){r.options.methods.blur.call(this,e),this.isMenuActive=!1,this.isFocused=!1,this.selectedIndex=-1,this.setMenuIndex(-1)},activateMenu(){!this.isInteractive||this.isMenuActive||(this.isMenuActive=!0)},clearableCallback(){this.setValue(this.multiple?[]:null),this.setMenuIndex(-1),this.$nextTick(()=>this.$refs.input&&this.$refs.input.focus()),this.openOnClear&&(this.isMenuActive=!0)},closeConditional(e){return this.isMenuActive?!this._isDestroyed&&(!this.getContent()||!this.getContent().contains(e.target))&&this.$el&&!this.$el.contains(e.target)&&e.target!==this.$el:!0},filterDuplicates(e){const t=new Map;for(let s=0;s<e.length;++s){const i=e[s];if(i==null)continue;if(i.header||i.divider){t.set(i,i);continue}const n=this.getValue(i);!t.has(n)&&t.set(n,i)}return Array.from(t.values())},findExistingIndex(e){const t=this.getValue(e);return(this.internalValue||[]).findIndex(s=>this.valueComparator(this.getValue(s),t))},getContent(){return this.$refs.menu&&this.$refs.menu.$refs.content},genChipSelection(e,t){const s=this.isDisabled||this.getDisabled(e),i=!s&&this.isInteractive;return this.$createElement(K,{staticClass:"v-chip--select",attrs:{tabindex:-1},props:{close:this.deletableChips&&i,disabled:s,inputValue:t===this.selectedIndex,small:this.smallChips},on:{click:n=>{i&&(n.stopPropagation(),this.selectedIndex=t)},"click:close":()=>this.onChipInput(e)},key:JSON.stringify(this.getValue(e))},this.getText(e))},genCommaSelection(e,t,s){const i=t===this.selectedIndex&&this.computedColor,n=this.isDisabled||this.getDisabled(e);return this.$createElement("div",this.setTextColor(i,{staticClass:"v-select__selection v-select__selection--comma",class:{"v-select__selection--disabled":n},key:JSON.stringify(this.getValue(e))}),`${this.getText(e)}${s?"":", "}`)},genDefaultSlot(){const e=this.genSelections(),t=this.genInput();return Array.isArray(e)?e.push(t):(e.children=e.children||[],e.children.push(t)),[this.genFieldset(),this.$createElement("div",{staticClass:"v-select__slot",directives:this.directives},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,e,this.suffix?this.genAffix("suffix"):null,this.genClearIcon(),this.genIconSlot(),this.genHiddenInput()]),this.genMenu(),this.genProgress()]},genIcon(e,t,s){const i=O.options.methods.genIcon.call(this,e,t,s);return e==="append"&&(i.children[0].data=I(i.children[0].data,{attrs:{tabindex:i.children[0].componentOptions.listeners&&"-1","aria-hidden":"true","aria-label":void 0}})),i},genInput(){const e=r.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data=I(e.data,{domProps:{value:null},attrs:{readonly:!0,type:"text","aria-readonly":String(this.isReadonly),"aria-activedescendant":b(this.$refs.menu,"activeTile.id"),autocomplete:b(e.data,"attrs.autocomplete","off"),placeholder:!this.isDirty&&(this.persistentPlaceholder||this.isFocused||!this.hasLabel)?this.placeholder:void 0},on:{keypress:this.onKeyPress}}),e},genHiddenInput(){return this.$createElement("input",{domProps:{value:this.lazyValue},attrs:{type:"hidden",name:this.attrs$.name}})},genInputSlot(){const e=r.options.methods.genInputSlot.call(this);return e.data.attrs={...e.data.attrs,role:"button","aria-haspopup":"listbox","aria-expanded":String(this.isMenuActive),"aria-owns":this.computedOwns},e},genList(){return this.$slots["no-data"]||this.$slots["prepend-item"]||this.$slots["append-item"]?this.genListWithSlot():this.staticList},genListWithSlot(){const e=["prepend-item","no-data","append-item"].filter(t=>this.$slots[t]).map(t=>this.$createElement("template",{slot:t},this.$slots[t]));return this.$createElement($,{...this.listData},e)},genMenu(){const e=this.$_menuProps;return e.activator=this.$refs["input-slot"],this.attach===""||this.attach===!0||this.attach==="attach"?e.attach=this.$el:e.attach=this.attach,this.$createElement(P,{attrs:{role:void 0},props:e,on:{input:t=>{this.isMenuActive=t,this.isFocused=t},scroll:this.onScroll},ref:"menu"},[this.genList()])},genSelections(){let e=this.selectedItems.length;const t=new Array(e);let s;for(this.$scopedSlots.selection?s=this.genSlotSelection:this.hasChips?s=this.genChipSelection:s=this.genCommaSelection;e--;)t[e]=s(this.selectedItems[e],e,e===t.length-1);return this.$createElement("div",{staticClass:"v-select__selections"},t)},genSlotSelection(e,t){return this.$scopedSlots.selection({attrs:{class:"v-chip--select"},parent:this,item:e,index:t,select:s=>{s.stopPropagation(),this.selectedIndex=t},selected:t===this.selectedIndex,disabled:!this.isInteractive})},getMenuIndex(){return this.$refs.menu?this.$refs.menu.listIndex:-1},getDisabled(e){return h(e,this.itemDisabled,!1)},getText(e){return h(e,this.itemText,e)},getValue(e){return h(e,this.itemValue,this.getText(e))},onBlur(e){e&&this.$emit("blur",e)},onChipInput(e){this.multiple?this.selectItem(e):this.setValue(null),this.selectedItems.length===0?this.isMenuActive=!0:this.isMenuActive=!1,this.selectedIndex=-1},onClick(e){this.isInteractive&&(this.isAppendInner(e.target)||(this.isMenuActive=!0),this.isFocused||(this.isFocused=!0,this.$emit("focus")),this.$emit("click",e))},onEscDown(e){e.preventDefault(),this.isMenuActive&&(e.stopPropagation(),this.isMenuActive=!1)},onKeyPress(e){if(this.multiple||!this.isInteractive||this.disableLookup||e.key.length>1||e.ctrlKey||e.metaKey||e.altKey)return;const t=1e3,s=performance.now();s-this.keyboardLookupLastTime>t&&(this.keyboardLookupPrefix=""),this.keyboardLookupPrefix+=e.key.toLowerCase(),this.keyboardLookupLastTime=s;const i=this.allItems.findIndex(o=>{var a;return((a=this.getText(o))!==null&&a!==void 0?a:"").toString().toLowerCase().startsWith(this.keyboardLookupPrefix)}),n=this.allItems[i];i!==-1&&(this.lastItem=Math.max(this.lastItem,i+5),this.setValue(this.returnObject?n:this.getValue(n)),this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(i)))},onKeyDown(e){if(this.isReadonly&&e.keyCode!==l.tab)return;const t=e.keyCode,s=this.$refs.menu;if(this.$emit("keydown",e),!!s){if(this.isMenuActive&&[l.up,l.down,l.home,l.end,l.enter].includes(t)&&this.$nextTick(()=>{s.changeListIndex(e),this.$emit("update:list-index",s.listIndex)}),[l.enter,l.space].includes(t)&&this.activateMenu(),!this.isMenuActive&&[l.up,l.down,l.home,l.end].includes(t))return this.onUpDown(e);if(t===l.esc)return this.onEscDown(e);if(t===l.tab)return this.onTabDown(e);if(t===l.space)return this.onSpaceDown(e)}},onMenuActiveChange(e){if(this.multiple&&!e||this.getMenuIndex()>-1)return;const t=this.$refs.menu;if(!(!t||!this.isDirty)){this.$refs.menu.getTiles();for(let s=0;s<t.tiles.length;s++)if(t.tiles[s].getAttribute("aria-selected")==="true"){this.setMenuIndex(s);break}}},onMouseUp(e){this.hasMouseDown&&e.which!==3&&this.isInteractive&&this.isAppendInner(e.target)&&this.$nextTick(()=>this.isMenuActive=!this.isMenuActive),r.options.methods.onMouseUp.call(this,e)},onScroll(){if(!this.isMenuActive)requestAnimationFrame(()=>this.getContent().scrollTop=0);else{if(this.lastItem>this.computedItems.length)return;this.getContent().scrollHeight-(this.getContent().scrollTop+this.getContent().clientHeight)<200&&(this.lastItem+=20)}},onSpaceDown(e){e.preventDefault()},onTabDown(e){const t=this.$refs.menu;if(!t)return;const s=t.activeTile;!this.multiple&&s&&this.isMenuActive?(e.preventDefault(),e.stopPropagation(),s.click()):this.blur(e)},onUpDown(e){const t=this.$refs.menu;if(!t)return;if(e.preventDefault(),this.multiple)return this.activateMenu();const s=e.keyCode;t.isBooted=!0,window.requestAnimationFrame(()=>{if(t.getTiles(),!t.hasClickableTiles)return this.activateMenu();switch(s){case l.up:t.prevTile();break;case l.down:t.nextTile();break;case l.home:t.firstTile();break;case l.end:t.lastTile();break}this.selectItem(this.allItems[this.getMenuIndex()])})},selectItem(e){if(!this.multiple)this.setValue(this.returnObject?e:this.getValue(e)),this.isMenuActive=!1;else{const t=(this.internalValue||[]).slice(),s=this.findExistingIndex(e);if(s!==-1?t.splice(s,1):t.push(e),this.setValue(t.map(i=>this.returnObject?i:this.getValue(i))),this.hideSelected)this.setMenuIndex(-1);else{const i=this.allItems.indexOf(e);~i&&(this.$nextTick(()=>this.$refs.menu.getTiles()),setTimeout(()=>this.setMenuIndex(i)))}}},setMenuIndex(e){this.$refs.menu&&(this.$refs.menu.listIndex=e)},setSelectedItems(){const e=[],t=!this.multiple||!Array.isArray(this.internalValue)?[this.internalValue]:this.internalValue;for(const s of t){const i=this.allItems.findIndex(n=>this.valueComparator(this.getValue(n),this.getValue(s)));i>-1&&e.push(this.allItems[i])}this.selectedItems=e},setValue(e){this.valueComparator(e,this.internalValue)||(this.internalValue=e,this.$emit("change",e))},isAppendInner(e){const t=this.$refs["append-inner"];return t&&(t===e||t.contains(e))}}});export{J as V,G as _,K as a,j as b,x as d};
