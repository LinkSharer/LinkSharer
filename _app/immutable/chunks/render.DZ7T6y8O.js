import{ah as E,a0 as b,ai as O,I as N,n as m,D as W,aj as j,W as q,ak as A,G as B,ad as H,ae as Y,al as k,w,v as I,o as G,A as v,am as P,an as $,ao as z,ap as F,aq as U,ar as x,F as J,y as K,p as Q,a as X,c as Z}from"./runtime.CnJI7opx.js";import{r as ee}from"./store.x9ysm3yP.js";import{b as te}from"./template.COdSRNnP.js";function re(e){var t=O,a=N;E(null),b(null);try{return e()}finally{E(t),b(a)}}const R=new Set,S=new Set;function fe(e){if(!m)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function de(e,t,a,s){function i(r){if(s.capture||y.call(t,r),!r.cancelBubble)return re(()=>a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,i,s)}):t.addEventListener(e,i,s),i}function _e(e){for(var t=0;t<e.length;t++)R.add(e[t]);for(var a of S)a(e)}function y(e){var D;var t=this,a=t.ownerDocument,s=e.type,i=((D=e.composedPath)==null?void 0:D.call(e))||[],r=i[0]||e.target,l=0,p=e.__root;if(p){var f=i.indexOf(p);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var d=i.indexOf(t);if(d===-1)return;f<=d&&(l=f)}if(r=i[l]||e.target,r!==t){j(e,"currentTarget",{configurable:!0,get(){return r||a}});var T=O,u=N;E(null),b(null);try{for(var n,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+s];if(_!==void 0&&!r.disabled)if(q(_)){var[M,...C]=_;M.apply(r,[e,...C])}else _.call(r,e)}catch(g){n?o.push(g):n=g}if(e.cancelBubble||c===t||c===null)break;r=c}if(n){for(let g of o)queueMicrotask(()=>{throw g});throw n}}finally{e.__root=t,delete e.currentTarget,E(T),b(u)}}}function pe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ae=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function he(e){return ae.includes(e)}const ne={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function ve(e){return e=e.toLowerCase(),ne[e]??e}const oe=["touchstart","touchmove"];function ie(e){return oe.includes(e)}function ye(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function se(e,t){return V(e,t)}function ge(e,t){A(),t.intro=t.intro??!1;const a=t.target,s=m,i=v;try{for(var r=B(a);r&&(r.nodeType!==8||r.data!==H);)r=Y(r);if(!r)throw k;w(!0),I(r),G();const l=V(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==P)throw $(),k;return w(!1),l}catch(l){if(l===k)return t.recover===!1&&z(),A(),F(a),w(!1),se(e,t);throw l}finally{w(s),I(i),ee()}}const h=new Map;function V(e,{target:t,anchor:a,props:s={},events:i,context:r,intro:l=!0}){A();var p=new Set,f=u=>{for(var n=0;n<u.length;n++){var o=u[n];if(!p.has(o)){p.add(o);var c=ie(o);t.addEventListener(o,y,{passive:c});var _=h.get(o);_===void 0?(document.addEventListener(o,y,{passive:c}),h.set(o,1)):h.set(o,_+1)}}};f(U(R)),S.add(f);var d=void 0,T=x(()=>{var u=a??t.appendChild(J());return K(()=>{if(r){Q({});var n=Z;n.c=r}i&&(s.$$events=i),m&&te(u,null),d=e(u,s)||{},m&&(N.nodes_end=v),r&&X()}),()=>{var c;for(var n of p){t.removeEventListener(n,y);var o=h.get(n);--o===0?(document.removeEventListener(n,y),h.delete(n)):h.set(n,o)}S.delete(f),L.delete(d),u!==a&&((c=u.parentNode)==null||c.removeChild(u))}});return L.set(d,T),d}let L=new WeakMap;function we(e){const t=L.get(e);t&&t()}export{he as a,de as c,_e as d,ge as h,pe as i,se as m,ve as n,fe as r,ye as s,we as u};
