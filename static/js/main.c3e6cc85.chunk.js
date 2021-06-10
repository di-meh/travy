(this.webpackJsonptravy=this.webpackJsonptravy||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),i=(n(13),n(2)),o=n.n(i),l=n(4),u=n(3),j=(n(15),function(e){var t=e.path,n=e.children,c=Object(a.useState)(window.location.pathname),r=Object(u.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var e=function(){i(window.location.pathname)};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[]),s===t?n:null}),h=(n(16),"pk.eyJ1IjoieXVuZ21pZGVzIiwiYSI6ImNrcDJ4eHdpeDA2NGkydmxlN3llejR5OWIifQ.VyJi8PTfLCqhHab2uiioAA");function d(e){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(o.a.mark((function e(t){var n,a,c,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(t,".json?access_token=").concat(h,"&types=locality,place&limit=5&autocomplete=true&language=fr"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.features,s=r.map((function(e){return{id:e.id,name:e.place_name,latitude:e.center[1],longitude:e.center[0]}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(17);var b=n(0),f=function(e){var t=e.className,n=e.href,a=e.children;return Object(b.jsx)("a",{className:t,href:n,onClick:function(e){if(!e.metaKey&&!e.ctrlKey){e.preventDefault(),window.history.pushState({},"",n);var t=new PopStateEvent("popstate");window.dispatchEvent(t)}},children:a})};function m(e){var t=e.shown,n=e.close,c=e.setLatLon,r=e.setCityName,s=Object(a.useState)(""),i=Object(u.a)(s,2),j=i[0],h=i[1],p=Object(a.useState)([]),m=Object(u.a)(p,2),O=m[0],x=m[1],w=Object(a.useState)(!1),v=Object(u.a)(w,2),g=v[0],N=v[1];function y(){n(),x([]),h("")}return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(j&&j.length>0)){e.next=9;break}return N(!0),e.next=4,d(j);case 4:t=e.sent,x(t),N(!1),e.next=10;break;case 9:x([]);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]),t?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"modal",onClick:function(){y()},children:Object(b.jsxs)("div",{className:"modal-body",onClick:function(e){e.stopPropagation()},children:[Object(b.jsxs)("div",{className:"search-box",children:[Object(b.jsx)("i",{className:"modal-search-icon las la-search"}),Object(b.jsx)("input",{type:"text",placeholder:"Search for a location...",value:j,onChange:function(e){return h(e.target.value)}}),g&&Object(b.jsx)("i",{className:"loader las la-spinner"})]}),O.length>0&&Object(b.jsx)("div",{className:"results",children:O.map((function(e){return Object(b.jsx)(f,{href:"/weather",className:"modalLink",children:Object(b.jsxs)("div",{className:"result",onClick:function(){c({latitude:e.latitude,longitude:e.longitude}),r(e.name),y()},children:[Object(b.jsx)("i",{className:"modal-result-icon las la-map-marker"}),Object(b.jsx)("p",{children:e.name})]})},e.id)}))})]})})}):null}n(19);function O(e){var t=e.setCityName,n=e.setLatLon,a=e.md,c=e.showModal,r=e.hideModal;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:"Start-header",children:Object(b.jsx)("h1",{children:"travy"})}),Object(b.jsxs)("main",{className:"Start-main",children:[Object(b.jsx)(m,{close:r,shown:a,setLatLon:n,setCityName:t}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"A minimalist weather app."}),Object(b.jsxs)("p",{children:["Real-time weather from"," ",Object(b.jsx)("a",{href:"https://openweathermap.org",children:" OpenWeatherMap"}),".",Object(b.jsx)("br",{}),"High quality pictures from"," ",Object(b.jsx)("a",{href:"https://www.pexels.com",children:"Pexels"}),".",Object(b.jsx)("br",{}),"Cities from ",Object(b.jsx)("a",{href:"https://www.mapbox.com",children:"Mapbox"}),"."]}),Object(b.jsx)("div",{className:"Start-cta",onClick:c,children:"Get started"})]})]})]})}n(20);var x=n(6),w=n.n(x);function v(e){var t=e.weatherObj,n=e.setCityName,a=e.latlon,c=e.setLatLon,r=e.md,s=e.showModal,i=e.hideModal,o=e.cityName,l=e.photo,u=e.weatherPictureStyle;function j(e){return null!==e&&""!==e?e:"Loading"}return a&&o||window.location.replace("/"),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{close:i,shown:r,setLatLon:c,setCityName:n}),Object(b.jsxs)("div",{className:"weather",style:u,children:[Object(b.jsxs)("div",{className:"top-bar",children:[Object(b.jsx)("h2",{onClick:s,children:j(o)}),null!==a&&Object(b.jsx)("i",{className:"las la-sync",onClick:function(){c({latitude:a.latitude,longitude:a.longitude})}})]}),Object(b.jsxs)("div",{className:"weather-info",children:[Object(b.jsxs)("h1",{children:[j(t.temp),"\xb0C"]}),Object(b.jsx)("div",{className:"weather-description",children:Object(b.jsx)("h3",{children:j(w()(t.desc))})})]}),Object(b.jsx)("div",{className:"bottom-bar",children:null!==l&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"credits",children:Object(b.jsx)(f,{href:l.photographer_url,children:Object(b.jsxs)("p",{children:["Photo par ",j(l.photographer)]})})}),Object(b.jsx)(f,{href:"/picture",children:Object(b.jsx)("div",{className:"show-picture",children:Object(b.jsx)("i",{className:"las la-eye"})})})]})})]})]})}n(22);function g(e){var t=e.photo,n=e.weatherPictureStyle,c=Object(a.useState)(!1),r=Object(u.a)(c,2),s=r[0],i=r[1],o={transform:s?"rotate(180deg)":"rotate(0deg)"};return t||window.location.replace("/"),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"picture",style:n,children:[Object(b.jsxs)("div",{className:"top-bar",children:[s&&Object(b.jsxs)("div",{className:"details",children:[Object(b.jsxs)("p",{children:["Photo par ",Object(b.jsx)("b",{children:t.photographer})]}),Object(b.jsxs)("p",{children:["Taille"," ",Object(b.jsxs)("b",{children:[t.width," x ",t.height]})]}),Object(b.jsx)("small",{children:"\xa9 Pexels"})]}),Object(b.jsx)("i",{className:"las la-angle-down",onClick:function(){i(!s)},style:o})]}),Object(b.jsxs)("div",{className:"bottom-bar",children:[Object(b.jsxs)(f,{href:"/weather",className:"return",children:[Object(b.jsx)("i",{className:"las la-angle-left"}),Object(b.jsx)("p",{children:"Retour"})]}),Object(b.jsx)("a",{href:t.src.original,download:!0,children:Object(b.jsx)("div",{className:"show-picture",children:Object(b.jsx)("i",{className:"las la-arrow-down"})})})]})]})})}var N="f42cb4678f05380f4f2fa71b086766eb";function y(e,t){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(o.a.mark((function e(t,n){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.openweathermap.org/data/2.5/weather?appid=".concat(N,"&lat=").concat(t,"&lon=").concat(n,"&units=metric&lang=fr"),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S="563492ad6f9170000100000129b7221038a04be49b5b8d6899852699";function C(e){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(o.a.mark((function e(t){var n,a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.pexels.com/v1/search?query=".concat(t,"&locale=fr-FR&page=1&per_page=20"),a=new Headers({Authorization:S}),e.next=4,fetch(n,{headers:a}).then((function(e){return e.json()}));case 4:return c=e.sent,r=c.photos,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=n(8),M=n.n(P);var F=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),i=s[0],h=s[1],d=Object(a.useState)(null),p=Object(u.a)(d,2),f=p[0],m=p[1],x=Object(a.useState)({desc:null,temp:null,w_obj:null,m_obj:null}),w=Object(u.a)(x,2),N=w[0],k=w[1],S=Object(a.useState)(null),L=Object(u.a)(S,2),P=L[0],F=L[1],E=Object(a.useState)("none"),I=Object(u.a)(E,2),_=I[0],A=I[1];function J(){c(!0)}function D(){c(!1)}var H={backgroundImage:_};return Object(a.useEffect)((function(){A(null!==P?"url("+P.src.landscape+")":"none")}),[_,P]),Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(f.latitude,f.longitude);case 2:t=e.sent,n=t.weather,a=t.main,k({desc:n[0].description,temp:a.temp,w_obj:n,m_obj:a});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(i);case 2:t=e.sent,F(t[M()(t.length)]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();null!==f&&void 0!==f&&(e(),t())}),[f,i]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{path:"/",children:Object(b.jsx)(O,{setCityName:h,latlon:f,setLatLon:m,md:n,showModal:J,hideModal:D})}),Object(b.jsx)(j,{path:"/weather",children:Object(b.jsx)(v,{weatherObj:N,setCityName:h,latlon:f,setLatLon:m,md:n,showModal:J,hideModal:D,cityName:i,photo:P,weatherPictureStyle:H})}),Object(b.jsx)(j,{path:"/picture",children:Object(b.jsx)(g,{photo:P,weatherPictureStyle:H})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),E()}],[[23,1,2]]]);
//# sourceMappingURL=main.c3e6cc85.chunk.js.map