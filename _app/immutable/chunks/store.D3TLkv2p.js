import{ao as _,a9 as h,ap as x,Q as C,v as d,q as L,aq as S,ar as O,a0 as W,P as j,m as M,as as N,H as P,C as T,F as k,G as q,w as A,B as R,o as p,u as G,aj as I,h as Q,W as Y}from"./runtime.C8AC-I3W.js";function z(e){var r=x,n=C;_(null),h(null);try{return e()}finally{_(r),h(n)}}const J=new Set,K=new Set;function $(e){if(!d)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const r=e.__e;r!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(r)}))}function U(e,r,n,a){function i(t){if(a.capture||V.call(r,t),!t.cancelBubble)return z(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?L(()=>{r.addEventListener(e,i,a)}):r.addEventListener(e,i,a),i}function m(e,r,n,a,i){var t={capture:a,passive:i},u=U(e,r,n,t);(r===document.body||r===window||r===document)&&S(()=>{r.removeEventListener(e,u,t)})}function ee(e){for(var r=0;r<e.length;r++)J.add(e[r]);for(var n of K)n(e)}function V(e){var E;var r=this,n=r.ownerDocument,a=e.type,i=((E=e.composedPath)==null?void 0:E.call(e))||[],t=i[0]||e.target,u=0,g=e.__root;if(g){var b=i.indexOf(g);if(b!==-1&&(r===document||r===window)){e.__root=r;return}var y=i.indexOf(r);if(y===-1)return;b<=y&&(u=b)}if(t=i[u]||e.target,t!==r){O(e,"currentTarget",{configurable:!0,get(){return t||n}});var B=x,D=C;_(null),h(null);try{for(var c,w=[];t!==null;){var v=t.assignedSlot||t.parentNode||t.host||null;try{var o=t["__"+a];if(o!==void 0&&!t.disabled)if(W(o)){var[F,...H]=o;F.apply(t,[e,...H])}else o.call(t,e)}catch(f){c?w.push(f):c=f}if(e.cancelBubble||v===r||v===null)break;t=v}if(c){for(let f of w)queueMicrotask(()=>{throw f});throw c}}finally{e.__root=r,delete e.currentTarget,_(B),h(D)}}}let s;function re(){s=void 0}function ae(e){let r=null,n=d;var a;if(d){for(r=A,s===void 0&&(s=R(document.head));s!==null&&(s.nodeType!==8||s.data!==P);)s=T(s);s===null?k(!1):s=q(T(s))}d||(a=document.head.appendChild(j()));try{M(()=>e(a),N)}finally{n&&(k(!0),s=A,q(r))}}function X(e,r,n){if(e==null)return r(void 0),p;const a=G(()=>e.subscribe(r,n));return a.unsubscribe?()=>a.unsubscribe():a}let l=!1;function te(e,r,n){const a=n[r]??(n[r]={store:null,source:I(void 0),unsubscribe:p});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=p;else{var i=!0;a.unsubscribe=X(e,t=>{i?a.source.v=t:Y(a.source,t)}),i=!1}return Q(a.source)}function ne(){const e={};return S(()=>{for(var r in e)e[r].unsubscribe()}),e}function ie(e){var r=l;try{return l=!1,[e(),l]}finally{l=r}}export{te as a,J as b,re as c,V as d,m as e,ie as f,U as g,ae as h,ee as i,$ as j,K as r,ne as s};