import{z as a,A as r,B as o}from"./index-e409ba63.js";const h={methods:{async copyStager(t){try{await navigator.clipboard.writeText(t),this.$snack.success("Output copied to clipboard")}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}}}};function p(t){return a.get(`/stagers/${t}`).then(({data:e})=>e).catch(e=>Promise.reject(r(e)))}function n(){return a.get("/stagers").then(({data:t})=>t.records).catch(t=>Promise.reject(r(t)))}function m(t){return a.get(`/stager-templates/${t}`).then(({data:e})=>e).catch(e=>Promise.reject(r(e)))}function l(t,e,s){return a.post("/stagers",{name:e,template:t,options:s}).then(({data:c})=>c).catch(c=>Promise.reject(r(c)))}function d(t,e){return a.put(`/stagers/${t}`,e).then(({data:s})=>s).catch(s=>Promise.reject(r(s)))}function i(){return a.get("/stager-templates").then(({data:t})=>t.records).catch(t=>Promise.reject(r(t)))}function g(t){return a.delete(`/stagers/${t}`).catch(e=>Promise.reject(r(e)))}const S=o("stager",{state:()=>({stagers:[],templates:[],status:"success"}),actions:{async getStagers(){this.status="loading";const t=await n();this.stagers=t,this.status="success"},async getStagerTemplates(){const t=await i();this.templates=t},async deleteStager(t){await g(t),this.removeStager(t)},removeStager(t){const e=this.stagers.findIndex(s=>s.id===t);e>-1&&this.stagers.splice(e,1)}},getters:{templateIds:t=>[...t.templates.map(e=>e.id)].sort()}});export{h as C,d as a,p as b,l as c,m as g,S as u};
