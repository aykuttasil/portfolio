import{n as c,s as g}from"./scheduler.7a274a43.js";const e=[];function q(o,l=c){let i;const n=new Set;function b(t){if(g(o,t)&&(o=t,i)){const r=!e.length;for(const s of n)s[1](),e.push(s,o);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){b(t(o))}function _(t,r=c){const s=[t,r];return n.add(s),n.size===1&&(i=l(b,f)||c),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:b,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_gkq8bb)==null?void 0:u.base)??"/portfolio";var a;const d=((a=globalThis.__sveltekit_gkq8bb)==null?void 0:a.assets)??p;export{d as a,p as b,q as w};
