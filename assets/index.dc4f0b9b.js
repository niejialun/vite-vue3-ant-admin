var e=Object.defineProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,t=(a,r,s)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s;import{_ as o,o as c,c as p,a as l,w as n,u as i,B as u,b as d,d as f,e as y,f as b,g as m}from"./index.2c86c865.js";const v={class:"login-wrapper fullscreen"},w=d(" 登录 ");var O=o({setup(e){const o=f(),d=y(),O=b(),g=async()=>{await O.dispatch("user/login",{});const e=((e,o)=>{for(var c in o||(o={}))r.call(o,c)&&t(e,c,o[c]);if(a)for(var c of a(o))s.call(o,c)&&t(e,c,o[c]);return e})({},d.query),c=e.from;c?(delete e.from,o.replace({path:decodeURIComponent(c),query:e})):o.replace("/"),m.success("登录成功")};return(e,a)=>(c(),p("div",v,[l(i(u),{type:"primary",onClick:g},{default:n((()=>[w])),_:1})]))}},[["__scopeId","data-v-1c9e9d82"]]);export{O as default};
