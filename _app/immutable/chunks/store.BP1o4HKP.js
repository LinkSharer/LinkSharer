import{ak as _,a7 as h,al as S,B as q,h as d,am as O,an as B,ao as j,Z as F,A as I,b as M,ap as N,H as R,k as E,m as T,o as A,c as x,j as W,n as p,I as K,ah as P,K as U,U as Y}from"./runtime.BHaSKjdX.js";function Z(e){var r=S,n=q;_(null),h(null);try{return e()}finally{_(r),h(n)}}const z=new Set,G=new Set;function $(e){if(!d)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const r=e.__e;r!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(r)}))}function J(e,r,n,a){function i(t){if(a.capture||Q.call(r,t),!t.cancelBubble)return Z(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?O(()=>{r.addEventListener(e,i,a)}):r.addEventListener(e,i,a),i}function m(e,r,n,a,i){var t={capture:a,passive:i},u=J(e,r,n,t);(r===document.body||r===window||r===document)&&B(()=>{r.removeEventListener(e,u,t)})}function ee(e){for(var r=0;r<e.length;r++)z.add(e[r]);for(var n of G)n(e)}function Q(e){var k;var r=this,n=r.ownerDocument,a=e.type,i=((k=e.composedPath)==null?void 0:k.call(e))||[],t=i[0]||e.target,u=0,g=e.__root;if(g){var b=i.indexOf(g);if(b!==-1&&(r===document||r===window)){e.__root=r;return}var y=i.indexOf(r);if(y===-1)return;b<=y&&(u=b)}if(t=i[u]||e.target,t!==r){j(e,"currentTarget",{configurable:!0,get(){return t||n}});var C=S,D=q;_(null),h(null);try{for(var c,w=[];t!==null;){var v=t.assignedSlot||t.parentNode||t.host||null;try{var o=t["__"+a];if(o!==void 0&&!t.disabled)if(F(o)){var[H,...L]=o;H.apply(t,[e,...L])}else o.call(t,e)}catch(l){c?w.push(l):c=l}if(e.cancelBubble||v===r||v===null)break;t=v}if(c){for(let l of w)queueMicrotask(()=>{throw l});throw c}}finally{e.__root=r,delete e.currentTarget,_(C),h(D)}}}let s;function re(){s=void 0}function ae(e){let r=null,n=d;var a;if(d){for(r=x,s===void 0&&(s=W(document.head));s!==null&&(s.nodeType!==8||s.data!==R);)s=E(s);s===null?T(!1):s=A(E(s))}d||(a=document.head.appendChild(I()));try{M(()=>e(a),N)}finally{n&&(T(!0),s=x,A(r))}}function V(e,r,n){if(e==null)return r(void 0),p;const a=K(()=>e.subscribe(r,n));return a.unsubscribe?()=>a.unsubscribe():a}let f=!1;function te(e,r,n){const a=n[r]??(n[r]={store:null,source:P(void 0),unsubscribe:p});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=p;else{var i=!0;a.unsubscribe=V(e,t=>{i?a.source.v=t:Y(a.source,t)}),i=!1}return U(a.source)}function ne(){const e={};return B(()=>{for(var r in e)e[r].unsubscribe()}),e}function ie(e){var r=f;try{return f=!1,[e(),f]}finally{f=r}}export{te as a,z as b,re as c,ae as d,m as e,ie as f,J as g,Q as h,ee as i,$ as j,G as r,ne as s};
