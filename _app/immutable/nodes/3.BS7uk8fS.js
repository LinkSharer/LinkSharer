import"../chunks/Bg9kRutz.js";import"../chunks/8GRkcEpV.js";import{J as bn,i as da,j as xn,k as H,n as Nt,A as Jt,g as R,B as ma,C as Le,s as Gt,o as rt,av as Tt,D as _n,w as ye,F as ga,aq as An,K as Re,aw as be,ax as De,ay as xe,az as pa,ap as ha,aA as va,y as wn,aB as kn,q as bt,a8 as Lt,am as ya,ai as ba,aC as xa,ad as _a,V as ze,a0 as Aa,aD as wa,m as En,an as ka,al as Ea,aE as Sa,_ as Oa,aF as Pa,p as tt,a as et,z as Y,P as N,t as D,$ as Ia,N as T,O as C,X as Ca,aG as Na,aH as Ta}from"../chunks/CL6C_RVK.js";import{i as Fa,c as Ma,d as La,n as Ra,a as Da,s as Zt,r as je}from"../chunks/B7aiZ0VQ.js";import{h as Sn}from"../chunks/CtUFNLpm.js";import{b as Ye,e as za,a as S,c as it,t as M,n as ja,f as _e}from"../chunks/CpLW1sNc.js";import{i as U,b as Ya}from"../chunks/Cr9x5glu.js";import{i as nt}from"../chunks/CMhIYLQo.js";import{p as k,l as Ue,s as Ua}from"../chunks/CWwD8mFY.js";function Wa(t,e){if(e){const n=document.body;t.autofocus=!0,bn(()=>{document.activeElement===n&&t.focus()})}}function ot(t,e){return e}function Ha(t,e,n,a){for(var r=[],s=e.length,i=0;i<s;i++)pa(e[i].e,r,!0);var o=s>0&&r.length===0&&n!==null;if(o){var l=n.parentNode;ha(l),l.append(n),a.clear(),Q(t,e[0].prev,e[s-1].next)}va(r,()=>{for(var f=0;f<s;f++){var u=e[f];o||(a.delete(u.k),Q(t,u.prev,u.next)),wn(u.e,!o)}})}function lt(t,e,n,a,r,s=null){var i=t,o={flags:e,items:new Map,first:null},l=(e&kn)!==0;if(l){var f=t;i=H?Nt(bt(f)):f.appendChild(da())}H&&Jt();var u=null,p=!1,m=Lt(()=>{var d=n();return Aa(d)?d:d==null?[]:An(d)});xn(()=>{var d=R(m),x=d.length;if(p&&x===0)return;p=x===0;let h=!1;if(H){var w=i.data===ma;w!==(x===0)&&(i=Le(),Nt(i),Gt(!1),h=!0)}if(H){for(var g=null,v,y=0;y<x;y++){if(rt.nodeType===8&&rt.data===ya){i=rt,h=!0,Gt(!1);break}var A=d[y],_=a(A,y);v=On(rt,o,g,null,A,_,y,r,e,n),o.items.set(_,v),g=v}x>0&&Nt(Le())}if(!H){var E=ba;Ga(d,o,i,r,e,(E.f&Tt)!==0,a,n)}s!==null&&(x===0?u?_n(u):u=ye(()=>s(i)):u!==null&&ga(u,()=>{u=null})),h&&Gt(!0),R(m)}),H&&(i=rt)}function Ga(t,e,n,a,r,s,i,o){var ut,yt,Ht,Fe;var l=(r&xa)!==0,f=(r&(be|xe))!==0,u=t.length,p=e.items,m=e.first,d=m,x,h=null,w,g=[],v=[],y,A,_,E;if(l)for(E=0;E<u;E+=1)y=t[E],A=i(y,E),_=p.get(A),_!==void 0&&((ut=_.a)==null||ut.measure(),(w??(w=new Set)).add(_));for(E=0;E<u;E+=1){if(y=t[E],A=i(y,E),_=p.get(A),_===void 0){var L=d?d.e.nodes_start:n;h=On(L,e,h,h===null?e.first:h.next,y,A,E,a,r,o),p.set(A,h),g=[],v=[],d=h.next;continue}if(f&&Ba(_,y,E,r),_.e.f&Tt&&(_n(_.e),l&&((yt=_.a)==null||yt.unfix(),(w??(w=new Set)).delete(_))),_!==d){if(x!==void 0&&x.has(_)){if(g.length<v.length){var z=v[0],P;h=z.prev;var W=g[0],ht=g[g.length-1];for(P=0;P<g.length;P+=1)We(g[P],z,n);for(P=0;P<v.length;P+=1)x.delete(v[P]);Q(e,W.prev,ht.next),Q(e,h,W),Q(e,ht,z),d=z,h=ht,E-=1,g=[],v=[]}else x.delete(_),We(_,d,n),Q(e,_.prev,_.next),Q(e,_,h===null?e.first:h.next),Q(e,h,_),h=_;continue}for(g=[],v=[];d!==null&&d.k!==A;)(s||!(d.e.f&Tt))&&(x??(x=new Set)).add(d),v.push(d),d=d.next;if(d===null)continue;_=d}g.push(_),h=_,d=_.next}if(d!==null||x!==void 0){for(var at=x===void 0?[]:An(x);d!==null;)(s||!(d.e.f&Tt))&&at.push(d),d=d.next;var vt=at.length;if(vt>0){var Ot=r&kn&&u===0?n:null;if(l){for(E=0;E<vt;E+=1)(Ht=at[E].a)==null||Ht.measure();for(E=0;E<vt;E+=1)(Fe=at[E].a)==null||Fe.fix()}Ha(e,at,Ot,p)}}l&&bn(()=>{var Me;if(w!==void 0)for(_ of w)(Me=_.a)==null||Me.apply()}),Re.first=e.first&&e.first.e,Re.last=h&&h.e}function Ba(t,e,n,a){a&be&&De(t.v,e),a&xe?De(t.i,n):t.i=n}function On(t,e,n,a,r,s,i,o,l,f){var u=(l&be)!==0,p=(l&wa)===0,m=u?p?_a(r):ze(r):r,d=l&xe?ze(i):i,x={i:d,v:m,k:s,a:null,e:null,prev:n,next:a};try{return x.e=ye(()=>o(t,m,d,f),H),x.e.prev=n&&n.e,x.e.next=a&&a.e,n===null?e.first=x:(n.next=x,n.e.next=x.e),a!==null&&(a.prev=x,a.e.prev=x.e),x}finally{}}function We(t,e,n){for(var a=t.next?t.next.e.nodes_start:n,r=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==a;){var i=En(s);r.before(s),s=i}}function Q(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function $t(t,e,n,a,r){var s=t,i="",o;xn(()=>{if(i===(i=e()??"")){H&&Jt();return}o!==void 0&&(wn(o),o=void 0),i!==""&&(o=ye(()=>{if(H){rt.data;for(var l=Jt(),f=l;l!==null&&(l.nodeType!==8||l.data!=="");)f=l,l=En(l);if(l===null)throw ka(),Ea;Ye(rt,f),s=Nt(l);return}var u=i+"";n&&(u=`<svg>${u}</svg>`);var p=za(u);if((n||a)&&(p=bt(p)),Ye(bt(p),p.lastChild),n||a)for(;bt(p);)s.before(bt(p));else s.before(p)}))})}function Pn(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Pn(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function Va(){for(var t,e,n=0,a="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Pn(t))&&(a&&(a+=" "),a+=e);return a}function Xa(t){return typeof t=="object"?Va(t):t??""}function qa(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function I(t,e,n,a){var r=t.__attributes??(t.__attributes={});H&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Sa]=n),n==null?t.removeAttribute(e):typeof n!="string"&&In(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function te(t,e,n,a,r=!1,s=!1,i=!1){var o=e||{},l=t.tagName==="OPTION";for(var f in e)f in n||(n[f]=null);n.class&&(n.class=Xa(n.class)),a!==void 0&&(n.class=n.class?n.class+" "+a:a);var u=In(t),p=t.__attributes??(t.__attributes={});for(const g in n){let v=n[g];if(l&&g==="value"&&v==null){t.value=t.__value="",o[g]=v;continue}var m=o[g];if(v!==m){o[g]=v;var d=g[0]+g[1];if(d!=="$$"){if(d==="on"){const y={},A="$$"+g;let _=g.slice(2);var x=Da(_);if(Fa(_)&&(_=_.slice(0,-7),y.capture=!0),!x&&m){if(v!=null)continue;t.removeEventListener(_,o[A],y),o[A]=null}if(v!=null)if(x)t[`__${_}`]=v,La([_]);else{let E=function(L){o[g].call(this,L)};o[A]=Ma(_,t,E,y)}else x&&(t[`__${_}`]=void 0)}else if(g==="style"&&v!=null)t.style.cssText=v+"";else if(g==="autofocus")Wa(t,!!v);else if(g==="__value"||g==="value"&&v!=null)t.value=t[g]=t.__value=v;else if(g==="selected"&&l)qa(t,v);else{var h=g;r||(h=Ra(h));var w=h==="defaultValue"||h==="defaultChecked";if(v==null&&!s&&!w)if(p[g]=null,h==="value"||h==="checked"){let y=t;if(h==="value"){let A=y.defaultValue;y.removeAttribute(h),y.defaultValue=A}else{let A=y.defaultChecked;y.removeAttribute(h),y.defaultChecked=A}}else t.removeAttribute(g);else w||u.includes(h)&&(s||typeof v!="string")?t[h]=v:typeof v!="function"&&(H&&(h==="src"||h==="href"||h==="srcset")||I(t,h,v))}g==="style"&&"__styles"in t&&(t.__styles={})}}}return o}var He=new Map;function In(t){var e=He.get(t.nodeName);if(e)return e;He.set(t.nodeName,e=[]);for(var n,a=t,r=Element.prototype;r!==a;){n=Pa(a);for(var s in n)n[s].set&&e.push(s);a=Oa(a)}return e}var Ka=M('<link rel="canonical">'),Qa=M("<meta>"),Ja=M("<meta>"),Za=M('<meta name="description"> <!> <!> <!>',1);function $a(t,e){tt(e,!1);let n=k(e,"seo",8);nt(),Sn(a=>{var r=Za(),s=Y(r),i=N(s,2);{var o=m=>{var d=Ka();D(()=>I(d,"href",n().canonical)),S(m,d)};U(i,m=>{n().canonical&&m(o)})}var l=N(i,2);{var f=m=>{var d=it(),x=Y(d);lt(x,1,()=>Object.entries(n().og),ot,(h,w)=>{var g=Qa();D(()=>{I(g,"property",`og:${R(w)[0]??""}`),I(g,"content",R(w)[1])}),S(h,g)}),S(m,d)};U(l,m=>{n().og&&m(f)})}var u=N(l,2);{var p=m=>{var d=it(),x=Y(d);lt(x,1,()=>Object.entries(n().twitter),ot,(h,w)=>{var g=Ja();D(()=>{I(g,"property",`og:${R(w)[0]??""}`),I(g,"content",R(w)[1])}),S(h,g)}),S(m,d)};U(u,m=>{n().twitter&&m(p)})}D(()=>{Ia.title=n().title,I(s,"content",n().description)}),S(a,r)}),et()}function tr(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:l,spinReverse:f,pulse:u,fixedWidth:p,inverse:m,border:d,listItem:x,flip:h,size:w,rotation:g,pull:v}=t,y={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":f,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":p,"fa-inverse":m,"fa-border":d,"fa-li":x,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both",[`fa-${w}`]:typeof w<"u"&&w!==null,[`fa-rotate-${g}`]:typeof g<"u"&&g!==null&&g!==0,[`fa-pull-${v}`]:typeof v<"u"&&v!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(y).map(A=>y[A]?A:null).filter(A=>A)}function er(t){return t=t-0,t===t}function nr(t){return er(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function ar(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function Cn(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(s=>Cn(t,s)),r=Object.keys(e.attributes||{}).reduce((s,i)=>{const o=e.attributes[i];return i==="style"?s.attrs.style=ar(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[nr(i)]=o,s},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function rr(t,e,n){return(e=ir(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ge(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ge(Object(n),!0).forEach(function(a){rr(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ge(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function sr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ir(t){var e=sr(t,"string");return typeof e=="symbol"?e:e+""}const Be=()=>{};let Ae={},Nn={},Tn=null,Fn={mark:Be,measure:Be};try{typeof window<"u"&&(Ae=window),typeof document<"u"&&(Nn=document),typeof MutationObserver<"u"&&(Tn=MutationObserver),typeof performance<"u"&&(Fn=performance)}catch{}const{userAgent:Ve=""}=Ae.navigator||{},J=Ae,O=Nn,Xe=Tn,Pt=Fn;J.document;const q=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Mn=~Ve.indexOf("MSIE")||~Ve.indexOf("Trident/");var or=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,lr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ln={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],F="classic",zt="duotone",cr="sharp",ur="sharp-duotone",Dn=[F,zt,cr,ur],dr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},mr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},gr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),pr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},hr=["fak","fa-kit","fakd","fa-kit-duotone"],qe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vr=["kit"],yr={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},br=["fak","fakd"],xr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ke={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},It={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_r=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ar=["fak","fa-kit","fakd","fa-kit-duotone"],wr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},kr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Er={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Sr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ne=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",..._r,...Sr],Or=["solid","regular","light","thin","duotone","brands"],zn=[1,2,3,4,5,6,7,8,9,10],Pr=zn.concat([11,12,13,14,15,16,17,18,19,20]),Ir=[...Object.keys(Er),...Or,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",It.GROUP,It.SWAP_OPACITY,It.PRIMARY,It.SECONDARY].concat(zn.map(t=>"".concat(t,"x"))).concat(Pr.map(t=>"w-".concat(t))),Cr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const V="___FONT_AWESOME___",ae=16,jn="fa",Yn="svg-inline--fa",ft="data-fa-i2svg",re="data-fa-pseudo-element",Nr="data-fa-pseudo-element-pending",we="data-prefix",ke="data-icon",Qe="fontawesome-i2svg",Tr="async",Fr=["HTML","HEAD","STYLE","SCRIPT"],Un=(()=>{try{return!0}catch{return!1}})();function Et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[F]}})}const Wn=c({},Ln);Wn[F]=c(c(c(c({},{"fa-duotone":"duotone"}),Ln[F]),qe.kit),qe["kit-duotone"]);const Mr=Et(Wn),se=c({},pr);se[F]=c(c(c(c({},{duotone:"fad"}),se[F]),Ke.kit),Ke["kit-duotone"]);const Je=Et(se),ie=c({},ee);ie[F]=c(c({},ie[F]),xr.kit);const Ee=Et(ie),oe=c({},kr);oe[F]=c(c({},oe[F]),yr.kit);Et(oe);const Lr=or,Hn="fa-layers-text",Rr=lr,Dr=c({},dr);Et(Dr);const zr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Bt=fr,jr=[...vr,...Ir],_t=J.FontAwesomeConfig||{};function Yr(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ur(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}O&&typeof O.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ur(Yr(n));r!=null&&(_t[a]=r)});const Gn={styleDefault:"solid",familyDefault:F,cssPrefix:jn,replacementClass:Yn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};_t.familyPrefix&&(_t.cssPrefix=_t.familyPrefix);const gt=c(c({},Gn),_t);gt.autoReplaceSvg||(gt.observeMutations=!1);const b={};Object.keys(Gn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){gt[t]=e,At.forEach(n=>n(b))},get:function(){return gt[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){gt.cssPrefix=t,At.forEach(e=>e(b))},get:function(){return gt.cssPrefix}});J.FontAwesomeConfig=b;const At=[];function Wr(t){return At.push(t),()=>{At.splice(At.indexOf(t),1)}}const K=ae,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hr(t){if(!t||!q)return;const e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=O.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return O.head.insertBefore(e,a),t}const Gr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){let t=12,e="";for(;t-- >0;)e+=Gr[Math.random()*62|0];return e}function pt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Se(t){return t.classList?pt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Bn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Br(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Bn(t[n]),'" '),"").trim()}function jt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Oe(t){return t.size!==G.size||t.x!==G.x||t.y!==G.y||t.rotate!==G.rotate||t.flipX||t.flipY}function Vr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(i," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function Xr(t){let{transform:e,width:n=ae,height:a=ae,startCentered:r=!1}=t,s="";return r&&Mn?s+="translate(".concat(e.x/K-n/2,"em, ").concat(e.y/K-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/K,"em), calc(-50% + ").concat(e.y/K,"em)) "):s+="translate(".concat(e.x/K,"em, ").concat(e.y/K,"em) "),s+="scale(".concat(e.size/K*(e.flipX?-1:1),", ").concat(e.size/K*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var qr=`:root, :host {
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
}`;function Vn(){const t=jn,e=Yn,n=b.cssPrefix,a=b.replacementClass;let r=qr;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Ze=!1;function Vt(){b.autoAddCss&&!Ze&&(Hr(Vn()),Ze=!0)}var Kr={mixout(){return{dom:{css:Vn,insertCss:Vt}}},hooks(){return{beforeDOMElementCreation(){Vt()},beforeI2svg(){Vt()}}}};const X=J||{};X[V]||(X[V]={});X[V].styles||(X[V].styles={});X[V].hooks||(X[V].hooks={});X[V].shims||(X[V].shims=[]);var B=X[V];const Xn=[],qn=function(){O.removeEventListener("DOMContentLoaded",qn),Rt=1,Xn.map(t=>t())};let Rt=!1;q&&(Rt=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Rt||O.addEventListener("DOMContentLoaded",qn));function Qr(t){q&&(Rt?setTimeout(t,0):Xn.push(t))}function St(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Bn(t):"<".concat(e," ").concat(Br(n),">").concat(a.map(St).join(""),"</").concat(e,">")}function $e(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,l,f,u;for(a===void 0?(l=1,u=e[s[0]]):(l=0,u=a);l<i;l++)f=s[l],u=o(u,e[f],f,e);return u};function Jr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function le(t){const e=Jr(t);return e.length===1?e[0].toString(16):null}function Zr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function tn(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function fe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=tn(e);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(t,tn(e)):B.styles[t]=c(c({},B.styles[t]||{}),r),t==="fas"&&fe("fa",e)}const{styles:kt,shims:$r}=B,Kn=Object.keys(Ee),ts=Kn.reduce((t,e)=>(t[e]=Object.keys(Ee[e]),t),{});let Pe=null,Qn={},Jn={},Zn={},$n={},ta={};function es(t){return~jr.indexOf(t)}function ns(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!es(r)?r:null}const ea=()=>{const t=a=>Xt(kt,(r,s,i)=>(r[i]=Xt(s,a,{}),r),{});Qn=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Jn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),ta=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in kt||b.autoFetchSvg,n=Xt($r,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Zn=n.names,$n=n.unicodes,Pe=Yt(b.styleDefault,{family:b.familyDefault})};Wr(t=>{Pe=Yt(t.styleDefault,{family:b.familyDefault})});ea();function Ie(t,e){return(Qn[t]||{})[e]}function as(t,e){return(Jn[t]||{})[e]}function st(t,e){return(ta[t]||{})[e]}function na(t){return Zn[t]||{prefix:null,iconName:null}}function rs(t){const e=$n[t],n=Ie("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return Pe}const aa=()=>({prefix:null,iconName:null,rest:[]});function ss(t){let e=F;const n=Kn.reduce((a,r)=>(a[r]="".concat(b.cssPrefix,"-").concat(r),a),{});return Dn.forEach(a=>{(t.includes(n[a])||t.some(r=>ts[a].includes(r)))&&(e=a)}),e}function Yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=F}=e,a=Mr[n][t];if(n===zt&&!t)return"fad";const r=Je[n][t]||Je[n][a],s=t in B.styles?t:null;return r||s||null}function is(t){let e=[],n=null;return t.forEach(a=>{const r=ns(b.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function en(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=ne.concat(Ar),s=en(t.filter(p=>r.includes(p))),i=en(t.filter(p=>!ne.includes(p))),o=s.filter(p=>(a=p,!Rn.includes(p))),[l=null]=o,f=ss(s),u=c(c({},is(i)),{},{prefix:Yt(l,{family:f})});return c(c(c({},u),cs({values:t,family:f,styles:kt,config:b,canonical:u,givenPrefix:a})),os(n,a,u))}function os(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?na(r):{},i=st(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!kt.far&&kt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ls=Dn.filter(t=>t!==F||t!==zt),fs=Object.keys(ee).filter(t=>t!==F).map(t=>Object.keys(ee[t])).flat();function cs(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,o=n===zt,l=e.includes("fa-duotone")||e.includes("fad"),f=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(l||f||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ls.includes(n)&&(Object.keys(s).find(m=>fs.includes(m))||i.autoFetchSvg)){const m=gr.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=st(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Z()||"fas"),a}class us{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=c(c({},this.definitions[s]||{}),r[s]),fe(s,r[s]);const i=Ee[F][s];i&&fe(i,r[s]),ea()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[s][f]=o)}),e[s][i]=o}),e}}let nn=[],dt={};const mt={},ds=Object.keys(mt);function ms(t,e){let{mixoutsTo:n}=e;return nn=t,dt={},Object.keys(mt).forEach(a=>{ds.indexOf(a)===-1&&delete mt[a]}),nn.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{dt[i]||(dt[i]=[]),dt[i].push(s[i])})}a.provides&&a.provides(mt)}),n}function ce(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(dt[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function ct(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(dt[t]||[]).forEach(s=>{s.apply(null,n)})}function $(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,e):void 0}function ue(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Z();if(e)return e=st(n,e)||e,$e(ra.definitions,n,e)||$e(B.styles,n,e)}const ra=new us,gs=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,ct("noAuto")},ps={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(ct("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Qr(()=>{vs({autoReplaceSvgRoot:e}),ct("watch",t)})}},hs={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Yt(t[0]);return{prefix:n,iconName:st(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Lr))){const e=Ut(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Z(),iconName:st(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Z();return{prefix:e,iconName:st(e,t)||t}}}},j={noAuto:gs,config:b,dom:ps,parse:hs,library:ra,findIconDefinition:ue,toHtml:St},vs=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=O}=t;(Object.keys(B.styles).length>0||b.autoFetchSvg)&&q&&b.autoReplaceSvg&&j.dom.i2svg({node:e})};function Wt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>St(n))}}),Object.defineProperty(t,"node",{get:function(){if(!q)return;const n=O.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ys(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Oe(i)&&n.found&&!a.found){const{width:o,height:l}=n,f={x:o/l/2,y:.5};r.style=jt(c(c({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function bs(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Ce(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:l,titleId:f,extra:u,watchable:p=!1}=t,{width:m,height:d}=n.found?n:e,x=br.includes(a),h=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(_=>u.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(u.classes).join(" ");let w={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:h,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(d)})};const g=x&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/d*16*.0625,"em")}:{};p&&(w.attributes[ft]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||wt())},children:[o]}),delete w.attributes.title);const v=c(c({},w),{},{prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:i,styles:c(c({},g),u.styles)}),{children:y,attributes:A}=n.found&&e.found?$("generateAbstractMask",v)||{children:[],attributes:{}}:$("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=y,v.attributes=A,i?bs(v):ys(v)}function an(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,l=c(c(c({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(l[ft]="");const f=c({},i.styles);Oe(r)&&(f.transform=Xr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=jt(f);u.length>0&&(l.style=u);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function xs(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=jt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:qt}=B;function de(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Bt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Bt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Bt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const _s={found:!1,width:512,height:512};function As(t,e){!Un&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function me(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=Z()),new Promise((a,r)=>{if(n==="fa"){const s=na(t);t=s.iconName||t,e=s.prefix||e}if(t&&e&&qt[e]&&qt[e][t]){const s=qt[e][t];return a(de(s))}As(t,e),a(c(c({},_s),{},{icon:b.showMissingIcons&&t?$("missingIconAbstract")||{}:{}}))})}const rn=()=>{},ge=b.measurePerformance&&Pt&&Pt.mark&&Pt.measure?Pt:{mark:rn,measure:rn},xt='FA "6.7.1"',ws=t=>(ge.mark("".concat(xt," ").concat(t," begins")),()=>sa(t)),sa=t=>{ge.mark("".concat(xt," ").concat(t," ends")),ge.measure("".concat(xt," ").concat(t),"".concat(xt," ").concat(t," begins"),"".concat(xt," ").concat(t," ends"))};var Ne={begin:ws,end:sa};const Ft=()=>{};function sn(t){return typeof(t.getAttribute?t.getAttribute(ft):null)=="string"}function ks(t){const e=t.getAttribute?t.getAttribute(we):null,n=t.getAttribute?t.getAttribute(ke):null;return e&&n}function Es(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function Ss(){return b.autoReplaceSvg===!0?Mt.replace:Mt[b.autoReplaceSvg]||Mt.replace}function Os(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function Ps(t){return O.createElement(t)}function ia(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Os:Ps}=e;if(typeof t=="string")return O.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(ia(s,{ceFn:n}))}),a}function Is(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Mt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ia(n),e)}),e.getAttribute(ft)===null&&b.keepOriginalSource){let n=O.createComment(Is(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Se(e).indexOf(b.replacementClass))return Mt.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===b.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>St(s)).join(`
`);e.setAttribute(ft,""),e.innerHTML=r}};function on(t){t()}function oa(t,e){const n=typeof e=="function"?e:Ft;if(t.length===0)n();else{let a=on;b.mutateApproach===Tr&&(a=J.requestAnimationFrame||on),a(()=>{const r=Ss(),s=Ne.begin("mutate");t.map(r),s(),n()})}}let Te=!1;function la(){Te=!0}function pe(){Te=!1}let Dt=null;function ln(t){if(!Xe||!b.observeMutations)return;const{treeCallback:e=Ft,nodeCallback:n=Ft,pseudoElementsCallback:a=Ft,observeMutationsRoot:r=O}=t;Dt=new Xe(s=>{if(Te)return;const i=Z();pt(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!sn(o.addedNodes[0])&&(b.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&b.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&sn(o.target)&&~zr.indexOf(o.attributeName))if(o.attributeName==="class"&&ks(o.target)){const{prefix:l,iconName:f}=Ut(Se(o.target));o.target.setAttribute(we,l||i),f&&o.target.setAttribute(ke,f)}else Es(o.target)&&n(o.target)})}),q&&Dt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Cs(){Dt&&Dt.disconnect()}function Ns(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Ts(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Ut(Se(t));return r.prefix||(r.prefix=Z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=as(r.prefix,t.innerText)||Ie(r.prefix,le(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Fs(t){const e=pt(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||wt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ms(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ts(t),s=Fs(t),i=ce("parseNodeAttributes",{},t);let o=e.styleParser?Ns(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Ls}=B;function fa(t){const e=b.autoReplaceSvg==="nest"?fn(t,{styleParser:!1}):fn(t);return~e.extra.classes.indexOf(Hn)?$("generateLayersText",t,e):$("generateSvgReplacementMutation",t,e)}function Rs(){return[...hr,...ne]}function cn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();const n=O.documentElement.classList,a=u=>n.add("".concat(Qe,"-").concat(u)),r=u=>n.remove("".concat(Qe,"-").concat(u)),s=b.autoFetchSvg?Rs():Rn.concat(Object.keys(Ls));s.includes("fa")||s.push("fa");const i=[".".concat(Hn,":not([").concat(ft,"])")].concat(s.map(u=>".".concat(u,":not([").concat(ft,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=pt(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const l=Ne.begin("onTree"),f=o.reduce((u,p)=>{try{const m=fa(p);m&&u.push(m)}catch(m){Un||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,p)=>{Promise.all(f).then(m=>{oa(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(m=>{l(),p(m)})})}function Ds(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fa(t).then(n=>{n&&oa([n],e)})}function zs(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ue(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ue(r||{})),t(a,c(c({},n),{},{mask:r}))}}const js=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:l=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:m,icon:d}=t;return Wt(c({type:"icon"},t),()=>(ct("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(i?f["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(o||wt()):(f["aria-hidden"]="true",f.focusable="false")),Ce({icons:{main:de(d),mask:r?de(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:m,transform:c(c({},G),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:f,styles:u,classes:l}})))};var Ys={mixout(){return{icon:zs(js)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=cn,t.nodeCallback=Ds,t}}},provides(t){t.i2svg=function(e){const{node:n=O,callback:a=()=>{}}=e;return cn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:l,mask:f,maskId:u,extra:p}=n;return new Promise((m,d)=>{Promise.all([me(a,i),f.iconName?me(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[h,w]=x;m([e,Ce({icons:{main:h,mask:w},prefix:i,iconName:a,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:p,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=jt(i);o.length>0&&(a.style=o);let l;return Oe(s)&&(l=$("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},Us={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Wt({type:"layer"},()=>{ct("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ws={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return Wt({type:"counter",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),xs({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},Hs={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return Wt({type:"text",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),an({content:t,transform:c(c({},G),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(b.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Mn){const l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/l,o=f.height/l}return b.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,an({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const Gs=new RegExp('"',"ug"),un=[1105920,1112319],dn=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),mr),Cr),wr),he=Object.keys(dn).reduce((t,e)=>(t[e.toLowerCase()]=dn[e],t),{}),Bs=Object.keys(he).reduce((t,e)=>{const n=he[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Vs(t){const e=t.replace(Gs,""),n=Zr(e,0),a=n>=un[0]&&n<=un[1],r=e.length===2?e[0]===e[1]:!1;return{value:le(r?e[0]:e),isSecondary:a||r}}function Xs(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(he[n]||{})[r]||Bs[n]}function mn(t,e){const n="".concat(Nr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=pt(t.children).filter(m=>m.getAttribute(re)===e)[0],o=J.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),f=l.match(Rr),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&p!=="none"&&p!==""){const m=o.getPropertyValue("content");let d=Xs(l,u);const{value:x,isSecondary:h}=Vs(m),w=f[0].startsWith("FontAwesome");let g=Ie(d,x),v=g;if(w){const y=rs(x);y.iconName&&y.prefix&&(g=y.iconName,d=y.prefix)}if(g&&!h&&(!i||i.getAttribute(we)!==d||i.getAttribute(ke)!==v)){t.setAttribute(n,v),i&&t.removeChild(i);const y=Ms(),{extra:A}=y;A.attributes[re]=e,me(g,d).then(_=>{const E=Ce(c(c({},y),{},{icons:{main:_,mask:aa()},prefix:d,iconName:v,extra:A,watchable:!0})),L=O.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(L,t.firstChild):t.appendChild(L),L.outerHTML=E.map(z=>St(z)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function qs(t){return Promise.all([mn(t,"::before"),mn(t,"::after")])}function Ks(t){return t.parentNode!==document.head&&!~Fr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(re)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function gn(t){if(q)return new Promise((e,n)=>{const a=pt(t.querySelectorAll("*")).filter(Ks).map(qs),r=Ne.begin("searchPseudoElements");la(),Promise.all(a).then(()=>{r(),pe(),e()}).catch(()=>{r(),pe(),n()})})}var Qs={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=gn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=O}=e;b.searchPseudoElements&&gn(n)}}};let pn=!1;var Js={mixout(){return{dom:{unwatch(){la(),pn=!0}}}},hooks(){return{bootstrap(){ln(ce("mutationObserverCallbacks",{}))},noAuto(){Cs()},watch(t){const{observeMutationsRoot:e}=t;pn?pe():ln(ce("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const hn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Zs={mixout(){return{parse:{transform:t=>hn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=hn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(f)},p={transform:"translate(".concat(s/2*-1," -256)")},m={outer:i,inner:u,path:p};return{tag:"g",attributes:c({},m.outer),children:[{tag:"g",attributes:c({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),m.path)}]}]}}}};const Kt={x:0,y:0,width:"100%",height:"100%"};function vn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $s(t){return t.tag==="g"?t.children:[t]}var ti={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Ut(n.split(" ").map(r=>r.trim())):aa();return a.prefix||(a.prefix=Z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:l,icon:f}=r,{width:u,icon:p}=s,m=Vr({transform:o,containerWidth:u,iconWidth:l}),d={tag:"rect",attributes:c(c({},Kt),{},{fill:"white"})},x=f.children?{children:f.children.map(vn)}:{},h={tag:"g",attributes:c({},m.inner),children:[vn(c({tag:f.tag,attributes:c(c({},f.attributes),m.path)},x))]},w={tag:"g",attributes:c({},m.outer),children:[h]},g="mask-".concat(i||wt()),v="clip-".concat(i||wt()),y={tag:"mask",attributes:c(c({},Kt),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,w]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:$s(p)},y]};return n.push(A,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(g,")")},Kt)}),{children:n,attributes:a}}}},ei={provides(t){let e=!1;J.matchMedia&&(e=J.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ni={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ai=[Kr,Ys,Us,Ws,Hs,Qs,Js,Zs,ti,ei,ni];ms(ai,{mixoutsTo:j});j.noAuto;j.config;j.library;j.dom;const ve=j.parse;j.findIconDefinition;j.toHtml;const ri=j.icon;j.layer;j.text;j.counter;let ca=!1;try{ca=!0}catch{}function si(...t){!ca&&console&&typeof console.error=="function"&&console.error(...t)}function yn(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ve.icon)return ve.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Qt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var ii=ja("<svg><!></svg>");function oi(t,e){var h;tt(e,!1);let n=k(e,"tag",8),a=k(e,"props",8),r=k(e,"children",8),s=k(e,"style",8,null),i=k(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(w){return(w==null?void 0:w.reduce((g,v)=>g+(v.tag?l(v):v),""))||""}function l({tag:w,props:g,children:v}){const y=Object.keys(g).map(A=>`${A}="${g[A]}"`).join(" ");return`<${w} ${y}>${o(v)}</${w}>`}const f=o(r()),u=(h=a())!=null&&h.style?`${a().style}${s()||""}`:s(),p={...a(),style:u};nt();var m=ii();let d;var x=T(m);$t(x,()=>f,!0,!1),C(m),Ya(m,w=>i(w),()=>i()),D(()=>d=te(m,d,{...p},void 0,!0)),S(t,m),et()}function ua(t,e){const n=Ue(e,["children","$$slots","$$events","$$legacy"]),a=Ue(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);tt(e,!1),k(e,"border",8,!1);let r=k(e,"mask",8,null),s=k(e,"maskId",8,null);k(e,"fixedWidth",8,!1),k(e,"inverse",8,!1),k(e,"flip",8,!1);let i=k(e,"icon",8,null);k(e,"listItem",8,!1),k(e,"pull",8,null),k(e,"pulse",8,!1),k(e,"rotation",8,null),k(e,"size",8,null),k(e,"spin",8,!1),k(e,"spinPulse",8,!1),k(e,"spinReverse",8,!1),k(e,"beat",8,!1),k(e,"fade",8,!1),k(e,"beatFade",8,!1),k(e,"bounce",8,!1),k(e,"shake",8,!1);let o=k(e,"symbol",8,!1),l=k(e,"title",8,""),f=k(e,"titleId",8,null),u=k(e,"transform",8,null);k(e,"swapOpacity",8,!1);let p=k(e,"ref",12,null),m=k(e,"style",8,null);const d=yn(i()),x=Qt("classes",[...tr(n),...(n.class||"").split(" ")]),h=Qt("transform",typeof u()=="string"?ve.transform(u()):u()),w=Qt("mask",yn(r())),g=ri(d,{...x,...h,...w,symbol:o(),title:l(),titleId:f(),maskId:s()});let v=Na(null);if(!g)si("Could not find icon",d);else{const{abstract:E}=g;Ca(v,Cn((L,z,P)=>({tag:L,props:z,children:P}),E[0],a))}nt();var y=it(),A=Y(y);{var _=E=>{oi(E,Ua(()=>R(v),{get style(){return m()},get ref(){return p()},set ref(L){p(L)},$$legacy:!0}))};U(A,E=>{R(v)&&E(_)})}S(t,y),et()}var li=M('<li class="link svelte-p5gp3m"><a class="svelte-p5gp3m"><!> </a></li>');function fi(t,e){tt(e,!1);let n=k(e,"link",8);const a=n().privacy||n().external?[n().privacy?"noopener noreferrer":void 0,n().external?"external":void 0].filter(Boolean).join(" "):void 0;nt();var r=it(),s=Y(r);{var i=o=>{var l=li(),f=T(l);I(f,"rel",a);var u=T(f);ua(u,{get icon(){return n().icon},style:"width: 1em;"});var p=N(u);C(f),C(l),D(()=>{I(f,"href",n().url),I(f,"target",n().target?`_${n().target}`:void 0),I(f,"itemprop",n().sameAs?"sameAs":void 0),Zt(p,` ${n().name??""}`)}),S(o,l)};U(s,o=>{n().display!==!1&&o(i)})}S(t,r),et()}var ci=M('<section class="links"><ul class="svelte-37tmq0"></ul></section>');function ui(t,e){let n=k(e,"links",8);var a=ci(),r=T(a);lt(r,5,n,ot,(s,i)=>{fi(s,{get link(){return R(i)}})}),C(r),C(a),S(t,a)}const Ct={sources:{avif:""+new URL("../assets/avatar.BRk7bXGH.avif",import.meta.url).href+" 300w, "+new URL("../assets/avatar.D02hOIcw.avif",import.meta.url).href+" 600w",webp:""+new URL("../assets/avatar.VIyhnhll.webp",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BPKBrzJY.webp",import.meta.url).href+" 600w",png:""+new URL("../assets/avatar.M-STc7G1.png",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href+" 600w"},img:{src:""+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href,w:600,h:600}};var di=M('<img class="avatar svelte-yvfll6" width="100px" height="100px">'),mi=M("<source>"),gi=M('<picture><!> <img class="avatar svelte-yvfll6" width="100px" height="100px"></picture>'),pi=M('<header itemscope="" itemtype="http://schema.org/Person" class="user-info svelte-yvfll6"><!> <h1 itemprop="name" class="svelte-yvfll6"><!></h1> <p itemprop="description" class="svelte-yvfll6"><!></p></header>');function hi(t,e){tt(e,!1);let n=k(e,"user",8),a=k(e,"i18n",8);nt();var r=pi(),s=T(r);{var i=m=>{var d=di();D(x=>{I(d,"src",Ct.img.src),I(d,"alt",x)},[()=>a().avatar.alt.replace("{{userName}}",n().name)],Lt),S(m,d)},o=m=>{var d=gi(),x=T(d);lt(x,1,()=>Object.entries(Ct.sources),ot,(w,g)=>{let v=()=>R(g)[0],y=()=>R(g)[1];var A=mi();D(()=>{I(A,"srcset",y()),I(A,"type","image/"+v())}),S(w,A)});var h=N(x,2);C(d),D(w=>{I(h,"src",Ct.img.src),I(h,"alt",w)},[()=>a().avatar.alt.replace("{{userName}}",n().name)],Lt),S(m,d)};U(s,m=>{typeof Ct=="string"?m(i):m(o,!1)})}var l=N(s,2),f=T(l);$t(f,()=>n().name,!1,!1),C(l);var u=N(l,2),p=T(u);$t(p,()=>n().bio,!1,!1),C(u),C(r),S(t,r),et()}var vi=M('<footer class="credits"><p class="svelte-ss06mj"> <a href="https://linksharer.js.org?utm_source=generated_website&amp;utm_medium=credits&amp;utm_campaign=project_usage&amp;utm_content=footer" rel="external" class="svelte-ss06mj">LinkSharer</a> </p></footer>');function yi(t,e){tt(e,!1);let n=k(e,"showCredits",8),a=k(e,"i18n",8),r=k(e,"version",8);nt();var s=it(),i=Y(s);{var o=l=>{var f=vi(),u=T(f),p=T(u),m=N(p,2);C(u),C(f),D(()=>{Zt(p,`${a().credits??""} `),Zt(m,` v${r()??""}`)}),S(l,f)};U(i,l=>{n()&&l(o)})}S(t,s),et()}var bi=M('<li class="social svelte-1fhc3ff"><a itemprop="sameAs" rel="noopener noreferrer" class="svelte-1fhc3ff"><span class="svelte-1fhc3ff"><!></span></a></li>');function xi(t,e){tt(e,!1);let n=k(e,"social",8);nt();var a=bi(),r=T(a),s=T(r),i=T(s);ua(i,{get icon(){return n().icon}}),C(s),C(r),C(a),D(()=>{I(r,"href",n().url),I(r,"target",`_${n().target??"self"}`),I(r,"aria-label",n().name)}),S(t,a),et()}var _i=M('<article class="socials"><ul class="svelte-yffzw0"></ul></article>');function Ai(t,e){let n=k(e,"socials",8);var a=_i(),r=T(a);lt(r,5,n,ot,(s,i)=>{xi(s,{get social(){return R(i)}})}),C(r),C(a),S(t,a)}var wi=_e("<script><\/script><!---->",1),ki=M('<meta name="google-site-verification">'),Ei=M("<!> <!>",1),Si=_e('<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script> <script async data-full-urls="true" src="https://scripts.simpleanalyticscdn.com/auto-events.js"><\/script>',1),Oi=_e("<script><\/script><!---->",1),Pi=M('<!> <!> <div class="linksharer svelte-9f1c5"><main class="svelte-9f1c5"><!> <!> <!></main> <!></div> <!>',1);function zi(t,e){var v;tt(e,!1);let n=k(e,"data",8),a={head:[],body:[]};(v=n().config.scripts)==null||v.forEach(y=>{const{head:A,..._}=y;a[A?"head":"body"].push(_)}),nt();var r=Pi();Sn(y=>{var A=Ei(),_=Y(A);{var E=P=>{var W=it(),ht=Y(W);lt(ht,1,()=>a.head,ot,(at,vt)=>{var Ot=wi(),ut=Y(Ot);let yt;var Ht=N(ut);D(()=>yt=te(ut,yt,{...R(vt)},"svelte-9f1c5")),je(ut),S(at,Ot)}),S(P,W)};U(_,P=>{a.head&&P(E)})}var L=N(_,2);{var z=P=>{var W=ki();D(()=>I(W,"content",n().config.googleSiteVerification)),S(P,W)};U(L,P=>{n().config.googleSiteVerification&&P(z)})}S(y,A)});var s=Y(r);$a(s,{get seo(){return n().config.seo}});var i=N(s,2);{var o=y=>{var A=Si();Ta(2),S(y,A)};U(i,y=>{n().config.analytics&&y(o)})}var l=N(i,2),f=T(l),u=T(f);hi(u,{get user(){return n().config.user},get i18n(){return n().config.i18n}});var p=N(u,2);ui(p,{get links(){return n().config.links}});var m=N(p,2);{var d=y=>{Ai(y,{get socials(){return n().config.socials}})};U(m,y=>{n().config.socials&&y(d)})}C(f);var x=N(f,2);const h=Lt(()=>n().config.credits||!0);yi(x,{get showCredits(){return R(h)},get i18n(){return n().config.i18n},get version(){return n().version}}),C(l);var w=N(l,2);{var g=y=>{var A=it(),_=Y(A);lt(_,1,()=>a.body,ot,(E,L)=>{var z=Oi(),P=Y(z);let W;N(P),D(()=>W=te(P,W,{...R(L)},"svelte-9f1c5")),je(P),S(E,z)}),S(y,A)};U(w,y=>{y(g)})}S(t,r),et()}export{zi as component};
