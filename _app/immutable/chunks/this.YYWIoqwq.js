import{j as N,k as h,D as b,E as L,F as R,G as o,n as D,s as d,I as T,w as E,J as A,o as F,U as g,K as q,L as v,d as x,M,S as O}from"./runtime.BmvMTPRv.js";function Y(a,f,e=!1){h&&b();var i=a,r=null,s=null,c=g,S=e?L:0,l=!1;const k=(n,t=!0)=>{l=!0,u(t,n)},u=(n,t)=>{if(c===(c=n))return;let _=!1;if(h){const y=i.data===R;!!c===y&&(i=o(),D(i),d(!1),_=!0)}c?(r?T(r):t&&(r=E(()=>t(i))),s&&A(s,()=>{s=null})):(s?T(s):t&&(s=E(()=>t(i))),r&&A(r,()=>{r=null})),_&&d(!0)};N(()=>{l=!1,f(k),l||u(null,null)},S),h&&(i=F)}function I(a,f){return a===f||(a==null?void 0:a[O])===f}function j(a={},f,e,i){return q(()=>{var r,s;return v(()=>{r=s,s=[],x(()=>{a!==e(...s)&&(f(a,...s),r&&I(e(...r),a)&&f(null,...r))})}),()=>{M(()=>{s&&I(e(...s),a)&&f(null,...s)})}}),a}export{j as b,Y as i};
