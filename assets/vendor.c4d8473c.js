const xe=(e,t)=>e===t,P=Symbol("solid-proxy"),M={equals:xe};let te=fe;const N={},x=1,G=2,ne={owned:null,cleanups:null,context:null,owner:null};var h=null;let _=null,a=null,j=null,y=null,A=null,W=0;function I(e,t){t&&(h=t);const n=a,s=h,i=e.length===0?ne:{owned:null,cleanups:null,context:null,owner:s};h=i,a=null;let l;try{Q(()=>l=e(()=>J(i)),!0)}finally{a=n,h=s}return l}function se(e,t){t=t?Object.assign({},M,t):M;const n={value:e,observers:null,observerSlots:null,pending:N,comparator:t.equals||void 0};return[re.bind(n),s=>(typeof s=="function"&&(s=s(n.pending!==N?n.pending:n.value)),X(n,s))]}function Ce(e,t,n){const s=K(e,t,!0,x);k(s)}function H(e,t,n){const s=K(e,t,!1,x);k(s)}function Ee(e,t,n){te=Ne;const s=K(e,t,!1,x);s.user=!0,A&&A.push(s)}function C(e,t,n){n=n?Object.assign({},M,n):M;const s=K(e,t,!0,0);return s.pending=N,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,k(s),re.bind(s)}function ie(e){if(j)return e();let t;const n=j=[];try{t=e()}finally{j=null}return Q(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==N){const l=i.pending;i.pending=N,X(i,l)}}},!1),t}function O(e){let t,n=a;return a=null,t=e(),a=n,t}function Ie(e){Ee(()=>O(e))}function Oe(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function le(){return a}function Ke(e){const t=Symbol("context");return{id:t,Provider:Te(t),defaultValue:e}}function Re(e){return ae(h,e.id)||e.defaultValue}function oe(e){const t=C(e);return C(()=>Z(t()))}function re(){const e=_;if(this.sources&&(this.state||e)){const t=y;y=null,this.state===x||e?k(this):Y(this),y=t}if(a){const t=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(t)):(a.sources=[this],a.sourceSlots=[t]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function X(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(j)return e.pending===N&&j.push(e),e.pending=t,t;let s=!1;return e.value=t,e.observers&&e.observers.length&&Q(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&_.disposed.has(l),l.pure?y.push(l):A.push(l),l.observers&&(s&&!l.tState||!s&&!l.state)&&ce(l),s||(l.state=x)}if(y.length>1e6)throw y=[],new Error},!1),t}function k(e){if(!e.fn)return;J(e);const t=h,n=a,s=W;a=h=e,$e(e,e.value,s),a=n,h=t}function $e(e,t,n){let s;try{s=e.fn(t)}catch(i){ue(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?X(e,s):e.value=s,e.updatedAt=n)}function K(e,t,n,s=x,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:null,pure:n};return h===null||h!==ne&&(h.owned?h.owned.push(l):h.owned=[l]),l}function m(e){const t=_;if(e.state!==x)return e.state=0;if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<W);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===x||t)k(e);else if(e.state===G||t){const i=y;y=null,Y(e),y=i}}function Q(e,t){if(y)return e();let n=!1;t||(y=[]),A?n=!0:A=[],W++;try{e()}catch(s){ue(s)}finally{Pe(n)}}function Pe(e){y&&(fe(y),y=null),!e&&(A.length?ie(()=>{te(A),A=null}):A=null)}function fe(e){for(let t=0;t<e.length;t++)m(e[t])}function Ne(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:m(i)}const s=e.length;for(t=0;t<n;t++)m(e[t]);for(t=s;t<e.length;t++)m(e[t])}function Y(e){e.state=0;const t=_;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];s.sources&&(s.state===x||t?m(s):(s.state===G||t)&&Y(s))}}function ce(e){const t=_;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=G,s.pure?y.push(s):A.push(s),s.observers&&ce(s))}}function J(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)J(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ue(e){throw e}function ae(e,t){return e&&(e.context&&e.context[t]||e.owner&&ae(e.owner,t))}function Z(e){if(typeof e=="function"&&!e.length)return Z(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Z(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Te(e){return function(n){let s;return Ce(()=>s=O(()=>(h.context={[e]:n.value},oe(()=>n.children)))),s}}const _e=Symbol("fallback");function he(e){for(let t=0;t<e.length;t++)e[t]()}function je(e,t,n={}){let s=[],i=[],l=[],r=0,o=t.length>1?[]:null;return Oe(()=>he(l)),()=>{let c=e()||[],u,f;return O(()=>{let d=c.length,p,E,T,v,B,w,b,S,$;if(d===0)r!==0&&(he(l),l=[],s=[],i=[],r=0,o&&(o=[])),n.fallback&&(s=[_e],i[0]=I(Se=>(l[0]=Se,n.fallback())),r=1);else if(r===0){for(i=new Array(d),f=0;f<d;f++)s[f]=c[f],i[f]=I(g);r=d}else{for(T=new Array(d),v=new Array(d),o&&(B=new Array(d)),w=0,b=Math.min(r,d);w<b&&s[w]===c[w];w++);for(b=r-1,S=d-1;b>=w&&S>=w&&s[b]===c[S];b--,S--)T[S]=i[b],v[S]=l[b],o&&(B[S]=o[b]);for(p=new Map,E=new Array(S+1),f=S;f>=w;f--)$=c[f],u=p.get($),E[f]=u===void 0?-1:u,p.set($,f);for(u=w;u<=b;u++)$=s[u],f=p.get($),f!==void 0&&f!==-1?(T[f]=i[u],v[f]=l[u],o&&(B[f]=o[u]),f=E[f],p.set($,f)):l[u]();for(f=w;f<d;f++)f in T?(i[f]=T[f],l[f]=v[f],o&&(o[f]=B[f],o[f](f))):i[f]=I(g);i=i.slice(0,r=d),s=c.slice(0)}return i});function g(d){if(l[f]=d,o){const[p,E]=se(f);return o[f]=E,t(c[f],p)}return t(c[f])}}}function Ue(e,t){return O(()=>e(t))}function Fe(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(je(()=>e.each,e.children,t||void 0))}function Ve(e){let t=!1;const n=C(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return C(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?O(()=>i(s)):i}return e.fallback})}function qe(e){let t=!1;const n=oe(()=>e.children),s=C(()=>{let i=n();Array.isArray(i)||(i=[i]);for(let l=0;l<i.length;l++){const r=i[l].when;if(r)return[l,r,i[l]]}return[-1]},void 0,{equals:(i,l)=>i&&i[0]===l[0]&&(t?i[1]===l[1]:!i[1]==!l[1])&&i[2]===l[2]});return C(()=>{const[i,l,r]=s();if(i<0)return e.fallback;const o=r.children;return(t=typeof o=="function"&&o.length>0)?O(()=>o(l)):o})}function Ge(e){return e}function We(e,t){return C(e,void 0,t?void 0:{equals:t})}function de(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,c=t[i-1].nextSibling,u=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const f=l<s?o?n[o-1].nextSibling:n[l-o]:c;for(;o<l;)e.insertBefore(n[o++],f)}else if(l===o)for(;r<i;)(!u||!u.has(t[r]))&&e.removeChild(t[r]),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!u){u=new Map;let g=o;for(;g<l;)u.set(n[g],g++)}const f=u.get(t[r]);if(f!=null)if(o<f&&f<l){let g=r,d=1,p;for(;++g<i&&g<l&&!((p=u.get(t[g]))==null||p!==f+d);)d++;if(d>f-o){const E=t[r];for(;o<f;)e.insertBefore(n[o++],E)}else e.replaceChild(n[o++],t[r++])}else r++;else e.removeChild(t[r++])}}}const ge="_$DX_DELEGATE";function He(e,t,n){let s;return I(i=>{s=i,ke(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function Xe(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Qe(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,me))}}function Ye(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Je(e,t,n,s){s?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,i=>n[0](n[1],i)):e.addEventListener(t,n)}function Ze(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let l,r;for(l=0,r=i.length;l<r;l++){const o=i[l];!o||o==="undefined"||t[o]||(ye(e,o,!1),delete n[o])}for(l=0,r=s.length;l<r;l++){const o=s[l],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(ye(e,o,!0),n[o]=c)}return n}function ke(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);H(i=>R(e,t(),i,n),s)}function ye(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,l=s.length;i<l;i++)e.classList.toggle(s[i],n)}function me(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n}});n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function R(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=L(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=L(e,n,s);else{if(l==="function")return H(()=>{let o=t();for(;typeof o=="function";)o=o();n=R(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[];if(z(o,t,i))return H(()=>n=R(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=L(e,n,s),r)return n}else Array.isArray(n)?n.length===0?pe(e,o,s):de(e,n,o):n==null||n===""?pe(e,o):de(e,r&&n||[e.firstChild],o);n=o}else if(t instanceof Node){if(Array.isArray(n)){if(r)return n=L(e,n,s,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function z(e,t,n){let s=!1;for(let i=0,l=t.length;i<l;i++){let r=t[i],o;if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=z(e,r)||s;else if((o=typeof r)==="string")e.push(document.createTextNode(r));else if(o==="function")if(n){for(;typeof r=="function";)r=r();s=z(e,Array.isArray(r)?r:[r])||s}else e.push(r),s=!0;else e.push(document.createTextNode(r.toString()))}return s}function pe(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function L(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,n):c&&e.removeChild(o)}else l=!0}}else e.insertBefore(i,n);return[i]}const we=Symbol("store-raw"),U=Symbol("store-node"),Le=Symbol("store-name");function be(e,t){let n=e[P];if(!n){Object.defineProperty(e,P,{value:n=new Proxy(e,Be)});const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let l=0,r=s.length;l<r;l++){const o=s[l];if(i[o].get){const c=i[o].get.bind(n);Object.defineProperty(e,o,{get:c})}}}return n}function F(e){return e!=null&&typeof e=="object"&&(e[P]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function V(e,t=new Set){let n,s,i,l;if(n=e!=null&&e[we])return n;if(!F(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let r=0,o=e.length;r<o;r++)i=e[r],(s=V(i,t))!==i&&(e[r]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,u=r.length;c<u;c++)l=r[c],!o[l].get&&(i=e[l],(s=V(i,t))!==i&&(e[l]=s))}return e}function q(e){let t=e[U];return t||Object.defineProperty(e,U,{value:t={}}),t}function De(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===P||t===U||t===Le||(delete n.value,delete n.writable,n.get=()=>e[P][t]),n}function ve(e){if(le()){const t=q(e);(t._||(t._=ee()))()}return Reflect.ownKeys(e)}function ee(){const[e,t]=se(void 0,{equals:!1,internal:!0});return e.$=t,e}const Be={get(e,t,n){if(t===we)return e;if(t===P)return n;const s=e[t];if(t===U||t==="__proto__")return s;const i=F(s);if(le()&&(typeof s!="function"||e.hasOwnProperty(t))){let l,r;i&&(l=q(s))&&(r=l._||(l._=ee()),r()),l=q(e),r=l[t]||(l[t]=ee()),r()}return i?be(s):s},set(){return!0},deleteProperty(){return!0},ownKeys:ve,getOwnPropertyDescriptor:De};function Ae(e,t,n){if(e[t]===n)return;const s=Array.isArray(e),i=e.length,l=n===void 0,r=s||l===t in e;l?delete e[t]:e[t]=n;let o=q(e),c;(c=o[t])&&c.$(),s&&e.length!==i&&(c=o.length)&&c.$(),r&&(c=o._)&&c.$()}function Me(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];Ae(e,i,t[i])}}function D(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const r=typeof s,o=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)D(e,[s[c]].concat(t),[s[c]].concat(n));return}else if(o&&r==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&D(e,[c].concat(t),[c].concat(n));return}else if(o&&r==="object"){const{from:c=0,to:u=e.length-1,by:f=1}=s;for(let g=c;g<=u;g+=f)D(e,[g].concat(t),[g].concat(n));return}else if(t.length>1){D(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let l=t[0];typeof l=="function"&&(l=l(i,n),l===i)||s===void 0&&l==null||(l=V(l),s===void 0||F(i)&&F(l)&&!Array.isArray(l)?Me(i,l):Ae(e,s,l))}function ze(e,t){const n=V(e||{}),s=be(n);function i(...l){ie(()=>D(n,l))}return[s,i]}export{Fe as F,Ge as M,qe as S,Ee as a,Ke as b,se as c,ze as d,Ue as e,Qe as f,Je as g,H as h,ke as i,C as j,Oe as k,Ve as l,We as m,Ze as n,Ie as o,He as r,Ye as s,Xe as t,Re as u};
