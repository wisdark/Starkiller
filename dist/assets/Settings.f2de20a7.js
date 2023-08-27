import{_ as n}from"./ListPageTop.c38f02eb.js";import{i as d,bm as c,bn as u,bo as p,bp as f,bq as h,br as m,bs as _,bt as g,n as v,b as o,o as r,ao as w,j as l}from"./index.f0e6e38b.js";import{_ as i}from"./VSwitch.f8266b20.js";import"./VBreadcrumbs.2e2663d0.js";const y={components:{ListPageTop:n},data(){return{password:{form:{},loading:!1},rules:{password:[a=>!!a||"Password is required",a=>!!a&&a.length>5||"Password must be larger than 5 characters"],confirmPassword:[a=>!!a||"Confirmation is required",a=>a===this.password.form.password||"Password must match"]},modules:{loading:!1},bypasses:{loading:!1},profiles:{loading:!1},plugins:{loading:!1},showPassword:!1,showConfirm:!1,valid:!1,breads:[{text:"Settings",disabled:!0,href:"/settings"}]}},computed:{...d({user:a=>a.application.user,darkMode:a=>a.application.darkMode,chatWidget:a=>a.application.chatWidget}),userId(){return this.user.id},darkModeSwitch:{set(a){this.$store.dispatch("application/darkMode",a)},get(){return this.darkMode}},chatWidgetSwitch:{set(a){this.$store.dispatch("application/chatWidget",a)},get(){return this.chatWidget}}},methods:{async logout(){await this.$root.$confirm("","Are you sure you want to logout?",{color:"green"})&&this.$store.dispatch("application/logout")},clearState(){this.$store.dispatch("application/clear")},submit(){this.password.loading||!this.$refs.form.validate()||(this.password.loading=!0,c(this.user.id,this.password.form.password).then(()=>{this.$snack.success("Password updated"),this.password.form={},this.$refs.form.resetValidation()}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.password.loading=!1}))},resetProfiles(){this.profiles.loading=!0,u().then(()=>{this.$snack.success("Profiles reset successful")}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.profiles.loading=!1})},reloadProfiles(){this.profiles.loading=!0,p().then(()=>{this.$snack.success("Profiles reload successful")}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.profiles.loading=!1})},reloadModules(){this.modules.loading=!0,f().then(()=>{this.$snack.success("Module reload successful")}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.modules.loading=!1})},resetModules(){this.modules.loading=!0,h().then(()=>{this.$snack.success("Module reset successful")}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.modules.loading=!1})},reloadBypasses(){this.bypasses.loading=!0,m().then(()=>{this.$snack.success("Bypass reload successful")}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.bypasses.loading=!1})},resetBypasses(){this.bypasses.loading=!0,_().then(()=>{this.$snack.success("Bypass reset successful")}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.bypasses.loading=!1})},reloadPlugins(){this.plugins.loading=!0,g().then(()=>{this.$snack.success("Plugin reload successful")}).catch(a=>{this.$snack.error(`Error: ${a}`)}).finally(()=>{this.plugins.loading=!1})}}};var b=function(){var s=this,e=s._self._c;return e("div",[e(n,{attrs:{breads:s.breads}}),e("div",{staticClass:"page"},[e("div",{staticClass:"first-part"},[e("span",[s._v(s._s(s.user.username))]),e(o,{attrs:{color:"primary",text:""},on:{click:s.logout}},[s._v(" Logout ")])],1),e(r),e("div",{staticStyle:{display:"flex","flex-direction":"row"}},[e(i,{attrs:{label:"Dark Mode"},model:{value:s.darkModeSwitch,callback:function(t){s.darkModeSwitch=t},expression:"darkModeSwitch"}}),e(i,{staticClass:"pl-8",attrs:{label:"Chat Widget"},model:{value:s.chatWidgetSwitch,callback:function(t){s.chatWidgetSwitch=t},expression:"chatWidgetSwitch"}})],1),e(r),s._m(0),e(w,{ref:"form",staticStyle:{"max-width":"500px"},nativeOn:{submit:function(t){return t.preventDefault(),s.submit.apply(null,arguments)}},model:{value:s.valid,callback:function(t){s.valid=t},expression:"valid"}},[e(l,{attrs:{type:s.showPassword?"text":"password","append-icon":s.showPassword?"fa-eye":"fa-eye-slash",rules:s.rules.password,label:"Password",autocomplete:"off",outlined:"",dense:"",required:""},on:{"click:append":function(t){s.showPassword=!s.showPassword}},model:{value:s.password.form.password,callback:function(t){s.$set(s.password.form,"password",t)},expression:"password.form.password"}}),e(l,{attrs:{type:s.showConfirm?"text":"password","append-icon":s.showConfirm?"fa-eye":"fa-eye-slash",rules:s.rules.confirmPassword,label:"Confirm Password",autocomplete:"off",outlined:"",dense:"",required:""},on:{"click:append":function(t){s.showConfirm=!s.showConfirm}},model:{value:s.password.form.confirmPassword,callback:function(t){s.$set(s.password.form,"confirmPassword",t)},expression:"password.form.confirmPassword"}}),e(o,{staticClass:"mt-4 mb-4 primary",attrs:{type:"submit",loading:s.password.loading}},[s._v(" submit ")])],1),e(r),e("div",{staticClass:"headers pl-0 mt-2"},[s._m(1),e(o,{attrs:{color:"error"},on:{click:s.clearState}},[s._v(" Clear ")])],1),e(r),e("div",{staticClass:"headers pl-0 mt-2"},[s._m(2),e("div",{staticClass:"d-flex justify-end"},[e(o,{staticClass:"ml-2 mr-2",attrs:{loading:s.profiles.loading,color:"primary"},on:{click:s.reloadProfiles}},[s._v(" Reload ")]),e(o,{staticClass:"ml-2",attrs:{loading:s.profiles.loading,color:"error"},on:{click:s.resetProfiles}},[s._v(" Reset to Defaults ")])],1)]),e(r),e("div",{staticClass:"headers pl-0 mt-2"},[s._m(3),e("div",{staticClass:"d-flex justify-end"},[e(o,{staticClass:"ml-2 mr-2",attrs:{loading:s.modules.loading,color:"primary"},on:{click:s.reloadModules}},[s._v(" Reload ")]),e(o,{staticClass:"ml-2",attrs:{loading:s.modules.loading,color:"error"},on:{click:s.resetModules}},[s._v(" Reset to Defaults ")])],1)]),e(r),e("div",{staticClass:"headers pl-0 mt-2"},[s._m(4),e("div",{staticClass:"d-flex justify-end"},[e(o,{staticClass:"ml-2 mr-2",attrs:{loading:s.bypasses.loading,color:"primary"},on:{click:s.reloadBypasses}},[s._v(" Reload ")]),e(o,{staticClass:"ml-2",attrs:{loading:s.bypasses.loading,color:"error"},on:{click:s.resetBypasses}},[s._v(" Reset to Defaults ")])],1)]),e(r),e("div",{staticClass:"headers pl-0 mt-2"},[s._m(5),e(o,{attrs:{loading:s.plugins.loading,color:"error"},on:{click:s.reloadPlugins}},[s._v(" Reload ")])],1)],1)],1)},k=[function(){var a=this,s=a._self._c;return s("div",{staticClass:"headers pl-0 mt-2"},[s("h4",[a._v("Update Password")])])},function(){var a=this,s=a._self._c;return s("div",[s("h4",[a._v(" Clear Application State ")]),s("span",[a._v(" This will clear UI preferences and other localstorage data.")])])},function(){var a=this,s=a._self._c;return s("div",[s("h4",[a._v("Reload Malleable Profiles")]),s("span",[a._v(" Reload will check for and load new profile configurations."),s("br"),a._v(" Reset will do the same but also reset all database records to defaults. ")])])},function(){var a=this,s=a._self._c;return s("div",[s("h4",[a._v("Reload Modules")]),s("span",[a._v(" Reload will check for and load new module configurations."),s("br"),a._v(" Reset will do the same but also reset all database records to defaults. ")])])},function(){var a=this,s=a._self._c;return s("div",[s("h4",[a._v("Reload Bypasses")]),s("span",[a._v(" Reload will check for and load new bypass configurations."),s("br"),a._v(" Reset will do the same but also reset all database records to defaults. ")])])},function(){var a=this,s=a._self._c;return s("div",[s("h4",[a._v("Reload Plugins")]),s("span",[a._v("Reload will check for and load new plugins.")])])}],$=v(y,b,k,!1,null,null,null,null);const R=$.exports;export{R as default};
