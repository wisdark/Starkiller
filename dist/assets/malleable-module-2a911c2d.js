import{B as i}from"./index-e409ba63.js";import{a as s,d as o}from"./malleable-api-09135b63.js";const f=i("malleableProfile",{state:()=>({malleableProfiles:[]}),actions:{async getMalleableProfiles(){const e=await s();this.malleableProfiles=e},async deleteMalleableProfile(e){await o(e);const l=this.malleableProfiles.findIndex(a=>a.id===e);l>-1&&this.malleableProfiles.splice(l,1)}},getters:{profileNames:e=>e.malleableProfiles.map(l=>l.name)}});export{f as u};
