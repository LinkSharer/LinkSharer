import{i as g,j as R,H as S,k as I,l as y,m as p,o as A,q as L,e as c,u as V,v as D,w as O,x as C,y as j,z as H,A as M,c as Y,p as z,h as E,B,a as W,C as $}from"./runtime.DX3ssa46.js";import{b as q,r as b,c as G,d as h}from"./store.Bt693Nzt.js";import{d as P}from"./disclose-version.CDnd8k2g.js";function ee(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const U=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function te(e){return U.includes(e)}const x={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function re(e){return e=e.toLowerCase(),x[e]??e}const F=["touchstart","touchmove"];function J(e){return F.includes(e)}function oe(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function K(e,t){return k(e,t)}function ne(e,t){g(),t.intro=t.intro??!1;const a=t.target,l=E,f=c;try{for(var r=R(a);r&&(r.nodeType!==8||r.data!==S);)r=I(r);if(!r)throw y;p(!0),A(r),L();const d=k(e,{...t,anchor:r});if(c===null||c.nodeType!==8||c.data!==V)throw D(),y;return p(!1),d}catch(d){if(d===y)return t.recover===!1&&O(),g(),C(a),p(!1),K(e,t);throw d}finally{p(l),A(f),G()}}const i=new Map;function k(e,{target:t,anchor:a,props:l={},events:f,context:r,intro:d=!0}){g();var v=new Set,m=s=>{for(var o=0;o<s.length;o++){var n=s[o];if(!v.has(n)){v.add(n);var u=J(n);t.addEventListener(n,h,{passive:u});var T=i.get(n);T===void 0?(document.addEventListener(n,h,{passive:u}),i.set(n,1)):i.set(n,T+1)}}};m(j(q)),b.add(m);var _=void 0,N=H(()=>{var s=a??t.appendChild(M());return Y(()=>{if(r){z({});var o=$;o.c=r}f&&(l.$$events=f),E&&P(s,null),_=e(s,l)||{},E&&(B.nodes_end=c),r&&W()}),()=>{var u;for(var o of v){t.removeEventListener(o,h);var n=i.get(o);--n===0?(document.removeEventListener(o,h),i.delete(o)):i.set(o,n)}b.delete(m),w.delete(_),s!==a&&((u=s.parentNode)==null||u.removeChild(s))}});return w.set(_,N),_}let w=new WeakMap;function ae(e){const t=w.get(e);t&&t()}export{te as a,ne as h,ee as i,K as m,re as n,oe as s,ae as u};
