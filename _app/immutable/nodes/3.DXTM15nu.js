import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.B8UP6mXV.js";import{J as bn,i as ua,j as yn,k as H,n as Nt,A as Qt,av as _n,q as yt,a0 as da,aq as xn,B as ma,C as Me,s as Ht,o as rt,am as ga,aw as Tt,D as An,w as ve,F as pa,K as Le,ax as be,ay as Re,az as ye,aA as ha,ap as va,aB as ba,y as wn,ai as ya,aC as _a,ad as xa,V as De,aD as Aa,m as kn,an as wa,al as ka,aE as Ea,_ as Sa,aF as Oa,p as tt,a as et,z as Y,P as N,t as T,g as z,$ as Pa,N as F,O as C,X as Ia,aG as Ca,aH as Na,a9 as Ta}from"../chunks/runtime.CZsfxo9g.js";import{i as Fa,c as Ma,d as La,n as Ra,a as Da,s as Jt,r as ze}from"../chunks/render.-fMe9wXB.js";import{h as En}from"../chunks/svelte-head.CzxoHTOH.js";import{b as je,e as za,a as S,c as it,t as L,n as ja,f as _e}from"../chunks/template.CgroReBr.js";import{i as U,b as Ya}from"../chunks/this.BJmviBgy.js";import{i as nt}from"../chunks/lifecycle.C6IK_Ijo.js";import{p as k,l as Ye,s as Ua}from"../chunks/props.k5JY-n2q.js";function Wa(t,e){if(e){const n=document.body;t.autofocus=!0,bn(()=>{document.activeElement===n&&t.focus()})}}function ot(t,e){return e}function Ha(t,e,n,a){for(var r=[],s=e.length,i=0;i<s;i++)ha(e[i].e,r,!0);var o=s>0&&r.length===0&&n!==null;if(o){var l=n.parentNode;va(l),l.append(n),a.clear(),Q(t,e[0].prev,e[s-1].next)}ba(r,()=>{for(var c=0;c<s;c++){var u=e[c];o||(a.delete(u.k),Q(t,u.prev,u.next)),wn(u.e,!o)}})}function lt(t,e,n,a,r,s=null){var i=t,o={flags:e,items:new Map,first:null},l=(e&_n)!==0;if(l){var c=t;i=H?Nt(yt(c)):c.appendChild(ua())}H&&Qt();var u=null,p=!1;yn(()=>{var d=n(),m=da(d)?d:d==null?[]:xn(d),x=m.length;if(p&&x===0)return;p=x===0;let h=!1;if(H){var w=i.data===ma;w!==(x===0)&&(i=Me(),Nt(i),Ht(!1),h=!0)}if(H){for(var g=null,v,b=0;b<x;b++){if(rt.nodeType===8&&rt.data===ga){i=rt,h=!0,Ht(!1);break}var A=m[b],_=a(A,b);v=Sn(rt,o,g,null,A,_,b,r,e),o.items.set(_,v),g=v}x>0&&Nt(Me())}if(!H){var E=ya;Ga(m,o,i,r,e,(E.f&Tt)!==0,a)}s!==null&&(x===0?u?An(u):u=ve(()=>s(i)):u!==null&&pa(u,()=>{u=null})),h&&Ht(!0),n()}),H&&(i=rt)}function Ga(t,e,n,a,r,s,i,o){var ut,bt,Wt,Te;var l=(r&_a)!==0,c=(r&(be|ye))!==0,u=t.length,p=e.items,d=e.first,m=d,x,h=null,w,g=[],v=[],b,A,_,E;if(l)for(E=0;E<u;E+=1)b=t[E],A=i(b,E),_=p.get(A),_!==void 0&&((ut=_.a)==null||ut.measure(),(w??(w=new Set)).add(_));for(E=0;E<u;E+=1){if(b=t[E],A=i(b,E),_=p.get(A),_===void 0){var R=m?m.e.nodes_start:n;h=Sn(R,e,h,h===null?e.first:h.next,b,A,E,a,r),p.set(A,h),g=[],v=[],m=h.next;continue}if(c&&Ba(_,b,E,r),_.e.f&Tt&&(An(_.e),l&&((bt=_.a)==null||bt.unfix(),(w??(w=new Set)).delete(_))),_!==m){if(x!==void 0&&x.has(_)){if(g.length<v.length){var D=v[0],P;h=D.prev;var W=g[0],ht=g[g.length-1];for(P=0;P<g.length;P+=1)Ue(g[P],D,n);for(P=0;P<v.length;P+=1)x.delete(v[P]);Q(e,W.prev,ht.next),Q(e,h,W),Q(e,ht,D),m=D,h=ht,E-=1,g=[],v=[]}else x.delete(_),Ue(_,m,n),Q(e,_.prev,_.next),Q(e,_,h===null?e.first:h.next),Q(e,h,_),h=_;continue}for(g=[],v=[];m!==null&&m.k!==A;)(s||!(m.e.f&Tt))&&(x??(x=new Set)).add(m),v.push(m),m=m.next;if(m===null)continue;_=m}g.push(_),h=_,m=_.next}if(m!==null||x!==void 0){for(var at=x===void 0?[]:xn(x);m!==null;)(s||!(m.e.f&Tt))&&at.push(m),m=m.next;var vt=at.length;if(vt>0){var Ot=r&_n&&u===0?n:null;if(l){for(E=0;E<vt;E+=1)(Wt=at[E].a)==null||Wt.measure();for(E=0;E<vt;E+=1)(Te=at[E].a)==null||Te.fix()}Ha(e,at,Ot,p)}}l&&bn(()=>{var Fe;if(w!==void 0)for(_ of w)(Fe=_.a)==null||Fe.apply()}),Le.first=e.first&&e.first.e,Le.last=h&&h.e}function Ba(t,e,n,a){a&be&&Re(t.v,e),a&ye?Re(t.i,n):t.i=n}function Sn(t,e,n,a,r,s,i,o,l,c){var u=(l&be)!==0,p=(l&Aa)===0,d=u?p?xa(r):De(r):r,m=l&ye?De(i):i,x={i:m,v:d,k:s,a:null,e:null,prev:n,next:a};try{return x.e=ve(()=>o(t,d,m),H),x.e.prev=n&&n.e,x.e.next=a&&a.e,n===null?e.first=x:(n.next=x,n.e.next=x.e),a!==null&&(a.prev=x,a.e.prev=x.e),x}finally{}}function Ue(t,e,n){for(var a=t.next?t.next.e.nodes_start:n,r=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==a;){var i=kn(s);r.before(s),s=i}}function Q(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Zt(t,e,n,a,r){var s=t,i="",o;yn(()=>{if(i===(i=e()??"")){H&&Qt();return}o!==void 0&&(wn(o),o=void 0),i!==""&&(o=ve(()=>{if(H){rt.data;for(var l=Qt(),c=l;l!==null&&(l.nodeType!==8||l.data!=="");)c=l,l=kn(l);if(l===null)throw wa(),ka;je(rt,c),s=Nt(l);return}var u=i+"";n&&(u=`<svg>${u}</svg>`);var p=za(u);if((n||a)&&(p=yt(p)),je(yt(p),p.lastChild),n||a)for(;yt(p);)s.before(yt(p));else s.before(p)}))})}function On(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=On(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function Va(){for(var t,e,n=0,a="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=On(t))&&(a&&(a+=" "),a+=e);return a}function Xa(t){return typeof t=="object"?Va(t):t??""}function qa(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function I(t,e,n,a){var r=t.__attributes??(t.__attributes={});H&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=n)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ea]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Pn(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function $t(t,e,n,a,r=!1,s=!1,i=!1){var o=e||{},l=t.tagName==="OPTION";for(var c in e)c in n||(n[c]=null);n.class&&(n.class=Xa(n.class)),a!==void 0&&(n.class=n.class?n.class+" "+a:a);var u=Pn(t),p=t.__attributes??(t.__attributes={});for(const g in n){let v=n[g];if(l&&g==="value"&&v==null){t.value=t.__value="",o[g]=v;continue}var d=o[g];if(v!==d){o[g]=v;var m=g[0]+g[1];if(m!=="$$"){if(m==="on"){const b={},A="$$"+g;let _=g.slice(2);var x=Da(_);if(Fa(_)&&(_=_.slice(0,-7),b.capture=!0),!x&&d){if(v!=null)continue;t.removeEventListener(_,o[A],b),o[A]=null}if(v!=null)if(x)t[`__${_}`]=v,La([_]);else{let E=function(R){o[g].call(this,R)};o[A]=Ma(_,t,E,b)}else x&&(t[`__${_}`]=void 0)}else if(g==="style"&&v!=null)t.style.cssText=v+"";else if(g==="autofocus")Wa(t,!!v);else if(g==="__value"||g==="value"&&v!=null)t.value=t[g]=t.__value=v;else if(g==="selected"&&l)qa(t,v);else{var h=g;r||(h=Ra(h));var w=h==="defaultValue"||h==="defaultChecked";if(v==null&&!s&&!w)if(p[g]=null,h==="value"||h==="checked"){let b=t;if(h==="value"){let A=b.defaultValue;b.removeAttribute(h),b.defaultValue=A}else{let A=b.defaultChecked;b.removeAttribute(h),b.defaultChecked=A}}else t.removeAttribute(g);else w||u.includes(h)&&(s||typeof v!="string")?t[h]=v:typeof v!="function"&&(H&&(h==="src"||h==="href"||h==="srcset")||I(t,h,v))}g==="style"&&"__styles"in t&&(t.__styles={})}}}return o}var We=new Map;function Pn(t){var e=We.get(t.nodeName);if(e)return e;We.set(t.nodeName,e=[]);for(var n,a=t,r=Element.prototype;r!==a;){n=Oa(a);for(var s in n)n[s].set&&e.push(s);a=Sa(a)}return e}var Ka=L('<link rel="canonical">'),Qa=L("<meta>"),Ja=L("<meta>"),Za=L('<meta name="description"> <!> <!> <!>',1);function $a(t,e){tt(e,!1);let n=k(e,"seo",8);nt(),En(a=>{var r=Za(),s=Y(r),i=N(s,2);{var o=d=>{var m=Ka();T(()=>I(m,"href",n().canonical)),S(d,m)};U(i,d=>{n().canonical&&d(o)})}var l=N(i,2);{var c=d=>{var m=it(),x=Y(m);lt(x,1,()=>Object.entries(n().og),ot,(h,w)=>{var g=Qa();T(()=>{I(g,"property",`og:${z(w)[0]??""}`),I(g,"content",z(w)[1])}),S(h,g)}),S(d,m)};U(l,d=>{n().og&&d(c)})}var u=N(l,2);{var p=d=>{var m=it(),x=Y(m);lt(x,1,()=>Object.entries(n().twitter),ot,(h,w)=>{var g=Ja();T(()=>{I(g,"property",`og:${z(w)[0]??""}`),I(g,"content",z(w)[1])}),S(h,g)}),S(d,m)};U(u,d=>{n().twitter&&d(p)})}T(()=>{Pa.title=n().title,I(s,"content",n().description)}),S(a,r)}),et()}function tr(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:s,flash:i,spin:o,spinPulse:l,spinReverse:c,pulse:u,fixedWidth:p,inverse:d,border:m,listItem:x,flip:h,size:w,rotation:g,pull:v}=t,b={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":s,"fa-flash":i,"fa-spin":o,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":u,"fa-fw":p,"fa-inverse":d,"fa-border":m,"fa-li":x,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both",[`fa-${w}`]:typeof w<"u"&&w!==null,[`fa-rotate-${g}`]:typeof g<"u"&&g!==null&&g!==0,[`fa-pull-${v}`]:typeof v<"u"&&v!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(b).map(A=>b[A]?A:null).filter(A=>A)}function er(t){return t=t-0,t===t}function nr(t){return er(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function ar(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function In(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(s=>In(t,s)),r=Object.keys(e.attributes||{}).reduce((s,i)=>{const o=e.attributes[i];return i==="style"?s.attrs.style=ar(o):i.indexOf("aria-")===0||i.indexOf("data-")===0?s.attrs[i.toLowerCase()]=o:s.attrs[nr(i)]=o,s},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function rr(t,e,n){return(e=ir(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(a){rr(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function sr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ir(t){var e=sr(t,"string");return typeof e=="symbol"?e:e+""}const Ge=()=>{};let xe={},Cn={},Nn=null,Tn={mark:Ge,measure:Ge};try{typeof window<"u"&&(xe=window),typeof document<"u"&&(Cn=document),typeof MutationObserver<"u"&&(Nn=MutationObserver),typeof performance<"u"&&(Tn=performance)}catch{}const{userAgent:Be=""}=xe.navigator||{},J=xe,O=Cn,Ve=Nn,Pt=Tn;J.document;const q=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Fn=~Be.indexOf("MSIE")||~Be.indexOf("Trident/");var or=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,lr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Mn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},fr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],M="classic",Dt="duotone",cr="sharp",ur="sharp-duotone",Rn=[M,Dt,cr,ur],dr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},mr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},gr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),pr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},hr=["fak","fa-kit","fakd","fa-kit-duotone"],Xe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vr=["kit"],br={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},yr=["fak","fakd"],_r={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},qe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},It={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ar=["fak","fa-kit","fakd","fa-kit-duotone"],wr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},kr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Er={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},te={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Sr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ee=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...xr,...Sr],Or=["solid","regular","light","thin","duotone","brands"],Dn=[1,2,3,4,5,6,7,8,9,10],Pr=Dn.concat([11,12,13,14,15,16,17,18,19,20]),Ir=[...Object.keys(Er),...Or,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",It.GROUP,It.SWAP_OPACITY,It.PRIMARY,It.SECONDARY].concat(Dn.map(t=>"".concat(t,"x"))).concat(Pr.map(t=>"w-".concat(t))),Cr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const V="___FONT_AWESOME___",ne=16,zn="fa",jn="svg-inline--fa",ft="data-fa-i2svg",ae="data-fa-pseudo-element",Nr="data-fa-pseudo-element-pending",Ae="data-prefix",we="data-icon",Ke="fontawesome-i2svg",Tr="async",Fr=["HTML","HEAD","STYLE","SCRIPT"],Yn=(()=>{try{return!0}catch{return!1}})();function Et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[M]}})}const Un=f({},Mn);Un[M]=f(f(f(f({},{"fa-duotone":"duotone"}),Mn[M]),Xe.kit),Xe["kit-duotone"]);const Mr=Et(Un),re=f({},pr);re[M]=f(f(f(f({},{duotone:"fad"}),re[M]),qe.kit),qe["kit-duotone"]);const Qe=Et(re),se=f({},te);se[M]=f(f({},se[M]),_r.kit);const ke=Et(se),ie=f({},kr);ie[M]=f(f({},ie[M]),br.kit);Et(ie);const Lr=or,Wn="fa-layers-text",Rr=lr,Dr=f({},dr);Et(Dr);const zr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gt=fr,jr=[...vr,...Ir],xt=J.FontAwesomeConfig||{};function Yr(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ur(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}O&&typeof O.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ur(Yr(n));r!=null&&(xt[a]=r)});const Hn={styleDefault:"solid",familyDefault:M,cssPrefix:zn,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xt.familyPrefix&&(xt.cssPrefix=xt.familyPrefix);const gt=f(f({},Hn),xt);gt.autoReplaceSvg||(gt.observeMutations=!1);const y={};Object.keys(Hn).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){gt[t]=e,At.forEach(n=>n(y))},get:function(){return gt[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){gt.cssPrefix=t,At.forEach(e=>e(y))},get:function(){return gt.cssPrefix}});J.FontAwesomeConfig=y;const At=[];function Wr(t){return At.push(t),()=>{At.splice(At.indexOf(t),1)}}const K=ne,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hr(t){if(!t||!q)return;const e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=O.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return O.head.insertBefore(e,a),t}const Gr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function wt(){let t=12,e="";for(;t-- >0;)e+=Gr[Math.random()*62|0];return e}function pt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ee(t){return t.classList?pt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Gn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Br(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Gn(t[n]),'" '),"").trim()}function zt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Se(t){return t.size!==G.size||t.x!==G.x||t.y!==G.y||t.rotate!==G.rotate||t.flipX||t.flipY}function Vr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(i," ").concat(o)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Xr(t){let{transform:e,width:n=ne,height:a=ne,startCentered:r=!1}=t,s="";return r&&Fn?s+="translate(".concat(e.x/K-n/2,"em, ").concat(e.y/K-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/K,"em), calc(-50% + ").concat(e.y/K,"em)) "):s+="translate(".concat(e.x/K,"em, ").concat(e.y/K,"em) "),s+="scale(".concat(e.size/K*(e.flipX?-1:1),", ").concat(e.size/K*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var qr=`:root, :host {
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
}`;function Bn(){const t=zn,e=jn,n=y.cssPrefix,a=y.replacementClass;let r=qr;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Je=!1;function Bt(){y.autoAddCss&&!Je&&(Hr(Bn()),Je=!0)}var Kr={mixout(){return{dom:{css:Bn,insertCss:Bt}}},hooks(){return{beforeDOMElementCreation(){Bt()},beforeI2svg(){Bt()}}}};const X=J||{};X[V]||(X[V]={});X[V].styles||(X[V].styles={});X[V].hooks||(X[V].hooks={});X[V].shims||(X[V].shims=[]);var B=X[V];const Vn=[],Xn=function(){O.removeEventListener("DOMContentLoaded",Xn),Lt=1,Vn.map(t=>t())};let Lt=!1;q&&(Lt=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Lt||O.addEventListener("DOMContentLoaded",Xn));function Qr(t){q&&(Lt?setTimeout(t,0):Vn.push(t))}function St(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Gn(t):"<".concat(e," ").concat(Br(n),">").concat(a.map(St).join(""),"</").concat(e,">")}function Ze(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Vt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,l,c,u;for(a===void 0?(l=1,u=e[s[0]]):(l=0,u=a);l<i;l++)c=s[l],u=o(u,e[c],c,e);return u};function Jr(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function oe(t){const e=Jr(t);return e.length===1?e[0].toString(16):null}function Zr(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function $e(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function le(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=$e(e);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(t,$e(e)):B.styles[t]=f(f({},B.styles[t]||{}),r),t==="fas"&&le("fa",e)}const{styles:kt,shims:$r}=B,qn=Object.keys(ke),ts=qn.reduce((t,e)=>(t[e]=Object.keys(ke[e]),t),{});let Oe=null,Kn={},Qn={},Jn={},Zn={},$n={};function es(t){return~jr.indexOf(t)}function ns(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!es(r)?r:null}const ta=()=>{const t=a=>Vt(kt,(r,s,i)=>(r[i]=Vt(s,a,{}),r),{});Kn=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Qn=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),$n=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in kt||y.autoFetchSvg,n=Vt($r,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Jn=n.names,Zn=n.unicodes,Oe=jt(y.styleDefault,{family:y.familyDefault})};Wr(t=>{Oe=jt(t.styleDefault,{family:y.familyDefault})});ta();function Pe(t,e){return(Kn[t]||{})[e]}function as(t,e){return(Qn[t]||{})[e]}function st(t,e){return($n[t]||{})[e]}function ea(t){return Jn[t]||{prefix:null,iconName:null}}function rs(t){const e=Zn[t],n=Pe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return Oe}const na=()=>({prefix:null,iconName:null,rest:[]});function ss(t){let e=M;const n=qn.reduce((a,r)=>(a[r]="".concat(y.cssPrefix,"-").concat(r),a),{});return Rn.forEach(a=>{(t.includes(n[a])||t.some(r=>ts[a].includes(r)))&&(e=a)}),e}function jt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=M}=e,a=Mr[n][t];if(n===Dt&&!t)return"fad";const r=Qe[n][t]||Qe[n][a],s=t in B.styles?t:null;return r||s||null}function is(t){let e=[],n=null;return t.forEach(a=>{const r=ns(y.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function tn(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=ee.concat(Ar),s=tn(t.filter(p=>r.includes(p))),i=tn(t.filter(p=>!ee.includes(p))),o=s.filter(p=>(a=p,!Ln.includes(p))),[l=null]=o,c=ss(s),u=f(f({},is(i)),{},{prefix:jt(l,{family:c})});return f(f(f({},u),cs({values:t,family:c,styles:kt,config:y,canonical:u,givenPrefix:a})),os(n,a,u))}function os(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?ea(r):{},i=st(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!kt.far&&kt.fas&&!y.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const ls=Rn.filter(t=>t!==M||t!==Dt),fs=Object.keys(te).filter(t=>t!==M).map(t=>Object.keys(te[t])).flat();function cs(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,o=n===Dt,l=e.includes("fa-duotone")||e.includes("fad"),c=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(l||c||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&ls.includes(n)&&(Object.keys(s).find(d=>fs.includes(d))||i.autoFetchSvg)){const d=gr.get(n).defaultShortPrefixId;a.prefix=d,a.iconName=st(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Z()||"fas"),a}class us{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=f(f({},this.definitions[s]||{}),r[s]),le(s,r[s]);const i=ke[M][s];i&&le(i,r[s]),ta()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][i]=o}),e}}let en=[],dt={};const mt={},ds=Object.keys(mt);function ms(t,e){let{mixoutsTo:n}=e;return en=t,dt={},Object.keys(mt).forEach(a=>{ds.indexOf(a)===-1&&delete mt[a]}),en.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{dt[i]||(dt[i]=[]),dt[i].push(s[i])})}a.provides&&a.provides(mt)}),n}function fe(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(dt[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function ct(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(dt[t]||[]).forEach(s=>{s.apply(null,n)})}function $(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,e):void 0}function ce(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Z();if(e)return e=st(n,e)||e,Ze(aa.definitions,n,e)||Ze(B.styles,n,e)}const aa=new us,gs=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,ct("noAuto")},ps={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(ct("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Qr(()=>{vs({autoReplaceSvgRoot:e}),ct("watch",t)})}},hs={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=jt(t[0]);return{prefix:n,iconName:st(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(Lr))){const e=Yt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Z(),iconName:st(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Z();return{prefix:e,iconName:st(e,t)||t}}}},j={noAuto:gs,config:y,dom:ps,parse:hs,library:aa,findIconDefinition:ce,toHtml:St},vs=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=O}=t;(Object.keys(B.styles).length>0||y.autoFetchSvg)&&q&&y.autoReplaceSvg&&j.dom.i2svg({node:e})};function Ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>St(n))}}),Object.defineProperty(t,"node",{get:function(){if(!q)return;const n=O.createElement("div");return n.innerHTML=t.html,n.children}}),t}function bs(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Se(i)&&n.found&&!a.found){const{width:o,height:l}=n,c={x:o/l/2,y:.5};r.style=zt(f(f({},s),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ys(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:i}),children:a}]}]}function Ie(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:l,titleId:c,extra:u,watchable:p=!1}=t,{width:d,height:m}=n.found?n:e,x=yr.includes(a),h=[y.replacementClass,r?"".concat(y.cssPrefix,"-").concat(r):""].filter(_=>u.classes.indexOf(_)===-1).filter(_=>_!==""||!!_).concat(u.classes).join(" ");let w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:h,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)})};const g=x&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};p&&(w.attributes[ft]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||wt())},children:[o]}),delete w.attributes.title);const v=f(f({},w),{},{prefix:a,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:i,styles:f(f({},g),u.styles)}),{children:b,attributes:A}=n.found&&e.found?$("generateAbstractMask",v)||{children:[],attributes:{}}:$("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=b,v.attributes=A,i?ys(v):bs(v)}function nn(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,l=f(f(f({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(l[ft]="");const c=f({},i.styles);Se(r)&&(c.transform=Xr({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=zt(c);u.length>0&&(l.style=u);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function _s(t){const{content:e,title:n,extra:a}=t,r=f(f(f({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=zt(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Xt}=B;function ue(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const xs={found:!1,width:512,height:512};function As(t,e){!Yn&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function de(t,e){let n=e;return e==="fa"&&y.styleDefault!==null&&(e=Z()),new Promise((a,r)=>{if(n==="fa"){const s=ea(t);t=s.iconName||t,e=s.prefix||e}if(t&&e&&Xt[e]&&Xt[e][t]){const s=Xt[e][t];return a(ue(s))}As(t,e),a(f(f({},xs),{},{icon:y.showMissingIcons&&t?$("missingIconAbstract")||{}:{}}))})}const an=()=>{},me=y.measurePerformance&&Pt&&Pt.mark&&Pt.measure?Pt:{mark:an,measure:an},_t='FA "6.7.1"',ws=t=>(me.mark("".concat(_t," ").concat(t," begins")),()=>ra(t)),ra=t=>{me.mark("".concat(_t," ").concat(t," ends")),me.measure("".concat(_t," ").concat(t),"".concat(_t," ").concat(t," begins"),"".concat(_t," ").concat(t," ends"))};var Ce={begin:ws,end:ra};const Ft=()=>{};function rn(t){return typeof(t.getAttribute?t.getAttribute(ft):null)=="string"}function ks(t){const e=t.getAttribute?t.getAttribute(Ae):null,n=t.getAttribute?t.getAttribute(we):null;return e&&n}function Es(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function Ss(){return y.autoReplaceSvg===!0?Mt.replace:Mt[y.autoReplaceSvg]||Mt.replace}function Os(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function Ps(t){return O.createElement(t)}function sa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Os:Ps}=e;if(typeof t=="string")return O.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(sa(s,{ceFn:n}))}),a}function Is(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Mt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(sa(n),e)}),e.getAttribute(ft)===null&&y.keepOriginalSource){let n=O.createComment(Is(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ee(e).indexOf(y.replacementClass))return Mt.replace(t);const a=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===y.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>St(s)).join(`
`);e.setAttribute(ft,""),e.innerHTML=r}};function sn(t){t()}function ia(t,e){const n=typeof e=="function"?e:Ft;if(t.length===0)n();else{let a=sn;y.mutateApproach===Tr&&(a=J.requestAnimationFrame||sn),a(()=>{const r=Ss(),s=Ce.begin("mutate");t.map(r),s(),n()})}}let Ne=!1;function oa(){Ne=!0}function ge(){Ne=!1}let Rt=null;function on(t){if(!Ve||!y.observeMutations)return;const{treeCallback:e=Ft,nodeCallback:n=Ft,pseudoElementsCallback:a=Ft,observeMutationsRoot:r=O}=t;Rt=new Ve(s=>{if(Ne)return;const i=Z();pt(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!rn(o.addedNodes[0])&&(y.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&y.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&rn(o.target)&&~zr.indexOf(o.attributeName))if(o.attributeName==="class"&&ks(o.target)){const{prefix:l,iconName:c}=Yt(Ee(o.target));o.target.setAttribute(Ae,l||i),c&&o.target.setAttribute(we,c)}else Es(o.target)&&n(o.target)})}),q&&Rt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Cs(){Rt&&Rt.disconnect()}function Ns(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function Ts(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Yt(Ee(t));return r.prefix||(r.prefix=Z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=as(r.prefix,t.innerText)||Pe(r.prefix,oe(t.innerText))),!r.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Fs(t){const e=pt(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||wt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ms(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ts(t),s=Fs(t),i=fe("parseNodeAttributes",{},t);let o=e.styleParser?Ns(t):[];return f({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:Ls}=B;function la(t){const e=y.autoReplaceSvg==="nest"?ln(t,{styleParser:!1}):ln(t);return~e.extra.classes.indexOf(Wn)?$("generateLayersText",t,e):$("generateSvgReplacementMutation",t,e)}function Rs(){return[...hr,...ee]}function fn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();const n=O.documentElement.classList,a=u=>n.add("".concat(Ke,"-").concat(u)),r=u=>n.remove("".concat(Ke,"-").concat(u)),s=y.autoFetchSvg?Rs():Ln.concat(Object.keys(Ls));s.includes("fa")||s.push("fa");const i=[".".concat(Wn,":not([").concat(ft,"])")].concat(s.map(u=>".".concat(u,":not([").concat(ft,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=pt(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const l=Ce.begin("onTree"),c=o.reduce((u,p)=>{try{const d=la(p);d&&u.push(d)}catch(d){Yn||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,p)=>{Promise.all(c).then(d=>{ia(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),p(d)})})}function Ds(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;la(t).then(n=>{n&&ia([n],e)})}function zs(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:ce(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:ce(r||{})),t(a,f(f({},n),{},{mask:r}))}}const js=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:p,iconName:d,icon:m}=t;return Ut(f({type:"icon"},t),()=>(ct("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(i?c["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(o||wt()):(c["aria-hidden"]="true",c.focusable="false")),Ie({icons:{main:ue(m),mask:r?ue(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:f(f({},G),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var Ys={mixout(){return{icon:zs(js)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=fn,t.nodeCallback=Ds,t}}},provides(t){t.i2svg=function(e){const{node:n=O,callback:a=()=>{}}=e;return fn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:l,mask:c,maskId:u,extra:p}=n;return new Promise((d,m)=>{Promise.all([de(a,i),c.iconName?de(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[h,w]=x;d([e,Ie({icons:{main:h,mask:w},prefix:i,iconName:a,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:p,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=zt(i);o.length>0&&(a.style=o);let l;return Se(s)&&(l=$("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:a}}}},Us={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ut({type:"layer"},()=>{ct("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ws={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return Ut({type:"counter",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),_s({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(y.cssPrefix,"-layers-counter"),...a]}})))}}}},Hs={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return Ut({type:"text",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),nn({content:t,transform:f(f({},G),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(y.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Fn){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();i=c.width/l,o=c.height/l}return y.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,nn({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const Gs=new RegExp('"',"ug"),cn=[1105920,1112319],un=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),mr),Cr),wr),pe=Object.keys(un).reduce((t,e)=>(t[e.toLowerCase()]=un[e],t),{}),Bs=Object.keys(pe).reduce((t,e)=>{const n=pe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Vs(t){const e=t.replace(Gs,""),n=Zr(e,0),a=n>=cn[0]&&n<=cn[1],r=e.length===2?e[0]===e[1]:!1;return{value:oe(r?e[0]:e),isSecondary:a||r}}function Xs(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(pe[n]||{})[r]||Bs[n]}function dn(t,e){const n="".concat(Nr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=pt(t.children).filter(d=>d.getAttribute(ae)===e)[0],o=J.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),c=l.match(Rr),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(i&&!c)return t.removeChild(i),a();if(c&&p!=="none"&&p!==""){const d=o.getPropertyValue("content");let m=Xs(l,u);const{value:x,isSecondary:h}=Vs(d),w=c[0].startsWith("FontAwesome");let g=Pe(m,x),v=g;if(w){const b=rs(x);b.iconName&&b.prefix&&(g=b.iconName,m=b.prefix)}if(g&&!h&&(!i||i.getAttribute(Ae)!==m||i.getAttribute(we)!==v)){t.setAttribute(n,v),i&&t.removeChild(i);const b=Ms(),{extra:A}=b;A.attributes[ae]=e,de(g,m).then(_=>{const E=Ie(f(f({},b),{},{icons:{main:_,mask:na()},prefix:m,iconName:v,extra:A,watchable:!0})),R=O.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=E.map(D=>St(D)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function qs(t){return Promise.all([dn(t,"::before"),dn(t,"::after")])}function Ks(t){return t.parentNode!==document.head&&!~Fr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ae)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mn(t){if(q)return new Promise((e,n)=>{const a=pt(t.querySelectorAll("*")).filter(Ks).map(qs),r=Ce.begin("searchPseudoElements");oa(),Promise.all(a).then(()=>{r(),ge(),e()}).catch(()=>{r(),ge(),n()})})}var Qs={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=mn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=O}=e;y.searchPseudoElements&&mn(n)}}};let gn=!1;var Js={mixout(){return{dom:{unwatch(){oa(),gn=!0}}}},hooks(){return{bootstrap(){on(fe("mutationObserverCallbacks",{}))},noAuto(){Cs()},watch(t){const{observeMutationsRoot:e}=t;gn?ge():on(fe("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const pn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Zs={mixout(){return{parse:{transform:t=>pn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=pn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},d={outer:i,inner:u,path:p};return{tag:"g",attributes:f({},d.outer),children:[{tag:"g",attributes:f({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:f(f({},n.icon.attributes),d.path)}]}]}}}};const qt={x:0,y:0,width:"100%",height:"100%"};function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $s(t){return t.tag==="g"?t.children:[t]}var ti={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Yt(n.split(" ").map(r=>r.trim())):na();return a.prefix||(a.prefix=Z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:p}=s,d=Vr({transform:o,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:f(f({},qt),{},{fill:"white"})},x=c.children?{children:c.children.map(hn)}:{},h={tag:"g",attributes:f({},d.inner),children:[hn(f({tag:c.tag,attributes:f(f({},c.attributes),d.path)},x))]},w={tag:"g",attributes:f({},d.outer),children:[h]},g="mask-".concat(i||wt()),v="clip-".concat(i||wt()),b={tag:"mask",attributes:f(f({},qt),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,w]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:$s(p)},b]};return n.push(A,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(g,")")},qt)}),{children:n,attributes:a}}}},ei={provides(t){let e=!1;J.matchMedia&&(e=J.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:f(f({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=f(f({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:f(f({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:f(f({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:f(f({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:f(f({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:f(f({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ni={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ai=[Kr,Ys,Us,Ws,Hs,Qs,Js,Zs,ti,ei,ni];ms(ai,{mixoutsTo:j});j.noAuto;j.config;j.library;j.dom;const he=j.parse;j.findIconDefinition;j.toHtml;const ri=j.icon;j.layer;j.text;j.counter;let fa=!1;try{fa=!0}catch{}function si(...t){!fa&&console&&typeof console.error=="function"&&console.error(...t)}function vn(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(he.icon)return he.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Kt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var ii=ja("<svg><!></svg>");function oi(t,e){var h;tt(e,!1);let n=k(e,"tag",8),a=k(e,"props",8),r=k(e,"children",8),s=k(e,"style",8,null),i=k(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(w){return(w==null?void 0:w.reduce((g,v)=>g+(v.tag?l(v):v),""))||""}function l({tag:w,props:g,children:v}){const b=Object.keys(g).map(A=>`${A}="${g[A]}"`).join(" ");return`<${w} ${b}>${o(v)}</${w}>`}const c=o(r()),u=(h=a())!=null&&h.style?`${a().style}${s()||""}`:s(),p={...a(),style:u};nt();var d=ii();let m;var x=F(d);Zt(x,()=>c,!0,!1),C(d),Ya(d,w=>i(w),()=>i()),T(()=>m=$t(d,m,{...p},void 0,!0)),S(t,d),et()}function ca(t,e){const n=Ye(e,["children","$$slots","$$events","$$legacy"]),a=Ye(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);tt(e,!1),k(e,"border",8,!1);let r=k(e,"mask",8,null),s=k(e,"maskId",8,null);k(e,"fixedWidth",8,!1),k(e,"inverse",8,!1),k(e,"flip",8,!1);let i=k(e,"icon",8,null);k(e,"listItem",8,!1),k(e,"pull",8,null),k(e,"pulse",8,!1),k(e,"rotation",8,null),k(e,"size",8,null),k(e,"spin",8,!1),k(e,"spinPulse",8,!1),k(e,"spinReverse",8,!1),k(e,"beat",8,!1),k(e,"fade",8,!1),k(e,"beatFade",8,!1),k(e,"bounce",8,!1),k(e,"shake",8,!1);let o=k(e,"symbol",8,!1),l=k(e,"title",8,""),c=k(e,"titleId",8,null),u=k(e,"transform",8,null);k(e,"swapOpacity",8,!1);let p=k(e,"ref",12,null),d=k(e,"style",8,null);const m=vn(i()),x=Kt("classes",[...tr(n),...(n.class||"").split(" ")]),h=Kt("transform",typeof u()=="string"?he.transform(u()):u()),w=Kt("mask",vn(r())),g=ri(m,{...x,...h,...w,symbol:o(),title:l(),titleId:c(),maskId:s()});let v=Ca(null);if(!g)si("Could not find icon",m);else{const{abstract:E}=g;Ia(v,In((R,D,P)=>({tag:R,props:D,children:P}),E[0],a))}nt();var b=it(),A=Y(b);{var _=E=>{oi(E,Ua(()=>z(v),{get style(){return d()},get ref(){return p()},set ref(R){p(R)},$$legacy:!0}))};U(A,E=>{z(v)&&E(_)})}S(t,b),et()}var li=L('<li class="link svelte-p5gp3m"><a class="svelte-p5gp3m"><!> </a></li>');function fi(t,e){tt(e,!1);let n=k(e,"link",8);const a=n().privacy||n().external?[n().privacy?"noopener noreferrer":void 0,n().external?"external":void 0].filter(Boolean).join(" "):void 0;nt();var r=it(),s=Y(r);{var i=o=>{var l=li(),c=F(l);I(c,"rel",a);var u=F(c);ca(u,{get icon(){return n().icon},style:"width: 1em;"});var p=N(u);C(c),C(l),T(()=>{I(c,"href",n().url),I(c,"target",n().target?`_${n().target}`:void 0),I(c,"itemprop",n().sameAs?"sameAs":void 0),Jt(p,` ${n().name??""}`)}),S(o,l)};U(s,o=>{n().display!==!1&&o(i)})}S(t,r),et()}var ci=L('<section class="links"><ul class="svelte-37tmq0"></ul></section>');function ui(t,e){let n=k(e,"links",8);var a=ci(),r=F(a);lt(r,5,n,ot,(s,i)=>{fi(s,{get link(){return z(i)}})}),C(r),C(a),S(t,a)}const Ct={sources:{avif:""+new URL("../assets/avatar.BRk7bXGH.avif",import.meta.url).href+" 300w, "+new URL("../assets/avatar.D02hOIcw.avif",import.meta.url).href+" 600w",webp:""+new URL("../assets/avatar.VIyhnhll.webp",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BPKBrzJY.webp",import.meta.url).href+" 600w",png:""+new URL("../assets/avatar.M-STc7G1.png",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href+" 600w"},img:{src:""+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href,w:600,h:600}};var di=L('<img class="avatar svelte-yvfll6" width="100px" height="100px">'),mi=L("<source>"),gi=L('<picture><!> <img class="avatar svelte-yvfll6" width="100px" height="100px"></picture>'),pi=L('<header itemscope="" itemtype="http://schema.org/Person" class="user-info svelte-yvfll6"><!> <h1 itemprop="name" class="svelte-yvfll6"><!></h1> <p itemprop="description" class="svelte-yvfll6"><!></p></header>');function hi(t,e){tt(e,!1);let n=k(e,"user",8),a=k(e,"i18n",8);nt();var r=pi(),s=F(r);{var i=d=>{var m=di();T(()=>I(m,"alt",a().avatar.alt.replace("{{userName}}",n().name))),T(()=>I(m,"src",Ct.img.src)),S(d,m)},o=d=>{var m=gi(),x=F(m);lt(x,1,()=>Object.entries(Ct.sources),ot,(w,g)=>{let v=()=>z(g)[0],b=()=>z(g)[1];var A=mi();T(()=>{I(A,"srcset",b()),I(A,"type","image/"+v())}),S(w,A)});var h=N(x,2);T(()=>I(h,"alt",a().avatar.alt.replace("{{userName}}",n().name))),C(m),T(()=>I(h,"src",Ct.img.src)),S(d,m)};U(s,d=>{typeof Ct=="string"?d(i):d(o,!1)})}var l=N(s,2),c=F(l);Zt(c,()=>n().name,!1,!1),C(l);var u=N(l,2),p=F(u);Zt(p,()=>n().bio,!1,!1),C(u),C(r),S(t,r),et()}var vi=L('<footer class="credits"><p class="svelte-ss06mj"> <a href="https://linksharer.js.org?utm_source=generated_website&amp;utm_medium=credits&amp;utm_campaign=project_usage&amp;utm_content=footer" rel="external" class="svelte-ss06mj">LinkSharer</a> </p></footer>');function bi(t,e){tt(e,!1);let n=k(e,"showCredits",8),a=k(e,"i18n",8),r=k(e,"version",8);nt();var s=it(),i=Y(s);{var o=l=>{var c=vi(),u=F(c),p=F(u),d=N(p,2);C(u),C(c),T(()=>{Jt(p,`${a().credits??""} `),Jt(d,` v${r()??""}`)}),S(l,c)};U(i,l=>{n()&&l(o)})}S(t,s),et()}var yi=L('<li class="social svelte-1fhc3ff"><a itemprop="sameAs" rel="noopener noreferrer" class="svelte-1fhc3ff"><span class="svelte-1fhc3ff"><!></span></a></li>');function _i(t,e){tt(e,!1);let n=k(e,"social",8);nt();var a=yi(),r=F(a),s=F(r),i=F(s);ca(i,{get icon(){return n().icon}}),C(s),C(r),C(a),T(()=>{I(r,"href",n().url),I(r,"target",`_${n().target??"self"??""}`),I(r,"aria-label",n().name)}),S(t,a),et()}var xi=L('<article class="socials"><ul class="svelte-yffzw0"></ul></article>');function Ai(t,e){let n=k(e,"socials",8);var a=xi(),r=F(a);lt(r,5,n,ot,(s,i)=>{_i(s,{get social(){return z(i)}})}),C(r),C(a),S(t,a)}var wi=_e("<script><\/script><!---->",1),ki=L('<meta name="google-site-verification">'),Ei=L("<!> <!>",1),Si=_e('<script async defer="" src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script> <script async data-full-urls="true" src="https://scripts.simpleanalyticscdn.com/auto-events.js"><\/script>',1),Oi=_e("<script><\/script><!---->",1),Pi=L('<!> <!> <div class="linksharer svelte-9f1c5"><main class="svelte-9f1c5"><!> <!> <!></main> <!></div> <!>',1);function zi(t,e){var v;tt(e,!1);let n=k(e,"data",8),a={head:[],body:[]};(v=n().config.scripts)==null||v.forEach(b=>{const{head:A,..._}=b;a[A?"head":"body"].push(_)}),nt();var r=Pi();En(b=>{var A=Ei(),_=Y(A);{var E=P=>{var W=it(),ht=Y(W);lt(ht,1,()=>a.head,ot,(at,vt)=>{var Ot=wi(),ut=Y(Ot);let bt;var Wt=N(ut);T(()=>bt=$t(ut,bt,{...z(vt)},"svelte-9f1c5")),ze(ut),S(at,Ot)}),S(P,W)};U(_,P=>{a.head&&P(E)})}var R=N(_,2);{var D=P=>{var W=ki();T(()=>I(W,"content",n().config.googleSiteVerification)),S(P,W)};U(R,P=>{n().config.googleSiteVerification&&P(D)})}S(b,A)});var s=Y(r);$a(s,{get seo(){return n().config.seo}});var i=N(s,2);{var o=b=>{var A=Si();Na(2),S(b,A)};U(i,b=>{n().config.analytics&&b(o)})}var l=N(i,2),c=F(l),u=F(c);hi(u,{get user(){return n().config.user},get i18n(){return n().config.i18n}});var p=N(u,2);ui(p,{get links(){return n().config.links}});var d=N(p,2);{var m=b=>{Ai(b,{get socials(){return n().config.socials}})};U(d,b=>{n().config.socials&&b(m)})}C(c);var x=N(c,2),h=Ta(()=>n().config.credits||!0);bi(x,{get showCredits(){return z(h)},get i18n(){return n().config.i18n},get version(){return n().version}}),C(l);var w=N(l,2);{var g=b=>{var A=it(),_=Y(A);lt(_,1,()=>a.body,ot,(E,R)=>{var D=Oi(),P=Y(D);let W;N(P),T(()=>W=$t(P,W,{...z(R)},"svelte-9f1c5")),ze(P),S(E,D)}),S(b,A)};U(w,b=>{b(g)})}S(t,r),et()}export{zi as component};
