import{z as l,A as t}from"./index-e409ba63.js";function c(){return l.get("/malleable-profiles").then(({data:e})=>e.records).catch(e=>Promise.reject(t(e)))}function n(e,r,a){return l.post("/malleable-profiles",{name:e,category:r,data:a}).then(({data:o})=>o).catch(o=>Promise.reject(t(o)))}function i(e,r){return l.put(`/malleable-profiles/${e}`,{data:r}).then(({data:a})=>a).catch(a=>Promise.reject(t(a)))}function f(e){return l.get(`/malleable-profiles/${e}`).then(({data:r})=>r).catch(r=>Promise.reject(t(r)))}function u(e){return l.delete(`/malleable-profiles/${e}`).then(({data:r})=>r).catch(r=>Promise.reject(t(r)))}function m(){return l.post("/malleable-profiles/reset").then(({data:e})=>e).catch(e=>Promise.reject(t(e)))}function h(){return l.post("/malleable-profiles/reload").then(({data:e})=>e).catch(e=>Promise.reject(t(e)))}export{c as a,h as b,n as c,u as d,f as g,m as r,i as u};
