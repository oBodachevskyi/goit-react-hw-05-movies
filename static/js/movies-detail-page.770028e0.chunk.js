"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{611:function(e,n,t){t.d(n,{wr:function(){return u},I2:function(){return d},Mc:function(){return h},eH:function(){return f},oJ:function(){return v}});var a=t(861),i=t(757),c=t.n(i),r="a6c2206a8d028e6d1935f3b46ada483d",s="https://api.themoviedb.org/3";function o(){return l.apply(this,arguments)}function l(){return l=(0,a.Z)(c().mark((function e(){var n,t,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function u(){return o("".concat(s,"/trending/movie/day?api_key=").concat(r))}function d(e){return o("".concat(s,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}function h(e){return o("".concat(s,"/movie/").concat(e,"?api_key=").concat(r,"&language=en-US"))}function f(e){return o("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US"))}function v(e){return o("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1"))}},568:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var a=t(152),i=t(504),c=t(871),r=t(791),s=t(611),o="MovieDetailsPage_backButton__m-lMg",l="MovieDetailsPage_movieDetails__box__Hf4jP",u="MovieDetailsPage_movieDetails__info__lbhRs",d="MovieDetailsPage_addInform_box__7+2Pq",h=t(184),f=(0,r.lazy)((function(){return t.e(53).then(t.bind(t,339))})),v=(0,r.lazy)((function(){return t.e(163).then(t.bind(t,133))}));function x(){var e=(0,r.useState)(""),n=(0,a.Z)(e,2),t=n[0],x=n[1],m=(0,c.UO)().moviesId,p=(0,c.TH)(),j=null;return(0,r.useEffect)((function(){s.Mc(m).then(x)}),[m]),j=null===p.state?"/":"/movies?query=".concat(p.state),(0,h.jsx)("div",{children:t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(i.rU,{to:j,state:p.state,children:(0,h.jsx)("button",{type:"button",className:o,children:"Go back"})})}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"",height:"320px"}),(0,h.jsxs)("div",{className:u,children:[(0,h.jsxs)("h2",{children:[t.title," ","(".concat(t.release_date.slice(0,4),")")]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsxs)("p",{children:[t.overview," "]}),(0,h.jsx)("h3",{children:"Generes"}),(0,h.jsx)("ul",{children:t.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("p",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"cast",className:!0,children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(i.OL,{to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(r.Suspense,{fallback:(0,h.jsx)("h1",{children:"Loading"}),children:(0,h.jsxs)(c.Z5,{children:[(0,h.jsx)(c.AW,{path:"/cast",element:(0,h.jsx)(f,{movieId:t.id})}),(0,h.jsx)(c.AW,{path:"/reviews",element:(0,h.jsx)(v,{movieId:t.id})})]})})]})})}}}]);
//# sourceMappingURL=movies-detail-page.770028e0.chunk.js.map