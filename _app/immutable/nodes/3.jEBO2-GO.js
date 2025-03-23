import"../chunks/CWj6FrbW.js";import"../chunks/BbOkTmi9.js";import{J as kn,i as xa,j as Sn,k as D,n as Lt,A as ee,g as z,B as wa,C as ze,s as _t,o as rt,D as En,w as we,F as _a,ar as Vt,al as On,L as je,as as _e,at as Ue,au as ke,av as ka,ak as Sa,aw as Ea,y as Pn,ax as In,q as xt,W as Rt,ah as Oa,ay as Pa,a2 as Cn,a3 as Ye,ae as Ia,az as Ca,m as Nn,ai as Na,ag as Ta,aA as La,aB as Fa,aC as Ma,aD as Ra,p as tt,a as et,z as W,a9 as L,t as j,$ as Da,a7 as F,a8 as T,_ as za,aE as ja}from"../chunks/CbF4Ualv.js";import{i as Ua,c as Ya,d as Wa,n as Ha,a as Ga,s as ne,r as We}from"../chunks/h8uJ8PRy.js";import{h as Tn}from"../chunks/h-aavKVU.js";import{b as He,e as Ba,a as E,c as st,t as R,n as Va,f as Se}from"../chunks/CotCX2qi.js";import{i as H,b as Xa}from"../chunks/Doh_Q77u.js";import{i as nt}from"../chunks/D7MHvmj6.js";import{p as _,l as Ge,s as qa}from"../chunks/BCrznCbR.js";function Ka(t,e){if(e){const n=document.body;t.autofocus=!0,kn(()=>{document.activeElement===n&&t.focus()})}}function ot(t,e){return e}function Qa(t,e,n,a){for(var r=[],i=e.length,s=0;s<i;s++)ka(e[s].e,r,!0);var o=i>0&&r.length===0&&n!==null;if(o){var c=n.parentNode;Sa(c),c.append(n),a.clear(),Q(t,e[0].prev,e[i-1].next)}Ea(r,()=>{for(var l=0;l<i;l++){var u=e[l];o||(a.delete(u.k),Q(t,u.prev,u.next)),Pn(u.e,!o)}})}function lt(t,e,n,a,r,i=null){var s=t,o={flags:e,items:new Map,first:null},c=(e&In)!==0;if(c){var l=t;s=D?Lt(xt(l)):l.appendChild(xa())}D&&ee();var u=null,g=!1,f=Rt(()=>{var p=n();return Ia(p)?p:p==null?[]:On(p)});Sn(()=>{var p=z(f),v=p.length;if(g&&v===0)return;g=v===0;let k=!1;if(D){var A=s.data===wa;A!==(v===0)&&(s=ze(),Lt(s),_t(!1),k=!0)}if(D){for(var b=null,w,h=0;h<v;h++){if(rt.nodeType===8&&rt.data===Oa){s=rt,k=!0,_t(!1);break}var m=p[h],x=a(m,h);w=Ln(rt,o,b,null,m,x,h,r,e,n),o.items.set(x,w),b=w}v>0&&Lt(ze())}D||Ja(p,o,s,r,e,a,n),i!==null&&(v===0?u?En(u):u=we(()=>i(s)):u!==null&&_a(u,()=>{u=null})),k&&_t(!0),z(f)}),D&&(s=rt)}function Ja(t,e,n,a,r,i,s){var vt,ut,bt,Bt;var o=(r&Pa)!==0,c=(r&(_e|ke))!==0,l=t.length,u=e.items,g=e.first,f=g,p,v=null,k,A=[],b=[],w,h,m,x;if(o)for(x=0;x<l;x+=1)w=t[x],h=i(w,x),m=u.get(h),m!==void 0&&((vt=m.a)==null||vt.measure(),(k??(k=new Set)).add(m));for(x=0;x<l;x+=1){if(w=t[x],h=i(w,x),m=u.get(h),m===void 0){var I=f?f.e.nodes_start:n;v=Ln(I,e,v,v===null?e.first:v.next,w,h,x,a,r,s),u.set(h,v),A=[],b=[],f=v.next;continue}if(c&&Za(m,w,x,r),(m.e.f&Vt)!==0&&(En(m.e),o&&((ut=m.a)==null||ut.unfix(),(k??(k=new Set)).delete(m))),m!==f){if(p!==void 0&&p.has(m)){if(A.length<b.length){var S=b[0],C;v=S.prev;var N=A[0],Y=A[A.length-1];for(C=0;C<A.length;C+=1)Be(A[C],S,n);for(C=0;C<b.length;C+=1)p.delete(b[C]);Q(e,N.prev,Y.next),Q(e,v,N),Q(e,Y,S),f=S,v=Y,x-=1,A=[],b=[]}else p.delete(m),Be(m,f,n),Q(e,m.prev,m.next),Q(e,m,v===null?e.first:v.next),Q(e,v,m),v=m;continue}for(A=[],b=[];f!==null&&f.k!==h;)(f.e.f&Vt)===0&&(p??(p=new Set)).add(f),b.push(f),f=f.next;if(f===null)continue;m=f}A.push(m),v=m,f=m.next}if(f!==null||p!==void 0){for(var at=p===void 0?[]:On(p);f!==null;)(f.e.f&Vt)===0&&at.push(f),f=f.next;var pt=at.length;if(pt>0){var Gt=(r&In)!==0&&l===0?n:null;if(o){for(x=0;x<pt;x+=1)(bt=at[x].a)==null||bt.measure();for(x=0;x<pt;x+=1)(Bt=at[x].a)==null||Bt.fix()}Qa(e,at,Gt,u)}}o&&kn(()=>{var De;if(k!==void 0)for(m of k)(De=m.a)==null||De.apply()}),je.first=e.first&&e.first.e,je.last=v&&v.e}function Za(t,e,n,a){(a&_e)!==0&&Ue(t.v,e),(a&ke)!==0?Ue(t.i,n):t.i=n}function Ln(t,e,n,a,r,i,s,o,c,l){var u=(c&_e)!==0,g=(c&Ca)===0,f=u?g?Cn(r):Ye(r):r,p=(c&ke)===0?s:Ye(s),v={i:p,v:f,k:i,a:null,e:null,prev:n,next:a};try{return v.e=we(()=>o(t,f,p,l),D),v.e.prev=n&&n.e,v.e.next=a&&a.e,n===null?e.first=v:(n.next=v,n.e.next=v.e),a!==null&&(a.prev=v,a.e.prev=v.e),v}finally{}}function Be(t,e,n){for(var a=t.next?t.next.e.nodes_start:n,r=e?e.e.nodes_start:n,i=t.e.nodes_start;i!==a;){var s=Nn(i);r.before(i),i=s}}function Q(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function ae(t,e,n,a,r){var i=t,s="",o;Sn(()=>{if(s===(s=e()??"")){D&&ee();return}o!==void 0&&(Pn(o),o=void 0),s!==""&&(o=we(()=>{if(D){rt.data;for(var c=ee(),l=c;c!==null&&(c.nodeType!==8||c.data!=="");)l=c,c=Nn(c);if(c===null)throw Na(),Ta;He(rt,l),i=Lt(c);return}var u=s+"";n&&(u=`<svg>${u}</svg>`);var g=Ba(u);if((n||a)&&(g=xt(g)),He(xt(g),g.lastChild),n||a)for(;xt(g);)i.before(xt(g));else i.before(g)}))})}function Fn(t){var e,n,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=Fn(t[e]))&&(a&&(a+=" "),a+=n)}else for(n in t)t[n]&&(a&&(a+=" "),a+=n);return a}function $a(){for(var t,e,n=0,a="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=Fn(t))&&(a&&(a+=" "),a+=e);return a}function tr(t){return typeof t=="object"?$a(t):t??""}const Ve=[...` 	
\r\f \v\uFEFF`];function er(t,e,n){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),n){for(var r in n)if(n[r])a=a?a+" "+r:r;else if(a.length)for(var i=r.length,s=0;(s=a.indexOf(r,s))>=0;){var o=s+i;(s===0||Ve.includes(a[s-1]))&&(o===a.length||Ve.includes(a[o]))?a=(s===0?"":a.substring(0,s))+a.substring(o+1):s=o}}return a===""?null:a}function Xe(t,e=!1){var n=e?" !important;":";",a="";for(var r in t){var i=t[r];i!=null&&i!==""&&(a+=" "+r+": "+i+n)}return a}function Xt(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function nr(t,e){if(e){var n="",a,r;if(Array.isArray(e)?(a=e[0],r=e[1]):a=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,o=!1,c=[];a&&c.push(...Object.keys(a).map(Xt)),r&&c.push(...Object.keys(r).map(Xt));var l=0,u=-1;const k=t.length;for(var g=0;g<k;g++){var f=t[g];if(o?f==="/"&&t[g-1]==="*"&&(o=!1):i?i===f&&(i=!1):f==="/"&&t[g+1]==="*"?o=!0:f==='"'||f==="'"?i=f:f==="("?s++:f===")"&&s--,!o&&i===!1&&s===0){if(f===":"&&u===-1)u=g;else if(f===";"||g===k-1){if(u!==-1){var p=Xt(t.substring(l,u).trim());if(!c.includes(p)){f!==";"&&g++;var v=t.substring(l,g).trim();n+=" "+v+";"}}l=g+1,u=-1}}}}return a&&(n+=Xe(a)),r&&(n+=Xe(r,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function ar(t,e,n,a,r,i){var s=t.__className;if(D||s!==n){var o=er(n,a,i);(!D||o!==t.getAttribute("class"))&&(o==null?t.removeAttribute("class"):e?t.className=o:t.setAttribute("class",o)),t.__className=n}else if(i&&r!==i)for(var c in i){var l=!!i[c];(r==null||l!==!!r[c])&&t.classList.toggle(c,l)}return i}function qt(t,e={},n,a){for(var r in n){var i=n[r];e[r]!==i&&(n[r]==null?t.style.removeProperty(r):t.style.setProperty(r,i,a))}}function rr(t,e,n,a){var r=t.__style;if(D||r!==e){var i=nr(e,a);(!D||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=e}else a&&(Array.isArray(a)?(qt(t,n==null?void 0:n[0],a[0]),qt(t,n==null?void 0:n[1],a[1],"important")):qt(t,n,a));return a}const yt=Symbol("class"),At=Symbol("style"),Mn=Symbol("is custom element"),Rn=Symbol("is html");function ir(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function P(t,e,n,a){var r=Dn(t);D&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=n)&&(e==="loading"&&(t[La]=n),n==null?t.removeAttribute(e):typeof n!="string"&&zn(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function re(t,e,n,a,r=!1){var i=Dn(t),s=i[Mn],o=!i[Rn];let c=D&&s;c&&_t(!1);var l=e||{},u=t.tagName==="OPTION";for(var g in e)g in n||(n[g]=null);n.class?n.class=tr(n.class):(a||n[yt])&&(n.class=null),n[At]&&(n.style??(n.style=null));var f=zn(t);for(const h in n){let m=n[h];if(u&&h==="value"&&m==null){t.value=t.__value="",l[h]=m;continue}if(h==="class"){var p=t.namespaceURI==="http://www.w3.org/1999/xhtml";ar(t,p,m,a,e==null?void 0:e[yt],n[yt]),l[h]=m,l[yt]=n[yt];continue}if(h==="style"){rr(t,m,e==null?void 0:e[At],n[At]),l[h]=m,l[At]=n[At];continue}var v=l[h];if(m!==v){l[h]=m;var k=h[0]+h[1];if(k!=="$$")if(k==="on"){const x={},I="$$"+h;let S=h.slice(2);var A=Ga(S);if(Ua(S)&&(S=S.slice(0,-7),x.capture=!0),!A&&v){if(m!=null)continue;t.removeEventListener(S,l[I],x),l[I]=null}if(m!=null)if(A)t[`__${S}`]=m,Wa([S]);else{let C=function(N){l[h].call(this,N)};l[I]=Ya(S,t,C,x)}else A&&(t[`__${S}`]=void 0)}else if(h==="style")P(t,h,m);else if(h==="autofocus")Ka(t,!!m);else if(!s&&(h==="__value"||h==="value"&&m!=null))t.value=t.__value=m;else if(h==="selected"&&u)ir(t,m);else{var b=h;o||(b=Ha(b));var w=b==="defaultValue"||b==="defaultChecked";if(m==null&&!s&&!w)if(i[h]=null,b==="value"||b==="checked"){let x=t;const I=e===void 0;if(b==="value"){let S=x.defaultValue;x.removeAttribute(b),x.defaultValue=S,x.value=x.__value=I?S:null}else{let S=x.defaultChecked;x.removeAttribute(b),x.defaultChecked=S,x.checked=I?S:!1}}else t.removeAttribute(h);else w||f.includes(b)&&(s||typeof m!="string")?t[b]=m:typeof m!="function"&&P(t,b,m)}}}return c&&_t(!0),l}function Dn(t){return t.__attributes??(t.__attributes={[Mn]:t.nodeName.includes("-"),[Rn]:t.namespaceURI===Fa})}var qe=new Map;function zn(t){var e=qe.get(t.nodeName);if(e)return e;qe.set(t.nodeName,e=[]);for(var n,a=t,r=Element.prototype;r!==a;){n=Ra(a);for(var i in n)n[i].set&&e.push(i);a=Ma(a)}return e}var sr=R('<link rel="canonical">'),or=R("<meta>"),lr=R("<meta>"),fr=R('<meta name="description"> <!> <!> <!>',1);function cr(t,e){tt(e,!1);let n=_(e,"seo",8);nt(),Tn(a=>{var r=fr(),i=W(r),s=L(i,2);{var o=f=>{var p=sr();j(()=>P(p,"href",n().canonical)),E(f,p)};H(s,f=>{n().canonical&&f(o)})}var c=L(s,2);{var l=f=>{var p=st(),v=W(p);lt(v,1,()=>Object.entries(n().og),ot,(k,A)=>{var b=or();j(()=>{P(b,"property",`og:${z(A)[0]??""}`),P(b,"content",z(A)[1])}),E(k,b)}),E(f,p)};H(c,f=>{n().og&&f(l)})}var u=L(c,2);{var g=f=>{var p=st(),v=W(p);lt(v,1,()=>Object.entries(n().twitter),ot,(k,A)=>{var b=lr();j(()=>{P(b,"property",`og:${z(A)[0]??""}`),P(b,"content",z(A)[1])}),E(k,b)}),E(f,p)};H(u,f=>{n().twitter&&f(g)})}j(()=>{Da.title=n().title,P(i,"content",n().description)}),E(a,r)}),et()}function ur(t){const{beat:e,fade:n,beatFade:a,bounce:r,shake:i,flash:s,spin:o,spinPulse:c,spinReverse:l,pulse:u,fixedWidth:g,inverse:f,border:p,listItem:v,flip:k,size:A,rotation:b,pull:w}=t,h={"fa-beat":e,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":r,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":g,"fa-inverse":f,"fa-border":p,"fa-li":v,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both",[`fa-${A}`]:typeof A<"u"&&A!==null,[`fa-rotate-${b}`]:typeof b<"u"&&b!==null&&b!==0,[`fa-pull-${w}`]:typeof w<"u"&&w!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(h).map(m=>h[m]?m:null).filter(m=>m)}function dr(t){return t=t-0,t===t}function mr(t){return dr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function gr(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function jn(t,e,n={}){if(typeof e=="string")return e;const a=(e.children||[]).map(i=>jn(t,i)),r=Object.keys(e.attributes||{}).reduce((i,s)=>{const o=e.attributes[s];return s==="style"?i.attrs.style=gr(o):s.indexOf("aria-")===0||s.indexOf("data-")===0?i.attrs[s.toLowerCase()]=o:i.attrs[mr(s)]=o,i},{attrs:{}});return t(e.tag,{...r.attrs},a)}/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function hr(t,e,n){return(e=vr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ke(Object(n),!0).forEach(function(a){hr(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function pr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function vr(t){var e=pr(t,"string");return typeof e=="symbol"?e:e+""}const Qe=()=>{};let Ee={},Un={},Yn=null,Wn={mark:Qe,measure:Qe};try{typeof window<"u"&&(Ee=window),typeof document<"u"&&(Un=document),typeof MutationObserver<"u"&&(Yn=MutationObserver),typeof performance<"u"&&(Wn=performance)}catch{}const{userAgent:Je=""}=Ee.navigator||{},J=Ee,O=Un,Ze=Yn,Ct=Wn;J.document;const q=!!O.documentElement&&!!O.head&&typeof O.addEventListener=="function"&&typeof O.createElement=="function",Hn=~Je.indexOf("MSIE")||~Je.indexOf("Trident/");var br=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,yr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Gn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ar={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],M="classic",jt="duotone",xr="sharp",wr="sharp-duotone",Vn=[M,jt,xr,wr],_r={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},kr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Sr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Er={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Or=["fak","fa-kit","fakd","fa-kit-duotone"],$e={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Pr=["kit"],Ir={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Cr=["fak","fakd"],Nr={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},tn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Lr=["fak","fa-kit","fakd","fa-kit-duotone"],Fr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Mr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Rr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ie={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Dr=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],se=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Tr,...Dr],zr=["solid","regular","light","thin","duotone","brands"],Xn=[1,2,3,4,5,6,7,8,9,10],jr=Xn.concat([11,12,13,14,15,16,17,18,19,20]),Ur=[...Object.keys(Rr),...zr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nt.GROUP,Nt.SWAP_OPACITY,Nt.PRIMARY,Nt.SECONDARY].concat(Xn.map(t=>"".concat(t,"x"))).concat(jr.map(t=>"w-".concat(t))),Yr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const V="___FONT_AWESOME___",oe=16,qn="fa",Kn="svg-inline--fa",ft="data-fa-i2svg",le="data-fa-pseudo-element",Wr="data-fa-pseudo-element-pending",Oe="data-prefix",Pe="data-icon",en="fontawesome-i2svg",Hr="async",Gr=["HTML","HEAD","STYLE","SCRIPT"],Qn=(()=>{try{return!0}catch{return!1}})();function Pt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[M]}})}const Jn=d({},Gn);Jn[M]=d(d(d(d({},{"fa-duotone":"duotone"}),Gn[M]),$e.kit),$e["kit-duotone"]);const Br=Pt(Jn),fe=d({},Er);fe[M]=d(d(d(d({},{duotone:"fad"}),fe[M]),tn.kit),tn["kit-duotone"]);const nn=Pt(fe),ce=d({},ie);ce[M]=d(d({},ce[M]),Nr.kit);const Ie=Pt(ce),ue=d({},Mr);ue[M]=d(d({},ue[M]),Ir.kit);Pt(ue);const Vr=br,Zn="fa-layers-text",Xr=yr,qr=d({},_r);Pt(qr);const Kr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kt=Ar,Qr=[...Pr,...Ur],kt=J.FontAwesomeConfig||{};function Jr(t){var e=O.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Zr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}O&&typeof O.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Zr(Jr(n));r!=null&&(kt[a]=r)});const $n={styleDefault:"solid",familyDefault:M,cssPrefix:qn,replacementClass:Kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kt.familyPrefix&&(kt.cssPrefix=kt.familyPrefix);const gt=d(d({},$n),kt);gt.autoReplaceSvg||(gt.observeMutations=!1);const y={};Object.keys($n).forEach(t=>{Object.defineProperty(y,t,{enumerable:!0,set:function(e){gt[t]=e,St.forEach(n=>n(y))},get:function(){return gt[t]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){gt.cssPrefix=t,St.forEach(e=>e(y))},get:function(){return gt.cssPrefix}});J.FontAwesomeConfig=y;const St=[];function $r(t){return St.push(t),()=>{St.splice(St.indexOf(t),1)}}const K=oe,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ti(t){if(!t||!q)return;const e=O.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=O.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return O.head.insertBefore(e,a),t}const ei="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Et(){let t=12,e="";for(;t-- >0;)e+=ei[Math.random()*62|0];return e}function ht(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ce(t){return t.classList?ht(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ta(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ni(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ta(t[n]),'" '),"").trim()}function Ut(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ne(t){return t.size!==G.size||t.x!==G.x||t.y!==G.y||t.rotate!==G.rotate||t.flipX||t.flipY}function ai(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(s," ").concat(o)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function ri(t){let{transform:e,width:n=oe,height:a=oe,startCentered:r=!1}=t,i="";return r&&Hn?i+="translate(".concat(e.x/K-n/2,"em, ").concat(e.y/K-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/K,"em), calc(-50% + ").concat(e.y/K,"em)) "):i+="translate(".concat(e.x/K,"em, ").concat(e.y/K,"em) "),i+="scale(".concat(e.size/K*(e.flipX?-1:1),", ").concat(e.size/K*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ii=`:root, :host {
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
}`;function ea(){const t=qn,e=Kn,n=y.cssPrefix,a=y.replacementClass;let r=ii;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let an=!1;function Qt(){y.autoAddCss&&!an&&(ti(ea()),an=!0)}var si={mixout(){return{dom:{css:ea,insertCss:Qt}}},hooks(){return{beforeDOMElementCreation(){Qt()},beforeI2svg(){Qt()}}}};const X=J||{};X[V]||(X[V]={});X[V].styles||(X[V].styles={});X[V].hooks||(X[V].hooks={});X[V].shims||(X[V].shims=[]);var B=X[V];const na=[],aa=function(){O.removeEventListener("DOMContentLoaded",aa),Dt=1,na.map(t=>t())};let Dt=!1;q&&(Dt=(O.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O.readyState),Dt||O.addEventListener("DOMContentLoaded",aa));function oi(t){q&&(Dt?setTimeout(t,0):na.push(t))}function It(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?ta(t):"<".concat(e," ").concat(ni(n),">").concat(a.map(It).join(""),"</").concat(e,">")}function rn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Jt=function(e,n,a,r){var i=Object.keys(e),s=i.length,o=n,c,l,u;for(a===void 0?(c=1,u=e[i[0]]):(c=0,u=a);c<s;c++)l=i[c],u=o(u,e[l],l,e);return u};function li(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function de(t){const e=li(t);return e.length===1?e[0].toString(16):null}function fi(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function sn(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function me(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=sn(e);typeof B.hooks.addPack=="function"&&!a?B.hooks.addPack(t,sn(e)):B.styles[t]=d(d({},B.styles[t]||{}),r),t==="fas"&&me("fa",e)}const{styles:Ot,shims:ci}=B,ra=Object.keys(Ie),ui=ra.reduce((t,e)=>(t[e]=Object.keys(Ie[e]),t),{});let Te=null,ia={},sa={},oa={},la={},fa={};function di(t){return~Qr.indexOf(t)}function mi(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!di(r)?r:null}const ca=()=>{const t=a=>Jt(Ot,(r,i,s)=>(r[s]=Jt(i,a,{}),r),{});ia=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=i}),a)),sa=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=i}),a)),fa=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(o=>{a[o]=i}),a});const e="far"in Ot||y.autoFetchSvg,n=Jt(ci,(a,r)=>{const i=r[0];let s=r[1];const o=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:o}),a},{names:{},unicodes:{}});oa=n.names,la=n.unicodes,Te=Yt(y.styleDefault,{family:y.familyDefault})};$r(t=>{Te=Yt(t.styleDefault,{family:y.familyDefault})});ca();function Le(t,e){return(ia[t]||{})[e]}function gi(t,e){return(sa[t]||{})[e]}function it(t,e){return(fa[t]||{})[e]}function ua(t){return oa[t]||{prefix:null,iconName:null}}function hi(t){const e=la[t],n=Le("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return Te}const da=()=>({prefix:null,iconName:null,rest:[]});function pi(t){let e=M;const n=ra.reduce((a,r)=>(a[r]="".concat(y.cssPrefix,"-").concat(r),a),{});return Vn.forEach(a=>{(t.includes(n[a])||t.some(r=>ui[a].includes(r)))&&(e=a)}),e}function Yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=M}=e,a=Br[n][t];if(n===jt&&!t)return"fad";const r=nn[n][t]||nn[n][a],i=t in B.styles?t:null;return r||i||null}function vi(t){let e=[],n=null;return t.forEach(a=>{const r=mi(y.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function on(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Wt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=se.concat(Lr),i=on(t.filter(g=>r.includes(g))),s=on(t.filter(g=>!se.includes(g))),o=i.filter(g=>(a=g,!Bn.includes(g))),[c=null]=o,l=pi(i),u=d(d({},vi(s)),{},{prefix:Yt(c,{family:l})});return d(d(d({},u),xi({values:t,family:l,styles:Ot,config:y,canonical:u,givenPrefix:a})),bi(n,a,u))}function bi(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?ua(r):{},s=it(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!Ot.far&&Ot.fas&&!y.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const yi=Vn.filter(t=>t!==M||t!==jt),Ai=Object.keys(ie).filter(t=>t!==M).map(t=>Object.keys(ie[t])).flat();function xi(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,o=n===jt,c=e.includes("fa-duotone")||e.includes("fad"),l=s.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(c||l||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&yi.includes(n)&&(Object.keys(i).find(f=>Ai.includes(f))||s.autoFetchSvg)){const f=Sr.get(n).defaultShortPrefixId;a.prefix=f,a.iconName=it(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=Z()||"fas"),a}class wi{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=d(d({},this.definitions[i]||{}),r[i]),me(i,r[i]);const s=Ie[M][i];s&&me(s,r[i]),ca()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:o}=a[r],c=o[2];e[i]||(e[i]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[i][l]=o)}),e[i][s]=o}),e}}let ln=[],dt={};const mt={},_i=Object.keys(mt);function ki(t,e){let{mixoutsTo:n}=e;return ln=t,dt={},Object.keys(mt).forEach(a=>{_i.indexOf(a)===-1&&delete mt[a]}),ln.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{dt[s]||(dt[s]=[]),dt[s].push(i[s])})}a.provides&&a.provides(mt)}),n}function ge(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(dt[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function ct(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(dt[t]||[]).forEach(i=>{i.apply(null,n)})}function $(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,e):void 0}function he(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Z();if(e)return e=it(n,e)||e,rn(ma.definitions,n,e)||rn(B.styles,n,e)}const ma=new wi,Si=()=>{y.autoReplaceSvg=!1,y.observeMutations=!1,ct("noAuto")},Ei={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(ct("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,oi(()=>{Pi({autoReplaceSvgRoot:e}),ct("watch",t)})}},Oi={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:it(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Yt(t[0]);return{prefix:n,iconName:it(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(Vr))){const e=Wt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Z(),iconName:it(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Z();return{prefix:e,iconName:it(e,t)||t}}}},U={noAuto:Si,config:y,dom:Ei,parse:Oi,library:ma,findIconDefinition:he,toHtml:It},Pi=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=O}=t;(Object.keys(B.styles).length>0||y.autoFetchSvg)&&q&&y.autoReplaceSvg&&U.dom.i2svg({node:e})};function Ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>It(n))}}),Object.defineProperty(t,"node",{get:function(){if(!q)return;const n=O.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Ii(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Ne(s)&&n.found&&!a.found){const{width:o,height:c}=n,l={x:o/c/2,y:.5};r.style=Ut(d(d({},i),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ci(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(y.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:s}),children:a}]}]}function Fe(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:o,maskId:c,titleId:l,extra:u,watchable:g=!1}=t,{width:f,height:p}=n.found?n:e,v=Cr.includes(a),k=[y.replacementClass,r?"".concat(y.cssPrefix,"-").concat(r):""].filter(x=>u.classes.indexOf(x)===-1).filter(x=>x!==""||!!x).concat(u.classes).join(" ");let A={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)})};const b=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};g&&(A.attributes[ft]=""),o&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||Et())},children:[o]}),delete A.attributes.title);const w=d(d({},A),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:s,styles:d(d({},b),u.styles)}),{children:h,attributes:m}=n.found&&e.found?$("generateAbstractMask",w)||{children:[],attributes:{}}:$("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=h,w.attributes=m,s?Ci(w):Ii(w)}function fn(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:o=!1}=t,c=d(d(d({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(c[ft]="");const l=d({},s.styles);Ne(r)&&(l.transform=ri({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=Ut(l);u.length>0&&(c.style=u);const g=[];return g.push({tag:"span",attributes:c,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Ni(t){const{content:e,title:n,extra:a}=t,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ut(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Zt}=B;function pe(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Kt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Kt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ti={found:!1,width:512,height:512};function Li(t,e){!Qn&&!y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ve(t,e){let n=e;return e==="fa"&&y.styleDefault!==null&&(e=Z()),new Promise((a,r)=>{if(n==="fa"){const i=ua(t);t=i.iconName||t,e=i.prefix||e}if(t&&e&&Zt[e]&&Zt[e][t]){const i=Zt[e][t];return a(pe(i))}Li(t,e),a(d(d({},Ti),{},{icon:y.showMissingIcons&&t?$("missingIconAbstract")||{}:{}}))})}const cn=()=>{},be=y.measurePerformance&&Ct&&Ct.mark&&Ct.measure?Ct:{mark:cn,measure:cn},wt='FA "6.7.1"',Fi=t=>(be.mark("".concat(wt," ").concat(t," begins")),()=>ga(t)),ga=t=>{be.mark("".concat(wt," ").concat(t," ends")),be.measure("".concat(wt," ").concat(t),"".concat(wt," ").concat(t," begins"),"".concat(wt," ").concat(t," ends"))};var Me={begin:Fi,end:ga};const Ft=()=>{};function un(t){return typeof(t.getAttribute?t.getAttribute(ft):null)=="string"}function Mi(t){const e=t.getAttribute?t.getAttribute(Oe):null,n=t.getAttribute?t.getAttribute(Pe):null;return e&&n}function Ri(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(y.replacementClass)}function Di(){return y.autoReplaceSvg===!0?Mt.replace:Mt[y.autoReplaceSvg]||Mt.replace}function zi(t){return O.createElementNS("http://www.w3.org/2000/svg",t)}function ji(t){return O.createElement(t)}function ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?zi:ji}=e;if(typeof t=="string")return O.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(ha(i,{ceFn:n}))}),a}function Ui(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Mt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(ha(n),e)}),e.getAttribute(ft)===null&&y.keepOriginalSource){let n=O.createComment(Ui(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ce(e).indexOf(y.replacementClass))return Mt.replace(t);const a=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===y.replacementClass||o.match(a)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>It(i)).join(`
`);e.setAttribute(ft,""),e.innerHTML=r}};function dn(t){t()}function pa(t,e){const n=typeof e=="function"?e:Ft;if(t.length===0)n();else{let a=dn;y.mutateApproach===Hr&&(a=J.requestAnimationFrame||dn),a(()=>{const r=Di(),i=Me.begin("mutate");t.map(r),i(),n()})}}let Re=!1;function va(){Re=!0}function ye(){Re=!1}let zt=null;function mn(t){if(!Ze||!y.observeMutations)return;const{treeCallback:e=Ft,nodeCallback:n=Ft,pseudoElementsCallback:a=Ft,observeMutationsRoot:r=O}=t;zt=new Ze(i=>{if(Re)return;const s=Z();ht(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!un(o.addedNodes[0])&&(y.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&y.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&un(o.target)&&~Kr.indexOf(o.attributeName))if(o.attributeName==="class"&&Mi(o.target)){const{prefix:c,iconName:l}=Wt(Ce(o.target));o.target.setAttribute(Oe,c||s),l&&o.target.setAttribute(Pe,l)}else Ri(o.target)&&n(o.target)})}),q&&zt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Yi(){zt&&zt.disconnect()}function Wi(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Hi(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Wt(Ce(t));return r.prefix||(r.prefix=Z()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=gi(r.prefix,t.innerText)||Le(r.prefix,de(t.innerText))),!r.iconName&&y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Gi(t){const e=ht(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return y.autoA11y&&(n?e["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||Et()):(e["aria-hidden"]="true",e.focusable="false")),e}function Bi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Hi(t),i=Gi(t),s=ge("parseNodeAttributes",{},t);let o=e.styleParser?Wi(t):[];return d({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:i}},s)}const{styles:Vi}=B;function ba(t){const e=y.autoReplaceSvg==="nest"?gn(t,{styleParser:!1}):gn(t);return~e.extra.classes.indexOf(Zn)?$("generateLayersText",t,e):$("generateSvgReplacementMutation",t,e)}function Xi(){return[...Or,...se]}function hn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();const n=O.documentElement.classList,a=u=>n.add("".concat(en,"-").concat(u)),r=u=>n.remove("".concat(en,"-").concat(u)),i=y.autoFetchSvg?Xi():Bn.concat(Object.keys(Vi));i.includes("fa")||i.push("fa");const s=[".".concat(Zn,":not([").concat(ft,"])")].concat(i.map(u=>".".concat(u,":not([").concat(ft,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=ht(t.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Me.begin("onTree"),l=o.reduce((u,g)=>{try{const f=ba(g);f&&u.push(f)}catch(f){Qn||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,g)=>{Promise.all(l).then(f=>{pa(f,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(f=>{c(),g(f)})})}function qi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ba(t).then(n=>{n&&pa([n],e)})}function Ki(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:he(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:he(r||{})),t(a,d(d({},n),{},{mask:r}))}}const Qi=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:o=null,classes:c=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:g,iconName:f,icon:p}=t;return Ht(d({type:"icon"},t),()=>(ct("beforeDOMElementCreation",{iconDefinition:t,params:e}),y.autoA11y&&(s?l["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(o||Et()):(l["aria-hidden"]="true",l.focusable="false")),Fe({icons:{main:pe(p),mask:r?pe(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:f,transform:d(d({},G),n),symbol:a,title:s,maskId:i,titleId:o,extra:{attributes:l,styles:u,classes:c}})))};var Ji={mixout(){return{icon:Ki(Qi)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=hn,t.nodeCallback=qi,t}}},provides(t){t.i2svg=function(e){const{node:n=O,callback:a=()=>{}}=e;return hn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:o,symbol:c,mask:l,maskId:u,extra:g}=n;return new Promise((f,p)=>{Promise.all([ve(a,s),l.iconName?ve(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[k,A]=v;f([e,Fe({icons:{main:k,mask:A},prefix:s,iconName:a,transform:o,symbol:c,maskId:u,title:r,titleId:i,extra:g,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const o=Ut(s);o.length>0&&(a.style=o);let c;return Ne(i)&&(c=$("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Zi={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Ht({type:"layer"},()=>{ct("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},$i={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return Ht({type:"counter",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),Ni({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(y.cssPrefix,"-layers-counter"),...a]}})))}}}},ts={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=G,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return Ht({type:"text",content:t},()=>(ct("beforeDOMElementCreation",{content:t,params:e}),fn({content:t,transform:d(d({},G),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(y.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,o=null;if(Hn){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();s=l.width/c,o=l.height/c}return y.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,fn({content:e.innerHTML,width:s,height:o,transform:r,title:a,extra:i,watchable:!0})])}}};const es=new RegExp('"',"ug"),pn=[1105920,1112319],vn=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),kr),Yr),Fr),Ae=Object.keys(vn).reduce((t,e)=>(t[e.toLowerCase()]=vn[e],t),{}),ns=Object.keys(Ae).reduce((t,e)=>{const n=Ae[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function as(t){const e=t.replace(es,""),n=fi(e,0),a=n>=pn[0]&&n<=pn[1],r=e.length===2?e[0]===e[1]:!1;return{value:de(r?e[0]:e),isSecondary:a||r}}function rs(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ae[n]||{})[r]||ns[n]}function bn(t,e){const n="".concat(Wr).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=ht(t.children).filter(f=>f.getAttribute(le)===e)[0],o=J.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),l=c.match(Xr),u=o.getPropertyValue("font-weight"),g=o.getPropertyValue("content");if(s&&!l)return t.removeChild(s),a();if(l&&g!=="none"&&g!==""){const f=o.getPropertyValue("content");let p=rs(c,u);const{value:v,isSecondary:k}=as(f),A=l[0].startsWith("FontAwesome");let b=Le(p,v),w=b;if(A){const h=hi(v);h.iconName&&h.prefix&&(b=h.iconName,p=h.prefix)}if(b&&!k&&(!s||s.getAttribute(Oe)!==p||s.getAttribute(Pe)!==w)){t.setAttribute(n,w),s&&t.removeChild(s);const h=Bi(),{extra:m}=h;m.attributes[le]=e,ve(b,p).then(x=>{const I=Fe(d(d({},h),{},{icons:{main:x,mask:da()},prefix:p,iconName:w,extra:m,watchable:!0})),S=O.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=I.map(C=>It(C)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function is(t){return Promise.all([bn(t,"::before"),bn(t,"::after")])}function ss(t){return t.parentNode!==document.head&&!~Gr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(le)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function yn(t){if(q)return new Promise((e,n)=>{const a=ht(t.querySelectorAll("*")).filter(ss).map(is),r=Me.begin("searchPseudoElements");va(),Promise.all(a).then(()=>{r(),ye(),e()}).catch(()=>{r(),ye(),n()})})}var os={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=yn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=O}=e;y.searchPseudoElements&&yn(n)}}};let An=!1;var ls={mixout(){return{dom:{unwatch(){va(),An=!0}}}},hooks(){return{bootstrap(){mn(ge("mutationObserverCallbacks",{}))},noAuto(){Yi()},watch(t){const{observeMutationsRoot:e}=t;An?ye():mn(ge("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const xn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var fs={mixout(){return{parse:{transform:t=>xn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=xn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(l)},g={transform:"translate(".concat(i/2*-1," -256)")},f={outer:s,inner:u,path:g};return{tag:"g",attributes:d({},f.outer),children:[{tag:"g",attributes:d({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d(d({},n.icon.attributes),f.path)}]}]}}}};const $t={x:0,y:0,width:"100%",height:"100%"};function wn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function cs(t){return t.tag==="g"?t.children:[t]}var us={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Wt(n.split(" ").map(r=>r.trim())):da();return a.prefix||(a.prefix=Z()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:o}=e;const{width:c,icon:l}=r,{width:u,icon:g}=i,f=ai({transform:o,containerWidth:u,iconWidth:c}),p={tag:"rect",attributes:d(d({},$t),{},{fill:"white"})},v=l.children?{children:l.children.map(wn)}:{},k={tag:"g",attributes:d({},f.inner),children:[wn(d({tag:l.tag,attributes:d(d({},l.attributes),f.path)},v))]},A={tag:"g",attributes:d({},f.outer),children:[k]},b="mask-".concat(s||Et()),w="clip-".concat(s||Et()),h={tag:"mask",attributes:d(d({},$t),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,A]},m={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:cs(g)},h]};return n.push(m,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(b,")")},$t)}),{children:n,attributes:a}}}},ds={provides(t){let e=!1;J.matchMedia&&(e=J.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:d(d({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=d(d({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:d(d({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:d(d({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:d(d({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ms={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},gs=[si,Ji,Zi,$i,ts,os,ls,fs,us,ds,ms];ki(gs,{mixoutsTo:U});U.noAuto;U.config;U.library;U.dom;const xe=U.parse;U.findIconDefinition;U.toHtml;const hs=U.icon;U.layer;U.text;U.counter;let ya=!1;try{ya=!0}catch{}function ps(...t){!ya&&console&&typeof console.error=="function"&&console.error(...t)}function _n(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xe.icon)return xe.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function te(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var vs=Va("<svg><!></svg>");function bs(t,e){var k;tt(e,!1);let n=_(e,"tag",8),a=_(e,"props",8),r=_(e,"children",8),i=_(e,"style",8,null),s=_(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(A){return(A==null?void 0:A.reduce((b,w)=>b+(w.tag?c(w):w),""))||""}function c({tag:A,props:b,children:w}){const h=Object.keys(b).map(m=>`${m}="${b[m]}"`).join(" ");return`<${A} ${h}>${o(w)}</${A}>`}const l=o(r()),u=(k=a())!=null&&k.style?`${a().style}${i()||""}`:i(),g={...a(),style:u};nt();var f=vs();let p;var v=F(f);ae(v,()=>l,!0,!1),T(f),Xa(f,A=>s(A),()=>s()),j(()=>p=re(f,p,{...g})),E(t,f),et()}function Aa(t,e){const n=Ge(e,["children","$$slots","$$events","$$legacy"]),a=Ge(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);tt(e,!1),_(e,"border",8,!1);let r=_(e,"mask",8,null),i=_(e,"maskId",8,null);_(e,"fixedWidth",8,!1),_(e,"inverse",8,!1),_(e,"flip",8,!1);let s=_(e,"icon",8,null);_(e,"listItem",8,!1),_(e,"pull",8,null),_(e,"pulse",8,!1),_(e,"rotation",8,null),_(e,"size",8,null),_(e,"spin",8,!1),_(e,"spinPulse",8,!1),_(e,"spinReverse",8,!1),_(e,"beat",8,!1),_(e,"fade",8,!1),_(e,"beatFade",8,!1),_(e,"bounce",8,!1),_(e,"shake",8,!1);let o=_(e,"symbol",8,!1),c=_(e,"title",8,""),l=_(e,"titleId",8,null),u=_(e,"transform",8,null);_(e,"swapOpacity",8,!1);let g=_(e,"ref",12,null),f=_(e,"style",8,null);const p=_n(s()),v=te("classes",[...ur(n),...(n.class||"").split(" ")]),k=te("transform",typeof u()=="string"?xe.transform(u()):u()),A=te("mask",_n(r())),b=hs(p,{...v,...k,...A,symbol:o(),title:c(),titleId:l(),maskId:i()});let w=Cn(null);if(!b)ps("Could not find icon",p);else{const{abstract:I}=b;za(w,jn((S,C,N)=>({tag:S,props:C,children:N}),I[0],a))}nt();var h=st(),m=W(h);{var x=I=>{bs(I,qa(()=>z(w),{get style(){return f()},get ref(){return g()},set ref(S){g(S)},$$legacy:!0}))};H(m,I=>{z(w)&&I(x)})}E(t,h),et()}var ys=R('<li class="link svelte-p5gp3m"><a class="svelte-p5gp3m"><!> </a></li>');function As(t,e){tt(e,!1);let n=_(e,"link",8);const a=n().privacy||n().external?[n().privacy?"noopener noreferrer":void 0,n().external?"external":void 0].filter(Boolean).join(" "):void 0;nt();var r=st(),i=W(r);{var s=o=>{var c=ys(),l=F(c);P(l,"rel",a);var u=F(l);Aa(u,{get icon(){return n().icon},style:"width: 1em;"});var g=L(u);T(l),T(c),j(()=>{P(l,"href",n().url),P(l,"target",n().target?`_${n().target}`:void 0),P(l,"itemprop",n().sameAs?"sameAs":void 0),ne(g,` ${n().name??""}`)}),E(o,c)};H(i,o=>{n().display!==!1&&o(s)})}E(t,r),et()}var xs=R('<section class="links"><ul class="svelte-37tmq0"></ul></section>');function ws(t,e){let n=_(e,"links",8);var a=xs(),r=F(a);lt(r,5,n,ot,(i,s)=>{As(i,{get link(){return z(s)}})}),T(r),T(a),E(t,a)}const Tt={sources:{avif:""+new URL("../assets/avatar.BRk7bXGH.avif",import.meta.url).href+" 300w, "+new URL("../assets/avatar.D02hOIcw.avif",import.meta.url).href+" 600w",webp:""+new URL("../assets/avatar.VIyhnhll.webp",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BPKBrzJY.webp",import.meta.url).href+" 600w",png:""+new URL("../assets/avatar.M-STc7G1.png",import.meta.url).href+" 300w, "+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href+" 600w"},img:{src:""+new URL("../assets/avatar.BOlEQGLx.png",import.meta.url).href,w:600,h:600}};var _s=R('<img class="avatar svelte-yvfll6" width="100px" height="100px">'),ks=R("<source>"),Ss=R('<picture><!> <img class="avatar svelte-yvfll6" width="100px" height="100px"></picture>'),Es=R('<header itemscope="" itemtype="http://schema.org/Person" class="user-info svelte-yvfll6"><!> <h1 itemprop="name" class="svelte-yvfll6"><!></h1> <p itemprop="description" class="svelte-yvfll6"><!></p></header>');function Os(t,e){tt(e,!1);let n=_(e,"user",8),a=_(e,"i18n",8);nt();var r=Es(),i=F(r);{var s=f=>{var p=_s();j(v=>{P(p,"src",Tt.img.src),P(p,"alt",v)},[()=>a().avatar.alt.replace("{{userName}}",n().name)],Rt),E(f,p)},o=f=>{var p=Ss(),v=F(p);lt(v,1,()=>Object.entries(Tt.sources),ot,(A,b)=>{let w=()=>z(b)[0],h=()=>z(b)[1];var m=ks();j(()=>{P(m,"srcset",h()),P(m,"type","image/"+w())}),E(A,m)});var k=L(v,2);T(p),j(A=>{P(k,"src",Tt.img.src),P(k,"alt",A)},[()=>a().avatar.alt.replace("{{userName}}",n().name)],Rt),E(f,p)};H(i,f=>{typeof Tt=="string"?f(s):f(o,!1)})}var c=L(i,2),l=F(c);ae(l,()=>n().name,!1,!1),T(c);var u=L(c,2),g=F(u);ae(g,()=>n().bio,!1,!1),T(u),T(r),E(t,r),et()}var Ps=R('<footer class="credits"><p class="svelte-ss06mj"> <a href="https://linksharer.js.org?utm_source=generated_website&amp;utm_medium=credits&amp;utm_campaign=project_usage&amp;utm_content=footer" rel="external" class="svelte-ss06mj">LinkSharer</a> </p></footer>');function Is(t,e){tt(e,!1);let n=_(e,"showCredits",8),a=_(e,"i18n",8),r=_(e,"version",8);nt();var i=st(),s=W(i);{var o=c=>{var l=Ps(),u=F(l),g=F(u),f=L(g,2);T(u),T(l),j(()=>{ne(g,`${a().credits??""} `),ne(f,` v${r()??""}`)}),E(c,l)};H(s,c=>{n()&&c(o)})}E(t,i),et()}var Cs=R('<li class="social svelte-1fhc3ff"><a itemprop="sameAs" rel="noopener noreferrer" class="svelte-1fhc3ff"><span class="svelte-1fhc3ff"><!></span></a></li>');function Ns(t,e){tt(e,!1);let n=_(e,"social",8);nt();var a=Cs(),r=F(a),i=F(r),s=F(i);Aa(s,{get icon(){return n().icon}}),T(i),T(r),T(a),j(()=>{P(r,"href",n().url),P(r,"target",`_${n().target??"self"}`),P(r,"aria-label",n().name)}),E(t,a),et()}var Ts=R('<article class="socials"><ul class="svelte-yffzw0"></ul></article>');function Ls(t,e){let n=_(e,"socials",8);var a=Ts(),r=F(a);lt(r,5,n,ot,(i,s)=>{Ns(i,{get social(){return z(s)}})}),T(r),T(a),E(t,a)}var Fs=Se("<script><\/script><!---->",1),Ms=R('<meta name="google-site-verification">'),Rs=R("<!> <!>",1),Ds=Se('<script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script> <script async data-full-urls="true" src="https://scripts.simpleanalyticscdn.com/auto-events.js"><\/script>',1),zs=Se("<script><\/script><!---->",1),js=R('<!> <!> <div class="linksharer svelte-9f1c5"><main class="svelte-9f1c5"><!> <!> <!></main> <!></div> <!>',1);function Ks(t,e){var w;tt(e,!1);let n=_(e,"data",8),a={head:[],body:[]};(w=n().config.scripts)==null||w.forEach(h=>{const{head:m,...x}=h;a[m?"head":"body"].push(x)}),nt();var r=js();Tn(h=>{var m=Rs(),x=W(m);{var I=N=>{var Y=st(),at=W(Y);lt(at,1,()=>a.head,ot,(pt,Gt)=>{var vt=Fs(),ut=W(vt);let bt;var Bt=L(ut);j(()=>bt=re(ut,bt,{...z(Gt)},"svelte-9f1c5")),We(ut),E(pt,vt)}),E(N,Y)};H(x,N=>{a.head&&N(I)})}var S=L(x,2);{var C=N=>{var Y=Ms();j(()=>P(Y,"content",n().config.googleSiteVerification)),E(N,Y)};H(S,N=>{n().config.googleSiteVerification&&N(C)})}E(h,m)});var i=W(r);cr(i,{get seo(){return n().config.seo}});var s=L(i,2);{var o=h=>{var m=Ds();ja(2),E(h,m)};H(s,h=>{n().config.analytics&&h(o)})}var c=L(s,2),l=F(c),u=F(l);Os(u,{get user(){return n().config.user},get i18n(){return n().config.i18n}});var g=L(u,2);ws(g,{get links(){return n().config.links}});var f=L(g,2);{var p=h=>{Ls(h,{get socials(){return n().config.socials}})};H(f,h=>{n().config.socials&&h(p)})}T(l);var v=L(l,2);const k=Rt(()=>n().config.credits||!0);Is(v,{get showCredits(){return z(k)},get i18n(){return n().config.i18n},get version(){return n().version}}),T(c);var A=L(c,2);{var b=h=>{var m=st(),x=W(m);lt(x,1,()=>a.body,ot,(I,S)=>{var C=zs(),N=W(C);let Y;L(N),j(()=>Y=re(N,Y,{...z(S)},"svelte-9f1c5")),We(N),E(I,C)}),E(h,m)};H(A,h=>{h(b)})}E(t,r),et()}export{Ks as component};
