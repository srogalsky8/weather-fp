(this["webpackJsonpfp-weather"]=this["webpackJsonpfp-weather"]||[]).push([[0],{22:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),i=t(8),r=t.n(i),o=t(9),s=t.n(o);t(18);var d={"San Diego":{name:"San Diego",lat:32.8242404,lon:-117.3891735},"Santa Clara":{name:"Santa Clara",lat:37.3708698,lon:-122.037593},"New York":{name:"New York",lat:40.6971494,lon:-74.2598713},Chicago:{name:"Chicago",lat:41.878113,lon:-87.629799},Austin:{name:"Austin",lat:30.267153,lon:-97.743057},London:{name:"London",lat:51.509865,lon:-.118092}},l=t(0);const j=Object.keys(d);var x=e=>{let{cityName:n,onChange:t}=e;return Object(l.jsx)(s.a,{options:j,onChange:t,value:n,placeholder:"Select a city",tabIndex:"0"})};var b,h=e=>{let{ts:n,timezone:t,short:a=!0,...c}=e;const i=new Date(1e3*n);let r={weekday:a?"short":"long",timeZone:t};a||(r={...r,month:"long",day:"numeric"});const o=i.toLocaleString("en-us",r),s=i.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0,timeZone:t});return Object(l.jsxs)("div",{...c,children:[Object(l.jsx)("div",{children:o}),Object(l.jsx)("div",{children:!a&&s})]})},m=t(2),p=t(3);const g=p.b.span(b||(b=Object(m.a)(["\n  color: ",";\n  font-weight: 500;\n"])),(e=>e.high?"#4f4f4f":"#888"));var O=e=>{let{value:n,high:t=!0,"aria-label":a,...c}=e;const i=Math.round(n);let r;return r=a||(t?"high":"low"),r="".concat(r," ").concat(i," degrees"),Object(l.jsxs)(g,{high:t,"aria-label":r,...c,children:[i,"\xb0"]})};const u={"few clouds":"cloudy-day-1","broken clouds":"cloudy-day-2","scattered clouds":"cloudy-day-3","overcast clouds":"cloudy","clear sky":"day","light rain":"rainy-4","moderate rain":"rainy-5",thunderstorm:"thunder","light snow":"snowy-4",snow:"snowy-5"};var f,v,w,y,S,k=e=>{let{description:n,animated:t=!1,...a}=e;const c=u[n]||"day";return Object(l.jsx)("img",{src:"./".concat(t?"animated":"static","/").concat(c,".svg"),alt:n,...a})};const z=p.b.div(f||(f=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 30px 80px;\n  margin: 0 8px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  background-color: #fff;\n  width: auto;\n  @media (max-width: 790px) {\n    padding: 30px;\n  }\n  @media (max-width: 507px) {\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n"]))),C=p.b.div(v||(v=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  img {\n    margin: -60px -30px;\n    @media (max-width: 507px) {\n      margin-top: -40px;\n    }\n  }\n"]))),L=Object(p.b)(O)(w||(w=Object(m.a)(["\n  font-size: 50px;\n  font-weight: 500;\n  color: #4f4f4f;\n"]))),N=p.b.div(y||(y=Object(m.a)(["\n  margin-bottom: 15px;\n  text-transform: capitalize;\n"]))),D=p.b.div(S||(S=Object(m.a)(["\n  font-size: 24px;\n  font-weight: 300;\n  text-align: right;\n  @media (max-width: 630px) {\n    font-size: 18px;\n    font-weight: 400;\n  }\n  @media (max-width: 507px) {\n    text-align: center;\n  }\n"])));var F,M,A,I=e=>{let{weather:n,cityName:t}=e;const{current:a,daily:c,timezone:i}=n,{temp:r,dt:o}=a,s=a.weather[0].description,{temp:{min:d,max:j}}=c[0];return Object(l.jsxs)(z,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)(C,{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(L,{value:r,"aria-label":"current"}),Object(l.jsx)(N,{children:s}),Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{value:Math.max(r,j),high:!0})," |"," ",Object(l.jsx)(O,{value:Math.min(r,d),high:!1})]})]}),Object(l.jsx)(k,{height:"250px",animated:!0,description:s})]})}),Object(l.jsxs)(D,{children:[t,Object(l.jsx)(h,{ts:o,timezone:i,short:!1})]})]})};const B=Object(p.b)(h)(F||(F=Object(m.a)(["\n  font-weight: 600;\n  font-size: 20px;\n  color: #666;\n"]))),E=p.b.div(M||(M=Object(m.a)(["\n  margin: -10px 0;\n"]))),J=p.b.div(A||(A=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px 30px;\n  margin: 5px 8px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  background-color: #fff;\n"])));var P,T=e=>{let{day:n}=e;const{temp:{min:t,max:a},dt:c,timezone:i}=n,r=n.weather[0].description;return Object(l.jsxs)(J,{children:[Object(l.jsx)("div",{children:Object(l.jsx)(B,{ts:c,timezone:i})}),Object(l.jsx)(E,{children:Object(l.jsx)(k,{description:r,height:"80px"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{value:a,high:!0})," | ",Object(l.jsx)(O,{value:t,high:!1})]})]})};const Y=p.b.div(P||(P=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"])));var Z=e=>{let{forecast:n}=e;return Object(l.jsx)(Y,{children:n.slice(1,6).map((e=>Object(l.jsx)(T,{day:e},e.dt)))})};const U="f7fdb99a7d19c0331381a9cc142379c5";var q,G,H,K,Q;const R=Object(p.a)(q||(q=Object(m.a)(["\n  body {\n    font-family: 'Open Sans', sans-serif;\n    background-color: #e3f3ff;\n  }\n"]))),V=p.b.div(G||(G=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),W=p.b.div(H||(H=Object(m.a)(["\n  max-width: 100%;\n  width: 790px;\n"]))),X=p.b.div(K||(K=Object(m.a)(["\n  margin: 20px 8px 40px;\n"]))),$=p.b.div(Q||(Q=Object(m.a)(["\n  margin: 0 0 10px;\n"])));var _=()=>{const[e,n]=Object(a.useState)(),[t,c]=Object(a.useState)("San Diego"),[i,r]=Object(a.useState)(!0);return Object(a.useEffect)((()=>{(async()=>{r(!0);const e=d[t];n(await(async e=>{let{lat:n=32.7153,lon:t=-117.1573}=e;return(await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(n,"&lon=").concat(t,"&units=imperial&appid=").concat(U))).json()})(e)),r(!1)})()}),[t]),Object(l.jsxs)(V,{children:[Object(l.jsx)(R,{}),Object(l.jsxs)(W,{children:[Object(l.jsx)(X,{children:Object(l.jsx)(x,{cityName:t,onChange:e=>c(e.value)})}),!i&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)($,{children:Object(l.jsx)(I,{weather:e,cityName:t})}),Object(l.jsx)(Z,{forecast:e.daily})]}),i&&Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("img",{src:"./animated/snowy-6.svg",alt:"loading icon",width:"200px"})})]})]})};var ee=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((n=>{let{getCLS:t,getFID:a,getFCP:c,getLCP:i,getTTFB:r}=n;t(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),ee()}},[[22,1,2]]]);
//# sourceMappingURL=main.4ed0be14.chunk.js.map