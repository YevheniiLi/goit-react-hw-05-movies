"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{2444:function(r,e,n){n.d(e,{Hg:function(){return p},Jh:function(){return l},V0:function(){return v},_r:function(){return h},t4:function(){return f}});var t=n(5861),c=n(7757),u=n.n(c),a=n(4569),o=n.n(a),s=n(6066),i=o().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d4083077964ed74e2ce02f9dca4a4248"}}),p=function(){var r=(0,t.Z)(u().mark((function r(){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/trending/movie/day");case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),s.Am.error("Sorry error server!",{});case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(e));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),s.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/search/movie",{params:e});case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),s.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(e,"/credits"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),s.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.get("/movie/".concat(e,"/reviews"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),s.Am.error("Sorry error server!",{});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},8953:function(r,e,n){n.r(e),n.d(e,{default:function(){return m}});var t,c,u=n(885),a=n(6871),o=n(2791),s=n(2444),i=n(168),p=n(6444),f=p.ZP.li(t||(t=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n  font-size: 10px;\n  color: ",";\n"])),(function(r){return r.theme.colors.black})),v=p.ZP.h4(c||(c=(0,i.Z)(["\n  color: ",";\n"])),(function(r){return r.theme.colors.black})),l=n(184),h=function(r){var e=r.reviews;return(0,l.jsx)("ul",{children:e.map((function(r){return(0,l.jsxs)(f,{children:[(0,l.jsx)(v,{children:r.author}),(0,l.jsx)("p",{children:r.content})]},r.id)}))})};function m(){var r=(0,o.useState)([]),e=(0,u.Z)(r,2),n=e[0],t=e[1],c=(0,a.UO)().movieId;return(0,o.useEffect)((function(){(0,s._r)(c).then((function(r){t(r.data.results)}))}),[c]),(0,l.jsx)("div",{children:n.length>0&&(0,l.jsx)(h,{reviews:n})})}}}]);
//# sourceMappingURL=953.ccdac1c4.chunk.js.map