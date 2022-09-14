"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[75],{2921:function(r,e,n){n.d(e,{U:function(){return o}});var t,a=n(168),o=n(6444).ZP.h1(t||(t=(0,a.Z)(["\n  margin-bottom: 40px;\n  text-align: center;\n  text-transform: uppercase;\n  color: ",";\n"])),(function(r){return r.theme.colors.gray}))},3810:function(r,e,n){n.d(e,{O:function(){return d}});var t,a,o,c=n(501),u=n(6871),i=n(168),s=n(6444),p=s.ZP.ul(t||(t=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  width: 200px;\n  margin: 10px;\n  border-radius: 10px;\n  overflow: hidden;\n  transition: transform 250ms ease-in-out;\n\n  :hover {\n    transform: translateY(-3px);\n  }\n"]))),v=s.ZP.img(o||(o=(0,i.Z)(["\n  display: block;\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n"]))),m=n(184),d=function(r){var e=r.movies,n=(0,u.TH)();return(0,m.jsx)(p,{children:e.map((function(r){return(0,m.jsx)(f,{children:(0,m.jsx)(c.rU,{to:"/movies/".concat(r.id),state:{from:n},children:(0,m.jsx)(v,{src:r.poster_path?"https://image.tmdb.org/t/p/w300"+r.poster_path:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:""})})},r.id)}))})}},2444:function(r,e,n){n.d(e,{Hg:function(){return p},Jh:function(){return m},V0:function(){return v},_r:function(){return d},t4:function(){return f}});var t=n(5861),a=n(7757),o=n.n(a),c=n(4569),u=n.n(c),i=n(6066),s=u().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d4083077964ed74e2ce02f9dca4a4248"}}),p=function(){var r=(0,t.Z)(o().mark((function r(){var e,n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("/trending/movie/day");case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),i.Am.error("Sorry error server!",{});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(o().mark((function r(e){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("/movie/".concat(e));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(o().mark((function r(e){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("/search/movie",{params:e});case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=(0,t.Z)(o().mark((function r(e){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("/movie/".concat(e,"/credits"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(o().mark((function r(e){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.get("/movie/".concat(e,"/reviews"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},6075:function(r,e,n){n.r(e),n.d(e,{default:function(){return s}});var t=n(885),a=n(2791),o=n(2444),c=n(3810),u=n(2921),i=n(184);function s(){var r=(0,a.useState)([]),e=(0,t.Z)(r,2),n=e[0],s=e[1];return(0,a.useEffect)((function(){(0,o.Hg)().then((function(r){var e=r.results;s(e)}))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(u.U,{children:"Trending movies today! "}),(0,i.jsx)(c.O,{movies:n})]})}}}]);
//# sourceMappingURL=75.32cfb9ac.chunk.js.map