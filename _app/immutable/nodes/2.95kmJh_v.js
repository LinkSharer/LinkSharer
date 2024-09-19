import{s as T,n as C,x as V,y as J,z as re}from"../chunks/scheduler.RZtQFeRP.js";import{S as H,i as M,e as k,y as se,c as w,g as m,o as c,k as v,s as S,b as ae,d as A,h as j,f as ie,j as I,l as oe,t as E,q as D,n as F,a as L,z as le,u as B,v as N,w as O,x as q,H as Q,A as W,m as X,B as ce}from"../chunks/index.CX37V9NE.js";function y(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function fe(a,e){const n={},t={},l={$$scope:1};let s=a.length;for(;s--;){const f=a[s],r=e[s];if(r){for(const i in f)i in r||(t[i]=1);for(const i in r)l[i]||(n[i]=r[i],l[i]=1);a[s]=r}else for(const i in f)l[i]=1}for(const f in t)f in n||(n[f]=void 0);return n}function ue(a){return typeof a=="object"&&a!==null?a:{}}function he(a){let e,n;return document.title=e=a[0],{c(){n=k("meta"),this.h()},l(t){const l=se("svelte-1lvwc9d",document.head);n=w(l,"META",{name:!0,content:!0}),l.forEach(m),this.h()},h(){c(n,"name","description"),c(n,"content",a[1])},m(t,l){v(document.head,n)},p(t,[l]){l&1&&e!==(e=t[0])&&(document.title=e),l&2&&c(n,"content",t[1])},i:C,o:C,d(t){m(n)}}}function me(a,e,n){let{title:t}=e,{description:l}=e;return a.$$set=s=>{"title"in s&&n(0,t=s.title),"description"in s&&n(1,l=s.description)},[t,l]}class ge extends H{constructor(e){super(),M(this,e,me,he,T,{title:0,description:1})}}function _e(a){let e,n,t,l,s,f=a[0].name+"",r,i,o,u;return{c(){e=k("a"),n=k("li"),t=k("i"),s=S(),r=ae(f),this.h()},l(_){e=w(_,"A",{href:!0,target:!0,itemprop:!0,rel:!0,class:!0});var p=A(e);n=w(p,"LI",{class:!0});var g=A(n);t=w(g,"I",{class:!0}),A(t).forEach(m),s=j(g),r=ie(g,f),g.forEach(m),p.forEach(m),this.h()},h(){c(t,"class",l=a[0].icon),c(n,"class","svelte-1tebuew"),c(e,"href",i=a[0].url),c(e,"target",o="_"+(a[0].target??"self")),c(e,"itemprop",u=a[0].sameAs?"sameAs":void 0),c(e,"rel",a[1]),c(e,"class","svelte-1tebuew")},m(_,p){I(_,e,p),v(e,n),v(n,t),v(n,s),v(n,r)},p(_,[p]){p&1&&l!==(l=_[0].icon)&&c(t,"class",l),p&1&&f!==(f=_[0].name+"")&&oe(r,f),p&1&&i!==(i=_[0].url)&&c(e,"href",i),p&1&&o!==(o="_"+(_[0].target??"self"))&&c(e,"target",o),p&1&&u!==(u=_[0].sameAs?"sameAs":void 0)&&c(e,"itemprop",u)},i:C,o:C,d(_){_&&m(e)}}}function de(a,e,n){let{link:t}=e;const l=[t.privacy?"noopener noreferrer":void 0,t.external?"external":void 0].filter(Boolean).join(" ");return a.$$set=s=>{"link"in s&&n(0,t=s.link)},[t,l]}class pe extends H{constructor(e){super(),M(this,e,de,_e,T,{link:0})}}function Y(a,e,n){const t=a.slice();return t[1]=e[n],t}function Z(a){let e,n;return e=new pe({props:{link:a[1]}}),{c(){B(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){O(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.link=t[1]),e.$set(s)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function $e(a){let e,n,t,l=y(a[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=Z(Y(a,l,r));const f=r=>L(s[r],1,1,()=>{s[r]=null});return{c(){e=k("section"),n=k("ul");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=w(r,"SECTION",{});var i=A(e);n=w(i,"UL",{class:!0});var o=A(n);for(let u=0;u<s.length;u+=1)s[u].l(o);o.forEach(m),i.forEach(m),this.h()},h(){c(n,"class","svelte-1bz3yxz")},m(r,i){I(r,e,i),v(e,n);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(n,null);t=!0},p(r,[i]){if(i&1){l=y(r[0]);let o;for(o=0;o<l.length;o+=1){const u=Y(r,l,o);s[o]?(s[o].p(u,i),E(s[o],1)):(s[o]=Z(u),s[o].c(),E(s[o],1),s[o].m(n,null))}for(D(),o=l.length;o<s.length;o+=1)f(o);F()}},i(r){if(!t){for(let i=0;i<l.length;i+=1)E(s[i]);t=!0}},o(r){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)L(s[i]);t=!1},d(r){r&&m(e),le(s,r)}}}function ve(a,e,n){let{links:t}=e;return a.$$set=l=>{"links"in l&&n(0,t=l.links)},[t]}class ke extends H{constructor(e){super(),M(this,e,ve,$e,T,{links:0})}}function we(a){let e,n,t,l,s,f,r,i=a[0].name+"",o,u,_,p=a[0].bio+"";return{c(){e=k("header"),n=k("img"),s=S(),f=k("h1"),r=new Q(!1),o=S(),u=k("p"),_=new Q(!1),this.h()},l(g){e=w(g,"HEADER",{itemscope:!0,itemtype:!0,class:!0});var $=A(e);n=w($,"IMG",{src:!0,alt:!0,class:!0}),s=j($),f=w($,"H1",{itemprop:!0,class:!0});var P=A(f);r=W(P,!1),P.forEach(m),o=j($),u=w($,"P",{itemprop:!0,class:!0});var R=A(u);_=W(R,!1),R.forEach(m),$.forEach(m),this.h()},h(){V(n.src,t=a[0].avatar)||c(n,"src",t),c(n,"alt",l=a[0].name+"'s Avatar"),c(n,"class","svelte-1f0lgjz"),r.a=null,c(f,"itemprop","name"),c(f,"class","svelte-1f0lgjz"),_.a=null,c(u,"itemprop","description"),c(u,"class","svelte-1f0lgjz"),c(e,"itemscope",""),c(e,"itemtype","http://schema.org/Person"),c(e,"class","svelte-1f0lgjz")},m(g,$){I(g,e,$),v(e,n),v(e,s),v(e,f),r.m(i,f),v(e,o),v(e,u),_.m(p,u)},p(g,[$]){$&1&&!V(n.src,t=g[0].avatar)&&c(n,"src",t),$&1&&l!==(l=g[0].name+"'s Avatar")&&c(n,"alt",l),$&1&&i!==(i=g[0].name+"")&&r.p(i),$&1&&p!==(p=g[0].bio+"")&&_.p(p)},i:C,o:C,d(g){g&&m(e)}}}function Ee(a,e,n){let{user:t}=e;return a.$$set=l=>{"user"in l&&n(0,t=l.user)},[t]}class be extends H{constructor(e){super(),M(this,e,Ee,we,T,{user:0})}}function x(a){let e,n=`<p class="svelte-r4xsmy">This website was made with
			<a href="https://github.com/LinkSharer/LinkSharer" rel="noopener noreferrer external">LinkSharer</a></p>`;return{c(){e=k("footer"),e.innerHTML=n},l(t){e=w(t,"FOOTER",{"data-svelte-h":!0}),ce(e)!=="svelte-snuf4k"&&(e.innerHTML=n)},m(t,l){I(t,e,l)},d(t){t&&m(e)}}}function Ae(a){let e,n=a[0]&&x();return{c(){n&&n.c(),e=X()},l(t){n&&n.l(t),e=X()},m(t,l){n&&n.m(t,l),I(t,e,l)},p(t,[l]){t[0]?n||(n=x(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:C,o:C,d(t){t&&m(e),n&&n.d(t)}}}function Le(a,e,n){let{showCredits:t}=e;return a.$$set=l=>{"showCredits"in l&&n(0,t=l.showCredits)},[t]}class Ie extends H{constructor(e){super(),M(this,e,Le,Ae,T,{showCredits:0})}}function Ce(a){let e,n,t,l,s,f;return{c(){e=k("a"),n=k("li"),t=k("i"),this.h()},l(r){e=w(r,"A",{href:!0,target:!0,itemprop:!0,rel:!0,class:!0});var i=A(e);n=w(i,"LI",{class:!0});var o=A(n);t=w(o,"I",{class:!0}),A(t).forEach(m),o.forEach(m),i.forEach(m),this.h()},h(){c(t,"class",l=J(a[0].icon)+" svelte-rt4r5a"),c(n,"class","svelte-rt4r5a"),c(e,"href",s=a[0].url),c(e,"target",f="_"+(a[0].target??"self")),c(e,"itemprop","sameAs"),c(e,"rel","noopener noreferrer"),c(e,"class","svelte-rt4r5a")},m(r,i){I(r,e,i),v(e,n),v(n,t)},p(r,[i]){i&1&&l!==(l=J(r[0].icon)+" svelte-rt4r5a")&&c(t,"class",l),i&1&&s!==(s=r[0].url)&&c(e,"href",s),i&1&&f!==(f="_"+(r[0].target??"self"))&&c(e,"target",f)},i:C,o:C,d(r){r&&m(e)}}}function ze(a,e,n){let{social:t}=e;return a.$$set=l=>{"social"in l&&n(0,t=l.social)},[t]}class Se extends H{constructor(e){super(),M(this,e,ze,Ce,T,{social:0})}}function ee(a,e,n){const t=a.slice();return t[1]=e[n],t}function te(a){let e,n;return e=new Se({props:{social:a[1]}}),{c(){B(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){O(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.social=t[1]),e.$set(s)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function je(a){let e,n,t,l=y(a[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=te(ee(a,l,r));const f=r=>L(s[r],1,1,()=>{s[r]=null});return{c(){e=k("article"),n=k("ul");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=w(r,"ARTICLE",{});var i=A(e);n=w(i,"UL",{class:!0});var o=A(n);for(let u=0;u<s.length;u+=1)s[u].l(o);o.forEach(m),i.forEach(m),this.h()},h(){c(n,"class","svelte-yffzw0")},m(r,i){I(r,e,i),v(e,n);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(n,null);t=!0},p(r,[i]){if(i&1){l=y(r[0]);let o;for(o=0;o<l.length;o+=1){const u=ee(r,l,o);s[o]?(s[o].p(u,i),E(s[o],1)):(s[o]=te(u),s[o].c(),E(s[o],1),s[o].m(n,null))}for(D(),o=l.length;o<s.length;o+=1)f(o);F()}},i(r){if(!t){for(let i=0;i<l.length;i+=1)E(s[i]);t=!0}},o(r){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)L(s[i]);t=!1},d(r){r&&m(e),le(s,r)}}}function Te(a,e,n){let{socials:t}=e;return a.$$set=l=>{"socials"in l&&n(0,t=l.socials)},[t]}class He extends H{constructor(e){super(),M(this,e,Te,je,T,{socials:0})}}function ne(a){let e,n;return e=new He({props:{socials:a[0].config.socials}}),{c(){B(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){O(e,t,l),n=!0},p(t,l){const s={};l&1&&(s.socials=t[0].config.socials),e.$set(s)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Me(a){let e,n,t,l,s,f,r,i,o,u,_,p,g,$;const P=[a[0].config.seo];let R={};for(let h=0;h<P.length;h+=1)R=re(R,P[h]);e=new ge({props:R}),i=new be({props:{user:a[0].config.user}}),u=new ke({props:{links:a[0].config.links}});let d=a[0].config.socials&&ne(a);return g=new Ie({props:{showCredits:a[0].config.credits||!0}}),{c(){B(e.$$.fragment),n=S(),t=k("link"),s=S(),f=k("div"),r=k("main"),B(i.$$.fragment),o=S(),B(u.$$.fragment),_=S(),d&&d.c(),p=S(),B(g.$$.fragment),this.h()},l(h){N(e.$$.fragment,h),n=j(h);const b=se("svelte-15p6m32",document.head);t=w(b,"LINK",{rel:!0,href:!0}),b.forEach(m),s=j(h),f=w(h,"DIV",{class:!0});var U=A(f);r=w(U,"MAIN",{class:!0});var z=A(r);N(i.$$.fragment,z),o=j(z),N(u.$$.fragment,z),_=j(z),d&&d.l(z),z.forEach(m),p=j(U),N(g.$$.fragment,U),U.forEach(m),this.h()},h(){c(t,"rel","stylesheet"),c(t,"href",l=a[0].config.template),c(r,"class","svelte-8paxcy"),c(f,"class","container svelte-8paxcy")},m(h,b){O(e,h,b),I(h,n,b),v(document.head,t),I(h,s,b),I(h,f,b),v(f,r),O(i,r,null),v(r,o),O(u,r,null),v(r,_),d&&d.m(r,null),v(f,p),O(g,f,null),$=!0},p(h,[b]){const U=b&1?fe(P,[ue(h[0].config.seo)]):{};e.$set(U),(!$||b&1&&l!==(l=h[0].config.template))&&c(t,"href",l);const z={};b&1&&(z.user=h[0].config.user),i.$set(z);const G={};b&1&&(G.links=h[0].config.links),u.$set(G),h[0].config.socials?d?(d.p(h,b),b&1&&E(d,1)):(d=ne(h),d.c(),E(d,1),d.m(r,null)):d&&(D(),L(d,1,1,()=>{d=null}),F());const K={};b&1&&(K.showCredits=h[0].config.credits||!0),g.$set(K)},i(h){$||(E(e.$$.fragment,h),E(i.$$.fragment,h),E(u.$$.fragment,h),E(d),E(g.$$.fragment,h),$=!0)},o(h){L(e.$$.fragment,h),L(i.$$.fragment,h),L(u.$$.fragment,h),L(d),L(g.$$.fragment,h),$=!1},d(h){h&&(m(n),m(s),m(f)),q(e,h),m(t),q(i),q(u),d&&d.d(),q(g)}}}function Be(a,e,n){let{data:t}=e;return a.$$set=l=>{"data"in l&&n(0,t=l.data)},[t]}class qe extends H{constructor(e){super(),M(this,e,Be,Me,T,{data:0})}}export{qe as component};
