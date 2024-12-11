import{d as Fe,f as ua,a as E,c as it,b as D,n as da,t as ve}from"../chunks/disclose-version.CqHAqu6x.js";import"../chunks/legacy.DWZVRLkr.js";import{q as bn,P as ma,m as yn,v as H,G as Ct,I as Qt,a0 as ga,N as _n,a1 as pa,a2 as Me,F as Ht,w as rt,aw as Nt,a3 as xn,n as be,a4 as ha,Q as Le,ax as ye,ay as Re,az as _e,aA as va,M as ba,aB as ya,t as An,aC as wn,B as yt,J as _a,ap as xa,aD as Aa,aj as wa,U as De,aE as ka,C as kn,K as Ea,D as Sa,aF as Pa,_ as ze,aG as Oa,p as tt,a as et,f as U,s as N,x as M,h as z,$ as Ia,y as L,z as O,W as Ca,aH as Na,aI as Ta,ae as Fa}from"../chunks/runtime.C8AC-I3W.js";import{g as Ma,i as En,h as Sn,j as je}from"../chunks/store.D3TLkv2p.js";import{p as w,i as W,l as Ye,s as La}from"../chunks/props.CMccBVvr.js";import{i as Ra,n as Da,a as za,s as Jt}from"../chunks/render.Cod6GCu5.js";import{i as nt}from"../chunks/lifecycle.CSbqxGUE.js";import{g as ja}from"../chunks/entry.BMSsbEY3.js";import{b as Ya}from"../chunks/this.BJbRzEu3.js";function Ua(t,e){if(e){const n=document.body;t.autofocus=!0,bn(()=>{document.activeElement===n&&t.focus()})}}function ot(t,e){return e}function Wa(t,e,n,a){for(var r=[],s=e.length,i=0;i<s;i++)va(e[i].e,r,!0);var o=s>0&&r.length===0&&n!==null;if(o){var u=n.parentNode;ba(u),u.append(n),a.clear(),Q(t,e[0].prev,e[s-1].next)}ya(r,()=>{for(var f=0;f<s;f++){var d=e[f];o||(a.delete(d.k),Q(t,d.prev,d.next)),An(d.e,!o)}})}function lt(t,e,n,a,r,s=null){var i=t,o={flags:e,items:new Map,first:null},u=(e&wn)!==0;if(u){var f=t;i=H?Ct(yt(f)):f.appendChild(ma())}H&&Qt();var d=null,h=!1;yn(()=>{var l=n(),p=ga(l)?l:l==null?[]:_n(l),_=p.length;if(h&&_===0)return;h=_===0;let A=!1;if(H){var g=i.data===pa;g!==(_===0)&&(i=Me(),Ct(i),Ht(!1),A=!0)}if(H){for(var v=null,x,y=0;y<_;y++){if(rt.nodeType===8&&rt.data===_a){i=rt,A=!0,Ht(!1);break}var m=p[y],k=a(m,y);x=Pn(rt,o,v,null,m,k,y,r,e),o.items.set(k,x),v=x}_>0&&Ct(Me())}if(!H){var I=xa;Ha(p,o,i,r,e,(I.f&Nt)!==0,a)}s!==null&&(_===0?d?xn(d):d=be(()=>s(i)):d!==null&&ha(d,()=>{d=null})),A&&Ht(!0),n()}),H&&(i=rt)}function Ha(t,e,n,a,r,s,i){var vt,ut,bt,Wt;var o=(r&Aa)!==0,u=(r&(ye|_e))!==0,f=t.length,d=e.items,h=e.first,l=h,p,_=null,A,g=[],v=[],x,y,m,k;if(o)for(k=0;k<f;k+=1)x=t[k],y=i(x,k),m=d.get(y),m!==void 0&&((vt=m.a)==null||vt.measure(),(A??(A=new Set)).add(m));for(k=0;k<f;k+=1){if(x=t[k],y=i(x,k),m=d.get(y),m===void 0){var I=l?l.e.nodes_start:n;_=Pn(I,e,_,_===null?e.first:_.next,x,y,k,a,r),d.set(y,_),g=[],v=[],l=_.next;continue}if(u&&Ga(m,x,k,r),m.e.f&Nt&&(xn(m.e),o&&((ut=m.a)==null||ut.unfix(),(A??(A=new Set)).delete(m))),m!==l){if(p!==void 0&&p.has(m)){if(g.length<v.length){var T=v[0],C;_=T.prev;var F=g[0],Y=g[g.length-1];for(C=0;C<g.length;C+=1)Ue(g[C],T,n);for(C=0;C<v.length;C+=1)p.delete(v[C]);Q(e,F.prev,Y.next),Q(e,_,F),Q(e,Y,T),l=T,_=Y,k-=1,g=[],v=[]}else p.delete(m),Ue(m,l,n),Q(e,m.prev,m.next),Q(e,m,_===null?e.first:_.next),Q(e,_,m),_=m;continue}for(g=[],v=[];l!==null&&l.k!==y;)(s||!(l.e.f&Nt))&&(p??(p=new Set)).add(l),v.push(l),l=l.next;if(l===null)continue;m=l}g.push(m),_=m,l=m.next}if(l!==null||p!==void 0){for(var at=p===void 0?[]:_n(p);l!==null;)(s||!(l.e.f&Nt))&&at.push(l),l=l.next;var ht=at.length;if(ht>0){var Ut=r&wn&&f===0?n:null;if(o){for(k=0;k<ht;k+=1)(bt=at[k].a)==null||bt.measure();for(k=0;k<ht;k+=1)(Wt=at[k].a)==null||Wt.fix()}Wa(e,at,Ut,d)}}o&&bn(()=>{var Te;if(A!==void 0)for(m of A)(Te=m.a)==null||Te.apply()}),Le.first=e.first&&e.first.e,Le.last=_&&_.e}function Ga(t,e,n,a){a&ye&&Re(t.v,e),a&_e?Re(t.i,n):t.i=n}function Pn(t,e,n,a,r,s,i,o,u){var f=(u&ye)!==0,d=(u&ka)===0,h=f?d?wa(r):De(r):r,l=u&_e?De(i):i,p={i:l,v:h,k:s,a:null,e:null,prev:n,next:a};try{return p.e=be(()=>o(t,h,l),H),p.e.prev=n&&n.e,p.e.next=a&&a.e,n===null?e.first=p:(n.next=p,n.e.next=p.e),a!==null&&(a.prev=p,a.e.prev=p.e),p}finally{}}function Ue(t,e,n){for(var a=t.next?t.next.e.nodes_start:n,r=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==a;){var i=kn(s);r.before(s),s=i}}function Q(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Zt(t,e,n,a,r){var s=t,i="",o;yn(()=>{if(i===(i=e()??"")){H&&Qt();return}o!==void 0&&(An(o),o=void 0),i!==""&&(o=be(()=>{if(H){rt.data;for(var u=Qt(),f=u;u!==null&&(u.nodeType!==8||u.data!=="");)f=u,u=kn(u);if(u===null)throw Ea(),Sa;Fe(rt,f),s=Ct(u);return}var d=i+"";n&&(d=`<svg>${d}</svg>`);var h=ua(d);if((n||a)&&(h=yt(h)),Fe(yt(h),h.lastChild),n||a)for(;yt(h);)s.before(yt(h));else s.before(h)}))})}function P(t,e,n,a){var r=t.__attributes??(t.__attributes={});H&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Pa]=n),n==null?t.removeAttribute(e):typeof n!="string"&&On(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function $t(t,e,n,a,r=!1,s=!1,i=!1){var o=e||{},u=t.tagName==="OPTION";for(var f in e)f in n||(n[f]=null);a!==void 0&&(n.class=n.class?n.class+" "+a:a);var d=On(t),h=t.__attributes??(t.__attributes={});for(const g in n){let v=n[g];if(u&&g==="value"&&v==null){t.value=t.__value="",o[g]=v;continue}var l=o[g];if(v!==l){o[g]=v;var p=g[0]+g[1];if(p!=="$$"){if(p==="on"){const x={},y="$$"+g;let m=g.slice(2);var _=za(m);if(Ra(m)&&(m=m.slice(0,-7),x.capture=!0),!_&&l){if(v!=null)continue;t.removeEventListener(m,o[y],x),o[y]=null}if(v!=null)if(_)t[`__${m}`]=v,En([m]);else{let k=function(I){o[g].call(this,I)};o[y]=Ma(m,t,k,x)}else _&&(t[`__${m}`]=void 0)}else if(g==="style"&&v!=null)t.style.cssText=v+"";else if(g==="autofocus")Ua(t,!!v);else if(g==="__value"||g==="value"&&v!=null)t.value=t[g]=t.__value=v;else{var A=g;r||(A=Da(A)),v==null&&!s?(h[g]=null,t.removeAttribute(g)):d.includes(A)&&(s||typeof v!="string")?t[A]=v:typeof v!="function"&&(H&&(A==="src"||A==="href"||A==="srcset")||P(t,A,v))}g==="style"&&"__styles"in t&&(t.__styles={})}}}return o}var We=new Map;function On(t){var e=We.get(t.nodeName);if(e)return e;We.set(t.nodeName,e=[]);for(var n,a=ze(t),r=Element.prototype;r!==a;){n=Oa(a);for(var s in n)n[s].set&&e.push(s);a=ze(a)}return e}var Ba=D('<link rel="canonical">'),Xa=D("<meta>"),Va=D("<meta>"),qa=D('<meta name="description"> <!> <!> <!>',1);function Ka(t,e){tt(e,!1);let n=w(e,"seo",8);nt(),Sn(a=>{var r=qa(),s=U(r),i=N(s,2);{var o=l=>{var p=Ba();M(()=>P(p,"href",n().canonical)),E(l,p)};W(i,l=>{n().canonical&&l(o)})}var u=N(i,2);{var f=l=>{var p=it(),_=U(p);lt(_,1,()=>Object.entries(n().og),ot,(A,g)=>{var v=Xa();M(()=>{P(v,"property",`og:${z(g)[0]??""}`),P(v,"content",z(g)[1])}),E(A,v)}),E(l,p)};W(u,l=>{n().og&&l(f)})}var d=N(u,2);{var h=l=>{var p=it(),_=U(p);lt(_,1,()=>Object.entries(n().twitter),ot,(A,g)=>{var v=Va();M(()=>{P(v,"property",`og:${z(g)[0]??""}`),P(v,"content",z(g)[1])}),E(A,v)}),E(l,p)};W(d,l=>{n().twitter&&l(h)})}M(()=>{Ia.title=n().title,P(s,"content",n().description)}),E(a,r)}),et()}function Qa(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:u,spinReverse:f,pulse:d,fixedWidth:h,inverse:l,border:p,listItem:_,flip:A,size:g,rotation:v,pull:x}=t,y={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":l,"fa-border":p,"fa-li":_,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both",[`fa-${g}`]:typeof g<"u"&&g!==null,[`fa-rotate-${v}`]:typeof v<"u"&&v!==null&&v!==0,[`fa-pull-${x}`]:typeof x<"u"&&x!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(y).map(m=>y[m]?m:null).filter(m=>m)}function Ja(t){return t=t-0,t===t}function Za(t){return Ja(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function $a(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function In(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(s=>In(t,s)),r=Object.keys(e.attributes||{}).reduce((s,i)=>{const o=e.attributes[i];return i==="style"?s.attrs.style=$a(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[Za(i)]=o,s},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function tr(t,e,n){return(e=nr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(a){tr(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function er(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nr(t){var e=er(t,"string");return typeof e=="symbol"?e:e+""}const Ge=()=>{};let xe={},Cn={},Nn=null,Tn={mark:Ge,measure:Ge};try{typeof window<"u"&&(xe=window),typeof document<"u"&&(Cn=document),typeof MutationObserver<"u"&&(Nn=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}const{userAgent:Be=""}=xe.navigator||{},J=xe,S=Cn,Xe=Nn,Pt=Tn;J.document;const q=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",Fn=~Be.indexOf("MSIE")||~Be.indexOf("Trident/");var ar=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,rr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Mn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},sr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],R="classic",Rt="duotone",ir="sharp",or="sharp-duotone",Rn=[R,Rt,ir,or],lr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},fr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},cr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ur={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},dr=["fak","fa-kit","fakd","fa-kit-duotone"],Ve={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},mr=["kit"],gr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},pr=["fak","fakd"],hr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},qe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],br=["fak","fa-kit","fakd","fa-kit-duotone"],yr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},_r={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},xr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},te={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Ar=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ee=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...vr,...Ar],wr=["solid","regular","light","thin","duotone","brands"],Dn=[1,2,3,4,5,6,7,8,9,10],kr=Dn.concat([11,12,13,14,15,16,17,18,19,20]),Er=[...Object.keys(xr),...wr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY].concat(Dn.map(t=>"".concat(t,"x"))).concat(kr.map(t=>"w-".concat(t))),Sr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const X="___FONT_AWESOME___",ne=16,zn="fa",jn="svg-inline--fa",ft="data-fa-i2svg",ae="data-fa-pseudo-element",Pr="data-fa-pseudo-element-pending",Ae="data-prefix",we="data-icon",Ke="fontawesome-i2svg",Or="async",Ir=["HTML","HEAD","STYLE","SCRIPT"],Yn=(()=>{try{return!0}catch{return!1}})();function Et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[R]}})}const Un=c({},Mn);Un[R]=c(c(c(c({},{"fa-duotone":"duotone"}),Mn[R]),Ve.kit),Ve["kit-duotone"]);const Cr=Et(Un),re=c({},ur);re[R]=c(c(c(c({},{duotone:"fad"}),re[R]),qe.kit),qe["kit-duotone"]);const Qe=Et(re),se=c({},te);se[R]=c(c({},se[R]),hr.kit);const ke=Et(se),ie=c({},_r);ie[R]=c(c({},ie[R]),gr.kit);Et(ie);const Nr=ar,Wn="fa-layers-text",Tr=rr,Fr=c({},lr);Et(Fr);const Mr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gt=sr,Lr=[...mr,...Er],xt=J.FontAwesomeConfig||{};function Rr(t){var e=S.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Dr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}S&&typeof S.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Dr(Rr(n));r!=null&&(xt[a]=r)});const Hn={styleDefault:"solid",familyDefault:R,cssPrefix:zn,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xt.familyPrefix&&(xt.cssPrefix=xt.familyPrefix);const gt=c(c({},Hn),xt);gt.autoReplaceSvg||(gt.observeMutations=!1);const b={};Object.keys(Hn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){gt[t]=e,At.forEach(n=>n(b))},get:function(){return gt[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){gt.cssPrefix=t,At.forEach(e=>e(b))},get:function(){return gt.cssPrefix}});J.FontAwesomeConfig=b;const At=[];function zr(t){return At.push(t),()=>{At.splice(At.indexOf(t),1)}}const K=ne,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jr(t){if(!t||!q)return;const e=S.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=S.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return S.head.insertBefore(e,a),t}const Yr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){let t=12,e="";for(;t-- >0;)e+=Yr[Math.random()*62|0];return e}function pt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ee(t){return t.classList?pt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Gn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ur(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Gn(t[n]),'" '),"").trim()}function Dt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Se(t){return t.size!==G.size||t.x!==G.x||t.y!==G.y||t.rotate!==G.rotate||t.flipX||t.flipY}function Wr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(s," ").concat(i," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Hr(t){let{transform:e,width:n=ne,height:a=ne,startCentered:r=!1}=t,s="";return r&&Fn?s+="translate(".concat(e.x/K-n/2,"em, ").concat(e.y/K-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/K,"em), calc(-50% + ").concat(e.y/K,"em)) "):s+="translate(".concat(e.x/K,"em, ").concat(e.y/K,"em) "),s+="scale(".concat(e.size/K*(e.flipX?-1:1),", ").concat(e.size/K*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Gr=`:root, :host {
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
}`;function Bn(){const t=zn,e=jn,n=b.cssPrefix,a=b.replacementClass;let r=Gr;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Je=!1;function Bt(){b.autoAddCss&&!Je&&(jr(Bn()),Je=!0)}var Br={mixout(){return{dom:{css:Bn,insertCss:Bt}}},hooks(){return{beforeDOMElementCreation(){Bt()},beforeI2svg(){Bt()}}}};const V=J||{};V[X]||(V[X]={});V[X].styles||(V[X].styles={});V[X].hooks||(V[X].hooks={});V[X].shims||(V[X].shims=[]);var B=V[X];const Xn=[],Vn=function(){S.removeEventListener("DOMContentLoaded",Vn),Mt=1,Xn.map(t=>t())};let Mt=!1;q&&(Mt=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),Mt||S.addEventListener("DOMContentLoaded",Vn));function Xr(t){q&&(Mt?setTimeout(t,0):Xn.push(t))}function St(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Gn(t):"<".concat(e," ").concat(Ur(n),">").concat(a.map(St).join(""),"</").concat(e,">")}function Ze(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,u,f,d;for(a===void 0?(u=1,d=e[s[0]]):(u=0,d=a);u<i;u++)f=s[u],d=o(d,e[f],f,e);return d};function Vr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function oe(t){const e=Vr(t);return e.length===1?e[0].toString(16):null}function qr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function $e(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function le(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=$e(e);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(t,$e(e)):B.styles[t]=c(c({},B.styles[t]||{}),r),t==="fas"&&le("fa",e)}const{styles:kt,shims:Kr}=B,qn=Object.keys(ke),Qr=qn.reduce((t,e)=>(t[e]=Object.keys(ke[e]),t),{});let Pe=null,Kn={},Qn={},Jn={},Zn={},$n={};function Jr(t){return~Lr.indexOf(t)}function Zr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Jr(r)?r:null}const ta=()=>{const t=a=>Xt(kt,(r,s,i)=>(r[i]=Xt(s,a,{}),r),{});Kn=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Qn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),$n=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in kt||b.autoFetchSvg,n=Xt(Kr,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Jn=n.names,Zn=n.unicodes,Pe=zt(b.styleDefault,{family:b.familyDefault})};zr(t=>{Pe=zt(t.styleDefault,{family:b.familyDefault})});ta();function Oe(t,e){return(Kn[t]||{})[e]}function $r(t,e){return(Qn[t]||{})[e]}function st(t,e){return($n[t]||{})[e]}function ea(t){return Jn[t]||{prefix:null,iconName:null}}function ts(t){const e=Zn[t],n=Oe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return Pe}const na=()=>({prefix:null,iconName:null,rest:[]});function es(t){let e=R;const n=qn.reduce((a,r)=>(a[r]="".concat(b.cssPrefix,"-").concat(r),a),{});return Rn.forEach(a=>{(t.includes(n[a])||t.some(r=>Qr[a].includes(r)))&&(e=a)}),e}function zt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=R}=e,a=Cr[n][t];if(n===Rt&&!t)return"fad";const r=Qe[n][t]||Qe[n][a],s=t in B.styles?t:null;return r||s||null}function ns(t){let e=[],n=null;return t.forEach(a=>{const r=Zr(b.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function tn(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function jt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=ee.concat(br),s=tn(t.filter(h=>r.includes(h))),i=tn(t.filter(h=>!ee.includes(h))),o=s.filter(h=>(a=h,!Ln.includes(h))),[u=null]=o,f=es(s),d=c(c({},ns(i)),{},{prefix:zt(u,{family:f})});return c(c(c({},d),is({values:t,family:f,styles:kt,config:b,canonical:d,givenPrefix:a})),as(n,a,d))}function as(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?ea(r):{},i=st(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!kt.far&&kt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const rs=Rn.filter(t=>t!==R||t!==Rt),ss=Object.keys(te).filter(t=>t!==R).map(t=>Object.keys(te[t])).flat();function is(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,o=n===Rt,u=e.includes("fa-duotone")||e.includes("fad"),f=i.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(u||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&rs.includes(n)&&(Object.keys(s).find(l=>ss.includes(l))||i.autoFetchSvg)){const l=cr.get(n).defaultShortPrefixId;a.prefix=l,a.iconName=st(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Z()||"fas"),a}class os{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),le(s,r[s]);const i=ke[R][s];i&&le(i,r[s]),ta()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],u=o[2];e[s]||(e[s]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[s][f]=o)}),e[s][i]=o}),e}}let en=[],dt={};const mt={},ls=Object.keys(mt);function fs(t,e){let{mixoutsTo:n}=e;return en=t,dt={},Object.keys(mt).forEach(a=>{ls.indexOf(a)===-1&&delete mt[a]}),en.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{dt[i]||(dt[i]=[]),dt[i].push(s[i])})}a.provides&&a.provides(mt)}),n}function fe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(dt[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function ct(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(dt[t]||[]).forEach(s=>{s.apply(null,n)})}function $(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,e):void 0}function ce(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Z();if(e)return e=st(n,e)||e,Ze(aa.definitions,n,e)||Ze(B.styles,n,e)}const aa=new os,cs=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,ct("noAuto")},us={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(ct("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Xr(()=>{ms({autoReplaceSvgRoot:e}),ct("watch",t)})}},ds={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=zt(t[0]);return{prefix:n,iconName:st(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Nr))){const e=jt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Z(),iconName:st(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Z();return{prefix:e,iconName:st(e,t)||t}}}},j={noAuto:cs,config:b,dom:us,parse:ds,library:aa,findIconDefinition:ce,toHtml:St},ms=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=S}=t;(Object.keys(B.styles).length>0||b.autoFetchSvg)&&q&&b.autoReplaceSvg&&j.dom.i2svg({node:e})};function Yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>St(n))}}),Object.defineProperty(t,"node",{get:function(){if(!q)return;const n=S.createElement("div");return n.innerHTML=t.html,n.children}}),t}function gs(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Se(i)&&n.found&&!a.found){const{width:o,height:u}=n,f={x:o/u/2,y:.5};r.style=Dt(c(c({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ps(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Ie(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:u,titleId:f,extra:d,watchable:h=!1}=t,{width:l,height:p}=n.found?n:e,_=pr.includes(a),A=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(k=>d.classes.indexOf(k)===-1).filter(k=>k!==""||!!k).concat(d.classes).join(" ");let g={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:A,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(l," ").concat(p)})};const v=_&&!~d.classes.indexOf("fa-fw")?{width:"".concat(l/p*16*.0625,"em")}:{};h&&(g.attributes[ft]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(f||wt())},children:[o]}),delete g.attributes.title);const x=c(c({},g),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:s,symbol:i,styles:c(c({},v),d.styles)}),{children:y,attributes:m}=n.found&&e.found?$("generateAbstractMask",x)||{children:[],attributes:{}}:$("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=y,x.attributes=m,i?ps(x):gs(x)}function nn(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,u=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(u[ft]="");const f=c({},i.styles);Se(r)&&(f.transform=Hr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=Dt(f);d.length>0&&(u.style=d);const h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function hs(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=Dt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Vt}=B;function ue(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const vs={found:!1,width:512,height:512};function bs(t,e){!Yn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function de(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=Z()),new Promise((a,r)=>{if(n==="fa"){const s=ea(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Vt[e]&&Vt[e][t]){const s=Vt[e][t];return a(ue(s))}bs(t,e),a(c(c({},vs),{},{icon:b.showMissingIcons&&t?$("missingIconAbstract")||{}:{}}))})}const an=()=>{},me=b.measurePerformance&&Pt&&Pt.mark&&Pt.measure?Pt:{mark:an,measure:an},_t='FA "6.7.1"',ys=t=>(me.mark("".concat(_t," ").concat(t," begins")),()=>ra(t)),ra=t=>{me.mark("".concat(_t," ").concat(t," ends")),me.measure("".concat(_t," ").concat(t),"".concat(_t," ").concat(t," begins"),"".concat(_t," ").concat(t," ends"))};var Ce={begin:ys,end:ra};const Tt=()=>{};function rn(t){return typeof(t.getAttribute?t.getAttribute(ft):null)=="string"}function _s(t){const e=t.getAttribute?t.getAttribute(Ae):null,n=t.getAttribute?t.getAttribute(we):null;return e&&n}function xs(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function As(){return b.autoReplaceSvg===!0?Ft.replace:Ft[b.autoReplaceSvg]||Ft.replace}function ws(t){return S.createElementNS("http://www.w3.org/2000/svg",t)}function ks(t){return S.createElement(t)}function sa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ws:ks}=e;if(typeof t=="string")return S.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(sa(s,{ceFn:n}))}),a}function Es(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ft={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(sa(n),e)}),e.getAttribute(ft)===null&&b.keepOriginalSource){let n=S.createComment(Es(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ee(e).indexOf(b.replacementClass))return Ft.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===b.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>St(s)).join(`
`);e.setAttribute(ft,""),e.innerHTML=r}};function sn(t){t()}function ia(t,e){const n=typeof e=="function"?e:Tt;if(t.length===0)n();else{let a=sn;b.mutateApproach===Or&&(a=J.requestAnimationFrame||sn),a(()=>{const r=As(),s=Ce.begin("mutate");t.map(r),s(),n()})}}let Ne=!1;function oa(){Ne=!0}function ge(){Ne=!1}let Lt=null;function on(t){if(!Xe||!b.observeMutations)return;const{treeCallback:e=Tt,nodeCallback:n=Tt,pseudoElementsCallback:a=Tt,observeMutationsRoot:r=S}=t;Lt=new Xe(s=>{if(Ne)return;const i=Z();pt(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!rn(o.addedNodes[0])&&(b.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&b.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&rn(o.target)&&~Mr.indexOf(o.attributeName))if(o.attributeName==="class"&&_s(o.target)){const{prefix:u,iconName:f}=jt(Ee(o.target));o.target.setAttribute(Ae,u||i),f&&o.target.setAttribute(we,f)}else xs(o.target)&&n(o.target)})}),q&&Lt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ss(){Lt&&Lt.disconnect()}function Ps(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Os(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=jt(Ee(t));return r.prefix||(r.prefix=Z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=$r(r.prefix,t.innerText)||Oe(r.prefix,oe(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Is(t){const e=pt(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||wt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Cs(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Os(t),s=Is(t),i=fe("parseNodeAttributes",{},t);let o=e.styleParser?Ps(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Ns}=B;function la(t){const e=b.autoReplaceSvg==="nest"?ln(t,{styleParser:!1}):ln(t);return~e.extra.classes.indexOf(Wn)?$("generateLayersText",t,e):$("generateSvgReplacementMutation",t,e)}function Ts(){return[...dr,...ee]}function fn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();const n=S.documentElement.classList,a=d=>n.add("".concat(Ke,"-").concat(d)),r=d=>n.remove("".concat(Ke,"-").concat(d)),s=b.autoFetchSvg?Ts():Ln.concat(Object.keys(Ns));s.includes("fa")||s.push("fa");const i=[".".concat(Wn,":not([").concat(ft,"])")].concat(s.map(d=>".".concat(d,":not([").concat(ft,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=pt(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Ce.begin("onTree"),f=o.reduce((d,h)=>{try{const l=la(h);l&&d.push(l)}catch(l){Yn||l.name==="MissingIcon"&&console.error(l)}return d},[]);return new Promise((d,h)=>{Promise.all(f).then(l=>{ia(l,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),d()})}).catch(l=>{u(),h(l)})})}function Fs(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;la(t).then(n=>{n&&ia([n],e)})}function Ms(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ce(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ce(r||{})),t(a,c(c({},n),{},{mask:r}))}}const Ls=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:u=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:h,iconName:l,icon:p}=t;return Yt(c({type:"icon"},t),()=>(ct("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(i?f["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(o||wt()):(f["aria-hidden"]="true",f.focusable="false")),Ie({icons:{main:ue(p),mask:r?ue(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:l,transform:c(c({},G),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:f,styles:d,classes:u}})))};var Rs={mixout(){return{icon:Ms(Ls)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=fn,t.nodeCallback=Fs,t}}},provides(t){t.i2svg=function(e){const{node:n=S,callback:a=()=>{}}=e;return fn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:u,mask:f,maskId:d,extra:h}=n;return new Promise((l,p)=>{Promise.all([de(a,i),f.iconName?de(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[A,g]=_;l([e,Ie({icons:{main:A,mask:g},prefix:i,iconName:a,transform:o,symbol:u,maskId:d,title:r,titleId:s,extra:h,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=Dt(i);o.length>0&&(a.style=o);let u;return Se(s)&&(u=$("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},Ds={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Yt({type:"layer"},()=>{ct("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},zs={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return Yt({type:"counter",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),hs({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},js={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return Yt({type:"text",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),nn({content:t,transform:c(c({},G),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(b.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Fn){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/u,o=f.height/u}return b.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,nn({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const Ys=new RegExp('"',"ug"),cn=[1105920,1112319],un=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),fr),Sr),yr),pe=Object.keys(un).reduce((t,e)=>(t[e.toLowerCase()]=un[e],t),{}),Us=Object.keys(pe).reduce((t,e)=>{const n=pe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ws(t){const e=t.replace(Ys,""),n=qr(e,0),a=n>=cn[0]&&n<=cn[1],r=e.length===2?e[0]===e[1]:!1;return{value:oe(r?e[0]:e),isSecondary:a||r}}function Hs(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(pe[n]||{})[r]||Us[n]}function dn(t,e){const n="".concat(Pr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=pt(t.children).filter(l=>l.getAttribute(ae)===e)[0],o=J.getComputedStyle(t,e),u=o.getPropertyValue("font-family"),f=u.match(Tr),d=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&h!=="none"&&h!==""){const l=o.getPropertyValue("content");let p=Hs(u,d);const{value:_,isSecondary:A}=Ws(l),g=f[0].startsWith("FontAwesome");let v=Oe(p,_),x=v;if(g){const y=ts(_);y.iconName&&y.prefix&&(v=y.iconName,p=y.prefix)}if(v&&!A&&(!i||i.getAttribute(Ae)!==p||i.getAttribute(we)!==x)){t.setAttribute(n,x),i&&t.removeChild(i);const y=Cs(),{extra:m}=y;m.attributes[ae]=e,de(v,p).then(k=>{const I=Ie(c(c({},y),{},{icons:{main:k,mask:na()},prefix:p,iconName:x,extra:m,watchable:!0})),T=S.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(T,t.firstChild):t.appendChild(T),T.outerHTML=I.map(C=>St(C)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Gs(t){return Promise.all([dn(t,"::before"),dn(t,"::after")])}function Bs(t){return t.parentNode!==document.head&&!~Ir.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ae)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mn(t){if(q)return new Promise((e,n)=>{const a=pt(t.querySelectorAll("*")).filter(Bs).map(Gs),r=Ce.begin("searchPseudoElements");oa(),Promise.all(a).then(()=>{r(),ge(),e()}).catch(()=>{r(),ge(),n()})})}var Xs={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=mn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=S}=e;b.searchPseudoElements&&mn(n)}}};let gn=!1;var Vs={mixout(){return{dom:{unwatch(){oa(),gn=!0}}}},hooks(){return{bootstrap(){on(fe("mutationObserverCallbacks",{}))},noAuto(){Ss()},watch(t){const{observeMutationsRoot:e}=t;gn?ge():on(fe("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const pn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var qs={mixout(){return{parse:{transform:t=>pn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=pn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(u," ").concat(f)},h={transform:"translate(".concat(s/2*-1," -256)")},l={outer:i,inner:d,path:h};return{tag:"g",attributes:c({},l.outer),children:[{tag:"g",attributes:c({},l.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),l.path)}]}]}}}};const qt={x:0,y:0,width:"100%",height:"100%"};function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ks(t){return t.tag==="g"?t.children:[t]}var Qs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?jt(n.split(" ").map(r=>r.trim())):na();return a.prefix||(a.prefix=Z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:u,icon:f}=r,{width:d,icon:h}=s,l=Wr({transform:o,containerWidth:d,iconWidth:u}),p={tag:"rect",attributes:c(c({},qt),{},{fill:"white"})},_=f.children?{children:f.children.map(hn)}:{},A={tag:"g",attributes:c({},l.inner),children:[hn(c({tag:f.tag,attributes:c(c({},f.attributes),l.path)},_))]},g={tag:"g",attributes:c({},l.outer),children:[A]},v="mask-".concat(i||wt()),x="clip-".concat(i||wt()),y={tag:"mask",attributes:c(c({},qt),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,g]},m={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Ks(h)},y]};return n.push(m,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(v,")")},qt)}),{children:n,attributes:a}}}},Js={provides(t){let e=!1;J.matchMedia&&(e=J.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Zs={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},$s=[Br,Rs,Ds,zs,js,Xs,Vs,qs,Qs,Js,Zs];fs($s,{mixoutsTo:j});j.noAuto;j.config;j.library;j.dom;const he=j.parse;j.findIconDefinition;j.toHtml;const ti=j.icon;j.layer;j.text;j.counter;let fa=!1;try{fa=!0}catch{}function ei(...t){!fa&&console&&typeof console.error=="function"&&console.error(...t)}function vn(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(he.icon)return he.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var ni=da("<svg><!></svg>");function ai(t,e){var A;tt(e,!1);let n=w(e,"tag",8),a=w(e,"props",8),r=w(e,"children",8),s=w(e,"style",8,null),i=w(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(g){return(g==null?void 0:g.reduce((v,x)=>v+(x.tag?u(x):x),""))||""}function u({tag:g,props:v,children:x}){const y=Object.keys(v).map(m=>`${m}="${v[m]}"`).join(" ");return`<${g} ${y}>${o(x)}</${g}>`}const f=o(r()),d=(A=a())!=null&&A.style?`${a().style}${s()||""}`:s(),h={...a(),style:d};nt();var l=ni();let p;var _=L(l);Zt(_,()=>f,!0,!1),O(l),Ya(l,g=>i(g),()=>i()),M(()=>p=$t(l,p,{...h},void 0,!0)),E(t,l),et()}function ca(t,e){const n=Ye(e,["children","$$slots","$$events","$$legacy"]),a=Ye(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);tt(e,!1),w(e,"border",8,!1);let r=w(e,"mask",8,null),s=w(e,"maskId",8,null);w(e,"fixedWidth",8,!1),w(e,"inverse",8,!1),w(e,"flip",8,!1);let i=w(e,"icon",8,null);w(e,"listItem",8,!1),w(e,"pull",8,null),w(e,"pulse",8,!1),w(e,"rotation",8,null),w(e,"size",8,null),w(e,"spin",8,!1),w(e,"spinPulse",8,!1),w(e,"spinReverse",8,!1),w(e,"beat",8,!1),w(e,"fade",8,!1),w(e,"beatFade",8,!1),w(e,"bounce",8,!1),w(e,"shake",8,!1);let o=w(e,"symbol",8,!1),u=w(e,"title",8,""),f=w(e,"titleId",8,null),d=w(e,"transform",8,null);w(e,"swapOpacity",8,!1);let h=w(e,"ref",12,null),l=w(e,"style",8,null);const p=vn(i()),_=Kt("classes",[...Qa(n),...(n.class||"").split(" ")]),A=Kt("transform",typeof d()=="string"?he.transform(d()):d()),g=Kt("mask",vn(r())),v=ti(p,{..._,...A,...g,symbol:o(),title:u(),titleId:f(),maskId:s()});let x=Na(null);if(!v)ei("Could not find icon",p);else{const{abstract:I}=v;Ca(x,In((T,C,F)=>({tag:T,props:C,children:F}),I[0],a))}nt();var y=it(),m=U(y);{var k=I=>{ai(I,La(()=>z(x),{get style(){return l()},get ref(){return h()},set ref(T){h(T)},$$legacy:!0}))};W(m,I=>{z(x)&&I(k)})}E(t,y),et()}const ri=(t,e)=>{if(e().short){t.preventDefault();const n=`s/${e().short}?utm_medium=links_btn&utm_campaign=linksharer_links`;e().target==="blank"?window.open(n):ja(n)}};var si=D('<li class="link svelte-p5gp3m"><a class="svelte-p5gp3m"><!> </a></li>');function ii(t,e){tt(e,!1);let n=w(e,"link",8);const a=[n().privacy?"noopener noreferrer":void 0,n().external?"external":void 0].filter(Boolean).join(" ");nt();var r=it(),s=U(r);{var i=o=>{var u=si(),f=L(u);P(f,"rel",a),f.__click=[ri,n];var d=L(f);ca(d,{get icon(){return n().icon},style:"width: 1em;"});var h=N(d);O(f),O(u),M(()=>{P(f,"href",n().url),P(f,"target",`_${n().target??"self"??""}`),P(f,"itemprop",n().sameAs?"sameAs":void 0),Jt(h,` ${n().name??""}`)}),E(o,u)};W(s,o=>{n().display!==!1&&o(i)})}E(t,r),et()}En(["click"]);var oi=D('<section class="links"><ul class="svelte-37tmq0"></ul></section>');function li(t,e){let n=w(e,"links",8);var a=oi(),r=L(a);lt(r,5,n,ot,(s,i)=>{ii(s,{get link(){return z(i)}})}),O(r),O(a),E(t,a)}const It={sources:{avif:""+new URL("../assets/avatar.BRk7bXGH.avif",import.meta.url).href+" 300w, "+new URL("../assets/avatar.D02hOIcw.avif",import.meta.url).href+" 600w",webp:""+new URL("../assets/avatar.VIyhnhll.webp",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BPKBrzJY.webp",import.meta.url).href+" 600w",png:""+new URL("../assets/avatar.M-STc7G1.png",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href+" 600w"},img:{src:""+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href,w:600,h:600}};var fi=D('<img class="avatar svelte-yvfll6" width="100px" height="100px">'),ci=D("<source>"),ui=D('<picture><!> <img class="avatar svelte-yvfll6" width="100px" height="100px"></picture>'),di=D('<header itemscope="" itemtype="http://schema.org/Person" class="user-info svelte-yvfll6"><!> <h1 itemprop="name" class="svelte-yvfll6"><!></h1> <p itemprop="description" class="svelte-yvfll6"><!></p></header>');function mi(t,e){tt(e,!1);let n=w(e,"user",8),a=w(e,"i18n",8);nt();var r=di(),s=L(r);{var i=l=>{var p=fi();M(()=>P(p,"alt",a().avatar.alt.replace("{{userName}}",n().name))),M(()=>P(p,"src",It.img.src)),E(l,p)},o=l=>{var p=ui(),_=L(p);lt(_,1,()=>Object.entries(It.sources),ot,(g,v)=>{let x=()=>z(v)[0],y=()=>z(v)[1];var m=ci();M(()=>{P(m,"srcset",y()),P(m,"type","image/"+x())}),E(g,m)});var A=N(_,2);M(()=>P(A,"alt",a().avatar.alt.replace("{{userName}}",n().name))),O(p),M(()=>P(A,"src",It.img.src)),E(l,p)};W(s,l=>{typeof It=="string"?l(i):l(o,!1)})}var u=N(s,2),f=L(u);Zt(f,()=>n().name,!1,!1),O(u);var d=N(u,2),h=L(d);Zt(h,()=>n().bio,!1,!1),O(d),O(r),E(t,r),et()}var gi=D('<footer class="credits"><p class="svelte-ss06mj"> <a href="https://linksharer.js.org?utm_source=generated_website&amp;utm_medium=credits&amp;utm_campaign=project_usage&amp;utm_content=footer" rel="external" class="svelte-ss06mj">LinkSharer</a> </p></footer>');function pi(t,e){tt(e,!1);let n=w(e,"showCredits",8),a=w(e,"i18n",8),r=w(e,"version",8);nt();var s=it(),i=U(s);{var o=u=>{var f=gi(),d=L(f),h=L(d),l=N(h,2);O(d),O(f),M(()=>{Jt(h,`${a().credits??""} `),Jt(l,` v${r()??""}`)}),E(u,f)};W(i,u=>{n()&&u(o)})}E(t,s),et()}var hi=D('<li class="social svelte-1fhc3ff"><a itemprop="sameAs" rel="noopener noreferrer" class="svelte-1fhc3ff"><span class="svelte-1fhc3ff"><!></span></a></li>');function vi(t,e){tt(e,!1);let n=w(e,"social",8);nt();var a=hi(),r=L(a),s=L(r),i=L(s);ca(i,{get icon(){return n().icon}}),O(s),O(r),O(a),M(()=>{P(r,"href",n().url),P(r,"target",`_${n().target??"self"??""}`),P(r,"aria-label",n().name)}),E(t,a),et()}var bi=D('<article class="socials"><ul class="svelte-yffzw0"></ul></article>');function yi(t,e){let n=w(e,"socials",8);var a=bi(),r=L(a);lt(r,5,n,ot,(s,i)=>{vi(s,{get social(){return z(i)}})}),O(r),O(a),E(t,a)}var _i=ve("<script><\/script><!---->",1),xi=D('<meta name="google-site-verification">'),Ai=D("<!> <!>",1),wi=ve('<script async defer="" src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script> <noscript></noscript>',1),ki=ve("<script><\/script><!---->",1),Ei=D('<!> <!> <div class="linksharer svelte-9f1c5"><main class="svelte-9f1c5"><!> <!> <!></main> <!></div> <!>',1);function Li(t,e){var x;tt(e,!1);let n=w(e,"data",8),a={head:[],body:[]};(x=n().config.scripts)==null||x.forEach(y=>{const{head:m,...k}=y;a[m?"head":"body"].push(k)}),nt();var r=Ei();Sn(y=>{var m=Ai(),k=U(m);{var I=F=>{var Y=it(),at=U(Y);lt(at,1,()=>a.head,ot,(ht,Ut)=>{var vt=_i(),ut=U(vt);let bt;var Wt=N(ut);M(()=>bt=$t(ut,bt,{...z(Ut)},"svelte-9f1c5")),je(ut),E(ht,vt)}),E(F,Y)};W(k,F=>{a.head&&F(I)})}var T=N(k,2);{var C=F=>{var Y=xi();M(()=>P(Y,"content",n().config.googleSiteVerification)),E(F,Y)};W(T,F=>{n().config.googleSiteVerification&&F(C)})}E(y,m)});var s=U(r);Ka(s,{get seo(){return n().config.seo}});var i=N(s,2);{var o=y=>{var m=wi();Ta(2),E(y,m)};W(i,y=>{n().config.analytics&&y(o)})}var u=N(i,2),f=L(u),d=L(f);mi(d,{get user(){return n().config.user},get i18n(){return n().config.i18n}});var h=N(d,2);li(h,{get links(){return n().config.links}});var l=N(h,2);{var p=y=>{yi(y,{get socials(){return n().config.socials}})};W(l,y=>{n().config.socials&&y(p)})}O(f);var _=N(f,2),A=Fa(()=>n().config.credits||!0);pi(_,{get showCredits(){return z(A)},get i18n(){return n().config.i18n},get version(){return n().version}}),O(u);var g=N(u,2);{var v=y=>{var m=it(),k=U(m);lt(k,1,()=>a.body,ot,(I,T)=>{var C=ki(),F=U(C);let Y;N(F),M(()=>Y=$t(F,Y,{...z(T)},"svelte-9f1c5")),je(F),E(I,C)}),E(y,m)};W(g,y=>{a.body&&y(v)})}E(t,r),et()}export{Li as component};
