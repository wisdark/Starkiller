import{_ as i}from"./GeneralForm.3e2538c0.js";import{_ as s}from"./ErrorStateAlert.1e369898.js";import{_ as a}from"./EditPageTop.ae162017.js";import{n,ba as d,bb as l,bc as u,ab as c}from"./index.81c4d563.js";import"./VSwitch.35d52e8f.js";import"./VSelect.0bed7eeb.js";import"./index.1e892548.js";import"./VRow.2b8953c0.js";import"./index.724a936b.js";import"./TooltipButton.21f18540.js";import"./VTooltip.97c87792.js";import"./VBreadcrumbs.8405c320.js";const h={name:"CredentialEdit",components:{GeneralForm:i,ErrorStateAlert:s,EditPageTop:a},data(){return{reset:!0,loading:!1,initialLoad:!1,credential:{},form:{},errorState:!1}},computed:{breads(){return[{text:"Credentials",disabled:!1,to:"/credentials",exact:!0},{text:this.id&&!this.isCopy?`${this.id}`:"New",disabled:!0,to:"/credential-edit"}]},isNew(){return this.$route.name==="credentialNew"},isCopy(){return this.$route.params.copy===!0},mode(){return this.isCopy?"Copy":this.isNew?"New":"Edit"},canEdit(){return!0},id(){return this.isCopy?0:this.$route.params.id},copyLink(){return this.id>0?{name:"credentialNew",params:{copy:!0,id:this.id}}:{}},options(){const t={credtype:{required:!0,strict:!0,suggested_values:["plaintext","hash"]},domain:{required:!0},username:{required:!0},password:{required:!0},host:{required:!0},os:{required:!1},sid:{required:!1},notes:{required:!1}};return Object.keys(this.credential).forEach(e=>{e!=="id"&&t[e]&&(t[e].value=this.credential[e])}),t}},mounted(){!this.isNew||this.isCopy?this.getCredential(this.$route.params.id):this.initialLoad=!0},methods:{submit(){this.loading||!this.$refs.generalform.$refs.form.validate()||(this.loading=!0,this.id>0?d(this.id,this.form).then(()=>{this.loading=!1}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}):l(this.form).then(({id:t})=>{this.loading=!1,this.$router.push({name:"credentialEdit",params:{id:t}})}).catch(t=>{this.$snack.error(`Error: ${t}`),this.loading=!1}),this.loading=!1)},async deleteCredential(){if(await this.$root.$confirm("Delete",`Are you sure you want to delete credential ${this.id}?`,{color:"red"}))try{this.$store.dispatch("credential/deleteCredential",this.id),this.$router.push({name:"credentials"})}catch(t){this.$snack.error(`Error: ${t}`)}},getCredential(t){u(t).then(e=>{this.reset=!1,this.credential=e,this.initialLoad=!0,setTimeout(()=>{this.reset=!0},500)}).catch(()=>{this.errorState=!0})}}};var m=function(){var e=this,r=e._self._c;return r("div",[r(a,{attrs:{breads:e.breads,"show-submit":e.initialLoad,"show-copy":e.id>0&&e.initialLoad,"show-delete":e.id>0&&e.initialLoad,"submit-loading":e.loading&&e.initialLoad,"copy-link":e.copyLink,"small-copy":!0,"small-delete":!0},on:{submit:e.submit,delete:e.deleteCredential}}),r("h3",[e._v(e._s(e.mode)+" Credential")]),e.errorState?r(s,{attrs:{"resource-id":e.id,"resource-type":"credential"}}):r(c,{staticStyle:{padding:"10px"}},[e.reset?r(i,{ref:"generalform",attrs:{options:e.options,readonly:!e.canEdit},model:{value:e.form,callback:function(o){e.form=o},expression:"form"}}):e._e()],1)],1)},p=[],f=n(h,m,p,!1,null,null,null,null);const q=f.exports;export{q as default};
