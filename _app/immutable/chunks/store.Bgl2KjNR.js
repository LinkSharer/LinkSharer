import{k as v,a7 as G,a8 as m,T as A,a9 as P,G as $,Y as V,C as M,a3 as H,h as z,aa as J,ab as W,ac as L,N as g,M as k,l as b,a4 as Y,ad as D,ae as N,J as U,af as K,ag as Q,ah as X,ai as Z,aj as x,ak as ee,i as re,p as te,o as ne,c as ae,n as R,b as ie,al as se,a2 as oe,g as ue,A as le}from"./runtime.CBes1l5a.js";import{b as ce}from"./disclose-version.0MYY2HLa.js";const q=new Set,C=new Set;function we(e){if(!v)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const r=e.__e;r!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(r)}))}function Ee(e,r,a,n){function i(t){if(n.capture||w.call(r,t),!t.cancelBubble){var l=V,d=M;m(null),A(null);try{return a.call(this,t)}finally{m(l),A(d)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?G(()=>{r.addEventListener(e,i,n)}):r.addEventListener(e,i,n),i}function Te(e){for(var r=0;r<e.length;r++)q.add(e[r]);for(var a of C)a(e)}function w(e){var O;var r=this,a=r.ownerDocument,n=e.type,i=((O=e.composedPath)==null?void 0:O.call(e))||[],t=i[0]||e.target,l=0,d=e.__root;if(d){var _=i.indexOf(d);if(_!==-1&&(r===document||r===window)){e.__root=r;return}var h=i.indexOf(r);if(h===-1)return;_<=h&&(l=_)}if(t=i[l]||e.target,t!==r){P(e,"currentTarget",{configurable:!0,get(){return t||a}});var S=V,c=M;m(null),A(null);try{for(var s,o=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var p=t["__"+n];if(p!==void 0&&!t.disabled)if($(p)){var[j,...F]=p;j.apply(t,[e,...F])}else p.call(t,e)}catch(E){s?o.push(E):s=E}if(e.cancelBubble||f===r||f===null)break;t=f}if(s){for(let E of o)queueMicrotask(()=>{throw E});throw s}}finally{e.__root=r,delete e.currentTarget,m(S),A(c)}}}let u;function fe(){u=void 0}function me(e){let r=null,a=v;var n;if(v){for(r=b,u===void 0&&(u=Y(document.head));u!==null&&(u.nodeType!==8||u.data!==W);)u=L(u);u===null?g(!1):u=k(L(u))}v||(n=document.head.appendChild(H()));try{z(()=>e(n),J)}finally{a&&(g(!0),u=b,k(r))}}function Ae(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const de=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ke(e){return de.includes(e)}const _e={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Se(e){return e=e.toLowerCase(),_e[e]??e}const he=["touchstart","touchmove"];function pe(e){return he.includes(e)}function Ne(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function be(e,r){return B(e,r)}function Le(e,r){D(),r.intro=r.intro??!1;const a=r.target,n=v,i=b;try{for(var t=Y(a);t&&(t.nodeType!==8||t.data!==W);)t=L(t);if(!t)throw N;g(!0),k(t),U();const l=B(e,{...r,anchor:t});if(b===null||b.nodeType!==8||b.data!==K)throw Q(),N;return g(!1),l}catch(l){if(l===N)return r.recover===!1&&X(),D(),Z(a),g(!1),be(e,r);throw l}finally{g(n),k(i),fe()}}const y=new Map;function B(e,{target:r,anchor:a,props:n={},events:i,context:t,intro:l=!0}){D();var d=new Set,_=c=>{for(var s=0;s<c.length;s++){var o=c[s];if(!d.has(o)){d.add(o);var f=pe(o);r.addEventListener(o,w,{passive:f});var p=y.get(o);p===void 0?(document.addEventListener(o,w,{passive:f}),y.set(o,1)):y.set(o,p+1)}}};_(x(q)),C.add(_);var h=void 0,S=ee(()=>{var c=a??r.appendChild(H());return re(()=>{if(t){te({});var s=ae;s.c=t}i&&(n.$$events=i),v&&ce(c,null),h=e(c,n)||{},v&&(M.nodes_end=b),t&&ne()}),()=>{var f;for(var s of d){r.removeEventListener(s,w);var o=y.get(s);--o===0?(document.removeEventListener(s,w),y.delete(s)):y.set(s,o)}C.delete(_),I.delete(h),c!==a&&((f=c.parentNode)==null||f.removeChild(c))}});return I.set(h,S),h}let I=new WeakMap;function De(e){const r=I.get(e);r&&r()}function ve(e,r,a){if(e==null)return r(void 0),R;const n=ie(()=>e.subscribe(r,a));return n.unsubscribe?()=>n.unsubscribe():n}let T=!1;function Re(e,r,a){const n=a[r]??(a[r]={store:null,source:oe(void 0),unsubscribe:R});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=R;else{var i=!0;n.unsubscribe=ve(e,t=>{i?n.source.v=t:le(n.source,t)}),i=!1}return ue(n.source)}function Ce(){const e={};return se(()=>{for(var r in e)e[r].unsubscribe()}),e}function Ie(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}export{Ne as a,Re as b,Ie as c,Ee as d,Te as e,ke as f,me as g,Le as h,Ae as i,be as m,Se as n,we as r,Ce as s,De as u};