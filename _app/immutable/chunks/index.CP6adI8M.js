var M=Object.defineProperty;var D=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>D(e,typeof t!="symbol"?t+"":t,n);import{r as $,n as x,f as v,h as P,i as S,j,k as A,l as B,m as O,p as E,q as I,v as R,w as q}from"./scheduler.RZtQFeRP.js";let y=!1;function G(){y=!0}function z(){y=!1}function U(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function V(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const l=[];for(let c=0;c<t.length;c++){const u=t[c];u.claim_order!==void 0&&l.push(u)}t=l}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let l=0;l<t.length;l++){const c=t[l].claim_order,u=(s>0&&t[n[s]].claim_order<=c?s+1:U(1,s,h=>t[n[h]].claim_order,c))-1;i[l]=n[u]+1;const o=u+1;n[o]=l,s=Math.max(o,s)}const a=[],r=[];let f=t.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(a.push(t[l-1]);f>=l;f--)r.push(t[f]);f--}for(;f>=0;f--)r.push(t[f]);a.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<a.length&&r[l].claim_order>=a[c].claim_order;)c++;const u=c<a.length?a[c]:null;e.insertBefore(r[l],u)}}function W(e,t){if(y){for(V(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function J(e,t,n){y&&!n?W(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function H(e){return document.createElement(e)}function K(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function fe(){return w(" ")}function oe(){return w("")}function Q(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}const X=["width","height"];function ue(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const i in t)t[i]==null?e.removeAttribute(i):i==="style"?e.style.cssText=t[i]:i==="__value"?e.value=e[i]=t[i]:n[i]&&n[i].set&&X.indexOf(i)===-1?e[i]=t[i]:Q(e,i,t[i])}function _e(e){return e.dataset.svelteH}function Y(e){return Array.from(e.childNodes)}function C(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,i,s=!1){C(e);const a=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const f=e[r];if(t(f)){const l=n(f);return l===void 0?e.splice(r,1):e[r]=l,s||(e.claim_info.last_index=r),f}}for(let r=e.claim_info.last_index-1;r>=0;r--){const f=e[r];if(t(f)){const l=n(f);return l===void 0?e.splice(r,1):e[r]=l,s?l===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,f}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function Z(e,t,n,i){return L(e,s=>s.nodeName===t,s=>{const a=[];for(let r=0;r<s.attributes.length;r++){const f=s.attributes[r];n[f.name]||a.push(f.name)}a.forEach(r=>s.removeAttribute(r))},()=>i(t))}function de(e,t,n){return Z(e,t,n,H)}function k(e,t){return L(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(t),!0)}function he(e){return k(e," ")}function b(e,t,n){for(let i=n;i<e.length;i+=1){const s=e[i];if(s.nodeType===8&&s.textContent.trim()===t)return i}return-1}function me(e,t){const n=b(e,"HTML_TAG_START",0),i=b(e,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(t);C(e);const s=e.splice(n,i-n+1);p(s[0]),p(s[s.length-1]);const a=s.slice(1,s.length-1);if(a.length===0)return new g(t);for(const r of a)r.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new g(t,a)}function pe(e,t){t=""+t,e.data!==t&&(e.data=t)}function $e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function ye(e,t,n){e.classList.toggle(t,!!n)}function ge(e,t){const n=[];let i=0;for(const s of t.childNodes)if(s.nodeType===8){const a=s.textContent.trim();a===`HEAD_${e}_END`?(i-=1,n.push(s)):a===`HEAD_${e}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ee{constructor(t=!1){_(this,"is_svg",!1);_(this,"e");_(this,"n");_(this,"t");_(this,"a");this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,i=null){this.e||(this.is_svg?this.e=K(n.nodeName):this.e=H(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(t)),this.i(i)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)F(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(p)}}class g extends ee{constructor(n=!1,i){super(n);_(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)J(this.t,this.n[i],n)}}function xe(e,t){return new e(t)}const m=new Set;let d;function we(){d={r:0,c:[],p:d}}function Te(){d.r||$(d.c),d=d.p}function te(e,t){e&&e.i&&(m.delete(e),e.i(t))}function Ne(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ve(e){e&&e.c()}function Ae(e,t){e&&e.l(t)}function ne(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),A(()=>{const a=e.$$.on_mount.map(I).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...a):$(a),e.$$.on_mount=[]}),s.forEach(A)}function ie(e,t){const n=e.$$;n.fragment!==null&&(B(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(R.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(e,t,n,i,s,a,r=null,f=[-1]){const l=O;E(e);const c=e.$$={fragment:null,ctx:[],props:a,update:x,not_equal:s,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:v(),dirty:f,skip_bound:!1,root:t.target||l.$$.root};r&&r(c.root);let u=!1;if(c.ctx=n?n(e,t.props||{},(o,h,...T)=>{const N=T.length?T[0]:h;return c.ctx&&s(c.ctx[o],c.ctx[o]=N)&&(!c.skip_bound&&c.bound[o]&&c.bound[o](N),u&&se(e,o)),h}):[],c.update(),u=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){G();const o=Y(t.target);c.fragment&&c.fragment.l(o),o.forEach(p)}else c.fragment&&c.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor),z(),P()}E(l)}class be{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){ie(this,1),this.$destroy=x}$on(t,n){if(!S(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(le);export{me as A,_e as B,ue as C,ye as D,g as H,be as S,Ne as a,w as b,de as c,Y as d,H as e,k as f,p as g,he as h,Ee as i,J as j,W as k,pe as l,oe as m,Te as n,Q as o,$e as p,we as q,xe as r,fe as s,te as t,ve as u,Ae as v,ne as w,ie as x,ge as y,ae as z};
