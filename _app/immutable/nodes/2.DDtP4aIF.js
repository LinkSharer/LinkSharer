import{d as Fe,f as ua,a as E,c as ot,b as D,n as da,t as be}from"../chunks/disclose-version.BiGzH3u_.js";import{i as nt}from"../chunks/legacy.DQe_2Z-H.js";import{q as bn,F as ma,b as yn,h as W,w as Tt,x as Jt,a0 as ga,C as xn,a1 as pa,a2 as Me,v as Gt,g as st,aw as Ft,a3 as _n,c as ye,a4 as ha,G as Le,ax as xe,ay as Re,az as _e,aA as va,B as ba,aB as ya,d as An,aC as wn,l as yt,y as xa,ap as _a,aD as Aa,aj as wa,U as De,aE as ka,m as kn,z as Ea,o as Sa,aF as Oa,_ as ze,aG as Pa,p as at,a as rt,f as Y,s as I,t as M,M as z,$ as Ia,i as L,j as C,W as Ca,aH as Na,aI as Ta,ae as Fa}from"../chunks/runtime.BRtqpUcD.js";import{g as Ma,i as En,h as Sn,j as je}from"../chunks/store.DDP7HFjq.js";import{p as w,i as U,l as Ye,s as La}from"../chunks/props.BavdhZJ8.js";import{i as Ra,n as Da,a as za,s as Zt}from"../chunks/render.CWEOJAT6.js";import{g as ja}from"../chunks/entry.D3fYdsO6.js";import{b as Ya}from"../chunks/this.B2VD7LGe.js";function Ua(t,e){if(e){const n=document.body;t.autofocus=!0,bn(()=>{document.activeElement===n&&t.focus()})}}function lt(t,e){return e}function Wa(t,e,n,a){for(var r=[],s=e.length,i=0;i<s;i++)va(e[i].e,r,!0);var o=s>0&&r.length===0&&n!==null;if(o){var d=n.parentNode;ba(d),d.append(n),a.clear(),Z(t,e[0].prev,e[s-1].next)}ya(r,()=>{for(var f=0;f<s;f++){var u=e[f];o||(a.delete(u.k),Z(t,u.prev,u.next)),An(u.e,!o)}})}function ft(t,e,n,a,r,s=null){var i=t,o={flags:e,items:new Map,first:null},d=(e&wn)!==0;if(d){var f=t;i=W?Tt(yt(f)):f.appendChild(ma())}W&&Jt();var u=null,h=!1;yn(()=>{var l=n(),p=ga(l)?l:l==null?[]:xn(l),y=p.length;if(h&&y===0)return;h=y===0;let _=!1;if(W){var g=i.data===pa;g!==(y===0)&&(i=Me(),Tt(i),Gt(!1),_=!0)}if(W){for(var v=null,x,k=0;k<y;k++){if(st.nodeType===8&&st.data===xa){i=st,_=!0,Gt(!1);break}var m=p[k],A=a(m,k);x=On(st,o,v,null,m,A,k,r,e),o.items.set(A,x),v=x}y>0&&Tt(Me())}if(!W){var P=_a;Ha(p,o,i,r,e,(P.f&Ft)!==0,a)}s!==null&&(y===0?u?_n(u):u=ye(()=>s(i)):u!==null&&ha(u,()=>{u=null})),_&&Gt(!0),n()}),W&&(i=st)}function Ha(t,e,n,a,r,s,i){var Ot,Pt,vt,dt;var o=(r&Aa)!==0,d=(r&(xe|_e))!==0,f=t.length,u=e.items,h=e.first,l=h,p,y=null,_,g=[],v=[],x,k,m,A;if(o)for(A=0;A<f;A+=1)x=t[A],k=i(x,A),m=u.get(k),m!==void 0&&((Ot=m.a)==null||Ot.measure(),(_??(_=new Set)).add(m));for(A=0;A<f;A+=1){if(x=t[A],k=i(x,A),m=u.get(k),m===void 0){var P=l?l.e.nodes_start:n;y=On(P,e,y,y===null?e.first:y.next,x,k,A,a,r),u.set(k,y),g=[],v=[],l=y.next;continue}if(d&&Ga(m,x,A,r),m.e.f&Ft&&(_n(m.e),o&&((Pt=m.a)==null||Pt.unfix(),(_??(_=new Set)).delete(m))),m!==l){if(p!==void 0&&p.has(m)){if(g.length<v.length){var N=v[0],T;y=N.prev;var B=g[0],X=g[g.length-1];for(T=0;T<g.length;T+=1)Ue(g[T],N,n);for(T=0;T<v.length;T+=1)p.delete(v[T]);Z(e,B.prev,X.next),Z(e,y,B),Z(e,X,N),l=N,y=X,A-=1,g=[],v=[]}else p.delete(m),Ue(m,l,n),Z(e,m.prev,m.next),Z(e,m,y===null?e.first:y.next),Z(e,y,m),y=m;continue}for(g=[],v=[];l!==null&&l.k!==k;)(s||!(l.e.f&Ft))&&(p??(p=new Set)).add(l),v.push(l),l=l.next;if(l===null)continue;m=l}g.push(m),y=m,l=m.next}if(l!==null||p!==void 0){for(var F=p===void 0?[]:xn(p);l!==null;)(s||!(l.e.f&Ft))&&F.push(l),l=l.next;var V=F.length;if(V>0){var Ht=r&wn&&f===0?n:null;if(o){for(A=0;A<V;A+=1)(vt=F[A].a)==null||vt.measure();for(A=0;A<V;A+=1)(dt=F[A].a)==null||dt.fix()}Wa(e,F,Ht,u)}}o&&bn(()=>{var bt;if(_!==void 0)for(m of _)(bt=m.a)==null||bt.apply()}),Le.first=e.first&&e.first.e,Le.last=y&&y.e}function Ga(t,e,n,a){a&xe&&Re(t.v,e),a&_e?Re(t.i,n):t.i=n}function On(t,e,n,a,r,s,i,o,d){var f=(d&xe)!==0,u=(d&ka)===0,h=f?u?wa(r):De(r):r,l=d&_e?De(i):i,p={i:l,v:h,k:s,a:null,e:null,prev:n,next:a};try{return p.e=ye(()=>o(t,h,l),W),p.e.prev=n&&n.e,p.e.next=a&&a.e,n===null?e.first=p:(n.next=p,n.e.next=p.e),a!==null&&(a.prev=p,a.e.prev=p.e),p}finally{}}function Ue(t,e,n){for(var a=t.next?t.next.e.nodes_start:n,r=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==a;){var i=kn(s);r.before(s),s=i}}function Z(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function $t(t,e,n,a,r){var s=t,i="",o;yn(()=>{if(i===(i=e()??"")){W&&Jt();return}o!==void 0&&(An(o),o=void 0),i!==""&&(o=ye(()=>{if(W){st.data;for(var d=Jt(),f=d;d!==null&&(d.nodeType!==8||d.data!=="");)f=d,d=kn(d);if(d===null)throw Ea(),Sa;Fe(st,f),s=Tt(d);return}var u=i+"";n&&(u=`<svg>${u}</svg>`);var h=ua(u);if((n||a)&&(h=yt(h)),Fe(yt(h),h.lastChild),n||a)for(;yt(h);)s.before(yt(h));else s.before(h)}))})}function O(t,e,n,a){var r=t.__attributes??(t.__attributes={});W&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Oa]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Pn(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function te(t,e,n,a,r=!1,s=!1,i=!1){var o=e||{},d=t.tagName==="OPTION";for(var f in e)f in n||(n[f]=null);a!==void 0&&(n.class=n.class?n.class+" "+a:a);var u=Pn(t),h=t.__attributes??(t.__attributes={});for(const g in n){let v=n[g];if(d&&g==="value"&&v==null){t.value=t.__value="",o[g]=v;continue}var l=o[g];if(v!==l){o[g]=v;var p=g[0]+g[1];if(p!=="$$"){if(p==="on"){const x={},k="$$"+g;let m=g.slice(2);var y=za(m);if(Ra(m)&&(m=m.slice(0,-7),x.capture=!0),!y&&l){if(v!=null)continue;t.removeEventListener(m,o[k],x),o[k]=null}if(v!=null)if(y)t[`__${m}`]=v,En([m]);else{let A=function(P){o[g].call(this,P)};o[k]=Ma(m,t,A,x)}else y&&(t[`__${m}`]=void 0)}else if(g==="style"&&v!=null)t.style.cssText=v+"";else if(g==="autofocus")Ua(t,!!v);else if(g==="__value"||g==="value"&&v!=null)t.value=t[g]=t.__value=v;else{var _=g;r||(_=Da(_)),v==null&&!s?(h[g]=null,t.removeAttribute(g)):u.includes(_)&&(s||typeof v!="string")?t[_]=v:typeof v!="function"&&(W&&(_==="src"||_==="href"||_==="srcset")||O(t,_,v))}g==="style"&&"__styles"in t&&(t.__styles={})}}}return o}var We=new Map;function Pn(t){var e=We.get(t.nodeName);if(e)return e;We.set(t.nodeName,e=[]);for(var n,a=ze(t),r=Element.prototype;r!==a;){n=Pa(a);for(var s in n)n[s].set&&e.push(s);a=ze(a)}return e}var Ba=D('<link rel="canonical">'),Xa=D("<meta>"),Va=D("<meta>"),qa=D('<meta name="description"> <!> <!> <!>',1);function Ka(t,e){at(e,!1);let n=w(e,"seo",8);nt(),Sn(a=>{var r=qa(),s=Y(r),i=I(s,2);{var o=l=>{var p=Ba();M(()=>O(p,"href",n().canonical)),E(l,p)};U(i,l=>{n().canonical&&l(o)})}var d=I(i,2);{var f=l=>{var p=ot(),y=Y(p);ft(y,1,()=>Object.entries(n().og),lt,(_,g)=>{var v=Xa();M(()=>{O(v,"property",`og:${z(g)[0]??""}`),O(v,"content",z(g)[1])}),E(_,v)}),E(l,p)};U(d,l=>{n().og&&l(f)})}var u=I(d,2);{var h=l=>{var p=ot(),y=Y(p);ft(y,1,()=>Object.entries(n().twitter),lt,(_,g)=>{var v=Va();M(()=>{O(v,"property",`og:${z(g)[0]??""}`),O(v,"content",z(g)[1])}),E(_,v)}),E(l,p)};U(u,l=>{n().twitter&&l(h)})}M(()=>{Ia.title=n().title,O(s,"content",n().description)}),E(a,r)}),rt()}function Qa(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:d,spinReverse:f,pulse:u,fixedWidth:h,inverse:l,border:p,listItem:y,flip:_,size:g,rotation:v,pull:x}=t,k={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":f,"fa-spin-pulse":d,"fa-pulse":u,"fa-fw":h,"fa-inverse":l,"fa-border":p,"fa-li":y,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both",[`fa-${g}`]:typeof g<"u"&&g!==null,[`fa-rotate-${v}`]:typeof v<"u"&&v!==null&&v!==0,[`fa-pull-${x}`]:typeof x<"u"&&x!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(k).map(m=>k[m]?m:null).filter(m=>m)}function Ja(t){return t=t-0,t===t}function Za(t){return Ja(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function $a(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function In(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(s=>In(t,s)),r=Object.keys(e.attributes||{}).reduce((s,i)=>{const o=e.attributes[i];return i==="style"?s.attrs.style=$a(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[Za(i)]=o,s},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function tr(t,e,n){return(e=nr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(a){tr(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function er(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nr(t){var e=er(t,"string");return typeof e=="symbol"?e:e+""}const Ge=()=>{};let Ae={},Cn={},Nn=null,Tn={mark:Ge,measure:Ge};try{typeof window<"u"&&(Ae=window),typeof document<"u"&&(Cn=document),typeof MutationObserver<"u"&&(Nn=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}const{userAgent:Be=""}=Ae.navigator||{},$=Ae,S=Cn,Xe=Nn,It=Tn;$.document;const Q=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",Fn=~Be.indexOf("MSIE")||~Be.indexOf("Trident/");var ar=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,rr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Mn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},sr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],R="classic",zt="duotone",ir="sharp",or="sharp-duotone",Rn=[R,zt,ir,or],lr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},fr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},cr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ur={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},dr=["fak","fa-kit","fakd","fa-kit-duotone"],Ve={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},mr=["kit"],gr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},pr=["fak","fakd"],hr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},qe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],br=["fak","fa-kit","fakd","fa-kit-duotone"],yr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_r={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ar=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ne=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...vr,...Ar],wr=["solid","regular","light","thin","duotone","brands"],Dn=[1,2,3,4,5,6,7,8,9,10],kr=Dn.concat([11,12,13,14,15,16,17,18,19,20]),Er=[...Object.keys(_r),...wr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ct.GROUP,Ct.SWAP_OPACITY,Ct.PRIMARY,Ct.SECONDARY].concat(Dn.map(t=>"".concat(t,"x"))).concat(kr.map(t=>"w-".concat(t))),Sr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const q="___FONT_AWESOME___",ae=16,zn="fa",jn="svg-inline--fa",ct="data-fa-i2svg",re="data-fa-pseudo-element",Or="data-fa-pseudo-element-pending",we="data-prefix",ke="data-icon",Ke="fontawesome-i2svg",Pr="async",Ir=["HTML","HEAD","STYLE","SCRIPT"],Yn=(()=>{try{return!0}catch{return!1}})();function Et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[R]}})}const Un=c({},Mn);Un[R]=c(c(c(c({},{"fa-duotone":"duotone"}),Mn[R]),Ve.kit),Ve["kit-duotone"]);const Cr=Et(Un),se=c({},ur);se[R]=c(c(c(c({},{duotone:"fad"}),se[R]),qe.kit),qe["kit-duotone"]);const Qe=Et(se),ie=c({},ee);ie[R]=c(c({},ie[R]),hr.kit);const Ee=Et(ie),oe=c({},xr);oe[R]=c(c({},oe[R]),gr.kit);Et(oe);const Nr=ar,Wn="fa-layers-text",Tr=rr,Fr=c({},lr);Et(Fr);const Mr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bt=sr,Lr=[...mr,...Er],_t=$.FontAwesomeConfig||{};function Rr(t){var e=S.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Dr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}S&&typeof S.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Dr(Rr(n));r!=null&&(_t[a]=r)});const Hn={styleDefault:"solid",familyDefault:R,cssPrefix:zn,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_t.familyPrefix&&(_t.cssPrefix=_t.familyPrefix);const pt=c(c({},Hn),_t);pt.autoReplaceSvg||(pt.observeMutations=!1);const b={};Object.keys(Hn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){pt[t]=e,At.forEach(n=>n(b))},get:function(){return pt[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){pt.cssPrefix=t,At.forEach(e=>e(b))},get:function(){return pt.cssPrefix}});$.FontAwesomeConfig=b;const At=[];function zr(t){return At.push(t),()=>{At.splice(At.indexOf(t),1)}}const J=ae,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jr(t){if(!t||!Q)return;const e=S.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=S.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return S.head.insertBefore(e,a),t}const Yr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){let t=12,e="";for(;t-- >0;)e+=Yr[Math.random()*62|0];return e}function ht(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Se(t){return t.classList?ht(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Gn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ur(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Gn(t[n]),'" '),"").trim()}function jt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Oe(t){return t.size!==H.size||t.x!==H.x||t.y!==H.y||t.rotate!==H.rotate||t.flipX||t.flipY}function Wr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),d={transform:"".concat(s," ").concat(i," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:d,path:f}}function Hr(t){let{transform:e,width:n=ae,height:a=ae,startCentered:r=!1}=t,s="";return r&&Fn?s+="translate(".concat(e.x/J-n/2,"em, ").concat(e.y/J-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/J,"em), calc(-50% + ").concat(e.y/J,"em)) "):s+="translate(".concat(e.x/J,"em, ").concat(e.y/J,"em) "),s+="scale(".concat(e.size/J*(e.flipX?-1:1),", ").concat(e.size/J*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Gr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Bn(){const t=zn,e=jn,n=b.cssPrefix,a=b.replacementClass;let r=Gr;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Je=!1;function Xt(){b.autoAddCss&&!Je&&(jr(Bn()),Je=!0)}var Br={mixout(){return{dom:{css:Bn,insertCss:Xt}}},hooks(){return{beforeDOMElementCreation(){Xt()},beforeI2svg(){Xt()}}}};const K=$||{};K[q]||(K[q]={});K[q].styles||(K[q].styles={});K[q].hooks||(K[q].hooks={});K[q].shims||(K[q].shims=[]);var G=K[q];const Xn=[],Vn=function(){S.removeEventListener("DOMContentLoaded",Vn),Rt=1,Xn.map(t=>t())};let Rt=!1;Q&&(Rt=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),Rt||S.addEventListener("DOMContentLoaded",Vn));function Xr(t){Q&&(Rt?setTimeout(t,0):Xn.push(t))}function St(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Gn(t):"<".concat(e," ").concat(Ur(n),">").concat(a.map(St).join(""),"</").concat(e,">")}function Ze(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Vt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,d,f,u;for(a===void 0?(d=1,u=e[s[0]]):(d=0,u=a);d<i;d++)f=s[d],u=o(u,e[f],f,e);return u};function Vr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function le(t){const e=Vr(t);return e.length===1?e[0].toString(16):null}function qr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function $e(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function fe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=$e(e);typeof G.hooks.addPack=="function"&&!a?G.hooks.addPack(t,$e(e)):G.styles[t]=c(c({},G.styles[t]||{}),r),t==="fas"&&fe("fa",e)}const{styles:kt,shims:Kr}=G,qn=Object.keys(Ee),Qr=qn.reduce((t,e)=>(t[e]=Object.keys(Ee[e]),t),{});let Pe=null,Kn={},Qn={},Jn={},Zn={},$n={};function Jr(t){return~Lr.indexOf(t)}function Zr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Jr(r)?r:null}const ta=()=>{const t=a=>Vt(kt,(r,s,i)=>(r[i]=Vt(s,a,{}),r),{});Kn=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Qn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),$n=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in kt||b.autoFetchSvg,n=Vt(Kr,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Jn=n.names,Zn=n.unicodes,Pe=Yt(b.styleDefault,{family:b.familyDefault})};zr(t=>{Pe=Yt(t.styleDefault,{family:b.familyDefault})});ta();function Ie(t,e){return(Kn[t]||{})[e]}function $r(t,e){return(Qn[t]||{})[e]}function it(t,e){return($n[t]||{})[e]}function ea(t){return Jn[t]||{prefix:null,iconName:null}}function ts(t){const e=Zn[t],n=Ie("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function tt(){return Pe}const na=()=>({prefix:null,iconName:null,rest:[]});function es(t){let e=R;const n=qn.reduce((a,r)=>(a[r]="".concat(b.cssPrefix,"-").concat(r),a),{});return Rn.forEach(a=>{(t.includes(n[a])||t.some(r=>Qr[a].includes(r)))&&(e=a)}),e}function Yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=R}=e,a=Cr[n][t];if(n===zt&&!t)return"fad";const r=Qe[n][t]||Qe[n][a],s=t in G.styles?t:null;return r||s||null}function ns(t){let e=[],n=null;return t.forEach(a=>{const r=Zr(b.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function tn(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=ne.concat(br),s=tn(t.filter(h=>r.includes(h))),i=tn(t.filter(h=>!ne.includes(h))),o=s.filter(h=>(a=h,!Ln.includes(h))),[d=null]=o,f=es(s),u=c(c({},ns(i)),{},{prefix:Yt(d,{family:f})});return c(c(c({},u),is({values:t,family:f,styles:kt,config:b,canonical:u,givenPrefix:a})),as(n,a,u))}function as(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?ea(r):{},i=it(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!kt.far&&kt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const rs=Rn.filter(t=>t!==R||t!==zt),ss=Object.keys(ee).filter(t=>t!==R).map(t=>Object.keys(ee[t])).flat();function is(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,o=n===zt,d=e.includes("fa-duotone")||e.includes("fad"),f=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(d||f||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&rs.includes(n)&&(Object.keys(s).find(l=>ss.includes(l))||i.autoFetchSvg)){const l=cr.get(n).defaultShortPrefixId;a.prefix=l,a.iconName=it(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=tt()||"fas"),a}class os{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),fe(s,r[s]);const i=Ee[R][s];i&&fe(i,r[s]),ta()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],d=o[2];e[s]||(e[s]={}),d.length>0&&d.forEach(f=>{typeof f=="string"&&(e[s][f]=o)}),e[s][i]=o}),e}}let en=[],mt={};const gt={},ls=Object.keys(gt);function fs(t,e){let{mixoutsTo:n}=e;return en=t,mt={},Object.keys(gt).forEach(a=>{ls.indexOf(a)===-1&&delete gt[a]}),en.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{mt[i]||(mt[i]=[]),mt[i].push(s[i])})}a.provides&&a.provides(gt)}),n}function ce(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(mt[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function ut(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(mt[t]||[]).forEach(s=>{s.apply(null,n)})}function et(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return gt[t]?gt[t].apply(null,e):void 0}function ue(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||tt();if(e)return e=it(n,e)||e,Ze(aa.definitions,n,e)||Ze(G.styles,n,e)}const aa=new os,cs=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,ut("noAuto")},us={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Q?(ut("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Xr(()=>{ms({autoReplaceSvgRoot:e}),ut("watch",t)})}},ds={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:it(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Yt(t[0]);return{prefix:n,iconName:it(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Nr))){const e=Ut(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||tt(),iconName:it(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=tt();return{prefix:e,iconName:it(e,t)||t}}}},j={noAuto:cs,config:b,dom:us,parse:ds,library:aa,findIconDefinition:ue,toHtml:St},ms=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=S}=t;(Object.keys(G.styles).length>0||b.autoFetchSvg)&&Q&&b.autoReplaceSvg&&j.dom.i2svg({node:e})};function Wt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>St(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Q)return;const n=S.createElement("div");return n.innerHTML=t.html,n.children}}),t}function gs(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Oe(i)&&n.found&&!a.found){const{width:o,height:d}=n,f={x:o/d/2,y:.5};r.style=jt(c(c({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ps(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Ce(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:d,titleId:f,extra:u,watchable:h=!1}=t,{width:l,height:p}=n.found?n:e,y=pr.includes(a),_=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(A=>u.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(u.classes).join(" ");let g={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(l," ").concat(p)})};const v=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(l/p*16*.0625,"em")}:{};h&&(g.attributes[ct]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||wt())},children:[o]}),delete g.attributes.title);const x=c(c({},g),{},{prefix:a,iconName:r,main:e,mask:n,maskId:d,transform:s,symbol:i,styles:c(c({},v),u.styles)}),{children:k,attributes:m}=n.found&&e.found?et("generateAbstractMask",x)||{children:[],attributes:{}}:et("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=k,x.attributes=m,i?ps(x):gs(x)}function nn(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,d=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(d[ct]="");const f=c({},i.styles);Oe(r)&&(f.transform=Hr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=jt(f);u.length>0&&(d.style=u);const h=[];return h.push({tag:"span",attributes:d,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function hs(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=jt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:qt}=G;function de(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Bt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Bt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const vs={found:!1,width:512,height:512};function bs(t,e){!Yn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function me(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=tt()),new Promise((a,r)=>{if(n==="fa"){const s=ea(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&qt[e]&&qt[e][t]){const s=qt[e][t];return a(de(s))}bs(t,e),a(c(c({},vs),{},{icon:b.showMissingIcons&&t?et("missingIconAbstract")||{}:{}}))})}const an=()=>{},ge=b.measurePerformance&&It&&It.mark&&It.measure?It:{mark:an,measure:an},xt='FA "6.7.1"',ys=t=>(ge.mark("".concat(xt," ").concat(t," begins")),()=>ra(t)),ra=t=>{ge.mark("".concat(xt," ").concat(t," ends")),ge.measure("".concat(xt," ").concat(t),"".concat(xt," ").concat(t," begins"),"".concat(xt," ").concat(t," ends"))};var Ne={begin:ys,end:ra};const Mt=()=>{};function rn(t){return typeof(t.getAttribute?t.getAttribute(ct):null)=="string"}function xs(t){const e=t.getAttribute?t.getAttribute(we):null,n=t.getAttribute?t.getAttribute(ke):null;return e&&n}function _s(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function As(){return b.autoReplaceSvg===!0?Lt.replace:Lt[b.autoReplaceSvg]||Lt.replace}function ws(t){return S.createElementNS("http://www.w3.org/2000/svg",t)}function ks(t){return S.createElement(t)}function sa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ws:ks}=e;if(typeof t=="string")return S.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(sa(s,{ceFn:n}))}),a}function Es(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Lt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(sa(n),e)}),e.getAttribute(ct)===null&&b.keepOriginalSource){let n=S.createComment(Es(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Se(e).indexOf(b.replacementClass))return Lt.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===b.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>St(s)).join(`
`);e.setAttribute(ct,""),e.innerHTML=r}};function sn(t){t()}function ia(t,e){const n=typeof e=="function"?e:Mt;if(t.length===0)n();else{let a=sn;b.mutateApproach===Pr&&(a=$.requestAnimationFrame||sn),a(()=>{const r=As(),s=Ne.begin("mutate");t.map(r),s(),n()})}}let Te=!1;function oa(){Te=!0}function pe(){Te=!1}let Dt=null;function on(t){if(!Xe||!b.observeMutations)return;const{treeCallback:e=Mt,nodeCallback:n=Mt,pseudoElementsCallback:a=Mt,observeMutationsRoot:r=S}=t;Dt=new Xe(s=>{if(Te)return;const i=tt();ht(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!rn(o.addedNodes[0])&&(b.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&b.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&rn(o.target)&&~Mr.indexOf(o.attributeName))if(o.attributeName==="class"&&xs(o.target)){const{prefix:d,iconName:f}=Ut(Se(o.target));o.target.setAttribute(we,d||i),f&&o.target.setAttribute(ke,f)}else _s(o.target)&&n(o.target)})}),Q&&Dt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ss(){Dt&&Dt.disconnect()}function Os(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Ps(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Ut(Se(t));return r.prefix||(r.prefix=tt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=$r(r.prefix,t.innerText)||Ie(r.prefix,le(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Is(t){const e=ht(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||wt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Cs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ps(t),s=Is(t),i=ce("parseNodeAttributes",{},t);let o=e.styleParser?Os(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Ns}=G;function la(t){const e=b.autoReplaceSvg==="nest"?ln(t,{styleParser:!1}):ln(t);return~e.extra.classes.indexOf(Wn)?et("generateLayersText",t,e):et("generateSvgReplacementMutation",t,e)}function Ts(){return[...dr,...ne]}function fn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Q)return Promise.resolve();const n=S.documentElement.classList,a=u=>n.add("".concat(Ke,"-").concat(u)),r=u=>n.remove("".concat(Ke,"-").concat(u)),s=b.autoFetchSvg?Ts():Ln.concat(Object.keys(Ns));s.includes("fa")||s.push("fa");const i=[".".concat(Wn,":not([").concat(ct,"])")].concat(s.map(u=>".".concat(u,":not([").concat(ct,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=ht(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const d=Ne.begin("onTree"),f=o.reduce((u,h)=>{try{const l=la(h);l&&u.push(l)}catch(l){Yn||l.name==="MissingIcon"&&console.error(l)}return u},[]);return new Promise((u,h)=>{Promise.all(f).then(l=>{ia(l,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),d(),u()})}).catch(l=>{d(),h(l)})})}function Fs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;la(t).then(n=>{n&&ia([n],e)})}function Ms(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ue(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ue(r||{})),t(a,c(c({},n),{},{mask:r}))}}const Ls=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=H,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:d=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:l,icon:p}=t;return Wt(c({type:"icon"},t),()=>(ut("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(i?f["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(o||wt()):(f["aria-hidden"]="true",f.focusable="false")),Ce({icons:{main:de(p),mask:r?de(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:l,transform:c(c({},H),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:f,styles:u,classes:d}})))};var Rs={mixout(){return{icon:Ms(Ls)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=fn,t.nodeCallback=Fs,t}}},provides(t){t.i2svg=function(e){const{node:n=S,callback:a=()=>{}}=e;return fn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:d,mask:f,maskId:u,extra:h}=n;return new Promise((l,p)=>{Promise.all([me(a,i),f.iconName?me(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[_,g]=y;l([e,Ce({icons:{main:_,mask:g},prefix:i,iconName:a,transform:o,symbol:d,maskId:u,title:r,titleId:s,extra:h,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=jt(i);o.length>0&&(a.style=o);let d;return Oe(s)&&(d=et("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(d||r.icon),{children:n,attributes:a}}}},Ds={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Wt({type:"layer"},()=>{ut("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},zs={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return Wt({type:"counter",content:t},()=>(ut("beforeDOMElementCreation",{content:t,params:e}),hs({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},js={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=H,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return Wt({type:"text",content:t},()=>(ut("beforeDOMElementCreation",{content:t,params:e}),nn({content:t,transform:c(c({},H),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(b.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Fn){const d=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/d,o=f.height/d}return b.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,nn({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const Ys=new RegExp('"',"ug"),cn=[1105920,1112319],un=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),fr),Sr),yr),he=Object.keys(un).reduce((t,e)=>(t[e.toLowerCase()]=un[e],t),{}),Us=Object.keys(he).reduce((t,e)=>{const n=he[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ws(t){const e=t.replace(Ys,""),n=qr(e,0),a=n>=cn[0]&&n<=cn[1],r=e.length===2?e[0]===e[1]:!1;return{value:le(r?e[0]:e),isSecondary:a||r}}function Hs(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(he[n]||{})[r]||Us[n]}function dn(t,e){const n="".concat(Or).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=ht(t.children).filter(l=>l.getAttribute(re)===e)[0],o=$.getComputedStyle(t,e),d=o.getPropertyValue("font-family"),f=d.match(Tr),u=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&h!=="none"&&h!==""){const l=o.getPropertyValue("content");let p=Hs(d,u);const{value:y,isSecondary:_}=Ws(l),g=f[0].startsWith("FontAwesome");let v=Ie(p,y),x=v;if(g){const k=ts(y);k.iconName&&k.prefix&&(v=k.iconName,p=k.prefix)}if(v&&!_&&(!i||i.getAttribute(we)!==p||i.getAttribute(ke)!==x)){t.setAttribute(n,x),i&&t.removeChild(i);const k=Cs(),{extra:m}=k;m.attributes[re]=e,me(v,p).then(A=>{const P=Ce(c(c({},k),{},{icons:{main:A,mask:na()},prefix:p,iconName:x,extra:m,watchable:!0})),N=S.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=P.map(T=>St(T)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Gs(t){return Promise.all([dn(t,"::before"),dn(t,"::after")])}function Bs(t){return t.parentNode!==document.head&&!~Ir.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(re)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mn(t){if(Q)return new Promise((e,n)=>{const a=ht(t.querySelectorAll("*")).filter(Bs).map(Gs),r=Ne.begin("searchPseudoElements");oa(),Promise.all(a).then(()=>{r(),pe(),e()}).catch(()=>{r(),pe(),n()})})}var Xs={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=mn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=S}=e;b.searchPseudoElements&&mn(n)}}};let gn=!1;var Vs={mixout(){return{dom:{unwatch(){oa(),gn=!0}}}},hooks(){return{bootstrap(){on(ce("mutationObserverCallbacks",{}))},noAuto(){Ss()},watch(t){const{observeMutationsRoot:e}=t;gn?pe():on(ce("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const pn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var qs={mixout(){return{parse:{transform:t=>pn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=pn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),d="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(d," ").concat(f)},h={transform:"translate(".concat(s/2*-1," -256)")},l={outer:i,inner:u,path:h};return{tag:"g",attributes:c({},l.outer),children:[{tag:"g",attributes:c({},l.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),l.path)}]}]}}}};const Kt={x:0,y:0,width:"100%",height:"100%"};function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ks(t){return t.tag==="g"?t.children:[t]}var Qs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Ut(n.split(" ").map(r=>r.trim())):na();return a.prefix||(a.prefix=tt()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:d,icon:f}=r,{width:u,icon:h}=s,l=Wr({transform:o,containerWidth:u,iconWidth:d}),p={tag:"rect",attributes:c(c({},Kt),{},{fill:"white"})},y=f.children?{children:f.children.map(hn)}:{},_={tag:"g",attributes:c({},l.inner),children:[hn(c({tag:f.tag,attributes:c(c({},f.attributes),l.path)},y))]},g={tag:"g",attributes:c({},l.outer),children:[_]},v="mask-".concat(i||wt()),x="clip-".concat(i||wt()),k={tag:"mask",attributes:c(c({},Kt),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},m={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Ks(h)},k]};return n.push(m,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(v,")")},Kt)}),{children:n,attributes:a}}}},Js={provides(t){let e=!1;$.matchMedia&&(e=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Zs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},$s=[Br,Rs,Ds,zs,js,Xs,Vs,qs,Qs,Js,Zs];fs($s,{mixoutsTo:j});j.noAuto;j.config;j.library;j.dom;const ve=j.parse;j.findIconDefinition;j.toHtml;const ti=j.icon;j.layer;j.text;j.counter;let fa=!1;try{fa=!0}catch{}function ei(...t){!fa&&console&&typeof console.error=="function"&&console.error(...t)}function vn(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ve.icon)return ve.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Qt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var ni=da("<svg><!></svg>");function ai(t,e){var _;at(e,!1);let n=w(e,"tag",8),a=w(e,"props",8),r=w(e,"children",8),s=w(e,"style",8,null),i=w(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(g){return(g==null?void 0:g.reduce((v,x)=>v+(x.tag?d(x):x),""))||""}function d({tag:g,props:v,children:x}){const k=Object.keys(v).map(m=>`${m}="${v[m]}"`).join(" ");return`<${g} ${k}>${o(x)}</${g}>`}const f=o(r()),u=(_=a())!=null&&_.style?`${a().style}${s()||""}`:s(),h={...a(),style:u};nt();var l=ni();let p;var y=L(l);$t(y,()=>f,!0,!1),C(l),Ya(l,g=>i(g),()=>i()),M(()=>p=te(l,p,{...h},void 0,!0)),E(t,l),rt()}function ca(t,e){const n=Ye(e,["children","$$slots","$$events","$$legacy"]),a=Ye(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);at(e,!1),w(e,"border",8,!1);let r=w(e,"mask",8,null),s=w(e,"maskId",8,null);w(e,"fixedWidth",8,!1),w(e,"inverse",8,!1),w(e,"flip",8,!1);let i=w(e,"icon",8,null);w(e,"listItem",8,!1),w(e,"pull",8,null),w(e,"pulse",8,!1),w(e,"rotation",8,null),w(e,"size",8,null),w(e,"spin",8,!1),w(e,"spinPulse",8,!1),w(e,"spinReverse",8,!1),w(e,"beat",8,!1),w(e,"fade",8,!1),w(e,"beatFade",8,!1),w(e,"bounce",8,!1),w(e,"shake",8,!1);let o=w(e,"symbol",8,!1),d=w(e,"title",8,""),f=w(e,"titleId",8,null),u=w(e,"transform",8,null);w(e,"swapOpacity",8,!1);let h=w(e,"ref",12,null),l=w(e,"style",8,null);const p=vn(i()),y=Qt("classes",[...Qa(n),...(n.class||"").split(" ")]),_=Qt("transform",typeof u()=="string"?ve.transform(u()):u()),g=Qt("mask",vn(r())),v=ti(p,{...y,..._,...g,symbol:o(),title:d(),titleId:f(),maskId:s()});let x=Na(null);if(!v)ei("Could not find icon",p);else{const{abstract:P}=v;Ca(x,In((N,T,B)=>({tag:N,props:T,children:B}),P[0],a))}nt();var k=ot(),m=Y(k);{var A=P=>{ai(P,La(()=>z(x),{get style(){return l()},get ref(){return h()},set ref(N){h(N)},$$legacy:!0}))};U(m,P=>{z(x)&&P(A)})}E(t,k),rt()}const ri=(t,e)=>{if(e().short){t.preventDefault();const n=`s/${e().short}`;e().target==="blank"?window.open(n):ja(n)}};var si=D('<li class="link svelte-p5gp3m"><a class="svelte-p5gp3m"><!> </a></li>');function ii(t,e){at(e,!1);let n=w(e,"link",8);const a=[n().privacy?"noopener noreferrer":void 0,n().external?"external":void 0].filter(Boolean).join(" ");nt();var r=ot(),s=Y(r);{var i=o=>{var d=si(),f=L(d);O(f,"rel",a),f.__click=[ri,n];var u=L(f);ca(u,{get icon(){return n().icon},style:"width: 1em;"});var h=I(u);C(f),C(d),M(()=>{O(f,"href",n().url),O(f,"target",`_${n().target??"self"??""}`),O(f,"itemprop",n().sameAs?"sameAs":void 0),Zt(h,` ${n().name??""}`)}),E(o,d)};U(s,o=>{n().display!==!1&&o(i)})}E(t,r),rt()}En(["click"]);var oi=D('<section class="links"><ul class="svelte-37tmq0"></ul></section>');function li(t,e){let n=w(e,"links",8);var a=oi(),r=L(a);ft(r,5,n,lt,(s,i)=>{ii(s,{get link(){return z(i)}})}),C(r),C(a),E(t,a)}const Nt={sources:{avif:""+new URL("../assets/avatar.BRk7bXGH.avif",import.meta.url).href+" 300w, "+new URL("../assets/avatar.D02hOIcw.avif",import.meta.url).href+" 600w",webp:""+new URL("../assets/avatar.VIyhnhll.webp",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BPKBrzJY.webp",import.meta.url).href+" 600w",png:""+new URL("../assets/avatar.M-STc7G1.png",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href+" 600w"},img:{src:""+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href,w:600,h:600}};var fi=D('<img class="avatar svelte-yvfll6" width="100px" height="100px">'),ci=D("<source>"),ui=D('<picture><!> <img class="avatar svelte-yvfll6" width="100px" height="100px"></picture>'),di=D('<header itemscope="" itemtype="http://schema.org/Person" class="user-info svelte-yvfll6"><!> <h1 itemprop="name" class="svelte-yvfll6"><!></h1> <p itemprop="description" class="svelte-yvfll6"><!></p></header>');function mi(t,e){at(e,!1);let n=w(e,"user",8),a=w(e,"i18n",8);nt();var r=di(),s=L(r);{var i=l=>{var p=fi();M(()=>O(p,"alt",a().avatar.alt.replace("{{userName}}",n().name))),M(()=>O(p,"src",Nt.img.src)),E(l,p)},o=l=>{var p=ui(),y=L(p);ft(y,1,()=>Object.entries(Nt.sources),lt,(g,v)=>{let x=()=>z(v)[0],k=()=>z(v)[1];var m=ci();M(()=>{O(m,"srcset",k()),O(m,"type","image/"+x())}),E(g,m)});var _=I(y,2);M(()=>O(_,"alt",a().avatar.alt.replace("{{userName}}",n().name))),C(p),M(()=>O(_,"src",Nt.img.src)),E(l,p)};U(s,l=>{typeof Nt=="string"?l(i):l(o,!1)})}var d=I(s,2),f=L(d);$t(f,()=>n().name,!1,!1),C(d);var u=I(d,2),h=L(u);$t(h,()=>n().bio,!1,!1),C(u),C(r),E(t,r),rt()}var gi=D('<footer class="credits"><p class="svelte-ss06mj"> <a href="https://linksharer.js.org?utm_source=generated_website&amp;utm_medium=credits&amp;utm_campaign=project_usage&amp;utm_content=footer" rel="external" class="svelte-ss06mj">LinkSharer</a> </p></footer>');function pi(t,e){at(e,!1);let n=w(e,"showCredits",8),a=w(e,"i18n",8),r=w(e,"version",8);nt();var s=ot(),i=Y(s);{var o=d=>{var f=gi(),u=L(f),h=L(u),l=I(h,2);C(u),C(f),M(()=>{Zt(h,`${a().credits??""} `),Zt(l,` v${r()??""}`)}),E(d,f)};U(i,d=>{n()&&d(o)})}E(t,s),rt()}var hi=D('<li class="social svelte-1fhc3ff"><a itemprop="sameAs" rel="noopener noreferrer" class="svelte-1fhc3ff"><span class="svelte-1fhc3ff"><!></span></a></li>');function vi(t,e){at(e,!1);let n=w(e,"social",8);nt();var a=hi(),r=L(a),s=L(r),i=L(s);ca(i,{get icon(){return n().icon}}),C(s),C(r),C(a),M(()=>{O(r,"href",n().url),O(r,"target",`_${n().target??"self"??""}`),O(r,"aria-label",n().name)}),E(t,a),rt()}var bi=D('<article class="socials"><ul class="svelte-yffzw0"></ul></article>');function yi(t,e){let n=w(e,"socials",8);var a=bi(),r=L(a);ft(r,5,n,lt,(s,i)=>{vi(s,{get social(){return z(i)}})}),C(r),C(a),E(t,a)}var xi=be("<script><\/script><!---->",1),_i=D('<meta name="google-site-verification">'),Ai=D('<link rel="stylesheet"> <!> <!>',1),wi=be('<script async defer="" src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script> <noscript></noscript>',1),ki=be("<script><\/script><!---->",1),Ei=D('<!> <!> <div class="linksharer svelte-9f1c5"><main class="svelte-9f1c5"><!> <!> <!></main> <!></div> <!>',1);function Li(t,e){var k;at(e,!1);let n=w(e,"data",8);const a=n().config.template.startsWith("@")?`https://linksharer.github.io/Templates/templates/${n().config.template.slice(1)}.css`:n().config.template;let r={head:[],body:[]};(k=n().config.scripts)==null||k.forEach(m=>{const{head:A,...P}=m;r[A?"head":"body"].push(P)}),nt();var s=Ei();Sn(m=>{var A=Ai(),P=Y(A);O(P,"href",a);var N=I(P,2);{var T=F=>{var V=ot(),Ht=Y(V);ft(Ht,1,()=>r.head,lt,(Ot,Pt)=>{var vt=xi(),dt=Y(vt);let bt;var Si=I(dt);M(()=>bt=te(dt,bt,{...z(Pt)},"svelte-9f1c5")),je(dt),E(Ot,vt)}),E(F,V)};U(N,F=>{r.head&&F(T)})}var B=I(N,2);{var X=F=>{var V=_i();M(()=>O(V,"content",n().config.googleSiteVerification)),E(F,V)};U(B,F=>{n().config.googleSiteVerification&&F(X)})}E(m,A)});var i=Y(s);Ka(i,{get seo(){return n().config.seo}});var o=I(i,2);{var d=m=>{var A=wi();Ta(2),E(m,A)};U(o,m=>{n().config.analytics&&m(d)})}var f=I(o,2),u=L(f),h=L(u);mi(h,{get user(){return n().config.user},get i18n(){return n().config.i18n}});var l=I(h,2);li(l,{get links(){return n().config.links}});var p=I(l,2);{var y=m=>{yi(m,{get socials(){return n().config.socials}})};U(p,m=>{n().config.socials&&m(y)})}C(u);var _=I(u,2),g=Fa(()=>n().config.credits||!0);pi(_,{get showCredits(){return z(g)},get i18n(){return n().config.i18n},get version(){return n().version}}),C(f);var v=I(f,2);{var x=m=>{var A=ot(),P=Y(A);ft(P,1,()=>r.body,lt,(N,T)=>{var B=ki(),X=Y(B);let F;I(X),M(()=>F=te(X,F,{...z(T)},"svelte-9f1c5")),je(X),E(N,B)}),E(m,A)};U(v,m=>{r.body&&m(x)})}E(t,s),rt()}export{Li as component};
