import{S as A,P as V,Q as $,R as m,T as z,U as h,V as c,W as N,K as P,B as q,X as Q,Y as W,Z as X,b as J,_ as F,a as Y,a0 as U,h as x,q as k,E as p,a1 as ee,a2 as ae,o as re,m as M,c as te,a3 as ne,a4 as fe,a5 as ie,a6 as se,a7 as K,a8 as ue,a9 as le,aa as _e,ab as ve,I as Z,N as j,ac as de,ad as ce,ae as oe,af as ge,ag as be,ah as ye}from"./runtime.BHaSKjdX.js";import{f as he}from"./store.BP1o4HKP.js";function S(f,u=null,b){if(typeof f!="object"||f===null||A in f)return f;const y=W(f);if(y!==V&&y!==$)return f;var i=new Map,_=X(f),v=m(0);_&&i.set("length",m(f.length));var d;return new Proxy(f,{defineProperty(n,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&z();var r=i.get(e);return r===void 0?(r=m(a.value),i.set(e,r)):h(r,S(a.value,d)),!0},deleteProperty(n,e){var a=i.get(e);if(a===void 0)e in n&&i.set(e,m(c));else{if(_&&typeof e=="string"){var r=i.get("length"),t=Number(e);Number.isInteger(t)&&t<r.v&&h(r,t)}h(a,c),G(v)}return!0},get(n,e,a){var o;if(e===A)return f;var r=i.get(e),t=e in n;if(r===void 0&&(!t||(o=N(n,e))!=null&&o.writable)&&(r=m(S(t?n[e]:c,d)),i.set(e,r)),r!==void 0){var s=P(r);return s===c?void 0:s}return Reflect.get(n,e,a)},getOwnPropertyDescriptor(n,e){var a=Reflect.getOwnPropertyDescriptor(n,e);if(a&&"value"in a){var r=i.get(e);r&&(a.value=P(r))}else if(a===void 0){var t=i.get(e),s=t==null?void 0:t.v;if(t!==void 0&&s!==c)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return a},has(n,e){var s;if(e===A)return!0;var a=i.get(e),r=a!==void 0&&a.v!==c||Reflect.has(n,e);if(a!==void 0||q!==null&&(!r||(s=N(n,e))!=null&&s.writable)){a===void 0&&(a=m(r?S(n[e],d):c),i.set(e,a));var t=P(a);if(t===c)return!1}return r},set(n,e,a,r){var E;var t=i.get(e),s=e in n;if(_&&e==="length")for(var o=a;o<t.v;o+=1){var R=i.get(o+"");R!==void 0?h(R,c):o in n&&(R=m(c),i.set(o+"",R))}t===void 0?(!s||(E=N(n,e))!=null&&E.writable)&&(t=m(void 0),h(t,S(a,d)),i.set(e,t)):(s=t.v!==c,h(t,S(a,d)));var g=Reflect.getOwnPropertyDescriptor(n,e);if(g!=null&&g.set&&g.set.call(r,a),!s){if(_&&typeof e=="string"){var w=i.get("length"),T=Number(e);Number.isInteger(T)&&T>=w.v&&h(w,T+1)}G(v)}return!0},ownKeys(n){P(v);var e=Reflect.ownKeys(n).filter(t=>{var s=i.get(t);return s===void 0||s.v!==c});for(var[a,r]of i)r.v!==c&&!(a in n)&&e.push(a);return e},setPrototypeOf(){Q()}})}function G(f,u=1){h(f,f.v+u)}function Re(f,u,b,y=null,i=!1){x&&k();var _=f,v=null,d=null,n=null,e=i?p:0;J(()=>{if(n===(n=!!u()))return;let a=!1;if(x){const r=_.data===ee;n===r&&(_=ae(),re(_),M(!1),a=!0)}n?(v?F(v):v=Y(()=>b(_)),d&&U(d,()=>{d=null})):(d?F(d):y&&(d=Y(()=>y(_))),v&&U(v,()=>{v=null})),a&&M(!0)},e),x&&(_=te)}function H(f){for(var u=q,b=q;u!==null&&!(u.f&(ie|se));)u=u.parent;try{return K(u),f()}finally{K(b)}}function Ee(f,u,b,y){var C;var i=(b&ge)!==0,_=!ue||(b&le)!==0,v=(b&_e)!==0,d=(b&be)!==0,n=!1,e;v?[e,n]=he(()=>f[u]):e=f[u];var a=A in f||ve in f,r=((C=N(f,u))==null?void 0:C.set)??(a&&v&&u in f?l=>f[u]=l:void 0),t=y,s=!0,o=!1,R=()=>(o=!0,s&&(s=!1,d?t=Z(y):t=y),t);e===void 0&&y!==void 0&&(r&&_&&ne(),e=R(),r&&r(e));var g;if(_)g=()=>{var l=f[u];return l===void 0?R():(s=!0,o=!1,l)};else{var w=H(()=>(i?j:de)(()=>f[u]));w.f|=fe,g=()=>{var l=P(w);return l!==void 0&&(t=void 0),l===void 0?t:l}}if(!(b&ce))return g;if(r){var T=f.$$legacy;return function(l,I){return arguments.length>0?((!_||!I||T||n)&&r(I?g():l),l):g()}}var E=!1,B=!1,D=ye(e),O=H(()=>j(()=>{var l=g(),I=P(D);return E?(E=!1,B=!0,I):(B=!1,D.v=l)}));return i||(O.equals=oe),function(l,I){if(arguments.length>0){const L=I?P(O):_&&v?S(l):l;return O.equals(L)||(E=!0,h(D,L),o&&t!==void 0&&(t=L),Z(()=>P(O))),l}return P(O)}}export{S as a,Re as i,Ee as p};
