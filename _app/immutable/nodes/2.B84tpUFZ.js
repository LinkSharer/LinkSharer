import{b as ce,e as Me,a as k,c as U,t as L,f as ae}from"../chunks/disclose-version.0MYY2HLa.js";import{a3 as xe,h as we,k as C,M as W,J as ee,G as $e,aj as Ae,K as Be,L as ve,N as X,l as q,H as Ee,i as re,I as je,ar as Q,a7 as se,C as ue,as as te,at as _e,au as ie,av as qe,a2 as Ye,y as de,aw as ze,ai as Fe,ax as Ge,j as Ne,ay as Te,a4 as Ie,af as Ke,az as Pe,ac as Ce,ag as Ue,ae as Ve,aA as We,F as pe,aB as Je,p as F,o as G,m as S,v as N,t as R,g as H,aC as Xe,q as O,s as T,aD as Oe,W as Qe}from"../chunks/runtime.CBes1l5a.js";import{i as Ze,d as he,e as ea,n as aa,f as ra,g as Le,a as Re,r as ge}from"../chunks/store.Bgl2KjNR.js";import{p as D,i as $}from"../chunks/props.Cn4PaItZ.js";import{i as K}from"../chunks/lifecycle.D45SAfiu.js";let Z=null;function Y(r,a){return a}function sa(r,a,e,t){for(var s=[],i=a.length,n=0;n<i;n++)ze(a[n].e,s,!0);var c=i>0&&s.length===0&&e!==null;if(c){var u=e.parentNode;Fe(u),u.append(e),t.clear(),x(r,a[0].prev,a[i-1].next)}Ge(s,()=>{for(var p=0;p<i;p++){var g=a[p];c||(t.delete(g.k),x(r,g.prev,g.next)),Ne(g.e,!c)}})}function z(r,a,e,t,s,i=null){var n=r,c={flags:a,items:new Map,first:null},u=(a&Te)!==0;if(u){var p=r;n=C?W(Ie(p)):p.appendChild(xe())}C&&ee();var g=null,v=!1;we(()=>{var m=e(),d=$e(m)?m:m==null?[]:Ae(m),_=d.length;if(v&&_===0)return;v=_===0;let b=!1;if(C){var y=n.data===Be;y!==(_===0)&&(n=ve(),W(n),X(!1),b=!0)}if(C){for(var o=null,f,l=0;l<_;l++){if(q.nodeType===8&&q.data===Ke){n=q,b=!0,X(!1);break}var h=d[l],w=t(h,l);f=Se(q,c,o,null,h,w,l,s,a),c.items.set(w,f),o=f}_>0&&W(ve())}C||ta(d,c,n,s,a,t),i!==null&&(_===0?g?Ee(g):g=re(()=>i(n)):g!==null&&je(g,()=>{g=null})),b&&X(!0),e()}),C&&(n=q)}function ta(r,a,e,t,s,i){var J,ne,le,oe;var n=(s&Pe)!==0,c=(s&(te|ie))!==0,u=r.length,p=a.items,g=a.first,v=g,m,d=null,_,b=[],y=[],o,f,l,h;if(n)for(h=0;h<u;h+=1)o=r[h],f=i(o,h),l=p.get(f),l!==void 0&&((J=l.a)==null||J.measure(),(_??(_=new Set)).add(l));for(h=0;h<u;h+=1){if(o=r[h],f=i(o,h),l=p.get(f),l===void 0){var w=v?v.e.nodes_start:e;d=Se(w,a,d,d===null?a.first:d.next,o,f,h,t,s),p.set(f,d),b=[],y=[],v=d.next;continue}if(c&&ia(l,o,h,s),l.e.f&Q&&(Ee(l.e),n&&((ne=l.a)==null||ne.unfix(),(_??(_=new Set)).delete(l))),l!==v){if(m!==void 0&&m.has(l)){if(b.length<y.length){var I=y[0],E;d=I.prev;var B=b[0],P=b[b.length-1];for(E=0;E<b.length;E+=1)me(b[E],I,e);for(E=0;E<y.length;E+=1)m.delete(y[E]);x(a,B.prev,P.next),x(a,d,B),x(a,P,I),v=I,d=P,h-=1,b=[],y=[]}else m.delete(l),me(l,v,e),x(a,l.prev,l.next),x(a,l,d===null?a.first:d.next),x(a,d,l),d=l;continue}for(b=[],y=[];v!==null&&v.k!==f;)v.e.f&Q||(m??(m=new Set)).add(v),y.push(v),v=v.next;if(v===null)continue;l=v}b.push(l),d=l,v=l.next}if(v!==null||m!==void 0){for(var M=m===void 0?[]:Ae(m);v!==null;)v.e.f&Q||M.push(v),v=v.next;var j=M.length;if(j>0){var V=s&Te&&u===0?e:null;if(n){for(h=0;h<j;h+=1)(le=M[h].a)==null||le.measure();for(h=0;h<j;h+=1)(oe=M[h].a)==null||oe.fix()}sa(a,M,V,p)}}n&&se(()=>{var fe;if(_!==void 0)for(l of _)(fe=l.a)==null||fe.apply()}),ue.first=a.first&&a.first.e,ue.last=d&&d.e}function ia(r,a,e,t){t&te&&_e(r.v,a),t&ie?_e(r.i,e):r.i=e}function Se(r,a,e,t,s,i,n,c,u){var p=Z;try{var g=(u&te)!==0,v=(u&qe)===0,m=g?v?Ye(s):de(s):s,d=u&ie?de(n):n,_={i:d,v:m,k:i,a:null,e:null,prev:e,next:t};return Z=_,_.e=re(()=>c(r,m,d),C),_.e.prev=e&&e.e,_.e.next=t&&t.e,e===null?a.first=_:(e.next=_,e.e.next=_.e),t!==null&&(t.prev=_,t.e.prev=_.e),_}finally{Z=p}}function me(r,a,e){for(var t=r.next?r.next.e.nodes_start:e,s=a?a.e.nodes_start:e,i=r.e.nodes_start;i!==t;){var n=Ce(i);s.before(i),i=n}}function x(r,a,e){a===null?r.first=e:(a.next=e,a.e.next=e&&e.e),e!==null&&(e.prev=a,e.e.prev=a&&a.e)}function ye(r,a,e,t,s){var i=r,n="",c;we(()=>{if(n===(n=a()??"")){C&&ee();return}c!==void 0&&(Ne(c),c=void 0),n!==""&&(c=re(()=>{if(C){q.data;for(var u=ee(),p=u;u!==null&&(u.nodeType!==8||u.data!=="");)p=u,u=Ce(u);if(u===null)throw Ue(),Ve;ce(q,p),i=W(u);return}var g=n+"",v=Me(g);ce(Ie(v),v.lastChild),i.before(v)}))})}function na(r,a){if(a){const e=document.body;r.autofocus=!0,se(()=>{document.activeElement===e&&r.focus()})}}function A(r,a,e,t){var s=r.__attributes??(r.__attributes={});C&&(s[a]=r.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&r.nodeName==="LINK")||s[a]!==(s[a]=e)&&(a==="style"&&"__styles"in r&&(r.__styles={}),a==="loading"&&(r[We]=e),e==null?r.removeAttribute(a):typeof e!="string"&&De(r).includes(a)?r[a]=e:r.setAttribute(a,e))}function ke(r,a,e,t,s=!1,i=!1,n=!1){var c=a||{},u=r.tagName==="OPTION";for(var p in a)p in e||(e[p]=null);e.class=e.class?e.class+" "+t:t;var g=De(r),v=r.__attributes??(r.__attributes={}),m=[];for(const o in e){let f=e[o];if(u&&o==="value"&&f==null){r.value=r.__value="",c[o]=f;continue}var d=c[o];if(f!==d){c[o]=f;var _=o[0]+o[1];if(_!=="$$"){if(_==="on"){const l={},h="$$"+o;let w=o.slice(2);var b=ra(w);if(Ze(w)&&(w=w.slice(0,-7),l.capture=!0),!b&&d){if(f!=null)continue;r.removeEventListener(w,c[h],l),c[h]=null}if(f!=null)if(b)r[`__${w}`]=f,ea([w]);else{let I=function(E){c[o].call(this,E)};a?c[h]=he(w,r,I,l):m.push([o,f,()=>c[h]=he(w,r,I,l)])}}else if(o==="style"&&f!=null)r.style.cssText=f+"";else if(o==="autofocus")na(r,!!f);else if(o==="__value"||o==="value"&&f!=null)r.value=r[o]=r.__value=f;else{var y=o;s||(y=aa(y)),f==null&&!i?(v[o]=null,r.removeAttribute(o)):g.includes(y)&&(i||typeof f!="string")?r[y]=f:typeof f!="function"&&(C&&(y==="src"||y==="href"||y==="srcset")||A(r,y,f))}o==="style"&&"__styles"in r&&(r.__styles={})}}}return a||se(()=>{if(r.isConnected)for(const[o,f,l]of m)c[o]===f&&l()}),c}var be=new Map;function De(r){var a=be.get(r.nodeName);if(a)return a;be.set(r.nodeName,a=[]);for(var e,t=pe(r),s=Element.prototype;s!==t;){e=Je(t);for(var i in e)e[i].set&&a.push(i);t=pe(t)}return a}function He(r,a){var e=r.__className,t=la(a);C&&r.className===t?r.__className=t:(e!==t||C&&r.className!==t)&&(a==null?r.removeAttribute("class"):r.className=t,r.__className=t)}function la(r){return r??""}var oa=L('<link rel="canonical">'),fa=L("<meta>"),ca=L("<meta>"),va=L('<meta name="description"> <!> <!> <!>',1);function ua(r,a){F(a,!1);let e=D(a,"seo",8);K(),Le(t=>{var s=va(),i=S(s),n=N(i,2);$(n,()=>e().canonical,p=>{var g=oa();R(()=>A(g,"href",e().canonical)),k(p,g)});var c=N(n,2);$(c,()=>e().og,p=>{var g=U(),v=S(g);z(v,1,()=>Object.entries(e().og),Y,(m,d)=>{var _=fa();R(()=>{A(_,"property",`og:${H(d)[0]??""}`),A(_,"content",H(d)[1])}),k(m,_)}),k(p,g)});var u=N(c,2);$(u,()=>e().twitter,p=>{var g=U(),v=S(g);z(v,1,()=>Object.entries(e().twitter),Y,(m,d)=>{var _=ca();R(()=>{A(_,"property",`og:${H(d)[0]??""}`),A(_,"content",H(d)[1])}),k(m,_)}),k(p,g)}),R(()=>{Xe.title=e().title,A(i,"content",e().description)}),k(t,s)}),G()}var _a=L('<li class="link svelte-p5gp3m"><a class="svelte-p5gp3m"><i></i> </a></li>');function da(r,a){F(a,!1);let e=D(a,"link",8);const t=[e().privacy?"noopener noreferrer":void 0,e().external?"external":void 0].filter(Boolean).join(" ");K();var s=_a(),i=O(s);A(i,"rel",t);var n=O(i),c=N(n);T(i),T(s),R(()=>{A(i,"href",e().url),A(i,"target",`_${e().target??"self"??""}`),A(i,"itemprop",e().sameAs?"sameAs":void 0),He(n,e().icon),Re(c,` ${e().name??""}`)}),k(r,s),G()}var pa=L('<section class="links"><ul class="svelte-37tmq0"></ul></section>');function ha(r,a){let e=D(a,"links",8);var t=pa(),s=O(t);z(s,5,e,Y,(i,n)=>{da(i,{get link(){return H(n)}})}),T(s),T(t),k(r,t)}var ga=L('<header itemscope="" itemtype="http://schema.org/Person" class="user-info svelte-1y9kfsu"><img width="100px" height="100px" class="svelte-1y9kfsu"> <h1 itemprop="name" class="svelte-1y9kfsu"><!></h1> <p itemprop="description" class="svelte-1y9kfsu"><!></p></header>');function ma(r,a){F(a,!1);let e=D(a,"user",8),t=D(a,"i18n",8);K();var s=ga(),i=O(s);R(()=>A(i,"alt",t().avatar.alt.replace("{{userName}}",e().name)));var n=N(i,2),c=O(n);ye(c,()=>e().name),T(n);var u=N(n,2),p=O(u);ye(p,()=>e().bio),T(u),T(s),R(()=>A(i,"src",e().avatar)),k(r,s),G()}var ya=L('<footer class="credits"><p class="svelte-ss06mj"> <a href="https://linksharer.js.org?utm_source=generated_website&amp;utm_medium=credits&amp;utm_campaign=project_usage&amp;utm_content=footer" rel="external" class="svelte-ss06mj">LinkSharer</a></p></footer>');function ka(r,a){F(a,!1);let e=D(a,"showCredits",8),t=D(a,"i18n",8);K();var s=U(),i=S(s);$(i,e,n=>{var c=ya(),u=O(c),p=O(u);Oe(),T(u),T(c),R(()=>Re(p,`${t().credits??""} `)),k(n,c)}),k(r,s),G()}var ba=L('<li class="social svelte-nll9bd"><a itemprop="sameAs" rel="noopener noreferrer" class="svelte-nll9bd"><i></i></a></li>');function wa(r,a){F(a,!1);let e=D(a,"social",8);K();var t=ba(),s=O(t),i=O(s);T(s),T(t),R(()=>{A(s,"href",e().url),A(s,"target",`_${e().target??"self"??""}`),A(s,"aria-label",e().name),He(i,`${e().icon??""} svelte-nll9bd`)}),k(r,t),G()}var Aa=L('<article class="socials"><ul class="svelte-yffzw0"></ul></article>');function Ea(r,a){let e=D(a,"socials",8);var t=Aa(),s=O(t);z(s,5,e,Y,(i,n)=>{wa(i,{get social(){return H(n)}})}),T(s),T(t),k(r,t)}var Na=ae("<script><\/script><!---->",1),Ta=L('<link rel="stylesheet"> <!>',1),Ia=ae('<script async defer="" src="https://scripts.simpleanalyticscdn.com/latest.js"><\/script> <noscript></noscript>',1),Ca=ae("<script><\/script><!---->",1),Oa=L('<!> <!> <div class="linksharer svelte-9f1c5"><main class="svelte-9f1c5"><!> <!> <!></main> <!></div> <!>',1);function Ma(r,a){var y;F(a,!1);let e=D(a,"data",8);const t=e().config.template.startsWith("@")?`https://linksharer.github.io/Templates/templates/${e().config.template.slice(1)}.css`:e().config.template;let s={head:[],body:[]};(y=e().config.scripts)==null||y.forEach(o=>{const{head:f,...l}=o;s[f?"head":"body"].push(l)}),K();var i=Oa();Le(o=>{var f=Ta(),l=S(f);A(l,"href",t);var h=N(l,2);$(h,()=>s.head,w=>{var I=U(),E=S(I);z(E,1,()=>s.head,Y,(B,P)=>{var M=Na(),j=S(M);let V;var J=N(j);R(()=>V=ke(j,V,{...H(P)},"svelte-9f1c5")),ge(j),k(B,M)}),k(w,I)}),k(o,f)});var n=S(i);ua(n,{get seo(){return e().config.seo}});var c=N(n,2);$(c,()=>e().config.analytics,o=>{var f=Ia();Oe(2),k(o,f)});var u=N(c,2),p=O(u),g=O(p);ma(g,{get user(){return e().config.user},get i18n(){return e().config.i18n}});var v=N(g,2);ha(v,{get links(){return e().config.links}});var m=N(v,2);$(m,()=>e().config.socials,o=>{Ea(o,{get socials(){return e().config.socials}})}),T(p);var d=N(p,2),_=Qe(()=>e().config.credits||!0);ka(d,{get showCredits(){return H(_)},get i18n(){return e().config.i18n}}),T(u);var b=N(u,2);$(b,()=>s.body,o=>{var f=U(),l=S(f);z(l,1,()=>s.body,Y,(h,w)=>{var I=Ca(),E=S(I);let B;N(E),R(()=>B=ke(E,B,{...H(w)},"svelte-9f1c5")),ge(E),k(h,I)}),k(o,f)}),k(r,i),G()}export{Ma as component};