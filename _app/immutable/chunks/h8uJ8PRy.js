import{aa as w,ab as m,ac as O,L as N,k as E,J as C,ad as j,ae as q,af as A,q as W,l as B,m as H,ag as T,s as b,n as I,A as Y,o as v,ah as $,ai as z,aj as F,ak as G,al as J,am as U,i as x,w as K,p as Q,a as X,c as Z}from"./CbF4Ualv.js";import{r as ee}from"./h-aavKVU.js";import{b as te}from"./CotCX2qi.js";function fe(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const re=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function de(e){return re.includes(e)}const ae={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function _e(e){return e=e.toLowerCase(),ae[e]??e}const ne=["touchstart","touchmove"];function oe(e){return ne.includes(e)}function ie(e){var t=O,a=N;w(null),m(null);try{return e()}finally{w(t),m(a)}}const V=new Set,S=new Set;function pe(e){if(!E)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function he(e,t,a,s={}){function i(r){if(s.capture||y.call(t,r),!r.cancelBubble)return ie(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{t.addEventListener(e,i,s)}):t.addEventListener(e,i,s),i}function ve(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var a of S)a(e)}function y(e){var R;var t=this,a=t.ownerDocument,s=e.type,i=((R=e.composedPath)==null?void 0:R.call(e))||[],r=i[0]||e.target,l=0,_=e.__root;if(_){var f=i.indexOf(_);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var p=i.indexOf(t);if(p===-1)return;f<=p&&(l=f)}if(r=i[l]||e.target,r!==t){j(e,"currentTarget",{configurable:!0,get(){return r||a}});var k=O,u=N;w(null),m(null);try{for(var n,o=[];r!==null;){var c=r.assignedSlot||r.parentNode||r.host||null;try{var d=r["__"+s];if(d!=null&&(!r.disabled||e.target===r))if(q(d)){var[M,...P]=d;M.apply(r,[e,...P])}else d.call(r,e)}catch(g){n?o.push(g):n=g}if(e.cancelBubble||c===t||c===null)break;r=c}if(n){for(let g of o)queueMicrotask(()=>{throw g});throw n}}finally{e.__root=t,delete e.currentTarget,w(k),m(u)}}}function ye(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function se(e,t){return D(e,t)}function ge(e,t){A(),t.intro=t.intro??!1;const a=t.target,s=E,i=v;try{for(var r=W(a);r&&(r.nodeType!==8||r.data!==B);)r=H(r);if(!r)throw T;b(!0),I(r),Y();const l=D(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==$)throw z(),T;return b(!1),l}catch(l){if(l===T)return t.recover===!1&&F(),A(),G(a),b(!1),se(e,t);throw l}finally{b(s),I(i),ee()}}const h=new Map;function D(e,{target:t,anchor:a,props:s={},events:i,context:r,intro:l=!0}){A();var _=new Set,f=u=>{for(var n=0;n<u.length;n++){var o=u[n];if(!_.has(o)){_.add(o);var c=oe(o);t.addEventListener(o,y,{passive:c});var d=h.get(o);d===void 0?(document.addEventListener(o,y,{passive:c}),h.set(o,1)):h.set(o,d+1)}}};f(J(V)),S.add(f);var p=void 0,k=U(()=>{var u=a??t.appendChild(x());return K(()=>{if(r){Q({});var n=Z;n.c=r}i&&(s.$$events=i),E&&te(u,null),p=e(u,s)||{},E&&(N.nodes_end=v),r&&X()}),()=>{var c;for(var n of _){t.removeEventListener(n,y);var o=h.get(n);--o===0?(document.removeEventListener(n,y),h.delete(n)):h.set(n,o)}S.delete(f),u!==a&&((c=u.parentNode)==null||c.removeChild(u))}});return L.set(p,k),p}let L=new WeakMap;function be(e,t){const a=L.get(e);return a?(L.delete(e),a(t)):Promise.resolve()}export{de as a,he as c,ve as d,ge as h,fe as i,se as m,_e as n,pe as r,ye as s,be as u};
